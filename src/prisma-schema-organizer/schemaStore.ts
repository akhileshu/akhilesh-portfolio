// store/schemaStore.ts
import { create } from "zustand";
import { SchemaElement, SplitPoint } from "./types";

interface SchemaState {
  elements: SchemaElement[];
  splitPoints: SplitPoint[];
  draggedElement: SchemaElement | null;
  setElements: (elements: SchemaElement[]) => void;
  setSplitPoints: (splitPoints: SplitPoint[]) => void;
  setDraggedElement: (element: SchemaElement | null) => void;
  loadSchemaFromText: (schemaText: string) => void;
  addSplitPoint: (afterIndex: number) => void;
  removeSplitPoint: (splitId: string) => void;
  updateSplitFileName: (splitId: string, fileName: string) => void;
}

export const useSchemaStore = create<SchemaState>((set, get) => ({
  elements: [],
  splitPoints: [],
  draggedElement: null,

  setElements: (elements) => set({ elements }),
  setSplitPoints: (splitPoints) => set({ splitPoints }),
  setDraggedElement: (draggedElement) => set({ draggedElement }),

  loadSchemaFromText: (schemaText: string) => {
    const elements: SchemaElement[] = [];

    // Parse models
    const modelRegex = /model\s+(\w+)\s*{([^}]+)}/g;
    let match;
    while ((match = modelRegex.exec(schemaText)) !== null) {
      elements.push({
        id: `model-${match[1]}`,
        type: "model",
        name: match[1],
        content: match[0],
      });
    }

    // Parse enums
    const enumRegex = /enum\s+(\w+)\s*{([^}]+)}/g;
    while ((match = enumRegex.exec(schemaText)) !== null) {
      elements.push({
        id: `enum-${match[1]}`,
        type: "enum",
        name: match[1],
        content: match[0],
      });
    }

    set({ elements });
  },

  addSplitPoint: (afterIndex: number) => {
    const newSplit: SplitPoint = {
      id: `split-${Date.now()}`,
      type: "split-point",
      afterIndex,
      fileName: `schema${get().splitPoints.length + 1}`,
    };

    set((state) => ({
      splitPoints: [...state.splitPoints, newSplit],
    }));
  },

  removeSplitPoint: (splitId: string) => {
    set((state) => ({
      splitPoints: state.splitPoints.filter((sp) => sp.id !== splitId),
    }));
  },

  updateSplitFileName: (splitId: string, fileName: string) => {
    set((state) => ({
      splitPoints: state.splitPoints.map((sp) =>
        sp.id === splitId ? { ...sp, fileName } : sp
      ),
    }));
  },
}));
