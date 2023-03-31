import { useEffect } from 'react';

/**
 * Import styles components
 */
import { Container } from './GameTime.styled';

/**
 * Imports hooks
 */
import { useGame } from '../../hooks';
import { useStopWatch } from '../../hooks/useStopWatch';

/**
 * Displays the component
 */
export const GameTime: React.FC = () => {
  const { gridSize, winner, setTimer, isReset, gameMode } = useGame();
  const { minutes, seconds, reset } = useStopWatch();

  /**
   * Resets the timer when the game is won or the grid size changes
   */
  useEffect(() => {
    reset();
    // eslint-disable-next-line
  }, [gridSize, winner, isReset, gameMode]);

  /**
   * ?
   */
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
