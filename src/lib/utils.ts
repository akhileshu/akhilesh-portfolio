import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function filterVisible<T extends { visible?: boolean }>(
  items: T[]
): T[] {
  return items.filter((item) => item.visible !== false);
}
export interface BaseItem {
  visible?: boolean;
}

export const previewText = (content: string, length = 100) =>
  content?.length > length ? `${content.slice(0, length)}...` : content;