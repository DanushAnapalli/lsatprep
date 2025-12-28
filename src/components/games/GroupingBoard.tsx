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
  useDroppable,
} from "@dnd-kit/core";
import {
  SortableContext,
  sortableKeyboardCoordinates,
  rectSortingStrategy,
} from "@dnd-kit/sortable";
import { GameEntity, GameSetup, GameGroup, getEntityColor } from "@/lib/logic-games-types";
import { GamePiece, StaticPiece } from "./GamePiece";
import { RotateCcw, Users } from "lucide-react";

interface GroupingBoardProps {
  setup: GameSetup;
  onBoardChange?: (groups: Map<string, string[]>) => void;
  readOnly?: boolean;
}

function DroppableGroup({
  group,
  entities,
  allEntities,
  isActive,
  children,
}: {
  group: GameGroup;
  entities: GameEntity[];
  allEntities: GameEntity[];
  isActive: boolean;
  children?: React.ReactNode;
}) {
  const { setNodeRef, isOver } = useDroppable({
    id: `group-${group.id}`,
  });

  const minSize = group.minSize || 0;
  const maxSize = group.maxSize || allEntities.length;

  return (
    <div
      ref={setNodeRef}
      className={`
        rounded-lg border-2 p-4 transition-colors
        ${isOver || isActive
          ? "border-amber-400 bg-amber-50 dark:bg-amber-900/20"
          : "border-stone-200 bg-white dark:border-stone-700 dark:bg-stone-800"
        }
      `}
    >
      <div className="mb-3 flex items-center justify-between">
        <h4 className="font-semibold text-stone-800 dark:text-stone-200">
          {group.name}
        </h4>
        <span className="text-xs text-stone-500 dark:text-stone-400">
          {entities.length} / {maxSize}
          {minSize > 0 && ` (min: ${minSize})`}
        </span>
      </div>

      <SortableContext
        items={entities.map((e) => e.id)}
        strategy={rectSortingStrategy}
      >
        <div className="flex min-h-[50px] flex-wrap gap-2">
          {entities.length > 0 ? (
            children
          ) : (
            <div className="flex h-12 w-full items-center justify-center rounded-sm border-2 border-dashed border-stone-200 dark:border-stone-700">
              <Users className="h-4 w-4 text-stone-400" />
              <span className="ml-2 text-xs text-stone-400">
                Drop entities here
              </span>
            </div>
          )}
        </div>
      </SortableContext>
    </div>
  );
}

export function GroupingBoard({
  setup,
  onBoardChange,
  readOnly = false,
}: GroupingBoardProps) {
  const groups = setup.groups || [];

  // Initialize groups mapping: groupId -> entityIds
  const [groupAssignments, setGroupAssignments] = useState<Map<string, string[]>>(
    () => {
      const initial = new Map<string, string[]>();
      groups.forEach((g) => initial.set(g.id, []));
      return initial;
    }
  );

  const [activeId, setActiveId] = useState<string | null>(null);

  // Get unassigned entities
  const assignedEntityIds = Array.from(groupAssignments.values()).flat();
  const unassignedEntities = setup.entities.filter(
    (e) => !assignedEntityIds.includes(e.id)
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

    // Check if dropping on a group
    if (overId.startsWith("group-")) {
      const targetGroupId = overId.replace("group-", "");
      const newAssignments = new Map(groupAssignments);

      // Remove from current group if assigned
      newAssignments.forEach((entityIds, groupId) => {
        if (entityIds.includes(activeId)) {
          newAssignments.set(
            groupId,
            entityIds.filter((id) => id !== activeId)
          );
        }
      });

      // Check group capacity
      const targetGroup = groups.find((g) => g.id === targetGroupId);
      const currentGroupEntities = newAssignments.get(targetGroupId) || [];
      if (targetGroup?.maxSize && currentGroupEntities.length >= targetGroup.maxSize) {
        return; // Group is full
      }

      // Add to target group
      newAssignments.set(targetGroupId, [...currentGroupEntities, activeId]);
      setGroupAssignments(newAssignments);
      onBoardChange?.(newAssignments);
    }
    // Dropping on unassigned area
    else if (overId === "unassigned") {
      const newAssignments = new Map(groupAssignments);

      // Remove from current group
      newAssignments.forEach((entityIds, groupId) => {
        if (entityIds.includes(activeId)) {
          newAssignments.set(
            groupId,
            entityIds.filter((id) => id !== activeId)
          );
        }
      });

      setGroupAssignments(newAssignments);
      onBoardChange?.(newAssignments);
    }
  };

  const handleReset = () => {
    const empty = new Map<string, string[]>();
    groups.forEach((g) => empty.set(g.id, []));
    setGroupAssignments(empty);
    onBoardChange?.(empty);
  };

  const getEntitiesInGroup = (groupId: string): GameEntity[] => {
    const entityIds = groupAssignments.get(groupId) || [];
    return entityIds.map((id) => setup.entities.find((e) => e.id === id)!).filter(Boolean);
  };

  const activeEntity = activeId
    ? setup.entities.find((e) => e.id === activeId)
    : null;

  if (readOnly) {
    return (
      <div className="grid gap-4 md:grid-cols-2">
        {groups.map((group) => (
          <div
            key={group.id}
            className="rounded-lg border-2 border-stone-200 bg-white p-4 dark:border-stone-700 dark:bg-stone-800"
          >
            <h4 className="mb-2 font-semibold text-stone-800 dark:text-stone-200">
              {group.name}
            </h4>
            <div className="flex flex-wrap gap-2">
              {getEntitiesInGroup(group.id).map((entity) => (
                <StaticPiece
                  key={entity.id}
                  entity={entity}
                  index={setup.entities.indexOf(entity)}
                />
              ))}
            </div>
          </div>
        ))}
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
        {/* Reset button */}
        <div className="flex justify-end">
          <button
            onClick={handleReset}
            className="flex items-center gap-1 text-xs text-stone-500 hover:text-stone-700 dark:text-stone-400 dark:hover:text-stone-200"
            title="Reset board"
          >
            <RotateCcw className="h-3 w-3" />
            Reset
          </button>
        </div>

        {/* Groups */}
        <div className="grid gap-4 md:grid-cols-2">
          {groups.map((group) => {
            const entitiesInGroup = getEntitiesInGroup(group.id);
            return (
              <DroppableGroup
                key={group.id}
                group={group}
                entities={entitiesInGroup}
                allEntities={setup.entities}
                isActive={activeId !== null}
              >
                {entitiesInGroup.map((entity) => (
                  <GamePiece
                    key={entity.id}
                    entity={entity}
                    index={setup.entities.indexOf(entity)}
                    isPlaced
                  />
                ))}
              </DroppableGroup>
            );
          })}
        </div>

        {/* Unassigned entities */}
        <UnassignedArea
          entities={unassignedEntities}
          allEntities={setup.entities}
          isActive={activeId !== null}
        />

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

function UnassignedArea({
  entities,
  allEntities,
  isActive,
}: {
  entities: GameEntity[];
  allEntities: GameEntity[];
  isActive: boolean;
}) {
  const { setNodeRef, isOver } = useDroppable({
    id: "unassigned",
  });

  return (
    <div
      ref={setNodeRef}
      className={`
        rounded-lg border-2 p-4 transition-colors
        ${isOver
          ? "border-amber-400 bg-amber-50 dark:bg-amber-900/20"
          : "border-stone-200 bg-stone-50 dark:border-stone-700 dark:bg-stone-800/50"
        }
      `}
    >
      <span className="mb-2 block text-xs font-medium uppercase tracking-wider text-stone-500 dark:text-stone-400">
        Available Entities
      </span>

      <SortableContext
        items={entities.map((e) => e.id)}
        strategy={rectSortingStrategy}
      >
        <div className="flex min-h-[50px] flex-wrap gap-2">
          {entities.length > 0 ? (
            entities.map((entity) => (
              <GamePiece
                key={entity.id}
                entity={entity}
                index={allEntities.indexOf(entity)}
              />
            ))
          ) : (
            <span className="text-sm italic text-stone-400">
              All entities assigned!
            </span>
          )}
        </div>
      </SortableContext>
    </div>
  );
}
