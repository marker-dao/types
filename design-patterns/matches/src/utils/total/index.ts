import { Matchable } from '../interfaces/Matchable'
import { winners } from '../constants/winners'
/**
 * Total of wins
 */
export function getTotal (data: Matchable[], winner: string): number {
  return data.reduce((acc: number, item: Matchable): number => {
    if (item.home === winner && item.winner === winners.home) {
      acc++
    } else if (item.away === winner && item.winner === winners.away) {
      acc++
    }
  
    return acc
  }, 0)
}
