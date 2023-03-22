import { useCallback } from 'react';

/**
 * Imports styled components
 */
import { Container } from './BoardCell.styles';

/**
 * Imports types
 */
import { BoardCellProps } from './BoardCell.types';
import { Cell } from '../../types';

/**
 * Displays the component
 */
export const BoardCell: React.FC<BoardCellProps> = (props) => {
  const { cell, gridSize, board } = props;

  /**
   * Handles toggling the cell at the top, left, bottom, and right of the cell and the cell itself
   */
  const toggleCellsAround = useCallback(
    (cell: Cell, board: Cell[][]) => {
      const { positionX, positionY } = cell;

      const newBoard = Object.assign([], board) as Cell[][];

      const toggleCell = (positionX: number, positionY: number) => {
        if (
          positionX >= 0 &&
          positionX < gridSize &&
          positionY >= 0 &&
          positionY < gridSize
        ) {
          newBoard[positionX][positionY] = {
            ...newBoard[positionX][positionY],
            active: !newBoard[positionX][positionY].active,
          };
        }
      };

      toggleCell(positionX, positionY);
      toggleCell(positionX, positionY - 1);
      toggleCell(positionX, positionY + 1);
      toggleCell(positionX - 1, positionY);
      toggleCell(positionX + 1, positionY);
      console.log(newBoard);

      // const isWinner = checkForWinner(newBoard, gameMode);

      // setBoard(newBoard);
      // setIsWinner(isWinner);
      // setMovesCount((prevState) => prevState + 1);
    },
    [board]
  );

  return (
    <Container onClick={() => toggleCellsAround(cell, board)}>
      <div>{cell.positionX}</div>
      <div>{cell.positionY}</div>
    </Container>
  );
};
