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
import { GameReset } from '../GameReset';
import { GameTime } from '../GameTime/';

/**
 * Imports types
 */
import { Cell, GameMode } from '../../types';

/**
 * Imports hooks
 */
import { useLocalStorage, useGame } from '../../hooks';

/**
 * Imports styles
 */
import { NeonText } from '../NeonText';
import { Container } from './GameController.styled';

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
   * Initializes the grid size
   */
  const [winner, setWinner] = useState(false);

  /**
   * Initializes game mode state
   */
  const [gameMode, setGameMode] = useState<GameMode>('lights-out');

  /**
   * Initializes moves state
   */
  const [numClicks, setNumClicks] = useState(0);

  /**
   * Initializer the timer
   */
  const [timer, setTimer] = useState({ minutes: 0, seconds: 0 });

  /**
   * Handles the change of the grid size
   */
  const changeGridSize = (size: number) => {
    setGridSize(size);
    initializeBoard(size);
  };

  /**
   * Handles changing the game mode
   */
  const changeGameMode = (value: boolean) => {
    setGameMode(value ? 'lights-on' : 'lights-out');
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

    const allCells = newBoard.flat();

    const winner = allCells.every((cell) =>
      gameMode === 'lights-out' ? !cell.active : cell.active
    );

    setBoard(newBoard);
    setWinner(winner);
    setNumClicks((prevNumClicks) => prevNumClicks + 1);
  };

  const result = useGame();
  console.log(result);

  /**
   * Handles the reset button
   */
  const handleResetGame = () => {
    setBoard([]);
    setWinner(false);
    initializeBoard(gridSize);
    setNumClicks(0);
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
      <Title gameMode={gameMode} changeGameMode={changeGameMode} />
      <GameReset handleResetGame={handleResetGame} />
      <GameTime gridSize={gridSize} winner={winner} setTimer={setTimer} />
      {!winner && (
        <GridSizeSelector
          changeGridSize={changeGridSize}
          activeSize={gridSize}
        />
      )}
      {!winner && (
        <Board
          board={board}
          gridSize={gridSize}
          toggleCellsAround={toggleCellsAround}
        />
      )}
      {winner && (
        <NeonText color="orange" fontSize={120}>
          You Win
        </NeonText>
      )}
      <Container>Number of Moves: {numClicks}</Container>
      {winner && (
        <Container>
          {' '}
          {'Time:'} {timer.minutes}:
          {timer.seconds < 10 ? '0' + timer.seconds : timer.seconds}{' '}
        </Container>
      )}
    </div>
  );
};
