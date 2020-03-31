import styled from '@emotion/styled';
import { ICheckboxBox, ICheckboxStyled } from './checkbox.types';
import { Color, Typography, Radius } from '../../tokens';

const isDisabled = (checked: boolean, disabled: boolean) => {
  const color = checked ? `${Color.primary.main}80` : 'transparent';

  if (disabled) {
    return {
      cursor: 'not-allowed',
      '.paku-checkbox__box': {
        backgroundColor: Color.primary.disabled,
        borderColor: Color.primary.disabled,
        color,
      },
      '.paku-checkbox__label': {
        opacity: 0.5,
      },
    };
  }
  return {};
};

const isError = (error: boolean, checked: boolean) => {
  if (error && !checked) {
    return {
      '.paku-checkbox__box': {
        borderColor: Color.danger.main,
      },
    };
  }
  return {};
};

export const CheckboxStyled = styled.label<ICheckboxStyled>(
  ({ checked, disabled, error }) => ({
    outline: 'none',
    display: 'flex',
    alignItems: 'center',
    paddingTop: 2,
    paddingBottom: 2,
    cursor: 'pointer',
    input: {
      clip: 'rect(0 0 0 0)',
      position: 'absolute',
      '&:focus + .paku-checkbox__box': {
        boxShadow: `0 0 0 4px ${Color.primary.outline}`,
        borderColor: Color.primary.main,
      },
    },
    ...isError(error, checked),
    ...isDisabled(checked, disabled),
  }),
);

const isChecked = (checked: boolean) => {
  if (checked) {
    return {
      backgroundColor: Color.primary.main,
      color: Color.primary.text,
      border: `1px solid ${Color.primary.main}`,
    };
  }
  return {
    backgroundColor: Color.white,
    color: 'transparent',
    border: `1px solid ${Color.border}`,
  };
};

export const CheckboxBox = styled.div<ICheckboxBox>(({ checked }) => ({
  width: 16,
  height: 16,
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  borderRadius: Radius.normal,
  marginRight: 6,
  outline: 'none',
  transition: 'box-shadow .1s linear, background-color .1s linear',
  ...isChecked(checked),
}));

export const CheckboxLabel = styled.div({
  ...Typography.base,
});
