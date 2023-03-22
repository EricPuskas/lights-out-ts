/**
 * Imports types
 */
import { Cell } from '../../types';

/**
 * Defines the component props interface
 */
export interface BoardCellProps {
  cell: Cell;
  gridSize: number;
  board: Cell[][];
  toggleCellsAround: (cell: Cell, board: Cell[][]) => void;
}

/**
 * Defines the conteainer props interface
 */
export interface ContainerProps {
  active: boolean;
  gridSize: number;
}
