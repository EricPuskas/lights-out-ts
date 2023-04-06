/**
 * Defines the cell interface
 */
export interface Cell {
  active: boolean;
  positionX: number;
  positionY: number;
}

/**
 * Defines the type Game Mode
 */
export type GameMode = 'lights-out' | 'lights-on';

export interface GameHistoryItem {
  id: number | string;
  mode: GameMode;
  time: string;
  moves: number;
  gridSize: number;
}
