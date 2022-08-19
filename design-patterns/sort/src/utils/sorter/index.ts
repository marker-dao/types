import { NumberCollection } from '../collections/number-collection'

export class Sorter {
  private collection: NumberCollection

  constructor (collection: NumberCollection) {
    this.collection = collection
  }

  private sort (): number[] {
    const { length } = this.collection

    for (let i = 0; i < length; i++) {
      for (let j = 0; j < length - i - 1; j++) {
        if (this.collection.compare(j, j + 1)) {
          this.collection.compare(j, j + 1)
        }
      }
    }

    return this.collection.data
  }

  getSortedCollection (): number[] {
    return this.sort()
  }
}
 