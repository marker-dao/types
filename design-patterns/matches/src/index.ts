import { data } from './utils/data'
import { Matchable } from './utils/interfaces/Matchable'

/**
 * Total of Manchester United wins
 */
const winsCount = data.reduce((acc: number, item: Matchable): number => {
  if (item.home === 'Man United' && item.winner === 'H') {
    acc++
  } else if (item.away === 'Man United' && item.winner === 'A') {
    acc++
  }

  return acc
}, 0)

console.log(`Man United won ${winsCount} times`)

