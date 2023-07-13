//  * Imports styled
//  */
import { styled } from '@mui/system';

/**
 * Styles the Container
 */
export const Container = styled('div')(() => {
  return {
    textAlign: 'center',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%',
  };
});

/**
 * Styles the Game Options
 */
export const GameOptions = styled('div')(() => {
  return {
    position: 'absolute',
    top: 10,
    left: 10,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 10,
    '@media (max-width: 768px)': {
      top: 30,
      left: 30,
    },
    '@media (max-width: 391px)': {
      top: 20,
      left: 20,
    },
  };
});
