/**
 * Defines the cell interface
 */
export interface Cell {
  active: boolean;
  positionX: number;
  positionY: number;
}

export type GameMode = 'lights-out' | 'lights-on';
