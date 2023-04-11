/**
 * Imports styled
 */
import { styled } from '@mui/system';

/**
 * Imports types
 */
import { ContainerProps } from './IconHint.type';

/**
 *  Styles the Container
 */
export const Container = styled('div', {
  shouldForwardProp: (propName) => propName !== 'helperOn',
})<ContainerProps>((props) => {
  const { helperOn } = props;

  return {
    border: '1px solid #263238',
    padding: 10,
    borderRadius: 5,
    backgroundColor: '#073b7c',
    cursor: 'pointer',
    '& svg': {
      cursor: 'pointer',
      fontSize: 30,
      color: '#fff',
    },
    '& .Star': {
      color: '#fff',
    },
    '&:hover': {
      backgroundColor: '#00bfff',
    },
    ...(helperOn && {
      backgroundColor: '#f4c50a',
      '&:hover': {
        backgroundColor: '#dcc209',
      },
    }),
  };
});
