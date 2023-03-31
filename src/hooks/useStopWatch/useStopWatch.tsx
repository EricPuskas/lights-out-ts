import { useState, useEffect, useRef } from 'react';

/**
 * Displays the component
 */
export const useStopWatch = () => {
  /**
   * Initializes the seconds
   */
  const [timeElapsed, setTimeElapsed] = useState(0);

  /**
   * Initializes the interval reference
   */
  const intervalRef = useRef<number | null>(null);
  const seconds = Math.floor((timeElapsed / 1000) % 60);
  const minutes = Math.floor((timeElapsed / 60000) % 60);

  /**
   * Handles the time
   */
  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setTimeElapsed((prevState) => prevState + 1000);
    }, 1000);

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, []);

  /**
   * Resets the timer when the game is won or the grid size changes
   */
  const reset = () => {
    setTimeElapsed(0);
  };

  return { minutes, seconds, reset };
};
