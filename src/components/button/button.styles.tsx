import styled from '@emotion/styled';
import { IButtonStyled } from './button.types';
import { Color } from '../../tokens';
import { TVariant, TCustomStyle } from '../../utils/types';

const setSize = (size?: 'small' | 'large') => {
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

const isBlock = (block?: boolean) => {
  if (block) {
    return {
      width: '100%',
    };
  }
  return {
    width: 'auto',
  };
};

const isOutline = (variant: TVariant, outline?: boolean) => {
  if (outline) {
    return {
      backgroundColor: '#fff',
      border: `1px solid ${Color[variant].main}`,
      color: Color[variant].main,
      '&:hover': {
        backgroundColor: '#fff',
        color: Color[variant].hover,
        border: `1px solid ${Color[variant].hover}`,
      },
      '&:active': {
        backgroundColor: '#fff',
        color: Color[variant].active,
        border: `1px solid ${Color[variant].active}`,
      },
    };
  }
  return {};
};

const isDisabled = (variant: TVariant, disabled?: boolean) => {
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
};

const withIcon = (iconOnly?: boolean, iconRight?: boolean) => {
  let finalStyle: TCustomStyle = {
    '& > svg': {
      marginRight: 10,
    },
  };

  if (iconRight) {
    finalStyle = {
      ...finalStyle,
      flexDirection: 'row-reverse',
      '& > svg': {
        marginLeft: 10,
      },
    };
  }

  if (iconOnly) {
    finalStyle = {
      '& > svg': {
        marginTop: 2,
        marginBottom: 2,
      },
      '& > span': {
        display: 'none',
      },
    };
  }

  return finalStyle;
};

export const ButtonStyled = styled.button<IButtonStyled>(
  ({ variant, block, size, outline, disabled, iconOnly, iconRight }) => ({
    appearance: 'unset',
    display: 'flex',
    alignItems: 'center',
    borderRadius: 3,
    outline: 'none',
    cursor: 'pointer',
    border: '1px solid transparent',
    transition: 'box-shadow .1s linear, background-color .1s linear',
    color: Color[variant].text,
    backgroundColor: Color[variant].main,
    '&:hover': {
      backgroundColor: Color[variant].hover,
    },
    '&:active': {
      backgroundColor: Color[variant].active,
    },
    '&:focus': {
      boxShadow: `0 0 0 4px ${Color[variant].outline}`,
    },
    ...withIcon(iconOnly, iconRight),
    ...isBlock(block),
    ...setSize(size),
    ...isOutline(variant, outline),
    ...isDisabled(variant, disabled),
  }),
  ({ customStyle }) => ({ ...customStyle }),
);
