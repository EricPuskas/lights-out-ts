import React, { useState, useEffect } from 'react';
import { context, ProviderValues, ProviderProps } from './Context';
import useLocalStorage from 'use-local-storage';
import { Cell, GameMode } from '../../types';
/**
 * External imports
 */
import lodash from 'lodash';

export const GameProvider: React.FC<ProviderProps> = (props) => {
  const { children } = props;
  const { Provider } = context;
  const [board, setBoard] = useState<Cell[][]>([]);
  const [gridSize, setGridSize] = useLocalStorage<number>('gridSize', 3);
  const [winner, setWinner] = useState(false);
  const [gameMode, setGameMode] = useState<GameMode>('lights-out');
  const [numClicks, setNumClicks] = useState(0);
  const [timer, setTimer] = useState({ minutes: 0, seconds: 0 });
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

  const providerValue: ProviderValues = {
    board,
    setBoard,
    gridSize,
    changeGridSize,
    initializeBoard,
    winner,
    numClicks,
    toggleCellsAround,
    timer,
    setTimer,
    changeGameMode,
    handleResetGame,
    gameMode,
    isReset,
  };
  return <Provider value={providerValue}>{children}</Provider>;
};
