import { Matchable } from '../interfaces/Matchable'
import { Winners } from '../constants/winners'
/**
 * Total of wins
 */
export function getTotal (data: Matchable[], winner: string): number {
  return data.reduce((acc: number, item: Matchable): number => {
    if (item.home === winner && item.winner === Winners.Home) {
      acc++
    } else if (item.away === winner && item.winner === Winners.Away) {
      acc++
    }
  
    return acc
  }, 0)
}
