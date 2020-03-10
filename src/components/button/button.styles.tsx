import styled from '@emotion/styled';
import { IButtonBase } from './button.types';
import theme from '../../theme';

export const ButtonBase = styled.button<IButtonBase>(
  {
    appearance: 'unset',
    padding: '10px 14px',
    fontSize: 16,
    borderRadius: 3,
    outline: 'none',
    cursor: 'pointer',
    border: '1px solid #ccc',
    transition: 'box-shadow .1s linear',
    backgroundColor: '#fff',
    '&:hover': {
      borderColor: '#3498db',
      boxShadow: '0 0 0 1px #3498db',
      ...(theme?.button && theme?.button['&:hover']),
    },
    i: {
      color: '#000',
      ...theme?.button?.i,
    },
    ...theme?.button,
  },
  ({ customStyle }) => ({ ...customStyle }),
);
