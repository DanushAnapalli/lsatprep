"use client";

import { GameRule, GameEntity, getEntityColor } from "@/lib/logic-games-types";
import { ChevronDown, ChevronUp, Info } from "lucide-react";
import { useState } from "react";

interface RuleDisplayProps {
  rules: GameRule[];
  entities: GameEntity[];
  compact?: boolean;
  showContrapositives?: boolean;
}

export function RuleDisplay({
  rules,
  entities,
  compact = false,
  showContrapositives = true,
}: RuleDisplayProps) {
  const [expanded, setExpanded] = useState(!compact);

  // Create entity lookup for highlighting
  const entityMap = new Map(entities.map((e, i) => [e.id, { entity: e, index: i }]));

  // Filter out contrapositives for cleaner display
  const mainRules = rules.filter((r) => !r.isContrapositiveOf);
  const contrapositiveRules = rules.filter((r) => r.isContrapositiveOf);

  const highlightEntities = (text: string): React.ReactNode => {
    let result: React.ReactNode[] = [];
    let remaining = text;
    let key = 0;

    entities.forEach((entity) => {
      const parts = remaining.split(new RegExp(`(${entity.name}|${entity.shortName})`, "gi"));
      if (parts.length > 1) {
        result = [];
        parts.forEach((part, i) => {
          if (part.toLowerCase() === entity.name.toLowerCase() ||
              part.toLowerCase() === entity.shortName.toLowerCase()) {
            const info = entityMap.get(entity.id);
            result.push(
              <span
                key={key++}
                className="inline-flex items-center justify-center rounded px-1.5 py-0.5 text-xs font-bold text-white mx-0.5"
                style={{ backgroundColor: info?.entity.color || getEntityColor(info?.index || 0) }}
              >
                {entity.shortName}
              </span>
            );
          } else {
            result.push(<span key={key++}>{part}</span>);
          }
        });
        remaining = parts.join("");
      }
    });

    return result.length > 0 ? result : text;
  };

  if (compact && !expanded) {
    return (
      <button
        onClick={() => setExpanded(true)}
        className="flex items-center gap-2 text-sm text-stone-500 hover:text-stone-700 dark:text-stone-400 dark:hover:text-stone-200"
      >
        <Info className="h-4 w-4" />
        Show {mainRules.length} rules
        <ChevronDown className="h-4 w-4" />
      </button>
    );
  }

  return (
    <div className="space-y-3">
      <div className="flex items-center justify-between">
        <h3 className="font-semibold text-stone-900 dark:text-stone-100">
          Rules ({mainRules.length})
        </h3>
        {compact && (
          <button
            onClick={() => setExpanded(false)}
            className="text-sm text-stone-500 hover:text-stone-700 dark:text-stone-400 dark:hover:text-stone-200"
          >
            <ChevronUp className="h-4 w-4" />
          </button>
        )}
      </div>

      <ol className="space-y-2">
        {mainRules.map((rule, index) => (
          <li
            key={rule.id}
            className="flex gap-2 rounded-sm bg-stone-50 p-2 text-sm dark:bg-stone-800"
          >
            <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-stone-200 text-xs font-bold text-stone-600 dark:bg-stone-700 dark:text-stone-300">
              {index + 1}
            </span>
            <span className="text-stone-700 dark:text-stone-300">
              {highlightEntities(rule.text)}
            </span>
          </li>
        ))}
      </ol>

      {showContrapositives && contrapositiveRules.length > 0 && (
        <div className="mt-4 border-t border-stone-200 pt-3 dark:border-stone-700">
          <h4 className="mb-2 text-sm font-medium text-stone-500 dark:text-stone-400">
            Contrapositives
          </h4>
          <ol className="space-y-2">
            {contrapositiveRules.map((rule) => (
              <li
                key={rule.id}
                className="flex gap-2 rounded-sm bg-amber-50 p-2 text-sm dark:bg-amber-900/20"
              >
                <span className="text-amber-700 dark:text-amber-300">
                  {highlightEntities(rule.text)}
                </span>
              </li>
            ))}
          </ol>
        </div>
      )}
    </div>
  );
}

// Simplified rule list for sidebar
interface RuleSidebarProps {
  rules: GameRule[];
  localRule?: string;
}

export function RuleSidebar({ rules, localRule }: RuleSidebarProps) {
  const mainRules = rules.filter((r) => !r.isContrapositiveOf);

  return (
    <div className="space-y-2">
      {mainRules.map((rule, index) => (
        <div
          key={rule.id}
          className="flex items-start gap-2 text-xs text-stone-600 dark:text-stone-400"
        >
          <span className="font-mono text-stone-400">{index + 1}.</span>
          <span>{rule.text}</span>
        </div>
      ))}
      {localRule && (
        <div className="mt-3 border-t border-dashed border-amber-400 pt-2">
          <div className="flex items-start gap-2 text-xs font-medium text-amber-600 dark:text-amber-400">
            <span className="font-mono">*</span>
            <span>{localRule}</span>
          </div>
        </div>
      )}
    </div>
  );
}
