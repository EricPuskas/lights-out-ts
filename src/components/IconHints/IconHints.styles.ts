/**
 * Imports styled
 */
import { styled } from '@mui/system';

/**
 *  Styles the Container
 */
export const Container = styled('div')(() => {
  return {
    display: 'inline-block',
    float: 'left',
    maxWidth: 'max-content',
    marginLeft: 15,
    border: '1px solid deepskyblue',
    padding: 10,
    backgroundColor: '#073b7c',
    borderRadius: 5,

    // maxHeight: 300,
    // overflow: 'auto',
  };
});
