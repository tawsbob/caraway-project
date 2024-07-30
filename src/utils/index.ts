export function getRandonIndexOfArray<T>(arr: T[]): number {
  return Math.floor(Math.random() * arr.length);
}