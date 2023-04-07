import { createContext } from 'react';

/**
 * Imports types
 */
import { Cell, GameMode, GameHistoryItem } from '../../types';

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
  moves: number[][];
  hints: number[][];
  isOpen: boolean;
  history: GameHistoryItem[];
  helperOn: boolean;
  changeGridSize: (newSize: number) => void;
  changeGameMode: (value: boolean) => void;
  initializeBoard: (gridSize: number, gameMode: GameMode) => void;
  toggleCellsAround: (cell: Cell, board: Cell[][]) => void;
  handleResetGame: () => void;
  handleOpenModal: () => void;
  handleCloseModal: () => void;
  deleteHistoryItem: (index: number) => void;
  clearHistory: () => void;
  setBoard: React.Dispatch<React.SetStateAction<Cell[][]>>;
  setTimer: React.Dispatch<
    React.SetStateAction<{
      minutes: number;
      seconds: number;
    }>
  >;
  setHints: React.Dispatch<React.SetStateAction<number[][]>>;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  setHelperOn: React.Dispatch<React.SetStateAction<boolean>>;
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
  moves: [],
  hints: [],
  isOpen: false,
  history: [],
  helperOn: false,
  changeGridSize: () => {},
  changeGameMode: () => {},
  initializeBoard: () => {},
  toggleCellsAround: () => {},
  handleResetGame: () => {},
  handleOpenModal: () => {},
  handleCloseModal: () => {},
  deleteHistoryItem: () => {},
  clearHistory: () => {},
  setBoard: () => {},
  setTimer: () => {},
  setHints: () => {},
  setIsOpen: () => {},
  setHelperOn: () => {},
};

/**
 * Defines a context where the state is stored and shared
 *
 * - This serves as a cache.
 * - Rather than each instance of the hook fetch the current state, the hook simply calls useContext to get the data from the top level provider
 */
export const context = createContext<ProviderValues>(defautValues);
