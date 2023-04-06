import { GameMode } from '../../types';
/**
 * Defines the GameHistoryItem interface
 */
export interface GameHistoryItem {
  id: number | string;
  mode: GameMode;
  time: string;
  moves: number;
  gridSize: number;
}
