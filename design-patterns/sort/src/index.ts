import { NumberCollection } from './utils/collections/number-collection'
import { Sorter } from './utils' 

const numberCollection = new NumberCollection([4, -3, 11, 2])

const sorter = new Sorter(numberCollection)
sorter.sort()

console.log(numberCollection.data)
