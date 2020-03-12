import styled from '@emotion/styled';
import { IButtonStyled } from './button.types';
import Color from '../../tokens/colors';

const getSize = (size?: 'small' | 'large') => {
  switch (size) {
    case 'small':
      return {
        padding: '8px 12px',
        fontSize: 14,
      };

    case 'large':
      return {
        padding: '12px 16px',
        fontSize: 18,
      };

    default:
      return {
        padding: '10px 14px',
        fontSize: 16,
      };
  }
};

export const ButtonStyled = styled.button<IButtonStyled>(
  ({ variant, block, size }) => ({
    appearance: 'unset',
    borderRadius: 3,
    outline: 'none',
    cursor: 'pointer',
    border: 0,
    transition: 'box-shadow .1s linear, background-color .1s linear',
    color: Color[variant].text,
    backgroundColor: Color[variant].main,
    width: block ? '100%' : 'auto',
    ...getSize(size),
    '&:hover': {
      backgroundColor: Color[variant].hover,
    },
    '&:active': {
      backgroundColor: Color[variant].active,
    },
    '&:focus': {
      boxShadow: `0 0 0 4px ${Color[variant].outline}`,
    },
  }),
  ({ variant, disabled }) => {
    if (disabled) {
      return {
        color: Color[variant].main,
        backgroundColor: Color[variant].disabled,
        cursor: 'not-allowed',
        '&:hover': {
          backgroundColor: Color[variant].disabled,
        },
        '&:active': {
          backgroundColor: Color[variant].disabled,
        },
        '&:focus': {
          backgroundColor: Color[variant].disabled,
          boxShadow: 'initial',
        },
      };
    }
    return {};
  },
  ({ customStyle }) => ({ ...customStyle }),
);
