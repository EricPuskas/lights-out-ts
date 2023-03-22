import { useState, useEffect } from 'react';

/**
 * External imports
 */
import lodash from 'lodash';

/**
 * Imports components
 */
import { Board } from '../Board';
import { GridSizeSelector } from '../GridSizeSelector';
import { Title } from '../Title';

/**
 * Imports types
 */
import { Cell } from '../../types';

/**
 * Imports hooks
 */
import { useLocalStorage } from '../../hooks';

/**
 * Displays the component
 */
export const GameController: React.FC = () => {
  /**
   * Initializes the board state
   */
  const [board, setBoard] = useState<Cell[][]>([]);

  /**
   * Initializes the grid size
   */
  const [gridSize, setGridSize] = useLocalStorage('gridSize', 3);

  /**
   * Handles the change of the grid size
   */
  const changeGridSize = (size: number) => {
    setGridSize(size);
    initializeBoard(size);
  };

  /**
   * Handles the initialization of the board
   */
  const initializeBoard = (gridSize: number) => {
    const board: Cell[][] = [];

    for (let i = 0; i < gridSize; i++) {
      const row: Cell[] = [];

      for (let j = 0; j < gridSize; j++) {
        row.push({
          active: Math.random() < 0.25,
          positionX: i,
          positionY: j,
        });
      }
      board.push(row);
    }

    setBoard(board);
  };

  /**
   * Handles toggling the cell at the top, left, bottom, and right of the cell and the cell itself
   */

  const toggleCellsAround = (cell: Cell, board: Cell[][]) => {
    const { positionX, positionY } = cell;

    const newBoard = lodash.cloneDeep(board);

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

    setBoard(newBoard);
    // setIsWinner(isWinner);
    // setMovesCount((prevState) => prevState + 1);
  };

  /**
   * Handles the initialization of the board
   */
  useEffect(() => {
    initializeBoard(gridSize);
    // eslint-disable-next-line
  }, []);

  return (
    <div>
      <Title />
      <GridSizeSelector changeGridSize={changeGridSize} activeSize={gridSize} />
      <Board
        board={board}
        gridSize={gridSize}
        toggleCellsAround={toggleCellsAround}
      />
    </div>
  );
};
