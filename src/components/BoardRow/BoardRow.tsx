/**
 * Imports components
 */
import { useGame } from '../../hooks';
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
  const { row } = props;
  const { gridSize, toggleCellsAround, board } = useGame();

  /**
   * Handles the rendering of the cells
   */
  const renderCells = () => {
    return row.map((cell, key) => (
      <BoardCell
        key={key}
        cell={cell}
        gridSize={gridSize}
        board={board}
        toggleCellsAround={toggleCellsAround}
      />
    ));
  };

  return <Container>{renderCells()}</Container>;
};
