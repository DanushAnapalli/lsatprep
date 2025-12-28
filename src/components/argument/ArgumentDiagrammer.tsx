"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArgumentDiagram,
  DiagramElement,
  ModelDiagram,
  createEmptyDiagram,
  saveDiagram,
  loadDiagram,
  validateDiagram,
  ELEMENT_COLORS,
  ELEMENT_TYPE_NAMES,
} from "@/lib/argument-diagram-types";
import { TextHighlighter } from "./TextHighlighter";
import { DiagramCanvas, DiagramSummary } from "./DiagramCanvas";
import {
  RotateCcw,
  Save,
  Eye,
  EyeOff,
  Check,
  AlertTriangle,
  ChevronDown,
  ChevronUp,
  Lightbulb,
} from "lucide-react";

interface ArgumentDiagrammerProps {
  questionId: string;
  questionText: string;
  modelDiagram?: ModelDiagram;
  userId?: string;
  onSave?: (diagram: ArgumentDiagram) => void;
}

export function ArgumentDiagrammer({
  questionId,
  questionText,
  modelDiagram,
  userId,
  onSave,
}: ArgumentDiagrammerProps) {
  const [diagram, setDiagram] = useState<ArgumentDiagram>(() =>
    createEmptyDiagram(questionId)
  );
  const [showModelAnswer, setShowModelAnswer] = useState(false);
  const [showDiagramView, setShowDiagramView] = useState(true);
  const [isSaved, setIsSaved] = useState(false);
  const [validation, setValidation] = useState<{
    isValid: boolean;
    issues: string[];
  }>({ isValid: true, issues: [] });

  // Load existing diagram
  useEffect(() => {
    const saved = loadDiagram(questionId, userId);
    if (saved) {
      setDiagram(saved);
    }
  }, [questionId, userId]);

  // Validate on changes
  useEffect(() => {
    const result = validateDiagram(diagram);
    setValidation(result);
  }, [diagram]);

  const handleElementAdd = useCallback((element: DiagramElement) => {
    setDiagram((prev) => ({
      ...prev,
      elements: [...prev.elements, element],
      updatedAt: new Date(),
    }));
    setIsSaved(false);
  }, []);

  const handleElementRemove = useCallback((elementId: string) => {
    setDiagram((prev) => ({
      ...prev,
      elements: prev.elements.filter((e) => e.id !== elementId),
      updatedAt: new Date(),
    }));
    setIsSaved(false);
  }, []);

  const handleReset = () => {
    setDiagram(createEmptyDiagram(questionId));
    setIsSaved(false);
  };

  const handleSave = () => {
    saveDiagram(diagram, userId);
    setIsSaved(true);
    onSave?.(diagram);
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div>
          <h2 className="text-lg font-bold text-stone-900 dark:text-stone-100">
            Argument Diagrammer
          </h2>
          <p className="text-sm text-stone-500 dark:text-stone-400">
            Highlight text to identify the argument structure
          </p>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={handleReset}
            className="flex items-center gap-1 rounded-sm border-2 border-stone-300 px-3 py-1.5 text-sm font-medium text-stone-600 hover:bg-stone-50 dark:border-stone-600 dark:text-stone-400 dark:hover:bg-stone-800"
          >
            <RotateCcw className="h-4 w-4" />
            Reset
          </button>
          <button
            onClick={handleSave}
            disabled={isSaved}
            className={`
              flex items-center gap-1 rounded-sm px-3 py-1.5 text-sm font-semibold transition-colors
              ${isSaved
                ? "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400"
                : "bg-[#1a365d] text-white hover:bg-[#2d4a7c] dark:bg-amber-500 dark:text-stone-900 dark:hover:bg-amber-400"
              }
            `}
          >
            {isSaved ? (
              <>
                <Check className="h-4 w-4" />
                Saved
              </>
            ) : (
              <>
                <Save className="h-4 w-4" />
                Save
              </>
            )}
          </button>
        </div>
      </div>

      {/* Main content area */}
      <div className="grid gap-6 lg:grid-cols-2">
        {/* Left: Text highlighter */}
        <div>
          <TextHighlighter
            text={questionText}
            elements={diagram.elements}
            onElementAdd={handleElementAdd}
            onElementRemove={handleElementRemove}
          />

          {/* Summary */}
          {diagram.elements.length > 0 && (
            <div className="mt-4">
              <DiagramSummary elements={diagram.elements} />
            </div>
          )}
        </div>

        {/* Right: Diagram view */}
        <div>
          <button
            onClick={() => setShowDiagramView(!showDiagramView)}
            className="mb-3 flex w-full items-center justify-between rounded-sm bg-stone-100 px-3 py-2 text-sm font-medium text-stone-700 hover:bg-stone-200 dark:bg-stone-800 dark:text-stone-300 dark:hover:bg-stone-700"
          >
            <span>Diagram View</span>
            {showDiagramView ? (
              <ChevronUp className="h-4 w-4" />
            ) : (
              <ChevronDown className="h-4 w-4" />
            )}
          </button>

          <AnimatePresence>
            {showDiagramView && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.2 }}
                className="overflow-hidden"
              >
                <DiagramCanvas
                  elements={diagram.elements}
                  onElementClick={handleElementRemove}
                />
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>

      {/* Validation feedback */}
      {diagram.elements.length > 0 && !validation.isValid && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex items-start gap-2 rounded-sm border-2 border-amber-200 bg-amber-50 p-3 dark:border-amber-800 dark:bg-amber-900/20"
        >
          <AlertTriangle className="h-5 w-5 shrink-0 text-amber-600 dark:text-amber-400" />
          <div>
            <p className="font-medium text-amber-800 dark:text-amber-200">
              Diagram may be incomplete
            </p>
            <ul className="mt-1 text-sm text-amber-700 dark:text-amber-300">
              {validation.issues.map((issue, i) => (
                <li key={i}>• {issue}</li>
              ))}
            </ul>
          </div>
        </motion.div>
      )}

      {validation.isValid && diagram.elements.length >= 2 && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex items-center gap-2 rounded-sm border-2 border-green-200 bg-green-50 p-3 dark:border-green-800 dark:bg-green-900/20"
        >
          <Check className="h-5 w-5 text-green-600 dark:text-green-400" />
          <p className="font-medium text-green-800 dark:text-green-200">
            Good argument structure identified!
          </p>
        </motion.div>
      )}

      {/* Model answer section */}
      {modelDiagram && (
        <div className="border-t border-stone-200 pt-6 dark:border-stone-700">
          <button
            onClick={() => setShowModelAnswer(!showModelAnswer)}
            className="flex w-full items-center justify-between rounded-sm bg-stone-100 px-4 py-3 font-medium text-stone-700 hover:bg-stone-200 dark:bg-stone-800 dark:text-stone-300 dark:hover:bg-stone-700"
          >
            <span className="flex items-center gap-2">
              <Lightbulb className="h-5 w-5" />
              Show Model Answer
            </span>
            {showModelAnswer ? (
              <EyeOff className="h-5 w-5" />
            ) : (
              <Eye className="h-5 w-5" />
            )}
          </button>

          <AnimatePresence>
            {showModelAnswer && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.2 }}
                className="overflow-hidden"
              >
                <div className="mt-4 space-y-4 rounded-sm border-2 border-stone-200 bg-stone-50 p-4 dark:border-stone-700 dark:bg-stone-800/50">
                  <h3 className="font-semibold text-stone-900 dark:text-stone-100">
                    Model Diagram
                  </h3>
                  <DiagramCanvas
                    elements={modelDiagram.elements}
                    showArrows
                  />
                  {modelDiagram.explanation && (
                    <div className="border-t border-stone-200 pt-4 dark:border-stone-700">
                      <h4 className="mb-2 text-sm font-medium text-stone-600 dark:text-stone-400">
                        Explanation
                      </h4>
                      <p className="text-sm text-stone-700 dark:text-stone-300">
                        {modelDiagram.explanation}
                      </p>
                    </div>
                  )}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      )}
    </div>
  );
}
