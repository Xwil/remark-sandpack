import type { visit } from 'unist-util-visit';

export interface SandpackFile {
  code: string;
  hidden?: boolean;
  active?: boolean;
  readOnly?: boolean;
}

export type SandpackFiles = Record<string, string | SandpackFile>;

export interface VFile {
  history: string[];
  cwd: string;
}

export type Node = Parameters<typeof visit>[0];
export type Tree = Node;

export interface JsxNodeElement extends Node {
  name: string;
  attributes: Array<{ name: string; type: string; value: unknown }>;
}

export interface CodeNodeElement extends JsxNodeElement {
  lang?: string;
  meta?: string;
  value?: string;
}

export interface CodeNodeMeta extends Omit<SandpackFile, 'code'> {
  name?: string;
  file?: string;
  dir?: string;
}
