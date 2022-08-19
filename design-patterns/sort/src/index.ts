import { NumberCollection } from './utils/collections/number-collection'
import { CharacterCollection } from './utils/collections/character-collection'
import { Sorter } from './utils' 

const numberCollection = new NumberCollection([4, -3, 11, 2])

const sorterNumb = new Sorter(numberCollection)
sorterNumb.sort()

console.log(numberCollection.data)

const characterCollection = new CharacterCollection('Abudabi')

const sorterCh = new Sorter(characterCollection)
sorterCh.sort()

console.log(characterCollection.data)
