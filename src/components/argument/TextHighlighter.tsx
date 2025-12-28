"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import {
  DiagramElement,
  ElementType,
  ELEMENT_COLORS,
  ELEMENT_TYPE_NAMES,
  SHORTCUT_LABELS,
  createDiagramElement,
  findOverlappingElements,
} from "@/lib/argument-diagram-types";
import { X } from "lucide-react";

interface TextHighlighterProps {
  text: string;
  elements: DiagramElement[];
  onElementAdd: (element: DiagramElement) => void;
  onElementRemove: (elementId: string) => void;
  readOnly?: boolean;
  showToolbar?: boolean;
}

export function TextHighlighter({
  text,
  elements,
  onElementAdd,
  onElementRemove,
  readOnly = false,
  showToolbar = true,
}: TextHighlighterProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [selection, setSelection] = useState<{
    text: string;
    start: number;
    end: number;
  } | null>(null);
  const [showLabelMenu, setShowLabelMenu] = useState(false);
  const [menuPosition, setMenuPosition] = useState({ x: 0, y: 0 });

  // Handle text selection
  const handleMouseUp = useCallback(() => {
    if (readOnly) return;

    const windowSelection = window.getSelection();
    if (!windowSelection || windowSelection.isCollapsed) {
      setSelection(null);
      setShowLabelMenu(false);
      return;
    }

    const selectedText = windowSelection.toString().trim();
    if (!selectedText) {
      setSelection(null);
      setShowLabelMenu(false);
      return;
    }

    // Calculate the position within our text
    const range = windowSelection.getRangeAt(0);
    const container = containerRef.current;
    if (!container) return;

    // Get the text content position
    const preCaretRange = range.cloneRange();
    preCaretRange.selectNodeContents(container);
    preCaretRange.setEnd(range.startContainer, range.startOffset);
    const start = preCaretRange.toString().length;
    const end = start + selectedText.length;

    setSelection({ text: selectedText, start, end });

    // Position the menu near the selection
    const rect = range.getBoundingClientRect();
    const containerRect = container.getBoundingClientRect();
    setMenuPosition({
      x: rect.left - containerRect.left + rect.width / 2,
      y: rect.bottom - containerRect.top + 8,
    });
    setShowLabelMenu(true);
  }, [readOnly]);

  // Handle keyboard shortcuts
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (readOnly || !selection) return;

      const key = e.key.toLowerCase();
      const shortcuts: Record<string, ElementType> = {
        c: "conclusion",
        p: "premise",
        a: "assumption",
        b: "background",
      };

      if (shortcuts[key]) {
        e.preventDefault();
        handleLabelSelection(shortcuts[key]);
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [selection, readOnly]);

  const handleLabelSelection = (type: ElementType) => {
    if (!selection) return;

    // Check for overlaps and remove them
    const overlapping = findOverlappingElements(elements, selection.start, selection.end);
    overlapping.forEach((elem) => onElementRemove(elem.id));

    // Create new element
    const newElement = createDiagramElement(
      type,
      selection.text,
      selection.start,
      selection.end
    );

    onElementAdd(newElement);
    setSelection(null);
    setShowLabelMenu(false);
    window.getSelection()?.removeAllRanges();
  };

  const handleElementClick = (elementId: string, e: React.MouseEvent) => {
    if (readOnly) return;
    e.stopPropagation();
    onElementRemove(elementId);
  };

  // Render text with highlights
  const renderHighlightedText = () => {
    if (elements.length === 0) {
      return <span>{text}</span>;
    }

    // Sort elements by start index
    const sortedElements = [...elements].sort((a, b) => a.startIndex - b.startIndex);

    const result: React.ReactNode[] = [];
    let lastIndex = 0;

    sortedElements.forEach((elem, i) => {
      // Add unhighlighted text before this element
      if (elem.startIndex > lastIndex) {
        result.push(
          <span key={`text-${i}`}>{text.slice(lastIndex, elem.startIndex)}</span>
        );
      }

      // Add highlighted element
      const colors = ELEMENT_COLORS[elem.type];
      result.push(
        <span
          key={elem.id}
          className={`
            relative inline rounded px-0.5
            ${colors.bg} ${colors.text}
            ${!readOnly ? "cursor-pointer hover:opacity-80" : ""}
            group
          `}
          onClick={(e) => handleElementClick(elem.id, e)}
          title={`${ELEMENT_TYPE_NAMES[elem.type]}${!readOnly ? " (click to remove)" : ""}`}
        >
          {text.slice(elem.startIndex, elem.endIndex)}
          {!readOnly && (
            <span className="absolute -top-5 left-1/2 -translate-x-1/2 whitespace-nowrap rounded bg-stone-800 px-1.5 py-0.5 text-xs text-white opacity-0 transition-opacity group-hover:opacity-100 dark:bg-stone-700">
              {ELEMENT_TYPE_NAMES[elem.type]}
              <X className="ml-1 inline h-3 w-3" />
            </span>
          )}
        </span>
      );

      lastIndex = elem.endIndex;
    });

    // Add remaining text
    if (lastIndex < text.length) {
      result.push(<span key="text-end">{text.slice(lastIndex)}</span>);
    }

    return result;
  };

  return (
    <div className="relative">
      {/* Toolbar */}
      {showToolbar && !readOnly && (
        <div className="mb-3 flex flex-wrap items-center gap-2 border-b border-stone-200 pb-3 dark:border-stone-700">
          <span className="text-xs font-medium text-stone-500 dark:text-stone-400">
            Select text and press:
          </span>
          {(Object.keys(ELEMENT_COLORS) as ElementType[]).map((type) => {
            const colors = ELEMENT_COLORS[type];
            return (
              <div
                key={type}
                className={`flex items-center gap-1 rounded px-2 py-0.5 text-xs ${colors.bg} ${colors.text}`}
              >
                <kbd className="font-mono font-bold">{SHORTCUT_LABELS[type]}</kbd>
                <span>= {ELEMENT_TYPE_NAMES[type]}</span>
              </div>
            );
          })}
        </div>
      )}

      {/* Text container */}
      <div
        ref={containerRef}
        onMouseUp={handleMouseUp}
        className={`
          relative rounded-sm border-2 border-stone-200 bg-white p-4 text-lg leading-relaxed
          dark:border-stone-700 dark:bg-stone-900
          ${!readOnly ? "select-text cursor-text" : ""}
        `}
      >
        {renderHighlightedText()}
      </div>

      {/* Label selection menu */}
      {showLabelMenu && selection && (
        <div
          className="absolute z-10 flex gap-1 rounded-lg bg-white p-1 shadow-lg ring-1 ring-stone-200 dark:bg-stone-800 dark:ring-stone-700"
          style={{
            left: `${menuPosition.x}px`,
            top: `${menuPosition.y}px`,
            transform: "translateX(-50%)",
          }}
        >
          {(Object.keys(ELEMENT_COLORS) as ElementType[]).map((type) => {
            const colors = ELEMENT_COLORS[type];
            return (
              <button
                key={type}
                onClick={() => handleLabelSelection(type)}
                className={`
                  flex items-center gap-1 rounded px-2 py-1 text-sm font-medium transition-colors
                  ${colors.bg} ${colors.text} hover:opacity-80
                `}
                title={`${ELEMENT_TYPE_NAMES[type]} (${SHORTCUT_LABELS[type]})`}
              >
                <kbd className="font-mono text-xs">{SHORTCUT_LABELS[type]}</kbd>
                <span className="hidden sm:inline">{ELEMENT_TYPE_NAMES[type]}</span>
              </button>
            );
          })}
          <button
            onClick={() => {
              setSelection(null);
              setShowLabelMenu(false);
              window.getSelection()?.removeAllRanges();
            }}
            className="rounded px-2 py-1 text-sm text-stone-500 hover:bg-stone-100 dark:text-stone-400 dark:hover:bg-stone-700"
          >
            <X className="h-4 w-4" />
          </button>
        </div>
      )}
    </div>
  );
}
