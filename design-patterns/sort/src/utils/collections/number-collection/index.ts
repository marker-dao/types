import { Sorter } from '../../sorter'

export class NumberCollection extends Sorter {
  /**
   * Number array
   */
  data: number[]
  /**
   * Constructor
   * @param data - number array
   */
  constructor (data: number[]) {
    super()
    
    this.data = data
  }
  /**
   * @returns length of data
   */
  get length (): number {
    return this.data.length
  }
  /**
   * Comparing elements
   * @param a - index of left element
   * @param b - index of right element
   * @returns Boolean
   */
  compare (a: number, b: number): boolean {
    return this.data[a] > this.data[b]
  }
  /**
   * Swapping elements
   * @param a - index of left element
   * @param b - index of right element
   */
  swap (a: number, b: number): void {
    [this.data[a], this.data[b]] = [this.data[b], this.data[a]]
  }
}
