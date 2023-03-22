/**
 * Imports styled
 */
import { styled } from '@mui/system';

/**
 *  Styles the container
 */

export const Container = styled('div')(() => {
  return {
    display: 'flex',
    textAlign: 'center',
    justifyContent: 'center',
    margin: 40,
  };
});

export const Button = styled('button')(() => {
  return {
    margin: 20,
    padding: 13,
    backgroundColor: 'deepskyblue',
    cursor: 'pointer',
    borderRadius: 5,
  };
});
