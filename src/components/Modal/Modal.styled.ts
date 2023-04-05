/**
 * Imports styled
 */
import { styled } from '@mui/system';

/**
 *  Styles the Modal Overlay
 */
export const ModalOverlay = styled('div')(() => {
  return {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  };
});

/**
 *  Styles the Modal Content
 */
export const ModalContent = styled('div')(() => {
  return {
    position: 'absolute',
    top: '50%',
    left: ' 50%',
    transform: 'translate(-50%, -50%)',
    backgroundColor: 'white',
    padding: 20,
    color: 'black',
  };
});

/**
 *  Styles the Modal Close Button
 */
export const ModalCloseButton = styled('button')(() => {
  return {
    position: 'absolute',
    top: 10,
    right: 10,
  };
});
