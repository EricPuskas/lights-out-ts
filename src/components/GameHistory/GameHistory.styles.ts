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
    marginLeft: 30,
    border: '1px solid deepskyblue',
    padding: 10,
    backgroundColor: '#073b7c',
    borderRadius: 5,
    // maxHeight: 300,
    // overflow: 'auto',
  };
});

/**
 *  Styles the Button
 */
export const Button = styled('div')(() => {
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

export const HistoryContainer = styled('div')(() => {
  return {
    maxHeight: 600,
    overflowY: 'auto',
    marginTop: 10,
    width: '100%',
  };
});
