const colors = ['red', 'green', 'yellow']
const dates = [new Date(), new Date()]
const fruitByColor = [
  ['tomato'],
  ['apple'],
  ['lemon'],
]
const color = colors[0]
const colorByPop = colors.pop()
/**
 * Push only declared types
 */
colors.push('blue')
/**
 * Methods
 */
colors.map((color: string): string => color.toUpperCase())
/**
 * Different types, Flexible arrays
 */
const importantDates: (Date | string)[] = [new Date(), '2022-13-08']

importantDates.push('')
importantDates.push(new Date())
