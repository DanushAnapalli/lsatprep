"use client";

import { useState } from "react";
import {
  DndContext,
  closestCenter,
  KeyboardSensor,
  PointerSensor,
  useSensor,
  useSensors,
  DragEndEvent,
  DragStartEvent,
  DragOverlay,
} from "@dnd-kit/core";
import {
  arrayMove,
  SortableContext,
  sortableKeyboardCoordinates,
  horizontalListSortingStrategy,
} from "@dnd-kit/sortable";
import { GameEntity, GameSetup, getEntityColor } from "@/lib/logic-games-types";
import { GamePiece, StaticPiece, EmptySlot } from "./GamePiece";
import { RotateCcw } from "lucide-react";

interface LinearBoardProps {
  setup: GameSetup;
  onBoardChange?: (positions: (string | null)[]) => void;
  readOnly?: boolean;
}

export function LinearBoard({
  setup,
  onBoardChange,
  readOnly = false,
}: LinearBoardProps) {
  const positionCount = setup.positions || setup.entities.length;

  // Track which entities are placed in which positions
  const [placedEntities, setPlacedEntities] = useState<(string | null)[]>(
    Array(positionCount).fill(null)
  );
  const [activeId, setActiveId] = useState<string | null>(null);

  // Entities that are not yet placed on the board
  const unplacedEntities = setup.entities.filter(
    (e) => !placedEntities.includes(e.id)
  );

  const sensors = useSensors(
    useSensor(PointerSensor, {
      activationConstraint: {
        distance: 5,
      },
    }),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    })
  );

  const handleDragStart = (event: DragStartEvent) => {
    setActiveId(event.active.id as string);
  };

  const handleDragEnd = (event: DragEndEvent) => {
    const { active, over } = event;
    setActiveId(null);

    if (!over) return;

    const activeId = active.id as string;
    const overId = over.id as string;

    // Check if dropping on a position slot
    if (overId.startsWith("position-")) {
      const position = parseInt(overId.replace("position-", ""));
      const newPlaced = [...placedEntities];

      // Remove from old position if already placed
      const oldPosition = newPlaced.indexOf(activeId);
      if (oldPosition !== -1) {
        newPlaced[oldPosition] = null;
      }

      // If position is occupied, swap
      if (newPlaced[position]) {
        if (oldPosition !== -1) {
          newPlaced[oldPosition] = newPlaced[position];
        }
      }

      newPlaced[position] = activeId;
      setPlacedEntities(newPlaced);
      onBoardChange?.(newPlaced);
    }
    // Check if reordering within placed positions
    else if (placedEntities.includes(activeId) && placedEntities.includes(overId)) {
      const oldIndex = placedEntities.indexOf(activeId);
      const newIndex = placedEntities.indexOf(overId);

      const newPlaced = arrayMove(placedEntities, oldIndex, newIndex);
      setPlacedEntities(newPlaced);
      onBoardChange?.(newPlaced);
    }
  };

  const handleReset = () => {
    setPlacedEntities(Array(positionCount).fill(null));
    onBoardChange?.(Array(positionCount).fill(null));
  };

  const handleRemoveFromPosition = (position: number) => {
    const newPlaced = [...placedEntities];
    newPlaced[position] = null;
    setPlacedEntities(newPlaced);
    onBoardChange?.(newPlaced);
  };

  const activeEntity = activeId
    ? setup.entities.find((e) => e.id === activeId)
    : null;

  const getEntityByPosition = (position: number) => {
    const entityId = placedEntities[position];
    return entityId ? setup.entities.find((e) => e.id === entityId) : null;
  };

  if (readOnly) {
    return (
      <div className="space-y-4">
        <div className="flex items-center gap-2 overflow-x-auto pb-2">
          {Array.from({ length: positionCount }, (_, i) => {
            const entity = getEntityByPosition(i);
            return (
              <div key={i} className="flex flex-col items-center gap-1">
                <span className="text-xs font-medium text-stone-500 dark:text-stone-400">
                  {i + 1}
                </span>
                {entity ? (
                  <StaticPiece
                    entity={entity}
                    index={setup.entities.indexOf(entity)}
                  />
                ) : (
                  <EmptySlot position={i + 1} />
                )}
              </div>
            );
          })}
        </div>
      </div>
    );
  }

  return (
    <DndContext
      sensors={sensors}
      collisionDetection={closestCenter}
      onDragStart={handleDragStart}
      onDragEnd={handleDragEnd}
    >
      <div className="space-y-4">
        {/* Position slots */}
        <div className="rounded-lg border-2 border-stone-200 bg-stone-50 p-4 dark:border-stone-700 dark:bg-stone-800/50">
          <div className="mb-2 flex items-center justify-between">
            <span className="text-xs font-medium uppercase tracking-wider text-stone-500 dark:text-stone-400">
              Positions
            </span>
            <button
              onClick={handleReset}
              className="flex items-center gap-1 text-xs text-stone-500 hover:text-stone-700 dark:text-stone-400 dark:hover:text-stone-200"
              title="Reset board"
            >
              <RotateCcw className="h-3 w-3" />
              Reset
            </button>
          </div>

          <div className="flex items-center gap-3 overflow-x-auto pb-2">
            {Array.from({ length: positionCount }, (_, i) => {
              const entity = getEntityByPosition(i);
              return (
                <div
                  key={`position-${i}`}
                  className="flex flex-col items-center gap-1"
                >
                  <span className="text-xs font-bold text-stone-600 dark:text-stone-300">
                    {i + 1}
                  </span>
                  <SortableContext
                    items={entity ? [entity.id] : [`position-${i}`]}
                    strategy={horizontalListSortingStrategy}
                  >
                    {entity ? (
                      <div
                        className="relative"
                        onDoubleClick={() => handleRemoveFromPosition(i)}
                      >
                        <GamePiece
                          entity={entity}
                          index={setup.entities.indexOf(entity)}
                          isPlaced
                        />
                      </div>
                    ) : (
                      <div
                        id={`position-${i}`}
                        className={`
                          flex h-10 w-10 items-center justify-center rounded-sm
                          border-2 border-dashed transition-colors
                          ${activeId
                            ? "border-amber-400 bg-amber-50 dark:bg-amber-900/20"
                            : "border-stone-300 dark:border-stone-600"
                          }
                        `}
                      >
                        <span className="text-xs text-stone-400">{i + 1}</span>
                      </div>
                    )}
                  </SortableContext>
                </div>
              );
            })}
          </div>
        </div>

        {/* Available entities */}
        <div className="rounded-lg border-2 border-stone-200 bg-white p-4 dark:border-stone-700 dark:bg-stone-900">
          <span className="mb-2 block text-xs font-medium uppercase tracking-wider text-stone-500 dark:text-stone-400">
            Available Entities
          </span>

          <SortableContext
            items={unplacedEntities.map((e) => e.id)}
            strategy={horizontalListSortingStrategy}
          >
            <div className="flex flex-wrap gap-2">
              {unplacedEntities.length > 0 ? (
                unplacedEntities.map((entity) => (
                  <GamePiece
                    key={entity.id}
                    entity={entity}
                    index={setup.entities.indexOf(entity)}
                  />
                ))
              ) : (
                <span className="text-sm italic text-stone-400">
                  All entities placed!
                </span>
              )}
            </div>
          </SortableContext>
        </div>

        {/* Entity legend */}
        <div className="flex flex-wrap gap-3 text-xs">
          {setup.entities.map((entity, index) => (
            <div key={entity.id} className="flex items-center gap-1">
              <div
                className="h-3 w-3 rounded-sm"
                style={{ backgroundColor: entity.color || getEntityColor(index) }}
              />
              <span className="text-stone-600 dark:text-stone-400">
                {entity.shortName} = {entity.name}
              </span>
            </div>
          ))}
        </div>
      </div>

      <DragOverlay>
        {activeEntity ? (
          <div
            className="flex h-10 w-10 items-center justify-center rounded-sm font-bold text-white shadow-lg ring-2 ring-amber-400"
            style={{
              backgroundColor:
                activeEntity.color ||
                getEntityColor(setup.entities.indexOf(activeEntity)),
            }}
          >
            {activeEntity.shortName}
          </div>
        ) : null}
      </DragOverlay>
    </DndContext>
  );
}
