"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useRouter } from "next/navigation";
import {
  Brain,
  Flame,
  Target,
  ChevronRight,
  Check,
  X,
  RotateCcw,
  Trophy,
  Zap,
  BookOpen,
  ArrowRight,
  Clock,
  Sparkles,
  RefreshCw,
  Search,
  Layers,
} from "lucide-react";
import { UserProgress } from "@/lib/user-progress";
import {
  SpacedRepetitionData,
  loadSpacedRepetitionData,
  saveSpacedRepetitionData,
  syncCardsWithProgress,
  getDueCards,
  getDueCount,
  getStats,
  calculateNextReview,
  ReviewCard,
  ReviewQuality,
  updateStreak,
} from "@/lib/spaced-repetition";
import {
  GameType,
  GameSession,
  GameQuestion,
  GameProgress,
  GAME_INFO,
  createGameSession,
  calculateGameResult,
  loadGameProgress,
  saveGameProgress,
  updateGameProgress,
} from "@/lib/lr-games";
import {
  VocabCategory,
  VocabWord,
  VocabProgress,
  VOCAB_CATEGORIES,
  MatchingGameQuestion,
  generateMatchingQuestions,
  loadVocabProgress,
  saveVocabProgress,
  updateVocabProgress,
} from "@/lib/lsat-vocab";
import { logicalReasoningQuestions, readingComprehensionQuestions } from "@/lib/sample-questions";
import { Question } from "@/lib/lsat-types";

function cx(...classes: (string | boolean | undefined)[]) {
  return classes.filter(Boolean).join(" ");
}

// Icon mapping for game types
const GameIcon = ({ type, size = 20, className }: { type: string; size?: number; className?: string }) => {
  const iconProps = { size, className };
  switch (type) {
    case "target": return <Target {...iconProps} />;
    case "refresh": return <RefreshCw {...iconProps} />;
    case "search": return <Search {...iconProps} />;
    case "layers": return <Layers {...iconProps} />;
    default: return <Target {...iconProps} />;
  }
};

// ============================================
// TYPES
// ============================================

interface DailyDrillsProps {
  progress: UserProgress;
  userId?: string;
  compact?: boolean;
}

type DrillMode = "menu" | "review" | "game" | "vocab";

// ============================================
// SPACED REPETITION REVIEW COMPONENT
// ============================================

interface ReviewModeProps {
  cards: ReviewCard[];
  userId?: string;
  onComplete: () => void;
  onExit: () => void;
}

function ReviewMode({ cards, userId, onComplete, onExit }: ReviewModeProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showAnswer, setShowAnswer] = useState(false);
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [correctCount, setCorrectCount] = useState(0);
  const [srData, setSrData] = useState<SpacedRepetitionData | null>(null);

  // Get the actual question data
  const allQuestions = [...logicalReasoningQuestions, ...readingComprehensionQuestions];
  const currentCard = cards[currentIndex];
  const currentQuestion = allQuestions.find(q => q.id === currentCard?.questionId);

  useEffect(() => {
    const data = loadSpacedRepetitionData(userId);
    setSrData(data);
  }, [userId]);

  const handleAnswer = (answer: string) => {
    if (showAnswer || !currentQuestion) return;
    setSelectedAnswer(answer);
    setShowAnswer(true);

    const isCorrect = answer === currentQuestion.correctAnswer;
    if (isCorrect) {
      setCorrectCount(c => c + 1);
    }

    // Update spaced repetition data
    if (srData && currentCard) {
      const quality: ReviewQuality = isCorrect ? 4 : 1;
      const updatedCard = calculateNextReview(currentCard, quality);
      const newCards = { ...srData.cards, [currentCard.questionId]: updatedCard };
      const updatedData = { ...srData, cards: newCards };
      setSrData(updatedData);
      saveSpacedRepetitionData(updatedData, userId);
    }
  };

  const handleNext = () => {
    if (currentIndex < cards.length - 1) {
      setCurrentIndex(i => i + 1);
      setShowAnswer(false);
      setSelectedAnswer(null);
    } else {
      // Update streak on completion
      if (srData) {
        const updatedData = updateStreak(srData);
        saveSpacedRepetitionData(updatedData, userId);
      }
      onComplete();
    }
  };

  if (!currentQuestion) {
    return (
      <div className="text-center py-8">
        <p className="text-stone-500">Question not found. Skipping...</p>
        <button
          onClick={handleNext}
          className="mt-4 rounded-sm bg-[#1a365d] px-4 py-2 text-white dark:bg-amber-500 dark:text-stone-900"
        >
          Next
        </button>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      {/* Progress bar */}
      <div className="flex items-center justify-between mb-4">
        <button
          onClick={onExit}
          className="text-sm text-stone-500 hover:text-stone-700 dark:hover:text-stone-300"
        >
          ← Exit Review
        </button>
        <div className="flex items-center gap-2">
          <span className="text-sm text-stone-600 dark:text-stone-400">
            {currentIndex + 1} / {cards.length}
          </span>
          <div className="w-24 h-2 bg-stone-200 rounded-full dark:bg-stone-700">
            <div
              className="h-full bg-[#1a365d] rounded-full transition-all dark:bg-amber-500"
              style={{ width: `${((currentIndex + 1) / cards.length) * 100}%` }}
            />
          </div>
        </div>
      </div>

      {/* Question */}
      <div className="rounded-sm border-2 border-stone-200 bg-white p-6 dark:border-stone-700 dark:bg-stone-800">
        <div className="mb-4 flex items-center gap-2">
          <span className="rounded-sm bg-stone-100 px-2 py-1 text-xs font-medium text-stone-600 dark:bg-stone-700 dark:text-stone-400">
            {currentCard.questionType.replace(/-/g, " ")}
          </span>
          <span className="rounded-sm bg-amber-100 px-2 py-1 text-xs font-medium text-amber-700 dark:bg-amber-900/30 dark:text-amber-400">
            Review
          </span>
        </div>

        <div className="mb-6 text-stone-800 dark:text-stone-200 whitespace-pre-wrap leading-relaxed">
          {currentQuestion.stimulus}
        </div>

        <div className="mb-4 font-medium text-stone-900 dark:text-stone-100">
          {currentQuestion.questionStem}
        </div>

        {/* Answer choices */}
        <div className="space-y-2">
          {currentQuestion.answerChoices.map((choice) => {
            const isSelected = selectedAnswer === choice.letter;
            const isCorrect = choice.letter === currentQuestion.correctAnswer;
            const showResult = showAnswer;

            return (
              <button
                key={choice.letter}
                onClick={() => handleAnswer(choice.letter)}
                disabled={showAnswer}
                className={cx(
                  "w-full text-left rounded-sm border-2 p-3 transition",
                  !showResult && "hover:border-[#1a365d] dark:hover:border-amber-500",
                  !showResult && isSelected && "border-[#1a365d] bg-[#1a365d]/5 dark:border-amber-500 dark:bg-amber-500/10",
                  !showResult && !isSelected && "border-stone-200 dark:border-stone-700",
                  showResult && isCorrect && "border-green-500 bg-green-50 dark:bg-green-900/20",
                  showResult && isSelected && !isCorrect && "border-red-500 bg-red-50 dark:bg-red-900/20",
                  showResult && !isSelected && !isCorrect && "border-stone-200 opacity-50 dark:border-stone-700"
                )}
              >
                <div className="flex items-start gap-3">
                  <span className={cx(
                    "flex h-6 w-6 items-center justify-center rounded-full text-xs font-bold",
                    showResult && isCorrect && "bg-green-500 text-white",
                    showResult && isSelected && !isCorrect && "bg-red-500 text-white",
                    !showResult && "bg-stone-200 text-stone-600 dark:bg-stone-700 dark:text-stone-400"
                  )}>
                    {showResult && isCorrect ? <Check size={14} /> : showResult && isSelected && !isCorrect ? <X size={14} /> : choice.letter}
                  </span>
                  <span className="flex-1 text-sm text-stone-700 dark:text-stone-300">
                    {choice.text}
                  </span>
                </div>
              </button>
            );
          })}
        </div>

        {/* Explanation */}
        {showAnswer && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            className="mt-4 rounded-sm bg-stone-50 p-4 dark:bg-stone-900"
          >
            <div className="font-medium text-stone-900 dark:text-stone-100 mb-2">
              Explanation
            </div>
            <p className="text-sm text-stone-600 dark:text-stone-400">
              {currentQuestion.explanation}
            </p>
          </motion.div>
        )}
      </div>

      {/* Next button */}
      {showAnswer && (
        <motion.button
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          onClick={handleNext}
          className="w-full rounded-sm bg-[#1a365d] py-3 font-semibold text-white transition hover:bg-[#2d4a7c] dark:bg-amber-500 dark:text-stone-900 dark:hover:bg-amber-400"
        >
          {currentIndex < cards.length - 1 ? "Next Question" : "Complete Review"}
        </motion.button>
      )}
    </div>
  );
}

// ============================================
// LOGIC GAME COMPONENT
// ============================================

interface GameModeProps {
  gameType: GameType;
  userId?: string;
  onComplete: (correct: number, total: number) => void;
  onExit: () => void;
}

function GameMode({ gameType, userId, onComplete, onExit }: GameModeProps) {
  const [session, setSession] = useState<GameSession | null>(null);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [showResult, setShowResult] = useState(false);
  const [correctCount, setCorrectCount] = useState(0);

  useEffect(() => {
    setSession(createGameSession(gameType, 5));
  }, [gameType]);

  if (!session) return null;

  const currentQuestion = session.questions[session.currentIndex];
  const isLastQuestion = session.currentIndex === session.questions.length - 1;

  const handleAnswer = (index: number) => {
    if (showResult) return;
    setSelectedAnswer(index);
    setShowResult(true);

    if (index === currentQuestion.correctIndex) {
      setCorrectCount(c => c + 1);
    }

    // Update session answers
    const newAnswers = [...session.answers, index];
    setSession({ ...session, answers: newAnswers });
  };

  const handleNext = () => {
    if (isLastQuestion) {
      // Complete game
      const finalSession = { ...session, completedAt: new Date() };
      const result = calculateGameResult(finalSession);

      // Save progress
      const gameProgress = loadGameProgress(userId);
      const updatedProgress = updateGameProgress(gameProgress, result);
      saveGameProgress(updatedProgress, userId);

      onComplete(correctCount + (selectedAnswer === currentQuestion.correctIndex ? 1 : 0), session.questions.length);
    } else {
      setSession({
        ...session,
        currentIndex: session.currentIndex + 1,
      });
      setSelectedAnswer(null);
      setShowResult(false);
    }
  };

  const gameInfo = GAME_INFO[gameType];

  return (
    <div className="space-y-4">
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <button
          onClick={onExit}
          className="text-sm text-stone-500 hover:text-stone-700 dark:hover:text-stone-300"
        >
          ← Exit Game
        </button>
        <div className="flex items-center gap-3">
          <GameIcon type={gameInfo.iconType} size={20} className="text-[#1a365d] dark:text-amber-400" />
          <span className="font-medium text-stone-900 dark:text-stone-100">
            {gameInfo.name}
          </span>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-sm text-stone-600 dark:text-stone-400">
            {session.currentIndex + 1} / {session.questions.length}
          </span>
        </div>
      </div>

      {/* Progress dots */}
      <div className="flex justify-center gap-2 mb-4">
        {session.questions.map((_, i) => (
          <div
            key={i}
            className={cx(
              "w-3 h-3 rounded-full transition",
              i < session.currentIndex && session.answers[i] === session.questions[i].correctIndex && "bg-green-500",
              i < session.currentIndex && session.answers[i] !== session.questions[i].correctIndex && "bg-red-500",
              i === session.currentIndex && "bg-[#1a365d] dark:bg-amber-500",
              i > session.currentIndex && "bg-stone-200 dark:bg-stone-700"
            )}
          />
        ))}
      </div>

      {/* Question card */}
      <div className="rounded-sm border-2 border-stone-200 bg-white p-6 dark:border-stone-700 dark:bg-stone-800">
        <div className="mb-4">
          <span className={cx(
            "inline-block rounded-sm px-2 py-1 text-xs font-medium",
            currentQuestion.difficulty === "easy" && "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400",
            currentQuestion.difficulty === "medium" && "bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-400",
            currentQuestion.difficulty === "hard" && "bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400"
          )}>
            {currentQuestion.difficulty}
          </span>
        </div>

        {/* Stimulus */}
        <div className="mb-6 rounded-sm bg-stone-50 p-4 text-stone-800 dark:bg-stone-900 dark:text-stone-200 italic">
          &ldquo;{currentQuestion.stimulus}&rdquo;
        </div>

        {/* Question */}
        <div className="mb-4 font-medium text-stone-900 dark:text-stone-100">
          {currentQuestion.question}
        </div>

        {/* Options */}
        <div className="space-y-2">
          {currentQuestion.options.map((option, index) => {
            const isSelected = selectedAnswer === index;
            const isCorrect = index === currentQuestion.correctIndex;

            return (
              <button
                key={index}
                onClick={() => handleAnswer(index)}
                disabled={showResult}
                className={cx(
                  "w-full text-left rounded-sm border-2 p-3 transition",
                  !showResult && "hover:border-[#1a365d] dark:hover:border-amber-500",
                  !showResult && "border-stone-200 dark:border-stone-700",
                  showResult && isCorrect && "border-green-500 bg-green-50 dark:bg-green-900/20",
                  showResult && isSelected && !isCorrect && "border-red-500 bg-red-50 dark:bg-red-900/20",
                  showResult && !isSelected && !isCorrect && "border-stone-200 opacity-50 dark:border-stone-700"
                )}
              >
                <div className="flex items-start gap-3">
                  <span className={cx(
                    "flex h-6 w-6 items-center justify-center rounded-full text-xs font-bold flex-shrink-0",
                    showResult && isCorrect && "bg-green-500 text-white",
                    showResult && isSelected && !isCorrect && "bg-red-500 text-white",
                    !showResult && "bg-stone-200 text-stone-600 dark:bg-stone-700 dark:text-stone-400"
                  )}>
                    {showResult && isCorrect ? <Check size={14} /> : showResult && isSelected && !isCorrect ? <X size={14} /> : String.fromCharCode(65 + index)}
                  </span>
                  <span className="text-sm text-stone-700 dark:text-stone-300">
                    {option}
                  </span>
                </div>
              </button>
            );
          })}
        </div>

        {/* Explanation */}
        {showResult && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            className="mt-4 rounded-sm bg-blue-50 p-4 dark:bg-blue-900/20"
          >
            <div className="flex items-center gap-2 font-medium text-blue-900 dark:text-blue-100 mb-2">
              <Sparkles size={16} />
              Explanation
            </div>
            <p className="text-sm text-blue-800 dark:text-blue-200">
              {currentQuestion.explanation}
            </p>
          </motion.div>
        )}
      </div>

      {/* Next button */}
      {showResult && (
        <motion.button
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          onClick={handleNext}
          className="w-full rounded-sm bg-[#1a365d] py-3 font-semibold text-white transition hover:bg-[#2d4a7c] dark:bg-amber-500 dark:text-stone-900 dark:hover:bg-amber-400"
        >
          {isLastQuestion ? "See Results" : "Next Question"}
        </motion.button>
      )}
    </div>
  );
}

// ============================================
// VOCABULARY MODE COMPONENT
// ============================================

interface VocabModeProps {
  userId?: string;
  onComplete: (correct: number, total: number) => void;
  onExit: () => void;
}

function VocabMode({ userId, onComplete, onExit }: VocabModeProps) {
  const [questions, setQuestions] = useState<MatchingGameQuestion[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [showResult, setShowResult] = useState(false);
  const [correctCount, setCorrectCount] = useState(0);

  useEffect(() => {
    setQuestions(generateMatchingQuestions(5));
  }, []);

  if (questions.length === 0) return null;

  const currentQ = questions[currentIndex];
  const isLastQuestion = currentIndex === questions.length - 1;

  const handleAnswer = (index: number) => {
    if (showResult) return;
    setSelectedAnswer(index);
    setShowResult(true);

    const isCorrect = index === currentQ.correctIndex;
    if (isCorrect) {
      setCorrectCount(c => c + 1);
    }

    // Update vocab progress
    const vocabProgress = loadVocabProgress(userId);
    const updatedProgress = updateVocabProgress(vocabProgress, currentQ.word.id, isCorrect);
    saveVocabProgress(updatedProgress, userId);
  };

  const handleNext = () => {
    if (isLastQuestion) {
      const finalCorrect = correctCount + (selectedAnswer === currentQ.correctIndex ? 1 : 0);
      onComplete(finalCorrect, questions.length);
    } else {
      setCurrentIndex(i => i + 1);
      setSelectedAnswer(null);
      setShowResult(false);
    }
  };

  const categoryInfo = VOCAB_CATEGORIES[currentQ.word.category];

  return (
    <div className="space-y-4">
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <button
          onClick={onExit}
          className="text-sm text-stone-500 hover:text-stone-700 dark:hover:text-stone-300"
        >
          ← Exit Vocab
        </button>
        <div className="flex items-center gap-3">
          <BookOpen size={20} className="text-[#1a365d] dark:text-amber-400" />
          <span className="font-medium text-stone-900 dark:text-stone-100">
            Vocabulary
          </span>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-sm text-stone-600 dark:text-stone-400">
            {currentIndex + 1} / {questions.length}
          </span>
        </div>
      </div>

      {/* Progress dots */}
      <div className="flex justify-center gap-2 mb-4">
        {questions.map((_, i) => (
          <div
            key={i}
            className={cx(
              "w-3 h-3 rounded-full transition",
              i < currentIndex && selectedAnswer !== null && questions[i] && selectedAnswer === questions[i].correctIndex && "bg-green-500",
              i < currentIndex && selectedAnswer !== null && questions[i] && selectedAnswer !== questions[i].correctIndex && "bg-red-500",
              i === currentIndex && "bg-[#1a365d] dark:bg-amber-500",
              i > currentIndex && "bg-stone-200 dark:bg-stone-700"
            )}
          />
        ))}
      </div>

      {/* Question card */}
      <div className="rounded-sm border-2 border-stone-200 bg-white p-6 dark:border-stone-700 dark:bg-stone-800">
        {/* Category badge */}
        <div className="mb-4">
          <span className="inline-block rounded-sm bg-stone-100 px-2 py-1 text-xs font-medium text-stone-600 dark:bg-stone-700 dark:text-stone-400">
            {categoryInfo.name}
          </span>
        </div>

        {/* Word display */}
        <div className="mb-6 text-center">
          <div className="text-3xl font-bold text-[#1a365d] dark:text-amber-400 mb-2">
            {currentQ.word.word}
          </div>
          <div className="text-sm text-stone-500">
            Match the word to its correct definition
          </div>
        </div>

        {/* Definition options */}
        <div className="space-y-2">
          {currentQ.options.map((option, index) => {
            const isSelected = selectedAnswer === index;
            const isCorrect = index === currentQ.correctIndex;

            return (
              <button
                key={index}
                onClick={() => handleAnswer(index)}
                disabled={showResult}
                className={cx(
                  "w-full text-left rounded-sm border-2 p-4 transition",
                  !showResult && "hover:border-[#1a365d] dark:hover:border-amber-500",
                  !showResult && "border-stone-200 dark:border-stone-700",
                  showResult && isCorrect && "border-green-500 bg-green-50 dark:bg-green-900/20",
                  showResult && isSelected && !isCorrect && "border-red-500 bg-red-50 dark:bg-red-900/20",
                  showResult && !isSelected && !isCorrect && "border-stone-200 opacity-50 dark:border-stone-700"
                )}
              >
                <div className="flex items-start gap-3">
                  <span className={cx(
                    "flex h-6 w-6 items-center justify-center rounded-full text-xs font-bold flex-shrink-0",
                    showResult && isCorrect && "bg-green-500 text-white",
                    showResult && isSelected && !isCorrect && "bg-red-500 text-white",
                    !showResult && "bg-stone-200 text-stone-600 dark:bg-stone-700 dark:text-stone-400"
                  )}>
                    {showResult && isCorrect ? <Check size={14} /> : showResult && isSelected && !isCorrect ? <X size={14} /> : String.fromCharCode(65 + index)}
                  </span>
                  <span className="text-sm text-stone-700 dark:text-stone-300">
                    {option}
                  </span>
                </div>
              </button>
            );
          })}
        </div>

        {/* Example sentence */}
        {showResult && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            className="mt-4 rounded-sm bg-stone-50 p-4 dark:bg-stone-900"
          >
            <div className="font-medium text-stone-900 dark:text-stone-100 mb-2">
              Example Usage
            </div>
            <p className="text-sm text-stone-600 dark:text-stone-400 italic">
              &ldquo;{currentQ.word.example}&rdquo;
            </p>
          </motion.div>
        )}
      </div>

      {/* Next button */}
      {showResult && (
        <motion.button
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          onClick={handleNext}
          className="w-full rounded-sm bg-[#1a365d] py-3 font-semibold text-white transition hover:bg-[#2d4a7c] dark:bg-amber-500 dark:text-stone-900 dark:hover:bg-amber-400"
        >
          {isLastQuestion ? "See Results" : "Next Word"}
        </motion.button>
      )}
    </div>
  );
}

// ============================================
// MAIN COMPONENT
// ============================================

export default function DailyDrills({ progress, userId, compact = false }: DailyDrillsProps) {
  const router = useRouter();
  const [mode, setMode] = useState<DrillMode>("menu");
  const [selectedGame, setSelectedGame] = useState<GameType | null>(null);
  const [srData, setSrData] = useState<SpacedRepetitionData | null>(null);
  const [gameProgress, setGameProgress] = useState<GameProgress | null>(null);
  const [vocabProgress, setVocabProgress] = useState<VocabProgress | null>(null);
  const [dueCards, setDueCards] = useState<ReviewCard[]>([]);
  const [showCompletionMessage, setShowCompletionMessage] = useState<{ type: "review" | "game" | "vocab"; correct?: number; total?: number } | null>(null);

  // Load data on mount
  useEffect(() => {
    let data = loadSpacedRepetitionData(userId);
    data = syncCardsWithProgress(data, progress);
    saveSpacedRepetitionData(data, userId);
    setSrData(data);
    setDueCards(getDueCards(data, 10));

    const gp = loadGameProgress(userId);
    setGameProgress(gp);

    const vp = loadVocabProgress(userId);
    setVocabProgress(vp);
  }, [userId, progress]);

  const handleStartReview = () => {
    setMode("review");
  };

  const handleStartGame = (type: GameType) => {
    setSelectedGame(type);
    setMode("game");
  };

  const handleReviewComplete = () => {
    setShowCompletionMessage({ type: "review" });
    setMode("menu");
    // Reload data
    const data = loadSpacedRepetitionData(userId);
    setSrData(data);
    setDueCards(getDueCards(data, 10));
  };

  const handleGameComplete = (correct: number, total: number) => {
    setShowCompletionMessage({ type: "game", correct, total });
    setMode("menu");
    setSelectedGame(null);
    // Reload game progress
    const gp = loadGameProgress(userId);
    setGameProgress(gp);
  };

  const handleStartVocab = () => {
    setMode("vocab");
  };

  const handleVocabComplete = (correct: number, total: number) => {
    setShowCompletionMessage({ type: "vocab", correct, total });
    setMode("menu");
    // Reload vocab progress
    const vp = loadVocabProgress(userId);
    setVocabProgress(vp);
  };

  const handleExit = () => {
    setMode("menu");
    setSelectedGame(null);
  };

  const stats = srData ? getStats(srData) : null;
  const dueCount = stats?.dueToday || 0;
  const streak = stats?.currentStreak || 0;

  // Compact view for dashboard widget - navigates to dedicated pages
  if (compact) {
    return (
      <div className="rounded-sm border-2 border-stone-200 bg-white p-6 dark:border-stone-700 dark:bg-stone-900">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            <Brain size={20} className="text-[#1a365d] dark:text-amber-400" />
            <h3 className="font-serif text-lg font-bold text-stone-900 dark:text-stone-100">
              Daily Drills
            </h3>
          </div>
          {streak > 0 && (
            <div className="flex items-center gap-1 rounded-sm bg-orange-100 px-2 py-1 text-orange-700 dark:bg-orange-900/30 dark:text-orange-400">
              <Flame size={14} />
              <span className="text-sm font-bold">{streak}</span>
            </div>
          )}
        </div>

        <div className="grid grid-cols-3 gap-3">
          {/* Review Queue - navigates to /drills/review */}
          <button
            onClick={() => dueCount > 0 && router.push('/drills/review')}
            disabled={dueCount === 0}
            className={cx(
              "rounded-sm border-2 p-3 text-left transition",
              dueCount > 0
                ? "border-[#1a365d] bg-[#1a365d]/5 hover:bg-[#1a365d]/10 dark:border-amber-500 dark:bg-amber-500/10"
                : "border-stone-200 bg-stone-50 dark:border-stone-700 dark:bg-stone-800 opacity-60"
            )}
          >
            <div className="flex items-center gap-2 mb-1">
              <RotateCcw size={14} className="text-[#1a365d] dark:text-amber-400" />
              <span className="text-sm font-medium text-stone-900 dark:text-stone-100">Review</span>
            </div>
            <div className="text-xl font-bold text-[#1a365d] dark:text-amber-400">
              {dueCount}
            </div>
            <div className="text-xs text-stone-500">due</div>
          </button>

          {/* Quick Game - navigates to /drills/games */}
          <button
            onClick={() => router.push('/drills/games')}
            className="rounded-sm border-2 border-stone-200 bg-white p-3 text-left transition hover:border-[#1a365d] dark:border-stone-700 dark:bg-stone-800 dark:hover:border-amber-500"
          >
            <div className="flex items-center gap-2 mb-1">
              <Target size={14} className="text-[#1a365d] dark:text-amber-400" />
              <span className="text-sm font-medium text-stone-900 dark:text-stone-100">Logic</span>
            </div>
            <div className="text-xs text-stone-600 dark:text-stone-400">
              5 Qs
            </div>
            <div className="text-xs text-stone-500">~2 min</div>
          </button>

          {/* Vocab - navigates to /drills/vocab (swipe flashcards) */}
          <button
            onClick={() => router.push('/drills/vocab')}
            className="rounded-sm border-2 border-stone-200 bg-white p-3 text-left transition hover:border-[#1a365d] dark:border-stone-700 dark:bg-stone-800 dark:hover:border-amber-500"
          >
            <div className="flex items-center gap-2 mb-1">
              <BookOpen size={14} className="text-[#1a365d] dark:text-amber-400" />
              <span className="text-sm font-medium text-stone-900 dark:text-stone-100">Vocab</span>
            </div>
            <div className="text-xs text-stone-600 dark:text-stone-400">
              Flashcards
            </div>
            <div className="text-xs text-stone-500">Swipe</div>
          </button>
        </div>

        {/* View all drills link - Highlighted */}
        <button
          onClick={() => router.push('/drills')}
          className="mt-4 w-full flex items-center justify-center gap-2 rounded-sm bg-gradient-to-r from-[#1a365d] to-[#2d4a7c] py-2.5 text-sm font-semibold text-white transition hover:from-[#2d4a7c] hover:to-[#1a365d] shadow-sm dark:from-amber-500 dark:to-orange-500 dark:text-stone-900 dark:hover:from-amber-400 dark:hover:to-orange-400"
        >
          View All Drills
          <ChevronRight size={16} />
        </button>
      </div>
    );
  }

  // Full view (for dedicated page if needed)
  return (
    <div className="space-y-6">
      {/* Header with streak */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="font-serif text-2xl font-bold text-stone-900 dark:text-stone-100">
            Daily Drills
          </h2>
          <p className="text-stone-600 dark:text-stone-400">
            Build your skills with focused practice
          </p>
        </div>
        {streak > 0 && (
          <div className="flex items-center gap-2 rounded-sm bg-gradient-to-r from-orange-100 to-amber-100 px-4 py-2 dark:from-orange-900/30 dark:to-amber-900/30">
            <Flame size={24} className="text-orange-500" />
            <div>
              <div className="text-2xl font-bold text-orange-600 dark:text-orange-400">{streak}</div>
              <div className="text-xs text-orange-600 dark:text-orange-400">day streak</div>
            </div>
          </div>
        )}
      </div>

      {/* Spaced Repetition Section */}
      <div className="rounded-sm border-2 border-stone-200 bg-white p-6 dark:border-stone-700 dark:bg-stone-900">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            <RotateCcw size={20} className="text-[#1a365d] dark:text-amber-400" />
            <h3 className="font-semibold text-stone-900 dark:text-stone-100">
              Review Queue
            </h3>
          </div>
          <span className="text-sm text-stone-500">
            Spaced repetition for better retention
          </span>
        </div>

        {dueCount > 0 ? (
          <div className="flex items-center justify-between">
            <div>
              <div className="text-lg font-semibold text-[#1a365d] dark:text-amber-400">
                {dueCount} cards due
              </div>
              <div className="text-sm text-stone-500">Ready for review</div>
            </div>
            <button
              onClick={handleStartReview}
              className="inline-flex items-center gap-2 rounded-sm bg-[#1a365d] px-6 py-3 font-semibold text-white transition hover:bg-[#2d4a7c] dark:bg-amber-500 dark:text-stone-900 dark:hover:bg-amber-400"
            >
              Start Review
              <ArrowRight size={18} />
            </button>
          </div>
        ) : (
          <div className="text-center py-6">
            <Check size={32} className="mx-auto mb-2 text-green-500" />
            <div className="font-medium text-stone-900 dark:text-stone-100">All caught up!</div>
            <div className="text-sm text-stone-500">No reviews due right now</div>
          </div>
        )}

        {stats && stats.totalCards > 0 && (
          <div className="mt-4 grid grid-cols-3 gap-4 border-t border-stone-200 pt-4 dark:border-stone-700">
            <div className="text-center">
              <div className="text-sm font-medium text-stone-900 dark:text-stone-100">{stats.masteredCards}</div>
              <div className="text-xs text-stone-500">Mastered</div>
            </div>
            <div className="text-center">
              <div className="text-sm font-medium text-stone-900 dark:text-stone-100">{stats.learningCards}</div>
              <div className="text-xs text-stone-500">Learning</div>
            </div>
            <div className="text-center">
              <div className="text-sm font-medium text-stone-900 dark:text-stone-100">{stats.newCards}</div>
              <div className="text-xs text-stone-500">New</div>
            </div>
          </div>
        )}
      </div>

      {/* Logic Games Section */}
      <div className="rounded-sm border-2 border-stone-200 bg-white p-6 dark:border-stone-700 dark:bg-stone-900">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            <Zap size={20} className="text-[#1a365d] dark:text-amber-400" />
            <h3 className="font-semibold text-stone-900 dark:text-stone-100">
              Logic Games
            </h3>
          </div>
          <span className="text-sm text-stone-500">
            Fun drills to sharpen your reasoning
          </span>
        </div>

        <div className="grid gap-3 sm:grid-cols-2">
          {(Object.entries(GAME_INFO) as [GameType, typeof GAME_INFO[GameType]][]).map(([type, info]) => (
            <button
              key={type}
              onClick={() => handleStartGame(type)}
              className="flex items-center gap-4 rounded-sm border-2 border-stone-200 bg-white p-4 text-left transition hover:border-[#1a365d] dark:border-stone-700 dark:bg-stone-800 dark:hover:border-amber-500"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-sm bg-stone-100 dark:bg-stone-700">
                <GameIcon type={info.iconType} size={20} className="text-[#1a365d] dark:text-amber-400" />
              </div>
              <div className="flex-1">
                <div className="font-medium text-stone-900 dark:text-stone-100">
                  {info.name}
                </div>
                <div className="text-sm text-stone-500">
                  {info.description}
                </div>
              </div>
              <ChevronRight size={20} className="text-stone-400" />
            </button>
          ))}
        </div>

        {gameProgress && gameProgress.gamesPlayed > 0 && (
          <div className="mt-4 grid grid-cols-2 gap-4 border-t border-stone-200 pt-4 dark:border-stone-700">
            <div className="text-center">
              <div className="text-sm font-medium text-stone-900 dark:text-stone-100">{gameProgress.gamesPlayed}</div>
              <div className="text-xs text-stone-500">Games Played</div>
            </div>
            <div className="text-center">
              <div className="text-sm font-medium text-stone-900 dark:text-stone-100">
                {gameProgress.totalQuestions > 0
                  ? Math.round((gameProgress.totalCorrect / gameProgress.totalQuestions) * 100)
                  : 0}%
              </div>
              <div className="text-xs text-stone-500">Accuracy</div>
            </div>
          </div>
        )}
      </div>

      {/* Vocabulary Section */}
      <div className="rounded-sm border-2 border-stone-200 bg-white p-6 dark:border-stone-700 dark:bg-stone-900">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            <BookOpen size={20} className="text-[#1a365d] dark:text-amber-400" />
            <h3 className="font-semibold text-stone-900 dark:text-stone-100">
              LSAT Vocabulary
            </h3>
          </div>
          <span className="text-sm text-stone-500">
            Master key terms and definitions
          </span>
        </div>

        <div className="grid gap-3 sm:grid-cols-2">
          {(Object.entries(VOCAB_CATEGORIES) as [VocabCategory, typeof VOCAB_CATEGORIES[VocabCategory]][]).map(([category, info]) => (
            <button
              key={category}
              onClick={handleStartVocab}
              className="flex items-center gap-4 rounded-sm border-2 border-stone-200 bg-white p-4 text-left transition hover:border-[#1a365d] dark:border-stone-700 dark:bg-stone-800 dark:hover:border-amber-500"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-sm bg-stone-100 dark:bg-stone-700">
                <BookOpen size={20} className="text-[#1a365d] dark:text-amber-400" />
              </div>
              <div className="flex-1">
                <div className="font-medium text-stone-900 dark:text-stone-100">
                  {info.name}
                </div>
                <div className="text-sm text-stone-500">
                  {info.description}
                </div>
              </div>
              <ChevronRight size={20} className="text-stone-400" />
            </button>
          ))}
        </div>

        {vocabProgress && vocabProgress.cardsReviewed > 0 && (
          <div className="mt-4 grid grid-cols-3 gap-4 border-t border-stone-200 pt-4 dark:border-stone-700">
            <div className="text-center">
              <div className="text-sm font-medium text-stone-900 dark:text-stone-100">{vocabProgress.cardsReviewed}</div>
              <div className="text-xs text-stone-500">Reviewed</div>
            </div>
            <div className="text-center">
              <div className="text-sm font-medium text-stone-900 dark:text-stone-100">
                {vocabProgress.cardsReviewed > 0
                  ? Math.round((vocabProgress.correctCount / vocabProgress.cardsReviewed) * 100)
                  : 0}%
              </div>
              <div className="text-xs text-stone-500">Accuracy</div>
            </div>
            <div className="text-center">
              <div className="text-sm font-medium text-stone-900 dark:text-stone-100">{vocabProgress.masteredWords.length}</div>
              <div className="text-xs text-stone-500">Mastered</div>
            </div>
          </div>
        )}
      </div>

      {/* Modal for review/game/vocab */}
      <AnimatePresence>
        {mode !== "menu" && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4"
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              className="w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-sm bg-white p-6 dark:bg-stone-900"
            >
              {mode === "review" && (
                <ReviewMode
                  cards={dueCards}
                  userId={userId}
                  onComplete={handleReviewComplete}
                  onExit={handleExit}
                />
              )}
              {mode === "game" && selectedGame && (
                <GameMode
                  gameType={selectedGame}
                  userId={userId}
                  onComplete={handleGameComplete}
                  onExit={handleExit}
                />
              )}
              {mode === "vocab" && (
                <VocabMode
                  userId={userId}
                  onComplete={handleVocabComplete}
                  onExit={handleExit}
                />
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
