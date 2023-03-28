import { useState, useEffect, useRef } from 'react';

export const useStopWatch = () => {
  /**
   * Initializes the seconds
   */
  const [seconds, setSeconds] = useState(0);
  /**
   * Initializes the minutes
   */
  const [minutes, setMinutes] = useState(0);
  /**
   * Initializes ?
   */
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  /**
   * Handles the time
   */
  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setSeconds((prevSeconds) => {
        if (prevSeconds === 59) {
          setMinutes((prevMinutes) => prevMinutes + 1);
          return 0;
        } else {
          return prevSeconds + 1;
        }
      });
    }, 1000);

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, []);

  /**
   * Resets the timer when the game is won or the grid size changes
   */
  const reset = () => {
    setSeconds(0);
    setMinutes(0);
  };

  return { minutes, seconds, reset };
};
