import React, { useState } from 'react';
import { context, ProviderValues, ProviderProps } from './Context';

export const GameProvider: React.FC<ProviderProps> = (props) => {
  const { children } = props;
  const { Provider } = context;
  const [board, setBoard] = useState<number[]>([]);

  const providerValue: ProviderValues = {
    board,
    setBoard,
  };
  return <Provider value={providerValue}>{children}</Provider>;
};
