// components/AddSplitButton.tsx
"use client";

import React from "react";

interface AddSplitButtonProps {
  index: number;
  onAddSplit: (index: number) => void;
}

export function AddSplitButton({ index, onAddSplit }: AddSplitButtonProps) {
  return (
    <div className="relative py-2 flex justify-center">
      <div className="absolute inset-0 flex items-center">
        <div className="w-full border-t border-gray-300"></div>
      </div>
      <button
        onClick={() => onAddSplit(index)}
        className="relative z-10 w-8 h-8 bg-blue-500  rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors shadow-md"
        title="Split schema here"
      >
        +
      </button>
    </div>
  );
}
