/**
 * Imports styled
 */
import { styled } from '@mui/system';

/**
 * Styles the Container
 */
export const Container = styled('div')(() => {
  return {
    position: 'relative',
    marginTop: 43,
    marginLeft: 10,
    '@media (max-width: 768px)': {
      marginTop: 25,
    },
    '@media (max-width: 391px)': {
      marginTop: 12,
    },
  };
});

/**
 * Styles the Switch
 */
export const Switch = styled('label')(() => {
  return {
    position: 'relative',
    display: 'inline-block',
    width: 60,
    height: 34,
    '@media (max-width: 768px)': {
      width: 75,
      height: 43,
    },
    '@media (max-width: 391px)': {
      width: 50,
      height: 30,
    },
  };
});

/**
 * Styles the Input
 */
export const Input = styled('input')(() => {
  return {
    opacity: 0,
    width: 0,
    height: 0,
    '&:checked + span': {
      backgroundColor: '#2196f3',
    },
    '&:focus + span': {
      boxShadow: '0 0 1px #2196f3',
    },
    '&:checked + span:before': {
      transform: 'translateX(26px)',
    },
  };
});

/**
 * Styles the Slider
 */
export const Slider = styled('span')(() => {
  return {
    position: 'absolute',
    cursor: 'pointer',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: '#ccc',
    borderRadius: 34,
    '&:before': {
      position: 'absolute',
      content: '""',
      height: 26,
      width: 26,
      left: 4,
      bottom: 4,
      backgroundColor: 'white',
      transition: '.4s',
      borderRadius: 50,
      '@media (max-width: 768px)': {
        width: 35,
        height: 35,
      },
      '@media (max-width: 391px)': {
        width: 22,
        height: 22,
      },
    },
  };
});
