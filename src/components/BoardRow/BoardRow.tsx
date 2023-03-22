/**
 * Imports components
 */
import { BoardCell } from '../BoardCell';

/**
 * Imports styled components
 */
import { Container } from './BoardRow.styles';

/**
 * Imports types
 */
import { BoardRowProps } from './BoardRow.types';

/**
 * Displays the component
 */
export const BoardRow: React.FC<BoardRowProps> = (props) => {
  const { row, gridSize, board } = props;

  /**
   * Handles the rendering of the cells
   */
  const renderCells = () => {
    return row.map((cell, key) => (
      <BoardCell key={key} cell={cell} gridSize={gridSize} board={board} />
    ));
  };

  return <Container>{renderCells()}</Container>;
};
