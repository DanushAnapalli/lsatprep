// Argument Diagramming Types
// For visual analysis of LR arguments

export type ElementType = "conclusion" | "premise" | "assumption" | "background";

export interface DiagramElement {
  id: string;
  type: ElementType;
  text: string;
  startIndex: number;
  endIndex: number;
  supports?: string[];    // IDs of elements this supports
  supportedBy?: string[]; // IDs of elements that support this
}

export interface ArgumentDiagram {
  id: string;
  questionId: string;
  elements: DiagramElement[];
  notes?: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface ModelDiagram {
  questionId: string;
  elements: DiagramElement[];
  explanation: string;
}

// ============================================
// DISPLAY HELPERS
// ============================================

export const ELEMENT_TYPE_NAMES: Record<ElementType, string> = {
  conclusion: "Conclusion",
  premise: "Premise",
  assumption: "Assumption",
  background: "Background",
};

export const ELEMENT_COLORS: Record<ElementType, { bg: string; text: string; border: string }> = {
  conclusion: {
    bg: "bg-[#1a365d]/10 dark:bg-[#1a365d]/30",
    text: "text-[#1a365d] dark:text-blue-300",
    border: "border-[#1a365d] dark:border-blue-400",
  },
  premise: {
    bg: "bg-green-100 dark:bg-green-900/30",
    text: "text-green-700 dark:text-green-300",
    border: "border-green-500 dark:border-green-400",
  },
  assumption: {
    bg: "bg-amber-100 dark:bg-amber-900/30",
    text: "text-amber-700 dark:text-amber-300",
    border: "border-amber-500 dark:border-amber-400",
  },
  background: {
    bg: "bg-stone-100 dark:bg-stone-800",
    text: "text-stone-600 dark:text-stone-400",
    border: "border-stone-400 dark:border-stone-600",
  },
};

export const ELEMENT_SOLID_COLORS: Record<ElementType, string> = {
  conclusion: "#1a365d",
  premise: "#16a34a",
  assumption: "#f59e0b",
  background: "#6b7280",
};

// ============================================
// KEYBOARD SHORTCUTS
// ============================================

export const DIAGRAM_SHORTCUTS: Record<string, ElementType> = {
  c: "conclusion",
  p: "premise",
  a: "assumption",
  b: "background",
};

export const SHORTCUT_LABELS: Record<ElementType, string> = {
  conclusion: "C",
  premise: "P",
  assumption: "A",
  background: "B",
};

// ============================================
// DIAGRAM HELPERS
// ============================================

export function generateElementId(): string {
  return `elem-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
}

export function generateDiagramId(): string {
  return `diag-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
}

export function createDiagramElement(
  type: ElementType,
  text: string,
  startIndex: number,
  endIndex: number
): DiagramElement {
  return {
    id: generateElementId(),
    type,
    text,
    startIndex,
    endIndex,
    supports: [],
    supportedBy: [],
  };
}

export function createEmptyDiagram(questionId: string): ArgumentDiagram {
  return {
    id: generateDiagramId(),
    questionId,
    elements: [],
    createdAt: new Date(),
    updatedAt: new Date(),
  };
}

// ============================================
// OVERLAP DETECTION
// ============================================

export function hasOverlap(
  elem1: { startIndex: number; endIndex: number },
  elem2: { startIndex: number; endIndex: number }
): boolean {
  return !(elem1.endIndex <= elem2.startIndex || elem2.endIndex <= elem1.startIndex);
}

export function findOverlappingElements(
  elements: DiagramElement[],
  startIndex: number,
  endIndex: number
): DiagramElement[] {
  return elements.filter((elem) =>
    hasOverlap(elem, { startIndex, endIndex })
  );
}

// ============================================
// VALIDATION
// ============================================

export function validateDiagram(diagram: ArgumentDiagram): {
  isValid: boolean;
  issues: string[];
} {
  const issues: string[] = [];

  // Check for at least one conclusion
  const conclusions = diagram.elements.filter((e) => e.type === "conclusion");
  if (conclusions.length === 0) {
    issues.push("Diagram should have at least one conclusion");
  } else if (conclusions.length > 1) {
    issues.push("Diagram has multiple conclusions - typically there's one main conclusion");
  }

  // Check for at least one premise
  const premises = diagram.elements.filter((e) => e.type === "premise");
  if (premises.length === 0) {
    issues.push("Diagram should have at least one premise supporting the conclusion");
  }

  return {
    isValid: issues.length === 0,
    issues,
  };
}

// ============================================
// LOCAL STORAGE
// ============================================

const DIAGRAM_STORAGE_KEY = "lsatprep-diagrams";

export function saveDiagram(diagram: ArgumentDiagram, userId?: string): void {
  if (typeof window === "undefined") return;

  const key = userId ? `${DIAGRAM_STORAGE_KEY}_${userId}` : DIAGRAM_STORAGE_KEY;
  const stored = localStorage.getItem(key);
  const diagrams: ArgumentDiagram[] = stored ? JSON.parse(stored) : [];

  // Update existing or add new
  const index = diagrams.findIndex((d) => d.questionId === diagram.questionId);
  if (index !== -1) {
    diagrams[index] = { ...diagram, updatedAt: new Date() };
  } else {
    diagrams.push(diagram);
  }

  localStorage.setItem(key, JSON.stringify(diagrams));
}

export function loadDiagram(questionId: string, userId?: string): ArgumentDiagram | null {
  if (typeof window === "undefined") return null;

  const key = userId ? `${DIAGRAM_STORAGE_KEY}_${userId}` : DIAGRAM_STORAGE_KEY;
  const stored = localStorage.getItem(key);

  if (!stored) return null;

  const diagrams: ArgumentDiagram[] = JSON.parse(stored);
  const diagram = diagrams.find((d) => d.questionId === questionId);

  if (!diagram) return null;

  // Parse dates
  return {
    ...diagram,
    createdAt: new Date(diagram.createdAt),
    updatedAt: new Date(diagram.updatedAt),
  };
}

export function getAllDiagrams(userId?: string): ArgumentDiagram[] {
  if (typeof window === "undefined") return [];

  const key = userId ? `${DIAGRAM_STORAGE_KEY}_${userId}` : DIAGRAM_STORAGE_KEY;
  const stored = localStorage.getItem(key);

  if (!stored) return [];

  const diagrams: ArgumentDiagram[] = JSON.parse(stored);
  return diagrams.map((d) => ({
    ...d,
    createdAt: new Date(d.createdAt),
    updatedAt: new Date(d.updatedAt),
  }));
}

export function deleteDiagram(questionId: string, userId?: string): void {
  if (typeof window === "undefined") return;

  const key = userId ? `${DIAGRAM_STORAGE_KEY}_${userId}` : DIAGRAM_STORAGE_KEY;
  const stored = localStorage.getItem(key);

  if (!stored) return;

  const diagrams: ArgumentDiagram[] = JSON.parse(stored);
  const filtered = diagrams.filter((d) => d.questionId !== questionId);
  localStorage.setItem(key, JSON.stringify(filtered));
}
