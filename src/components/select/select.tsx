import React from 'react';
import ReactSelect, { components, createFilter } from 'react-select';
import { IoIosArrowDown, IoIosClose, IoIosCloseCircle } from 'react-icons/io';
import { FixedSizeList as List } from 'react-window';
import { customStyles, SelectWrapper, SelectOption } from './select.styles';
import { ISelect, IMenuList } from './select.types';

const optionHeight = 37;

const setHeight = (length: number, maxHeight: number): number => {
  if (length > 8) {
    return maxHeight;
  }
  return length * optionHeight;
};

const MenuList = ({ options, maxHeight, getValue, children }: IMenuList) => (
  <List
    width="100%"
    height={setHeight(children.length, maxHeight)}
    itemCount={children.length}
    itemSize={optionHeight}
    initialScrollOffset={options.indexOf(getValue()[0]) * optionHeight}
  >
    {({ index, style }: any) => (
      <SelectOption style={style} title={options[index].label}>
        {children[index]}
      </SelectOption>
    )}
  </List>
);

const Select: React.FC<ISelect> = ({
  customStyle,
  customOption,
  icon,
  ...props
}) => {
  const customComponents = {
    DropdownIndicator: (defaultProps: any) => (
      <components.DropdownIndicator {...defaultProps}>
        {icon || <IoIosArrowDown />}
      </components.DropdownIndicator>
    ),
    Option: (defaultProps: any) => {
      if (customOption) {
        return (
          <components.Option {...defaultProps}>
            {customOption(defaultProps.data)}
          </components.Option>
        );
      }
      return <components.Option {...defaultProps} />;
    },
    ClearIndicator: (defaultProps: any) => {
      return (
        <components.ClearIndicator {...defaultProps}>
          <IoIosClose />
        </components.ClearIndicator>
      );
    },
    MultiValueRemove: (defaultProps: any) => {
      return (
        <components.MultiValueRemove {...defaultProps}>
          <IoIosCloseCircle />
        </components.MultiValueRemove>
      );
    },
    MenuList,
  };

  return (
    <SelectWrapper>
      <ReactSelect
        styles={customStyles()}
        components={customComponents}
        classNamePrefix="paku-select"
        filterOption={createFilter({ ignoreAccents: false })}
        data-testid="select"
        {...props}
      />
    </SelectWrapper>
  );
};

export default Select;
