/**
 * Defines the Neon Text Props interface
 */ export interface NeonTextProps {
  color: 'blue' | 'orange' | 'green';
  fontSize?: number;
  children: React.ReactNode;
}
