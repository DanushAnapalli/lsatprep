import { NextRequest, NextResponse } from "next/server";
import Anthropic from "@anthropic-ai/sdk";
import { logicalReasoningQuestions, readingComprehensionQuestions } from "@/lib/sample-questions";
import { authenticateRequest, unauthorizedResponse } from "@/lib/auth-middleware";
import { checkRateLimit, RATE_LIMITS } from "@/lib/rate-limiter";

const anthropic = new Anthropic({
  apiKey: process.env.ANTHROPIC_API_KEY,
});

// Build context about the questions for Juris
function buildQuestionsContext() {
  const lrSummary = logicalReasoningQuestions.map((q) => ({
    id: q.id,
    type: q.type,
    stimulus: q.stimulus.substring(0, 200) + "...",
    question: q.questionStem,
    correctAnswer: q.correctAnswer,
    explanation: q.explanation,
  }));

  const rcSummary = readingComprehensionQuestions.map((q) => ({
    id: q.id,
    type: q.type,
    stimulus: q.stimulus.substring(0, 200) + "...",
    question: q.questionStem,
    correctAnswer: q.correctAnswer,
    explanation: q.explanation,
  }));

  return { lrQuestions: lrSummary, rcQuestions: rcSummary };
}

const questionsContext = buildQuestionsContext();

const SYSTEM_PROMPT = `You are Juris, an AI legal assistant specialized in law and LSAT preparation. You are warm, knowledgeable, and encouraging.

## Your Expertise:
- LSAT Logical Reasoning: argument analysis, flaw identification, assumptions, strengthening/weakening arguments
- LSAT Reading Comprehension: passage analysis, inference, author's purpose, vocabulary in context
- General law topics: constitutional law, criminal law, civil procedure, contracts, torts, property law, legal reasoning
- Legal careers: law school admissions, bar exam preparation, legal career paths

## Your Personality:
- Friendly and encouraging, but professional
- Patient when explaining complex legal concepts
- Use analogies and examples to make concepts clear
- Celebrate student progress and provide constructive feedback

## Available LSAT Questions Database:
You have access to the following questions from the platform. When users ask about specific questions, use this context:

### Logical Reasoning Questions:
${JSON.stringify(questionsContext.lrQuestions, null, 2)}

### Reading Comprehension Questions:
${JSON.stringify(questionsContext.rcQuestions, null, 2)}

## Guidelines:
1. When users ask about a specific question (by ID or description), provide detailed explanations
2. Explain WHY correct answers are correct and WHY wrong answers are wrong
3. For law topics, provide accurate, educational information
4. For LSAT strategy, give practical, actionable advice
5. If asked about something outside law/LSAT, politely redirect to your expertise
6. Keep responses concise but thorough
7. Use formatting (bullet points, numbered lists) when helpful

## Response Format:
- Be conversational but informative
- Use markdown formatting for clarity
- For LSAT explanations, structure as: Concept > Application > Key Takeaway
- Always encourage continued practice and learning`;

export async function POST(request: NextRequest) {
  try {
    // Verify API key is present
    if (!process.env.ANTHROPIC_API_KEY) {
      console.error('[CHAT API] ANTHROPIC_API_KEY is not set in environment variables');
      return NextResponse.json(
        { error: "Chat service is not properly configured. Please contact support." },
        { status: 500 }
      );
    }

    // Authenticate the request
    const authResult = await authenticateRequest(request);

    if (!authResult.authenticated || !authResult.user) {
      return unauthorizedResponse("Authentication required to use chat");
    }

    // Skip rate limiting in production for now (in-memory rate limiter doesn't work well in serverless)
    // TODO: Implement Redis-based rate limiting for production
    const isProduction = process.env.VERCEL_ENV === 'production';

    if (!isProduction) {
      // Rate limit by user ID (only in dev)
      const rateLimitResult = checkRateLimit(
        `chat:${authResult.user.uid}`,
        RATE_LIMITS.chat
      );

      if (!rateLimitResult.allowed) {
        return NextResponse.json(
          { error: "Too many requests. Please wait before sending more messages." },
          {
            status: 429,
            headers: {
              "X-RateLimit-Remaining": "0",
              "X-RateLimit-Reset": rateLimitResult.resetTime.toString(),
            }
          }
        );
      }
    }

    const { messages, userProgress } = await request.json();

    if (!messages || !Array.isArray(messages)) {
      return NextResponse.json(
        { error: "Messages are required" },
        { status: 400 }
      );
    }

    // Add comprehensive user context if available
    let contextMessage = "";
    if (userProgress) {
      const accuracy = userProgress.totalQuestionsAnswered > 0
        ? Math.round((userProgress.totalCorrect / userProgress.totalQuestionsAnswered) * 100)
        : 0;

      contextMessage = `\n\n## User's Account Data:

### Overall Statistics:
- Total questions answered: ${userProgress.totalQuestionsAnswered}
- Total correct: ${userProgress.totalCorrect} (${accuracy}% accuracy)
- Tests completed: ${userProgress.completedTests?.length || 0}
- Average score: ${userProgress.averageScore || 'N/A'}
- Highest score: ${userProgress.highestScore || 'N/A'}

### Test History (Most Recent First):
${userProgress.completedTests?.slice(-5).reverse().map((test: any, idx: number) => `
${idx + 1}. **${test.testName}** (Test ID: ${test.id})
   - Score: ${test.scaledScore} (${test.percentile}th percentile)
   - Completed: ${new Date(test.completedAt).toLocaleDateString()}
   - Performance: ${test.correctAnswers}/${test.totalQuestions} correct
   - Sections: ${test.sections.map((s: any) => `${s.type}: ${s.correctCount}/${s.totalCount}`).join(', ')}
   - Questions answered: ${test.sections.flatMap((s: any) => s.questions).map((q: any) =>
     `Q${q.questionId}: ${q.isCorrect ? '✓' : '✗'} (selected: ${q.selectedAnswer || 'skipped'}, correct: ${q.correctAnswer})`
   ).join(', ')}`).join('\n') || 'No test history available.'}

### Wrong Answers (Unmastered):
${userProgress.wrongAnswers?.filter((wa: any) => !wa.masteredAt).slice(0, 20).map((wa: any) => `
- Question ${wa.questionId} (${wa.sectionType}, ${wa.questionType})
  - Your answer: ${wa.selectedAnswer || 'skipped'}
  - Correct answer: ${wa.correctAnswer}
  - From test: ${wa.testId}
  - Date: ${new Date(wa.timestamp).toLocaleDateString()}
  ${wa.userNotes ? `- Your notes: "${wa.userNotes}"` : ''}`).join('\n') || 'No unmastered wrong answers.'}

**IMPORTANT**: When the user asks about a specific question (e.g., "Why did I get question 14 wrong on my most recent test?"), look up the question in their test history above, find it in the questions database, and explain:
1. What they selected vs. the correct answer
2. Why the correct answer is right
3. Why their selected answer is wrong
4. Common mistakes for this question type`;
    }

    // Convert messages to Anthropic format
    const anthropicMessages = messages.map((msg: { role: string; content: string }) => ({
      role: msg.role as "user" | "assistant",
      content: msg.content,
    }));

    const completion = await anthropic.messages.create({
      model: "claude-sonnet-4-20250514",
      max_tokens: 1024,
      system: SYSTEM_PROMPT + contextMessage,
      messages: anthropicMessages,
    });

    const response = completion.content[0]?.type === "text"
      ? completion.content[0].text
      : "I apologize, but I couldn't generate a response. Please try again.";

    return NextResponse.json({ response });
  } catch (error: unknown) {
    // Check for specific Anthropic errors
    if (error instanceof Error) {
      const errorMessage = error.message.toLowerCase();

      if (errorMessage.includes("api key") || errorMessage.includes("unauthorized") || errorMessage.includes("invalid") || errorMessage.includes("authentication")) {
        return NextResponse.json(
          { error: "API configuration error. Please check your Anthropic API key." },
          { status: 500 }
        );
      }

      if (errorMessage.includes("rate limit")) {
        return NextResponse.json(
          { error: "Too many requests. Please wait a moment and try again." },
          { status: 429 }
        );
      }

      if (errorMessage.includes("quota") || errorMessage.includes("billing") || errorMessage.includes("credit")) {
        return NextResponse.json(
          { error: "API quota exceeded. Please check your Anthropic billing." },
          { status: 402 }
        );
      }
    }

    return NextResponse.json(
      { error: "Failed to process your request. Please try again." },
      { status: 500 }
    );
  }
}
