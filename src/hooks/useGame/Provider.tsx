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
import { useGameUtils } from '../useGameUtils';

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
   * Initializes counter of cliks
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
   * Initializes the hints
   */
  const [hints, setHints] = useState<number[][]>([]);

  /**
   * Initializes the moves
   */
  const [moves, setMoves] = useState<number[][]>([]);

  /**
   * Initializes the modal
   */
  const [isOpen, setIsOpen] = useState<boolean>(false);

  /**
   * Gets the game utils
   */
  const { createSolvableBoard, getUpdatedHints, checkForWinner } =
    useGameUtils();

  /**
   * Handles changing the grid size
   */
  const changeGridSize = (newGridSize: number) => {
    setGridSize(newGridSize);
    initializeBoard(newGridSize, gameMode);

    setMoves([]);
    setWinner(false);
  };

  /**
   * Handles changing the game mode
   */
  const changeGameMode = (value: boolean) => {
    setGameMode(value ? 'lights-on' : 'lights-out');
  };

  /**
   * Handles the board initialization
   */
  const initializeBoard = (gridSize: number, gameMode: GameMode) => {
    const { board, clickedCells } = createSolvableBoard(gridSize, gameMode);

    setBoard(board);
    setHints(clickedCells);
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
    setWinner(checkForWinner(newBoard, gameMode));
    setMoves((prevState) => [...prevState, [positionX, positionY]]);
  };

  /**
   * Handles the reset button
   */
  const handleResetGame = () => {
    setBoard([]);
    setWinner(false);
    initializeBoard(gridSize, gameMode);
    setNumClicks(0);
    setIsReset(true);
    setMoves([]);
  };

  /**
   * Handles the open modal
   */
  const handleOpenModal = () => {
    setIsOpen(true);
  };

  /**
   * Handles the close modal
   */
  const handleCloseModal = () => {
    setIsOpen(false);
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
    initializeBoard(gridSize, gameMode);
    // eslint-disable-next-line
  }, []);

  /**
   * Handles updating the hints
   */
  useEffect(() => {
    if (moves.length > 0 && hints.length > 0) {
      const updatedHints = getUpdatedHints(board, gameMode, moves, hints);
      setHints(updatedHints);
    }
    // eslint-disable-next-line
  }, [moves, hints]);

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
    moves,
    hints,
    isOpen,
    changeGridSize,
    changeGameMode,
    initializeBoard,
    toggleCellsAround,
    handleResetGame,
    handleOpenModal,
    handleCloseModal,
    setBoard,
    setTimer,
    setHints,
    setIsOpen,
  };
  return <Provider value={providerValue}>{children}</Provider>;
};
