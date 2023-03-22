/**
 * Imports styled
 */
import { styled } from '@mui/system';

import { ButtonProps } from './GridSizeSelector.types';

/**
 *  Styles the container
 */

export const Container = styled('div')(() => {
  return {
    display: 'flex',
    textAlign: 'center',
    justifyContent: 'center',
    gap: 50,
    margin: '50px  0',
  };
});

export const Button = styled('button', {
  shouldForwardProp: (propName) => propName !== 'active',
})<ButtonProps>((props) => {
  const { active } = props;
  return {
    padding: 20,
    backgroundColor: '#073b7c',
    cursor: 'pointer',
    borderRadius: 5,
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
    ...(active && {
      backgroundColor: 'deepskyblue',
    }),
  };
});
