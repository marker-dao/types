type Acc = {
  result: number[]
  max: number
}

export function getSortedArray (array: number[]): number[] {
  return array.sort((a: number, b: number) => a - b)
}
