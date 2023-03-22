/**
 * Imports types
 */
import { Cell } from '../../types';

/**
 * Defines the component props interface
 */
export interface BoardRowProps {
  row: Cell[];
  gridSize: number;
  board: Cell[][];
  toggleCellsAround: (cell: Cell, board: Cell[][]) => void;
}
