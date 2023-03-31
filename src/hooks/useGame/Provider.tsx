import React, { useState, useEffect } from 'react';

/**
 * External imports
 */
import lodash from 'lodash';

/**
 * Imports the context
 */
import { context, ProviderValues, ProviderProps } from './Context';

/**
 * Imports hooks
 */
import useLocalStorage from 'use-local-storage';

/**
 * Imports types
 */
import { Cell, GameMode } from '../../types';

/**
 * Provides a top level wrapper with the context
 *
 * - This is the main provider
 * - It makes the object available to any child component that calls the hook.
 */
export const GameProvider: React.FC<ProviderProps> = (props) => {
  const { children } = props;

  /**
   * Gets the Provider from the context
   */
  const { Provider } = context;

  /**
   * Initializes the board state
   */
  const [board, setBoard] = useState<Cell[][]>([]);

  /**
   * Initializes the grid size
   */
  const [gridSize, setGridSize] = useLocalStorage<number>('gridSize', 3);

  /**
   * Initializes the winner
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
   * Initializes the reset game
   */
  const [isReset, setIsReset] = useState(false);

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

  /**
   * Handles the reset button
   */
  const handleResetGame = () => {
    setBoard([]);
    setWinner(false);
    initializeBoard(gridSize);
    setNumClicks(0);
    setIsReset(true);
  };

  /**
   * Handle the reset timer
   */
  useEffect(() => {
    if (isReset) setIsReset(false);
  }, [isReset]);

  /**
   * Handles the initialization of the board
   */
  useEffect(() => {
    initializeBoard(gridSize);
    // eslint-disable-next-line
  }, []);

  /**
   * Defines the provider value
   * These values will be available to any children component that calls the hook
   */
  const providerValue: ProviderValues = {
    board,
    gridSize,
    winner,
    gameMode,
    numClicks,
    timer,
    isReset,
    changeGridSize,
    changeGameMode,
    initializeBoard,
    toggleCellsAround,
    handleResetGame,
    setBoard,
    setTimer,
  };
  return <Provider value={providerValue}>{children}</Provider>;
};
