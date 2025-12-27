import { NextRequest, NextResponse } from "next/server";
import Anthropic from "@anthropic-ai/sdk";
import { logicalReasoningQuestions, readingComprehensionQuestions } from "@/lib/sample-questions";

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
    const { messages, userProgress } = await request.json();

    if (!messages || !Array.isArray(messages)) {
      return NextResponse.json(
        { error: "Messages are required" },
        { status: 400 }
      );
    }

    // Add user context if available
    let contextMessage = "";
    if (userProgress) {
      contextMessage = `\n\nUser's current progress: ${userProgress.totalQuestionsAnswered} questions answered, ${userProgress.totalCorrect} correct (${
        userProgress.totalQuestionsAnswered > 0
          ? Math.round((userProgress.totalCorrect / userProgress.totalQuestionsAnswered) * 100)
          : 0
      }% accuracy). Tests completed: ${userProgress.completedTests?.length || 0}.`;
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
    console.error("Chat API error:", error);

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
