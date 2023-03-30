import { useContext } from 'react';
import { context } from './Context';
import { GameProvider } from './Provider';

const useGame = () => useContext(context);

export { useGame, GameProvider };
