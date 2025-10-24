// components/SchemaItem.tsx
"use client";

import React from "react";
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import { SchemaElement } from "./types";

interface SchemaItemProps {
  element: SchemaElement;
  isDragging: boolean;
}

export function SchemaItem({ element, isDragging }: SchemaItemProps) {
  const { attributes, listeners, setNodeRef, transform, transition } =
    useSortable({ id: element.id });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
    opacity: isDragging ? 0.5 : 1,
  };

  return (
    <div
      ref={setNodeRef}
      style={style}
      {...attributes}
      {...listeners}
      className={`
        p-4  cursor-grab active:cursor-grabbing
        border-l-4 ${element.type === "model" ? "border-blue-500" : "border-green-500"}
        ${isDragging ? "shadow-lg" : "shadow-sm"}
        transition-all duration-200
      `}
    >
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <div
            className={`
            w-8 h-8 rounded-full flex items-center justify-center  text-sm font-medium
            ${element.type === "model" ? "bg-blue-500" : "bg-green-500"}
          `}
          >
            {element.type === "model" ? "M" : "E"}
          </div>
          <div>
            <h3 className="font-semibold ">{element.name}</h3>
            <p className="text-sm  capitalize">{element.type}</p>
          </div>
        </div>
        <div className="text-xs ">Drag to reorder</div>
      </div>

      {/* Preview of content */}
      <div className="mt-2 p-2  rounded text-xs font-mono  max-h-20 overflow-hidden border">
        {element.content.split("\n").slice(0, 3).join("\n")}
        {element.content.split("\n").length > 3 && "..."}
      </div>
    </div>
  );
}
