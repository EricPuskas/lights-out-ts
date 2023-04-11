/**
 * Imports components
 */
import { Board } from '../Board';
import { Timer } from '../Timer';
import { Title } from '../Title';
import { GameTime } from '../GameTime/';
import { IconHints } from '../IconHints';
import { GameReset } from '../GameReset';
import { NumClicks } from '../NumClicks';
import { GameMessage } from '../GameMessage';
import { GameHistory } from '../GameHistory';
import { GameRanking } from '../GameRanking';
import { GridSizeSelector } from '../GridSizeSelector';

/**
 * Imports styled components
 */
import { Container, GameOptions } from './GameController.styled';

/**
 * Imports hooks
 */
import { useGame } from '../../hooks';

/**
 * Displays the component
 */
export const GameController: React.FC = () => {
  const { winner, board } = useGame();

  return (
    <Container>
      <GameOptions>
        <GameHistory />
        <IconHints />
        <GameRanking />
      </GameOptions>
      <Title />
      <GameReset />
      <GameTime />
      <GridSizeSelector />
      <Board board={board} winner={winner} />
      <GameMessage />
      <NumClicks />
      <Timer />
    </Container>
  );
};
