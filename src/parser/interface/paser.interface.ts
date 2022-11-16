export interface IParser {
  parse(text: string): string;
}

export const IParser = Symbol('Parser');
