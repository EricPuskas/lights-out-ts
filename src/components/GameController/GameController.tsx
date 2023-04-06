/**
 * Imports components
 */
import { Board } from '../Board';
import { GridSizeSelector } from '../GridSizeSelector';
import { Title } from '../Title';
import { GameReset } from '../GameReset';
import { GameTime } from '../GameTime/';
import { Timer } from '../Timer';
import { NumClicks } from '../NumClicks';
import { GameMessage } from '../GameMessage';
import { GameHistory } from '../GameHistory';

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
    <div>
      <GameHistory
        id={''}
        mode={'lights-out'}
        time={''}
        moves={0}
        gridSize={0}
      />
      <Title />
      <GameReset />
      <GameTime />
      <GridSizeSelector />
      <Board board={board} winner={winner} />
      <GameMessage />
      <NumClicks />
      <Timer />
    </div>
  );
};
