import styled from '@emotion/styled';
import { Styles } from 'react-select';
import { Color, Typography, Radius } from '../../tokens';
import { ISelectWrapper } from './select.types';

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

  const dropdownIndicatorColor = (state: any) => {
    if (state.isFocused) {
      return {
        color: Color.primary.main,
      };
    }
    return {
      color: Color.border,
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
    dropdownIndicator: (provided, state) => ({
      ...provided,
      ...dropdownIndicatorColor(state),
    }),
    multiValue: (provided) => ({
      ...provided,
      color: Color.primary.main,
      backgroundColor: Color.primary.text,
      borderRadius: 30,
      border: `1px solid ${Color.border}`,
      fontWeight: 600,
      lineHeight: '17px',
      paddingLeft: 4,
    }),
    multiValueLabel: (provided) => ({
      ...provided,
      color: Color.primary.main,
    }),
    multiValueRemove: (provided) => ({
      ...provided,
      color: Color.primary.text,
      backgroundColor: Color.primary.main,
      borderRadius: 30,
      width: 18,
      height: 18,
      margin: 3,
      cursor: 'pointer',
      '&:hover': {
        color: Color.primary.text,
        backgroundColor: Color.primary.main,
      },
    }),
    clearIndicator: (provided) => ({
      ...provided,
      color: Color.neutral.text,
      width: 18,
      height: 18,
      borderRadius: Radius.circle,
      padding: 0,
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      svg: {
        width: 14,
        height: 14,
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
