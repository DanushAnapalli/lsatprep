import { NextRequest, NextResponse } from "next/server";
import Anthropic from "@anthropic-ai/sdk";
import { logicalReasoningQuestions, readingComprehensionQuestions } from "@/lib/sample-questions";
import { authenticateRequest, unauthorizedResponse } from "@/lib/auth-middleware";
import { checkRateLimit, RATE_LIMITS } from "@/lib/rate-limiter";

// Lazy initialization of Anthropic client to avoid build-time errors
let anthropicClient: Anthropic | null = null;

function getAnthropicClient(): Anthropic {
  if (!anthropicClient) {
    anthropicClient = new Anthropic({
      apiKey: process.env.ANTHROPIC_API_KEY,
    });
  }
  return anthropicClient;
}

// Helper function to find a specific question by ID
function findQuestionById(questionId: string) {
  const allQuestions = [...logicalReasoningQuestions, ...readingComprehensionQuestions];
  return allQuestions.find(q => q.id === questionId);
}

// Helper to detect if user is asking about a specific question
function extractQuestionId(messages: Array<{ role: string; content: string }>): string | null {
  const lastUserMessage = messages.filter(m => m.role === 'user').pop();
  if (!lastUserMessage) return null;

  // Look for patterns like "question 1", "Q1", "question ID 1", etc.
  const match = lastUserMessage.content.match(/\b(?:question|q|id)\s*#?(\d+)\b/i);
  return match ? match[1] : null;
}

const BASE_SYSTEM_PROMPT = `You are Juris, an AI legal assistant specialized in law and LSAT preparation. You maintain a professional, knowledgeable, and encouraging demeanor.

## Your Expertise:
- LSAT Logical Reasoning: argument analysis, flaw identification, assumptions, strengthening/weakening arguments
- LSAT Reading Comprehension: passage analysis, inference, author's purpose, vocabulary in context
- General law topics: constitutional law, criminal law, civil procedure, contracts, torts, property law, legal reasoning
- Legal careers: law school admissions, bar exam preparation, legal career paths

## Your Communication Style:
- Professional and academic, yet approachable
- Patient when explaining complex legal concepts
- Use analogies and examples to make concepts clear
- Provide constructive feedback on student progress
- NEVER use emojis or emoticons in your responses
- Maintain a formal but supportive tone

## Available Resources:
- You have access to a database of LSAT questions (Logical Reasoning and Reading Comprehension)
- When users ask about specific questions by ID, I will provide you with the full question details
- You can reference questions generally, and request specific details when needed

## Guidelines:
1. When users ask about a specific question (by ID or description), provide detailed explanations
2. Explain WHY correct answers are correct and WHY wrong answers are wrong
3. For law topics, provide accurate, educational information
4. For LSAT strategy, give practical, actionable advice
5. If asked about something outside law/LSAT, politely redirect to your expertise
6. Keep responses concise but thorough
7. Use formatting (bullet points, numbered lists) when helpful
8. Never use emojis, emoticons, or overly casual language

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

    // NOTE: Rate limiting temporarily disabled for Vercel serverless deployment
    // In-memory rate limiting doesn't work across serverless function instances
    // TODO: Implement Redis-based or database-backed rate limiting for production

    const { messages, userProgress } = await request.json();

    if (!messages || !Array.isArray(messages)) {
      return NextResponse.json(
        { error: "Messages are required" },
        { status: 400 }
      );
    }

    // Check if user is asking about a specific question
    const questionId = extractQuestionId(messages);
    let questionContext = "";

    if (questionId) {
      const question = findQuestionById(questionId);
      if (question) {
        questionContext = `\n\n## Question ${questionId} Details:
Type: ${question.type}
Stimulus: ${question.stimulus}
Question: ${question.questionStem}
Answer Choices: ${question.answerChoices.map(choice => `${choice.letter}. ${choice.text}`).join('; ')}
Correct Answer: ${question.correctAnswer}
Explanation: ${question.explanation}`;
      }
    }

    // Add minimal user context if available
    let userContext = "";
    if (userProgress && userProgress.totalQuestionsAnswered > 0) {
      const accuracy = Math.round((userProgress.totalCorrect / userProgress.totalQuestionsAnswered) * 100);
      const recentTest = userProgress.completedTests?.[userProgress.completedTests.length - 1];

      userContext = `\n\n## User Stats:
- Accuracy: ${accuracy}% (${userProgress.totalCorrect}/${userProgress.totalQuestionsAnswered})
- Recent test: ${recentTest ? `${recentTest.testName} - ${recentTest.scaledScore}` : 'None'}`;
    }

    // Build final system prompt
    const finalSystemPrompt = BASE_SYSTEM_PROMPT + questionContext + userContext;

    // Convert messages to Anthropic format
    const anthropicMessages = messages.map((msg: { role: string; content: string }) => ({
      role: msg.role as "user" | "assistant",
      content: msg.content,
    }));

    // Create a streaming response
    const anthropic = getAnthropicClient();
    const stream = await anthropic.messages.stream({
      model: "claude-sonnet-4-20250514",
      max_tokens: 1024,
      system: finalSystemPrompt,
      messages: anthropicMessages,
    });

    // Create a ReadableStream for the response
    const encoder = new TextEncoder();
    const readableStream = new ReadableStream({
      async start(controller) {
        try {
          for await (const chunk of stream) {
            if (chunk.type === 'content_block_delta' &&
                chunk.delta.type === 'text_delta') {
              // Send each text chunk as it arrives
              const text = chunk.delta.text;
              controller.enqueue(encoder.encode(`data: ${JSON.stringify({ text })}\n\n`));
            }
          }
          // Send done signal
          controller.enqueue(encoder.encode('data: {"done": true}\n\n'));
          controller.close();
        } catch (error) {
          console.error('[CHAT API] Streaming error:', error);
          controller.error(error);
        }
      },
    });

    return new Response(readableStream, {
      headers: {
        'Content-Type': 'text/event-stream',
        'Cache-Control': 'no-cache',
        'Connection': 'keep-alive',
      },
    });
  } catch (error: unknown) {
    // Log the full error for debugging
    console.error('[CHAT API] Error details:', error);

    // Check for specific Anthropic errors
    if (error instanceof Error) {
      console.error('[CHAT API] Error message:', error.message);
      console.error('[CHAT API] Error stack:', error.stack);

      const errorMessage = error.message.toLowerCase();

      if (errorMessage.includes("api key") || errorMessage.includes("unauthorized") || errorMessage.includes("invalid") || errorMessage.includes("authentication")) {
        return NextResponse.json(
          { error: "API configuration error. Please check your Anthropic API key." },
          { status: 500 }
        );
      }

      if (errorMessage.includes("rate limit") || errorMessage.includes("429")) {
        return NextResponse.json(
          { error: "Anthropic API rate limit reached. Please wait and try again." },
          { status: 429 }
        );
      }

      if (errorMessage.includes("quota") || errorMessage.includes("billing") || errorMessage.includes("credit")) {
        return NextResponse.json(
          { error: "API quota exceeded. Please check your Anthropic billing." },
          { status: 402 }
        );
      }

      // Return the actual error message for debugging
      return NextResponse.json(
        { error: `Chat error: ${error.message}` },
        { status: 500 }
      );
    }

    return NextResponse.json(
      { error: "Failed to process your request. Please try again." },
      { status: 500 }
    );
  }
}
