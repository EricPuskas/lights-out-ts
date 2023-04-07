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
    padding: 10,
    flexDirection: 'column',
    // maxHeight: 600,
    // overflow: 'auto',
  };
});

/**
 *  Styles the History Stats
 */
export const HistoryStats = styled('div')(() => {
  return {
    display: 'flex',
    width: 550,
    border: '1px solid #fff',
    padding: 10,
    backgroundColor: 'blue',
    borderRadius: 10,
    margin: 5,
  };
});

/**
 *  Styles the Delete Button
 */
export const DeleteButton = styled('button')(() => {
  return {
    display: 'flex',
    maxWidth: 'max-content',
    padding: 10,
    alignItems: 'center',

    // maxHeight: 300,
    // overflow: 'auto',
  };
});
