import { NumberCollection } from './utils/collections/number-collection'
import { CharacterCollection } from './utils/collections/character-collection'
import { LinkedList } from './utils/linked-list/LinkedList'

const numberCollection = new NumberCollection([4, -3, 11, 2])

numberCollection.sort()
console.log(numberCollection.data)

const characterCollection = new CharacterCollection('Abudabi')

characterCollection.sort()
console.log(characterCollection.data)

const linkedList = new LinkedList()
const linkedListData = [100, -1340, 6451, -456, 324565, 1]

linkedListData.forEach((item: number): void => linkedList.add(item))

linkedList.sort()
linkedList.print()
