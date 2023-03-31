import { createContext } from 'react';

/**
 * Imports types
 */
import { Cell, GameMode } from '../../types';

/**
 * Defines the Provider Props interface
 */
export interface ProviderProps {
  children: React.ReactNode;
}

/**
 * Defines the Provider Props interface
 */
export interface ProviderValues {
  board: Cell[][];
  gridSize: number;
  winner: boolean;
  gameMode: GameMode;
  numClicks: number;
  timer: {
    minutes: number;
    seconds: number;
  };
  isReset: boolean;
  changeGridSize: (newSize: number) => void;
  changeGameMode: (value: boolean) => void;
  initializeBoard: (gridSize: number) => void;
  toggleCellsAround: (cell: Cell, board: Cell[][]) => void;
  handleResetGame: () => void;
  setBoard: React.Dispatch<React.SetStateAction<Cell[][]>>;
  setTimer: React.Dispatch<
    React.SetStateAction<{
      minutes: number;
      seconds: number;
    }>
  >;
}

/**
 * Defines the default values
 */
export const defautValues: ProviderValues = {
  board: [],
  gridSize: 3,
  winner: false,
  gameMode: 'lights-out',
  numClicks: 0,
  timer: {
    minutes: 0,
    seconds: 0,
  },
  isReset: false,
  changeGridSize: () => {},
  changeGameMode: () => {},
  initializeBoard: () => {},
  toggleCellsAround: () => {},
  handleResetGame: () => {},
  setBoard: () => {},
  setTimer: () => {},
};

/**
 * Defines a context where the state is stored and shared
 *
 * - This serves as a cache.
 * - Rather than each instance of the hook fetch the current state, the hook simply calls useContext to get the data from the top level provider
 */
export const context = createContext<ProviderValues>(defautValues);
