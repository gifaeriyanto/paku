import styled from '@emotion/styled';
import { IButtonStyled } from './button.types';
import { Color, Typography, Radius } from '../../tokens';
import { TVariants, TCustomStyle, TSize } from '../../utils/types';
import { isOutline } from '../../utils/commonStyles';
import Transition from '../../utils/transition';

const setSize = (size?: TSize) => {
  switch (size) {
    case 'small':
      return {
        padding: '6px 9px',
        fontSize: 12,
      };

    case 'large':
      return {
        padding: '10px 15px',
        fontSize: 16,
      };

    default:
      return {
        padding: '8px 12px',
        fontSize: 14,
      };
  }
};

const isBlock = (block?: boolean) => {
  if (block) {
    return {
      width: '100%',
      justifyContent: 'center',
    };
  }
  return {
    width: 'auto',
  };
};

const isDisabled = (variant: TVariants, disabled?: boolean) => {
  if (disabled) {
    return {
      color: `${Color[variant].main}80`,
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
  return null;
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
    ...Typography.base,
    appearance: 'unset',
    display: 'flex',
    alignItems: 'center',
    borderRadius: Radius.normal,
    outline: 'none',
    cursor: 'pointer',
    border: '1px solid transparent',
    color: Color[variant].text,
    backgroundColor: Color[variant].main,
    transition: Transition(
      ['box-shadow', 'background-color', 'color', 'border-color'],
      '.1s linear',
    ),
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
