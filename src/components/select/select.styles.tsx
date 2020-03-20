import styled from '@emotion/styled';
import { Styles } from 'react-select';
import { TVariants } from '../../utils/types';
import { Color, Typography } from '../../tokens';
import { ISelectWrapper } from './select.types';

export const customStyles = (variant: TVariants): Partial<Styles> => {
  const constrolStyle = (state: any) => {
    if (state.isFocused) {
      return {
        borderColor: Color[variant].main,
        boxShadow: `0 0 0 1px ${Color[variant].main}`,
        '&:hover': {
          borderColor: Color[variant].main,
        },
      };
    }

    return {
      borderColor: Color.border,
    };
  };

  return {
    option: (provided, state) => ({
      ...provided,
      cursor: 'pointer',
      color: state.isSelected ? Color[variant].text : provided.color,
      backgroundColor: state.isSelected ? Color[variant].main : provided.color,
      '&:active': {
        backgroundColor: Color[variant].outline,
      },
    }),
    control: (provided, state) => ({
      ...provided,
      ...constrolStyle(state),
    }),
    indicatorSeparator: (provided) => ({
      ...provided,
      backgroundColor: 'transparent',
    }),
  };
};

export const SelectWrapper = styled.div<ISelectWrapper>(({ customStyle }) => ({
  ...Typography.base,
  ...customStyle,
}));

export const SelectOption = styled.div({
  '& > div': {
    width: '100%',
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
  },
});
