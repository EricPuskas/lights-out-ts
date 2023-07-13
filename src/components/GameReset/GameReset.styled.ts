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
    textAlign: 'center',
    justifyContent: 'center',
    gap: 50,
    marginTop: -10,
  };
});

/**
 * Styles the Button
 */
export const Button = styled('button')(() => {
  return {
    padding: 10,
    backgroundColor: '#073b7c',
    cursor: 'pointer',
    borderRadius: 5,
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
    '&:hover': {
      backgroundColor: '#00bfff',
    },
    '@media (max-width: 768px)': {
      marginTop: 10,
    },
    '@media (max-width: 391px)': {
      marginTop: 10,
    },
  };
});
