/**
 * Imports styled
 */
import { styled } from '@mui/system';

/**
 * Styles the Container
 */
export const Container = styled('div')(() => {
  return {
    display: 'flex',
    flex: 1,
    flexDirection: 'column',
    padding: 10,
    margin: 5,
    borderRadius: 5,
    backgroundColor: '#263238',
    border: '1px solid #263238',
    color: '#fff',
    width: 'auto',
    minWidth: 250,
  };
});

/**
 * Styles the Header
 */
export const Header = styled('div')(() => {
  return {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
  };
});

/**
 * Styles the Score
 */
export const Score = styled('div')(() => {
  return {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  };
});

/**
 * Styles the Score Item
 */
export const ScoreItem = styled('div')(() => {
  return {
    padding: 10,
    border: '4px solid #00bfff',
    borderRadius: 25,
    margin: 5,
    width: 100,
    backgroundColor: '#fff',
    color: '#000',
    fontWeight: 'bold',
  };
});

/**
 * Styles the Date
 */
export const Date = styled('div')(() => {
  return {
    color: '#00bfff',
    fontWeight: 'bold',
  };
});

/**
 * Styles the GameMode
 */
export const GameMode = styled('div')(() => {
  return {
    color: '#a7ffeb',
    fontWeight: 'bold',
  };
});

/**
 * Styles the GridSize
 */
export const GridSize = styled('div')(() => {
  return {
    color: '#fa1c16',
    fontWeight: 'bold',
    fontSize: 25,
    bottom: 30,
    right: 40,
    position: 'absolute',
  };
});
