import { cn } from "@/lib/utils";

interface TagListProps {
  tags: string[];
  className?: string;
}

export default function TagList({ tags, className}: TagListProps) {
  return (
    <div className={cn("flex flex-wrap gap-2 mt-2",className)}>
      {tags.map((tag) => (
        <span key={tag} className="bg-card text-xs px-2 py-1 rounded">
          {tag}
        </span>
      ))}
    </div>
  );
}
