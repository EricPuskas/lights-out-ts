import { useEffect } from 'react';
import { useStopWatch } from '../../hooks/useStopWatch';
// import { GameTimeProps } from './GameTime.types';
import { Container } from './GameTime.styled';
import { useGame } from '../../hooks';

export const GameTime: React.FC = () => {
  const { gridSize, winner, setTimer, isReset } = useGame();
  const { minutes, seconds, reset } = useStopWatch();

  /**
   * Resets the timer when the game is won or the grid size changes
   */

  useEffect(() => {
    reset();
    // eslint-disable-next-line
  }, [gridSize, winner, isReset]);
  useEffect(() => {
    if (winner) {
      setTimer({ minutes, seconds });
    }
  }, [winner]);

  if (winner) return null;

  return (
    <Container>
      {'Time:'} {minutes}:{seconds < 10 ? '0' + seconds : seconds}
    </Container>
  );
};
