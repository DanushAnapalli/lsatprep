"use client";

import { useState, useRef, useEffect } from "react";
import {
  MessageCircle,
  Send,
  X,
  Loader2,
  Scale,
  Sparkles,
  ChevronDown,
  ChevronUp,
} from "lucide-react";
import { UserProgress } from "@/lib/user-progress";
import { authenticatedFetch } from "@/lib/auth-client";

interface Message {
  id: string;
  role: "user" | "assistant";
  content: string;
  timestamp: Date;
}

interface JurisChatbotProps {
  userProgress?: UserProgress | null;
  isExpanded?: boolean;
  onToggle?: () => void;
}

function cx(...classes: (string | boolean | undefined)[]) {
  return classes.filter(Boolean).join(" ");
}

// Format markdown-like content for display
function formatMessage(content: string) {
  // Split by code blocks first
  const parts = content.split(/```(\w*)\n?([\s\S]*?)```/g);

  return parts.map((part, index) => {
    // Code blocks are at indices 1, 4, 7, etc. (language) and 2, 5, 8, etc. (code)
    if (index % 3 === 2) {
      return (
        <pre
          key={index}
          className="my-2 overflow-x-auto rounded bg-stone-800 p-3 text-sm text-stone-100"
        >
          <code>{part}</code>
        </pre>
      );
    }
    if (index % 3 === 1) {
      return null; // Skip language identifier
    }

    // Process regular text
    return part.split("\n").map((line, lineIndex) => {
      // Headers
      if (line.startsWith("### ")) {
        return (
          <h4 key={`${index}-${lineIndex}`} className="mt-3 mb-1 font-bold text-stone-800 dark:text-stone-200">
            {line.replace("### ", "")}
          </h4>
        );
      }
      if (line.startsWith("## ")) {
        return (
          <h3 key={`${index}-${lineIndex}`} className="mt-3 mb-1 text-lg font-bold text-stone-800 dark:text-stone-200">
            {line.replace("## ", "")}
          </h3>
        );
      }

      // Bullet points
      if (line.startsWith("- ") || line.startsWith("* ")) {
        return (
          <li key={`${index}-${lineIndex}`} className="ml-4 list-disc">
            {formatInlineStyles(line.substring(2))}
          </li>
        );
      }

      // Numbered lists
      const numberedMatch = line.match(/^(\d+)\. /);
      if (numberedMatch) {
        return (
          <li key={`${index}-${lineIndex}`} className="ml-4 list-decimal">
            {formatInlineStyles(line.substring(numberedMatch[0].length))}
          </li>
        );
      }

      // Regular paragraph
      if (line.trim()) {
        return (
          <p key={`${index}-${lineIndex}`} className="mb-2">
            {formatInlineStyles(line)}
          </p>
        );
      }

      return <br key={`${index}-${lineIndex}`} />;
    });
  });
}

function formatInlineStyles(text: string) {
  // Bold
  const parts = text.split(/\*\*(.*?)\*\*/g);
  return parts.map((part, i) => {
    if (i % 2 === 1) {
      return <strong key={i}>{part}</strong>;
    }
    // Italic
    const italicParts = part.split(/\*(.*?)\*/g);
    return italicParts.map((iPart, j) => {
      if (j % 2 === 1) {
        return <em key={`${i}-${j}`}>{iPart}</em>;
      }
      return iPart;
    });
  });
}

const SUGGESTED_QUESTIONS = [
  "What are the common flaw types in LSAT?",
  "How do I approach assumption questions?",
  "Explain necessary vs sufficient assumptions",
  "Tips for Reading Comprehension timing",
];

export default function JurisChatbot({ userProgress, isExpanded = true, onToggle }: JurisChatbotProps) {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "welcome",
      role: "assistant",
      content: `Hello! I'm **Juris**, your AI legal assistant. I'm here to help you master the LSAT and understand law concepts.

You can ask me about:
- **LSAT questions** from your practice tests
- **Legal reasoning** strategies and techniques
- **Law topics** like constitutional law, contracts, or torts
- **Study tips** and test-taking strategies

How can I help you today?`,
      timestamp: new Date(),
    },
  ]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      role: "user",
      content: input.trim(),
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setIsLoading(true);

    try {
      const response = await authenticatedFetch("/api/chat", {
        method: "POST",
        body: JSON.stringify({
          messages: [...messages, userMessage].map((m) => ({
            role: m.role,
            content: m.content,
          })),
          userProgress: userProgress,
        }),
      });

      const data = await response.json();

      if (data.error) {
        throw new Error(data.error);
      }

      const assistantMessage: Message = {
        id: (Date.now() + 1).toString(),
        role: "assistant",
        content: data.response,
        timestamp: new Date(),
      };

      setMessages((prev) => [...prev, assistantMessage]);
    } catch {
      const errorMessage: Message = {
        id: (Date.now() + 1).toString(),
        role: "assistant",
        content: "I apologize, but I'm having trouble connecting right now. Please try again in a moment.",
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  const handleSuggestedQuestion = (question: string) => {
    setInput(question);
    inputRef.current?.focus();
  };

  if (isMinimized) {
    return (
      <button
        onClick={() => setIsMinimized(false)}
        className="flex items-center gap-2 rounded-sm border-2 border-[#1a365d] bg-[#1a365d] px-4 py-3 text-white shadow-lg transition hover:bg-[#2d4a7c] dark:border-amber-500 dark:bg-amber-500 dark:text-stone-900 dark:hover:bg-amber-400"
      >
        <Scale size={20} />
        <span className="font-semibold">Chat with Juris</span>
        <ChevronUp size={16} />
      </button>
    );
  }

  return (
    <div className="flex h-full flex-col rounded-sm border-2 border-stone-200 bg-white shadow-lg dark:border-stone-700 dark:bg-stone-900">
      {/* Header */}
      <div className="flex items-center justify-between border-b-2 border-stone-200 bg-[#1a365d] px-4 py-3 dark:border-stone-700 dark:bg-amber-500">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white/20 dark:bg-stone-900/20">
            <Scale size={20} className="text-white dark:text-stone-900" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="font-bold text-white dark:text-stone-900">Juris</span>
              <Sparkles size={14} className="text-amber-300 dark:text-stone-700" />
            </div>
            <span className="text-xs text-white/70 dark:text-stone-900/70">AI Legal Assistant</span>
          </div>
        </div>
        <button
          onClick={() => setIsMinimized(true)}
          className="rounded p-1 text-white/70 transition hover:bg-white/10 hover:text-white dark:text-stone-900/70 dark:hover:bg-stone-900/10 dark:hover:text-stone-900"
        >
          <ChevronDown size={20} />
        </button>
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto p-4">
        <div className="space-y-4">
          {messages.map((message) => (
            <div
              key={message.id}
              className={cx(
                "flex",
                message.role === "user" ? "justify-end" : "justify-start"
              )}
            >
              <div
                className={cx(
                  "max-w-[85%] rounded-lg px-4 py-2",
                  message.role === "user"
                    ? "bg-[#1a365d] text-white dark:bg-amber-500 dark:text-stone-900"
                    : "bg-stone-100 text-stone-800 dark:bg-stone-800 dark:text-stone-200"
                )}
              >
                {message.role === "assistant" ? (
                  <div className="prose prose-sm dark:prose-invert max-w-none">
                    {formatMessage(message.content)}
                  </div>
                ) : (
                  <p>{message.content}</p>
                )}
              </div>
            </div>
          ))}

          {isLoading && (
            <div className="flex justify-start">
              <div className="flex items-center gap-2 rounded-lg bg-stone-100 px-4 py-3 dark:bg-stone-800">
                <Loader2 size={16} className="animate-spin text-[#1a365d] dark:text-amber-400" />
                <span className="text-sm text-stone-600 dark:text-stone-400">Juris is thinking...</span>
              </div>
            </div>
          )}

          <div ref={messagesEndRef} />
        </div>
      </div>

      {/* Suggested Questions */}
      {messages.length <= 2 && (
        <div className="border-t border-stone-200 px-4 py-2 dark:border-stone-700">
          <div className="text-xs font-medium text-stone-500 mb-2">Suggested questions:</div>
          <div className="flex flex-wrap gap-2">
            {SUGGESTED_QUESTIONS.map((question, index) => (
              <button
                key={index}
                onClick={() => handleSuggestedQuestion(question)}
                className="rounded-full border border-stone-300 bg-stone-50 px-3 py-1 text-xs text-stone-600 transition hover:bg-stone-100 dark:border-stone-600 dark:bg-stone-800 dark:text-stone-400 dark:hover:bg-stone-700"
              >
                {question}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Input */}
      <div className="border-t-2 border-stone-200 p-4 dark:border-stone-700">
        <div className="flex items-center gap-2">
          <input
            ref={inputRef}
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Ask Juris about law or LSAT..."
            className="flex-1 rounded-sm border-2 border-stone-300 bg-white px-4 py-2 text-sm text-stone-900 placeholder-stone-400 transition focus:border-[#1a365d] focus:outline-none dark:border-stone-600 dark:bg-stone-800 dark:text-stone-100 dark:placeholder-stone-500 dark:focus:border-amber-500"
            disabled={isLoading}
          />
          <button
            onClick={handleSend}
            disabled={isLoading || !input.trim()}
            className={cx(
              "rounded-sm p-2 transition",
              input.trim() && !isLoading
                ? "bg-[#1a365d] text-white hover:bg-[#2d4a7c] dark:bg-amber-500 dark:text-stone-900 dark:hover:bg-amber-400"
                : "bg-stone-200 text-stone-400 dark:bg-stone-700 dark:text-stone-500"
            )}
          >
            {isLoading ? (
              <Loader2 size={20} className="animate-spin" />
            ) : (
              <Send size={20} />
            )}
          </button>
        </div>
      </div>
    </div>
  );
}
