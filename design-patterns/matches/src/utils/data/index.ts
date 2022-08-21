import { readFileSync } from 'fs'

const file = readFileSync('public/football/football.csv', {
  encoding: 'utf-8',
}).split('\n')
/**
 * TODO. Убрать any
 */
const data = file.reduce((acc: any[], item: string): any[] => {
  const element = item.split(',')

  acc.push({
    date: element[0],
    home: element[1],
    away: element[2],
    homeGoals: element[3],
    awayGoals: element[4],
    winner: element[5],
    referee: element[6],
  })

  return acc
}, [])

export { data }
