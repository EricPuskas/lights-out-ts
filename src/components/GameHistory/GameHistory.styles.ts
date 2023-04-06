/**
 * Imports styled
 */
import { styled } from '@mui/system';

/**
 *  Styles the Container
 */
export const Container = styled('div')(() => {
  return {
    display: 'flex',
    maxWidth: 'max-content',
    marginLeft: 30,
    border: '1px solid #fff',
    padding: 10,
    backgroundColor: 'red',
    // maxHeight: 300,
    // overflow: 'auto',
  };
});
