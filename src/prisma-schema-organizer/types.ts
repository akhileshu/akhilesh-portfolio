// types.ts
export interface SchemaElement {
  id: string;
  type: "model" | "enum";
  name: string;
  content: string;
  file?: string;
}

export interface SplitPoint {
  id: string;
  type: "split-point";
  afterIndex: number;
  fileName?: string;
}

export interface SchemaFile {
  fileName: string;
  elements: SchemaElement[];
  imports: string[];
}
