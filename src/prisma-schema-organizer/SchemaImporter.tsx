// components/SchemaImporter.tsx
"use client";

import React, { useRef } from "react";

interface SchemaImporterProps {
  onSchemaLoad: (schemaText: string) => void;
}

export function SchemaImporter({ onSchemaLoad }: SchemaImporterProps) {
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (e) => {
      const content = e.target?.result as string;
      onSchemaLoad(content);
    };
    reader.readAsText(file);
  };

  const handlePaste = async () => {
    try {
      const text = await navigator.clipboard.readText();
      onSchemaLoad(text);
    } catch (err) {
      console.error("Clipboard read error:", err);
      // Fallback: show textarea
      const text = prompt("Paste your Prisma schema here:");
      if (text) onSchemaLoad(text);
    }
  };

  return (
    <div className=" p-4 rounded-lg shadow-sm border space-y-3">
      <h3 className="font-semibold">Import Schema</h3>

      <button
        onClick={() => fileInputRef.current?.click()}
        className="w-full px-4 py-2 bg-blue-500  rounded hover:bg-blue-600 transition-colors"
      >
        Upload schema.prisma
      </button>

      <button
        onClick={handlePaste}
        className="w-full px-4 py-2 bg-green-500  rounded hover:bg-green-600 transition-colors"
      >
        Paste Schema Text
      </button>

      <input
        type="file"
        ref={fileInputRef}
        onChange={handleFileUpload}
        accept=".prisma"
        className="hidden"
      />

      <div className="text-xs ">Supports .prisma files or raw schema text</div>
    </div>
  );
}
