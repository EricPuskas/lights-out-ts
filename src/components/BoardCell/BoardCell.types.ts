/**
 * Imports types
 */
import { Cell } from '../../types';

/**
 * Defines the component props interface
 */
export interface BoardCellProps {
  cell: Cell;
}

/**
 * Defines the Container props interface
 */
export interface ContainerProps {
  active: boolean;
  gridSize: number;
}
