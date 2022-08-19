export interface Sortable {
  length: number
  compare (a: number, b: number): boolean
  swap (a: number, b: number): void
}
