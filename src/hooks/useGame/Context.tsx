import { createContext } from 'react';
import { Cell, GameMode } from '../../types';

export interface ProviderProps {
  children: React.ReactNode;
}
export interface ProviderValues {
  board: Cell[][];
  setBoard: React.Dispatch<React.SetStateAction<Cell[][]>>;
  gridSize: number;
  changeGridSize: (newSize: number) => void;
  initializeBoard: (gridSize: number) => void;
  winner: boolean;
  numClicks: number;
  toggleCellsAround: (cell: Cell, board: Cell[][]) => void;
  timer: {
    minutes: number;
    seconds: number;
  };
  setTimer: React.Dispatch<
    React.SetStateAction<{
      minutes: number;
      seconds: number;
    }>
  >;
  changeGameMode: (value: boolean) => void;
  handleResetGame: () => void;
  gameMode: GameMode;
  isReset: boolean;
}

export const defautValues: ProviderValues = {
  board: [],
  setBoard: () => {},
  gridSize: 3,
  changeGridSize: () => {},
  initializeBoard: () => {},
  winner: false,
  numClicks: 0,
  toggleCellsAround: () => {},
  timer: {
    minutes: 0,
    seconds: 0,
  },
  setTimer: () => {},
  changeGameMode: () => {},
  handleResetGame: () => {},
  gameMode: 'lights-out',
  isReset: false,
};

export const context = createContext<ProviderValues>(defautValues);
