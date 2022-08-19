import { Node } from './Node'

export class LinkedList {
  head: Node | null = null

  get length (): number {
    if (!this.head) {
      return 0
    }

    let length = 1
    let node = this.head

    while (node.next) {
      length++
      
      node = node.next
    }

    return length
  }

  add (value: number): void {
    const node = new Node(value)

    if (!this.head) {
      this.head = node

      return
    }

    let last = this.head

    while (last.next) {
      last = last.next
    }

    last.next = node
  }

  at (index: number): Node {
    if (!this.head) {
      throw new Error('Index is out of bounds')
    }

    let counter = 0
    let node: Node | null = this.head

    while (node) {
      if (counter === index) {
        return node
      }

      counter++
      node = node.next
    }

    throw new Error('Index is out of bounds')
  }

  compare (a: number, b: number): boolean {
    if (!this.head) {
      throw new Error('List is empty')
    }

    return this.at(a).value > this.at(b).value
  }

  swap (a: number, b: number): void {
    const aNode = this.at(a)
    const bNode = this.at(b)

    const value = aNode.value

    aNode.value = bNode.value
    bNode.value = value
  }

  print (): void {
    if (!this.head) {
      return
    }

    let node: Node | null = this.head

    while (node) {
      console.log(node.value)

      node = node.next
    }
  }
}