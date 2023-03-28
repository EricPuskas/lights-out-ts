/**
 * Imports styled
 */
import { styled } from '@mui/system';

export const Container = styled('div')(() => {
  return {
    display: 'flex',
    textAlign: 'center',
    justifyContent: 'center',
    gap: 50,
    margin: '20px  0',
  };
});

export const Button = styled('button')(() => {
  return {
    padding: 20,
    backgroundColor: '#073b7c',
    cursor: 'pointer',
    borderRadius: 5,
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
  };
});
