import styled from '@emotion/styled';
import { Color, Radius, Typography } from '../../tokens';
import Transition from '../../utils/transition';
import { IInputWrapper } from './input.types';

const isFocus = (focus: boolean) => {
  if (focus) {
    return {
      borderColor: Color.primary.main,
      boxShadow: `0 0 0 1px ${Color.primary.main}`,
      '&:hover': {
        borderColor: Color.primary.main,
      },
    };
  }
  return {};
};

export const InputWrapper = styled.div<IInputWrapper>(
  ({ customStyle, focus }) => ({
    ...Typography.base,
    display: 'flex',
    overflow: 'hidden',
    alignItems: 'center',
    border: `1px solid ${Color.border}`,
    borderRadius: Radius.normal,
    transition: Transition(['box-shadow', 'border-color'], '.1s linear'),
    ...isFocus(focus),
    ...customStyle,
  }),
);

export const InputStyled = styled.input({
  ...Typography.base,
  appearance: 'none',
  backgroundColor: 'transparent',
  padding: 10,
  border: 0,
  outline: 'none',
  width: '100%',
  '&::placeholder': {
    color: Color.placeholder,
  },
  '&[type=number]::-webkit-inner-spin-button': {
    appearance: 'none',
  },
});

export const InputAddonBefore = styled.div({
  color: Color.placeholder,
  backgroundColor: Color.background.level1,
  padding: 10,
  borderRight: `1px solid ${Color.border}`,
});

export const InputAddonAfter = styled.div({
  color: Color.placeholder,
  backgroundColor: Color.background.level1,
  padding: 10,
  borderLeft: `1px solid ${Color.border}`,
});

export const ShowPassword = styled.div({
  fontSize: 20,
  cursor: 'pointer',
  display: 'flex',
  padding: 8.5,
  color: Color.placeholder,
});

export const NumberHandler = styled.div({
  color: Color.placeholder,
  display: 'flex',
  paddingRight: 10,
  paddingLeft: 10,
});

export const NumberHandlerButtonStyles = {
  width: 20,
  height: 20,
  padding: 0,
  display: 'flex',
  justifyContent: 'center',
  color: Color.placeholder,
  '&:focus': {
    boxShadow: `0 0 0 2px ${Color.neutral.outline}`,
  },
  span: {
    display: 'flex',
  },
  '&:first-of-type': {
    marginRight: 4,
  },
};
