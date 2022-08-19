import { Sortable } from '../../../interfaces/Sortable'

export class CharacterCollection implements Sortable {
  /**
   * String
   */
  data: string
  /**
   * Constructor
   * @param data - string
   */
  constructor (data: string) {
    this.data = data
  }
  /**
   * @returns length of data
   */
  get length (): number {
    return this.data.length
  }
  /**
   * Comparing characters
   * @param a - index of left character
   * @param b - index of right character
   * @returns Boolean
   */
  compare (a: number, b: number): boolean {
    return this.data[a] > this.data[b]
  }
  /**
   * Swapping characters
   * @param a - index of left character
   * @param b - index of right character
   */
  swap (a: number, b: number): void {
    const characters = this.data.split('')
    const leftHand = characters[a]
    
    characters[a] = characters[b]
    characters[b] = leftHand

    this.data = characters.join('')
  }
}
