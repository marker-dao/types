/**
 * Variables
 */
const numberVar: number = 5
const stringVar: string = 'fast'
const booleanVar: boolean = false
const nullVar: null = null
const undefinedVar: undefined = undefined
/**
 * Built-in objects
 */
const dateInstance: Date = new Date()
/**
 * Arrays
 */
const stringArray: string[] = ['', '']
const numberArray: number[] = [0, 1]
/**
 * Classes
 */
class ExampleClass {}

const ExampleClassInstance: ExampleClass = new ExampleClass()
/**
 * Object literals
 */
const point: { x: number; y: number } = {
  x: 20,
  y: 20,
}
/**
 * Functions
 */
const functionAnnotation1: (i: number) => void = (i: number) =>  {
  console.log(i)
}

function functionAnnotation2 (i: number): void {
  console.log(i)
}
/**
 * Returns any type
 */
const json = '{"x": 10, "y": 10}'
const coordinates: { x: number; y: number } = JSON.parse(json)
/**
 * Declare variable without initialisation
 */
let isVisible: boolean

isVisible = true
/**
 * Some available types
 */
let i: number | string

if (point.x !== numberVar) {
  i = 5
} else {
  i = '5'
}
