import styled from '@emotion/styled';
import { Styles } from 'react-select';
import { Color, Typography } from '../../tokens';
import { ISelectWrapper } from './select.types';
import Transition from '../../utils/transition';

export const customStyles = (): Partial<Styles> => {
  const constrolStyle = (state: any) => {
    if (state.isFocused) {
      return {
        borderColor: Color.primary.main,
        boxShadow: `0 0 0 1px ${Color.primary.main}`,
        '&:hover': {
          borderColor: Color.primary.main,
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
      color: state.isSelected ? Color.primary.text : provided.color,
      backgroundColor: state.isSelected ? Color.primary.main : provided.color,
      '&:active': {
        backgroundColor: Color.neutral.disabled,
      },
    }),
    control: (provided, state) => ({
      ...provided,
      ...constrolStyle(state),
      minHeight: 39,
    }),
    indicatorSeparator: (provided) => ({
      ...provided,
      backgroundColor: 'transparent',
    }),
    dropdownIndicator: (provided) => ({
      ...provided,
      cursor: 'pointer',
      color: Color.placeholder,
    }),
    multiValue: (provided) => ({
      ...provided,
      backgroundColor: Color.white,
    }),
    multiValueLabel: (provided) => ({
      ...provided,
      fontSize: 14,
    }),
    multiValueRemove: (provided) => ({
      ...provided,
      color: Color.border,
      cursor: 'pointer',
      transition: Transition(['color'], '.1s linear'),
      svg: {
        width: 20,
        height: 20,
      },
      '&:hover': {
        backgroundColor: 'transparent',
        color: Color.primary.main,
      },
    }),
    clearIndicator: (provided) => ({
      ...provided,
      cursor: 'pointer',
      color: Color.placeholder,
      svg: {
        width: 20,
        height: 20,
      },
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
