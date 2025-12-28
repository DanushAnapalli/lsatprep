"use client";

import { useMemo } from "react";
import { motion } from "framer-motion";
import {
  DiagramElement,
  ElementType,
  ELEMENT_COLORS,
  ELEMENT_TYPE_NAMES,
  ELEMENT_SOLID_COLORS,
} from "@/lib/argument-diagram-types";
import { ArrowUp } from "lucide-react";

interface DiagramCanvasProps {
  elements: DiagramElement[];
  onElementClick?: (elementId: string) => void;
  showArrows?: boolean;
  compact?: boolean;
}

export function DiagramCanvas({
  elements,
  onElementClick,
  showArrows = true,
  compact = false,
}: DiagramCanvasProps) {
  // Group elements by type
  const groupedElements = useMemo(() => {
    const groups: Record<ElementType, DiagramElement[]> = {
      conclusion: [],
      premise: [],
      assumption: [],
      background: [],
    };

    elements.forEach((elem) => {
      groups[elem.type].push(elem);
    });

    return groups;
  }, [elements]);

  // Order for display: background at bottom, then premises, assumptions, conclusion at top
  const displayOrder: ElementType[] = ["background", "premise", "assumption", "conclusion"];

  if (elements.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center rounded-sm border-2 border-dashed border-stone-300 py-12 text-center dark:border-stone-700">
        <p className="text-stone-500 dark:text-stone-400">
          No elements diagrammed yet
        </p>
        <p className="mt-1 text-sm text-stone-400 dark:text-stone-500">
          Select text and label it to build your diagram
        </p>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      {displayOrder.map((type) => {
        const typeElements = groupedElements[type];
        if (typeElements.length === 0) return null;

        const colors = ELEMENT_COLORS[type];

        return (
          <div key={type}>
            {/* Type header */}
            <div className="mb-2 flex items-center gap-2">
              <div
                className={`h-3 w-3 rounded-full`}
                style={{ backgroundColor: ELEMENT_SOLID_COLORS[type] }}
              />
              <span className="text-xs font-medium uppercase tracking-wider text-stone-500 dark:text-stone-400">
                {ELEMENT_TYPE_NAMES[type]}
                {typeElements.length > 1 ? "s" : ""}
              </span>
            </div>

            {/* Elements */}
            <div className="space-y-2">
              {typeElements.map((elem, i) => (
                <motion.div
                  key={elem.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 }}
                  onClick={() => onElementClick?.(elem.id)}
                  className={`
                    rounded-sm border-2 p-3
                    ${colors.bg} ${colors.border} ${colors.text}
                    ${onElementClick ? "cursor-pointer hover:opacity-80" : ""}
                    ${compact ? "text-sm" : ""}
                  `}
                >
                  <p className="leading-snug">{elem.text}</p>
                </motion.div>
              ))}
            </div>

            {/* Arrow between sections */}
            {showArrows && type !== "conclusion" && groupedElements.conclusion.length > 0 && typeElements.length > 0 && (
              <div className="flex justify-center py-2">
                <ArrowUp className="h-5 w-5 text-stone-400 dark:text-stone-600" />
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}

// Summary stats for the diagram
interface DiagramSummaryProps {
  elements: DiagramElement[];
}

export function DiagramSummary({ elements }: DiagramSummaryProps) {
  const stats = useMemo(() => {
    const counts: Record<ElementType, number> = {
      conclusion: 0,
      premise: 0,
      assumption: 0,
      background: 0,
    };

    elements.forEach((elem) => {
      counts[elem.type]++;
    });

    return counts;
  }, [elements]);

  return (
    <div className="flex flex-wrap gap-3">
      {(Object.keys(stats) as ElementType[]).map((type) => {
        if (stats[type] === 0) return null;

        const colors = ELEMENT_COLORS[type];
        return (
          <div
            key={type}
            className={`flex items-center gap-1.5 rounded-full px-3 py-1 text-sm ${colors.bg} ${colors.text}`}
          >
            <div
              className="h-2 w-2 rounded-full"
              style={{ backgroundColor: ELEMENT_SOLID_COLORS[type] }}
            />
            <span className="font-medium">{stats[type]}</span>
            <span>{ELEMENT_TYPE_NAMES[type]}{stats[type] > 1 ? "s" : ""}</span>
          </div>
        );
      })}
    </div>
  );
}
