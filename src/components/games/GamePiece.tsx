"use client";

import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import { GameEntity, getEntityColor } from "@/lib/logic-games-types";

interface GamePieceProps {
  entity: GameEntity;
  index: number;
  isPlaced?: boolean;
  isDragging?: boolean;
  compact?: boolean;
}

export function GamePiece({
  entity,
  index,
  isPlaced = false,
  compact = false,
}: GamePieceProps) {
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
    isDragging,
  } = useSortable({ id: entity.id });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
    backgroundColor: entity.color || getEntityColor(index),
  };

  return (
    <div
      ref={setNodeRef}
      style={style}
      {...attributes}
      {...listeners}
      className={`
        flex items-center justify-center rounded-sm font-bold text-white
        cursor-grab active:cursor-grabbing select-none
        ${isDragging ? "opacity-50 shadow-lg ring-2 ring-amber-400" : "shadow-md"}
        ${compact ? "h-8 w-8 text-sm" : "h-10 w-10 text-base"}
        ${isPlaced ? "ring-2 ring-green-400" : ""}
        transition-all duration-150 hover:scale-105
      `}
      title={entity.name}
    >
      {entity.shortName}
    </div>
  );
}

// Static piece for display (non-draggable)
interface StaticPieceProps {
  entity: GameEntity;
  index: number;
  compact?: boolean;
  onClick?: () => void;
  selected?: boolean;
}

export function StaticPiece({
  entity,
  index,
  compact = false,
  onClick,
  selected = false,
}: StaticPieceProps) {
  const backgroundColor = entity.color || getEntityColor(index);

  return (
    <div
      onClick={onClick}
      style={{ backgroundColor }}
      className={`
        flex items-center justify-center rounded-sm font-bold text-white
        ${onClick ? "cursor-pointer hover:scale-105" : ""}
        ${compact ? "h-8 w-8 text-sm" : "h-10 w-10 text-base"}
        ${selected ? "ring-2 ring-amber-400 scale-110" : "shadow-md"}
        transition-all duration-150
      `}
      title={entity.name}
    >
      {entity.shortName}
    </div>
  );
}

// Empty slot for dropping pieces
interface EmptySlotProps {
  position: number;
  label?: string;
  isActive?: boolean;
  compact?: boolean;
}

export function EmptySlot({
  position,
  label,
  isActive = false,
  compact = false,
}: EmptySlotProps) {
  return (
    <div
      className={`
        flex flex-col items-center justify-center rounded-sm
        border-2 border-dashed
        ${isActive ? "border-amber-400 bg-amber-50 dark:bg-amber-900/20" : "border-stone-300 dark:border-stone-600"}
        ${compact ? "h-8 w-8" : "h-10 w-10"}
        transition-colors duration-150
      `}
    >
      {label && (
        <span className="text-xs font-medium text-stone-400">
          {label || position}
        </span>
      )}
    </div>
  );
}
