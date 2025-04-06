"use client";
import { useState } from "react";
import { cn, previewText } from "@/lib/utils";

export default function ExpandableText({
  content,
  limit = 100,className
}: {
  content: string;
  className?: string;
  limit?: number;
}) {
  const [expanded, setExpanded] = useState(false);
  const toggle = () => setExpanded((prev) => !prev);

  const shouldTruncate = content.length > limit;
  const displayText =
    expanded || !shouldTruncate ? content : previewText(content, limit);

  return (
    <p className={cn("text-sm leading-relaxed", className)}>
      {displayText}
      {shouldTruncate && (
        <button onClick={toggle} className="ml-2 text-blue-600">
          {expanded ? "Show less" : "Show more"}
        </button>
      )}
    </p>
  );
}
