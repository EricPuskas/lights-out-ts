export interface GameTimeProps {
  gridSize: number;
  winner: boolean;

  setTimer: React.Dispatch<
    React.SetStateAction<{
      minutes: number;
      seconds: number;
    }>
  >;
}
