import { createContext } from 'react';

export interface ProviderProps {
  children: React.ReactNode;
}
export interface ProviderValues {
  board: number[];
  setBoard: React.Dispatch<React.SetStateAction<number[]>>;
}

export const defautValues: ProviderValues = {
  board: [],
  setBoard: () => {},
};

export const context = createContext<ProviderValues>(defautValues);
