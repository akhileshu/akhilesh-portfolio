"use client";

import {
  DndContext,
  DragEndEvent,
  DragOverEvent,
  DragStartEvent,
  closestCenter,
} from "@dnd-kit/core";
import {
  SortableContext,
  arrayMove,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";
import { useState } from "react";
import { FileExporter } from "./FileExporter.tsx";
import { SchemaImporter } from "./SchemaImporter";
import { SchemaItem } from "./SchemaItem";
import { useSchemaStore } from "./schemaStore";
import { SplitMarker } from "./SplitMarker";
import { SchemaElement, SplitPoint } from "./types";

export default function PrismaSchemaOrganizer() {
  const {
    elements,
    splitPoints,
    setElements,
    setDraggedElement,
    loadSchemaFromText,
    addSplitPoint,
    removeSplitPoint,
  } = useSchemaStore();

  const [activeId, setActiveId] = useState<string | null>(null);

  const handleDragStart = (event: DragStartEvent) => {
    setActiveId(event.active.id as string);
    const element = elements.find((el) => el.id === event.active.id);
    if (element) {
      setDraggedElement(element);
    }
  };

  const handleDragOver = (event: DragOverEvent) => {
    console.log({event})
    // Visual feedback during drag - could highlight potential drop zones
  };

  const handleDragEnd = (event: DragEndEvent) => {
    const { active, over } = event;
    setActiveId(null);
    setDraggedElement(null);

    if (!over) return;

    // Handle dropping on split markers
    if (over.id.toString().startsWith("split-")) {
      const splitIndex = parseInt(over.id.toString().split("-")[1]);
      handleDropOnSplitMarker(active.id as string, splitIndex);
      return;
    }

    // Handle reordering
    if (active.id !== over.id) {
      const oldIndex = elements.findIndex((item) => item.id === active.id);
      const newIndex = elements.findIndex((item) => item.id === over.id);

      if (oldIndex !== -1 && newIndex !== -1) {
        const newElements = arrayMove(elements, oldIndex, newIndex);
        setElements(newElements);
      }
    }
  };

  const handleDropOnSplitMarker = (elementId: string, splitIndex: number) => {
    const elementIndex = elements.findIndex((el) => el.id === elementId);
    if (elementIndex === -1) return;

    // Move element to the position after the split marker
    const newElements = [...elements];
    const [element] = newElements.splice(elementIndex, 1);

    // Insert after the split marker position
    const insertIndex = splitIndex + 1;
    newElements.splice(insertIndex, 0, element);

    setElements(newElements);
  };

  const addSplitAfter = (index: number) => {
    addSplitPoint(index);
  };

  const removeSplit = (splitId: string) => {
    removeSplitPoint(splitId);
  };

  // Combine elements and split points for rendering
  const renderItems: (SchemaElement | SplitPoint)[] = [];

  elements.forEach((element, index) => {
    renderItems.push(element);

    // Add split points after this element if they exist
    const splitsAfter = splitPoints.filter((sp) => sp.afterIndex === index);
    splitsAfter.forEach((split) => {
      renderItems.push(split);
    });
  });

  return (
    <div className="min-h-screen  p-6">
      <div className="max-w-6xl mx-auto">
        <header className="mb-8">
          <h1 className="text-3xl font-bold  mb-2">Prisma Schema Organizer</h1>
          <p className="">
            Drag to reorder models and enums. Click + to split schema into
            multiple files.
          </p>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          {/* Sidebar */}
          <div className="lg:col-span-1 space-y-4">
            <SchemaImporter onSchemaLoad={loadSchemaFromText} />
            <FileExporter elements={elements} splitPoints={splitPoints} />

            <div className=" p-4 rounded-lg shadow-sm border">
              <h3 className="font-semibold mb-3">How to use:</h3>
              <ul className="text-sm  space-y-2">
                <li>• Drag items to reorder</li>
                <li>• Click + between items to split files</li>
                <li>• Name your split files</li>
                <li>• Export when done</li>
              </ul>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3">
            <div className=" rounded-lg shadow-sm border">
              <DndContext
                collisionDetection={closestCenter}
                onDragStart={handleDragStart}
                onDragOver={handleDragOver}
                onDragEnd={handleDragEnd}
              >
                <SortableContext
                  items={renderItems.map((item) => item.id)}
                  strategy={verticalListSortingStrategy}
                >
                  <div className="divide-y divide-gray-200">
                    {renderItems.map((item) => {
                      // todo : was ts error , investigate in future
                      if (
                        "type" in item &&
                        item.type === "split-point"
                        /*(item.type === "split-marker" ||
                          item.type === "split-point")*/
                      ) {
                        return (
                          <SplitMarker
                            key={item.id}
                            split={item as SplitPoint}
                            onRemove={removeSplit}
                            onAddSplit={addSplitAfter}
                          />
                        );
                      }

                      return (
                        <SchemaItem
                          key={item.id}
                          element={item as SchemaElement}
                          isDragging={activeId === item.id}
                        />
                      );
                    })}
                  </div>
                </SortableContext>
              </DndContext>

              {elements.length === 0 && (
                <div className="p-8 text-center ">
                  <p>Import your Prisma schema to get started</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
