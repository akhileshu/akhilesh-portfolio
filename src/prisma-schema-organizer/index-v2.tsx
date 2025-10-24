// app/page.tsx (updated)
"use client";

import React, { useState, useEffect } from "react";
import {
  DndContext,
  DragEndEvent,
  DragOverEvent,
  DragStartEvent,
  closestCenter,
} from "@dnd-kit/core";
import {
  SortableContext,
  verticalListSortingStrategy,
  arrayMove,
} from "@dnd-kit/sortable";
import { FileExporter } from "./FileExporter.tsx";
import { SchemaImporter } from "./SchemaImporter";
import { SchemaItem } from "./SchemaItem";
import { useSchemaStore } from "./schemaStore";
import { SplitMarker } from "./SplitMarker";
import { SchemaElement, SplitPoint } from "./types";
import { AddSplitButton } from "./AddSplitButton";

/**
 *
 * inspired drag and drop reorder from - https://github.com/akhileshu/Sessionly/blob/main/src/components/sessionTracker/sessionTable.tsx
 *
 * todo - complete module is ai generated , testing needed
 *
 * npm i @dnd-kit/core @dnd-kit/sortable @dnd-kit/utilities zustand
 */
export default function PrismaSchemaOrganizer() {
  const {
    elements,
    splitPoints,
    draggedElement,
    setElements,
    setSplitPoints,
    setDraggedElement,
    loadSchemaFromText,
    addSplitPoint,
    removeSplitPoint,
  } = useSchemaStore();

  const [activeId, setActiveId] = useState<string | null>(null);

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
  const handleDragStart = (event: DragStartEvent) => {
    setActiveId(event.active.id as string);
    const element = elements.find((el) => el.id === event.active.id);
    if (element) {
      setDraggedElement(element);
    }
  };

  const handleDragOver = (event: DragOverEvent) => {
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

  return (
    <div className="min-h-screen  p-6">
      <div className="max-w-6xl mx-auto">
        <header className="mb-8">
          <h1 className="text-3xl font-bold  mb-2">Prisma Schema Organizer</h1>
          <p className="">
            Drag to reorder models and enums. Click + between items to split
            schema into multiple files.
          </p>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          {/* Sidebar */}
          <div className="lg:col-span-1 space-y-4">
            <SchemaImporter onSchemaLoad={loadSchemaFromText} />
            <FileExporter elements={elements} splitPoints={splitPoints} />
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
                    {elements.map((element, index) => (
                      <React.Fragment key={element.id}>
                        <SchemaItem
                          element={element}
                          isDragging={activeId === element.id}
                        />

                        {/* Add Split Button between items */}
                        {index < elements.length - 1 && (
                          <AddSplitButton
                            index={index}
                            onAddSplit={addSplitPoint}
                          />
                        )}

                        {/* Show existing split markers after this item */}
                        {splitPoints
                          .filter((sp) => sp.afterIndex === index)
                          .map((split) => (
                            <SplitMarker
                              key={split.id}
                              split={split}
                              onRemove={removeSplitPoint}
                              onAddSplit={addSplitPoint}
                            />
                          ))}
                      </React.Fragment>
                    ))}
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
