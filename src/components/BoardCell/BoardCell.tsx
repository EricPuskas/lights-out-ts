import { useCallback } from 'react';

/**
 * Imports styled components
 */
import { Container } from './BoardCell.styles';

/**
 * Imports types
 */
import { BoardCellProps } from './BoardCell.types';
import { useGame } from '../../hooks';

/**
 * Displays the component
 */
export const BoardCell: React.FC<BoardCellProps> = (props) => {
  const { cell } = props;
  const { active, positionX, positionY } = cell;
  const { gridSize, board, toggleCellsAround } = useGame();
  /**
   * Handle click on the cell
   */
  const handleClick = () => {
    toggleCellsAround(cell, board);
  };

  return (
    <Container gridSize={gridSize} active={active} onClick={handleClick}>
      <div>{positionX}</div>
      <div>{positionY}</div>
    </Container>
  );
};
