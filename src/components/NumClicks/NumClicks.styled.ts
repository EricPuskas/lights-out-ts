/**
 * Imports styled
 */
import { styled } from '@mui/system';

/**
 * Styles the Container
 */
export const Container = styled('div')(() => {
  return {
    display: 'inline-block',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '1.2rem',
    color: 'black',
    margin: '1rem 0',
    padding: 12,
    borderRadius: 19,
    backgroundColor: 'white',
    fontWeight: 'bold',
    border: '4px solid deepskyblue',
    marginRight: 10,
  };
});
