import { GameMode } from '../../types';

export interface TitleProps {
  changeGameMode: (value: boolean) => void;
  gameMode: GameMode;
}
