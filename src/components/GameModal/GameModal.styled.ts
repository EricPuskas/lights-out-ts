/**
 * Imports styled
 */
import { styled } from '@mui/system';

/**
 *  Styles the Modal Provider
 */
export const ModalProvider = styled('div')(() => {
  return {
    position: 'absolute',
    top: '50%',
    left: ' 50%',
    transform: 'translate(-50%, -50%)',
    backgroundColor: 'white',
    padding: 20,
    overflow: 'auto',
  };
});
