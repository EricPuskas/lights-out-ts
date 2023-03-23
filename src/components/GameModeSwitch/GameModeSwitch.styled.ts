// /**
//  * Imports styled
//  */
// import { styled } from '@mui/system';

// /**
//  * Slyles the Switch
//  */
// export const Switch = styled('label')(() => {
//   return {
//     position: 'relative',
//     display: 'inline-block',
//     width: 60,
//     height: 34,
//   };
// });

// /**
//  * Slyles the Input
//  */
// export const Input = styled('input')(() => {
//   return {
//     opacity: 0,
//     width: 0,
//     height: 0,
//     '&: checked + .slider': {
//       backgroundColor: '#2196F3',
//       '&:before': {
//         transform: ' translateX(26px)',
//       },
//     },
//     '&:focus + .slider': {
//       boxShadow: '0 0 1px #2196F3',
//     },
//   };
// });

// /**
//  * Slyles the Slider
//  */
// export const Slider = styled('span')(() => {
//   return {
//     position: 'absolute',
//     cursor: 'pointer',
//     top: 0,
//     left: 0,
//     right: 0,
//     bottom: 0,
//     backgroundColor: '#ccc',
//     transition: '.4s',
//     borderRadius: 34,
//     '&: before': {
//       position: 'absolute',
//       content: '""',
//       height: 26,
//       width: 26,
//       left: 4,
//       bottom: 4,
//       backgroundColor: 'white',
//       transition: '.4s',
//       borderRadius: '50%',
//     },
//   };
// });
// /
//  * Imports styled
//  */
import { styled } from '@mui/system';

// /
//  * Styles the Container
//  */
export const Container = styled('div')(() => {
  return {
    position: 'relative',
  };
});

// /
//  * Styles the Switch
//  */
export const Switch = styled('label')(() => {
  return {
    position: 'relative',
    display: 'inline-block',
    width: 60,
    height: 34,
  };
});

// /
//  * Styles the Input
//  */
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
    },
  };
});
