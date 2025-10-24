// components/SplitMarker.tsx
"use client";

import React, { useState } from "react";
import { useDroppable } from "@dnd-kit/core";
import { SplitPoint } from "./types";

interface SplitMarkerProps {
  split: SplitPoint;
  onRemove: (splitId: string) => void;
  onAddSplit: (index: number) => void;
}

export function SplitMarker({ split, onRemove, onAddSplit }: SplitMarkerProps) {
  const [isEditing, setIsEditing] = useState(false);
  const [fileName, setFileName] = useState(split.fileName || "");

  const { isOver, setNodeRef } = useDroppable({
    id: split.id,
  });

  const handleSaveFileName = () => {
    // Update in store
    setIsEditing(false);
    // You'd dispatch an action to update the fileName
  };

  return (
    <div
      ref={setNodeRef}
      className={`
        relative py-6 px-4 border-2 border-dashed rounded-lg bg-card
        ${isOver ? "border-blue-500 bg-blue-50" : "border-gray-300 "}
        transition-all duration-200
      `}
    >
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center ">
            📁
          </div>

          {isEditing ? (
            <div className="flex items-center space-x-2">
              <input
                type="text"
                value={fileName}
                onChange={(e) => setFileName(e.target.value)}
                className="px-2 py-1 border rounded text-sm"
                placeholder="File name..."
              />
              <button
                onClick={handleSaveFileName}
                className="px-3 py-1 bg-green-500  rounded text-sm"
              >
                Save
              </button>
              <button
                onClick={() => setIsEditing(false)}
                className="px-3 py-1 0  rounded text-sm"
              >
                Cancel
              </button>
            </div>
          ) : (
            <div className="flex items-center space-x-3">
              <div>
                <h3 className="font-semibold ">{fileName}.prisma</h3>
                <p className="text-sm ">Split point</p>
              </div>
              <button
                onClick={() => setIsEditing(true)}
                className="px-3 py-1 text-sm text-blue-600 hover:text-blue-800"
              >
                Rename
              </button>
            </div>
          )}
        </div>

        <div className="flex items-center space-x-2">
          <button
            onClick={() => onAddSplit(split.afterIndex)}
            className="w-8 h-8 bg-green-500  rounded-full flex items-center justify-center hover:bg-green-600"
            title="Add another split"
          >
            +
          </button>
          <button
            onClick={() => onRemove(split.id)}
            className="w-8 h-8 bg-red-500  rounded-full flex items-center justify-center hover:bg-red-600"
            title="Remove split"
          >
            ×
          </button>
        </div>
      </div>

      <div className="text-center mt-2">
        <p className="text-sm ">
          {isOver
            ? "Drop here to move to this file"
            : "Drop zone - elements below go in this file"}
        </p>
      </div>
    </div>
  );
}
