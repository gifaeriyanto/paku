import React from 'react';
import ReactSelect, { components, createFilter } from 'react-select';
import { IoIosArrowDown } from 'react-icons/io';
import { FixedSizeList as List } from 'react-window';
import { customStyles, SelectWrapper, SelectOption } from './select.styles';
import { ISelect, IMenuList } from './select.types';

const optionHeight = 35;

const MenuList = ({ options, maxHeight, getValue, children }: IMenuList) => (
  <List
    width="100%"
    height={children.length > 8 ? maxHeight : children.length * optionHeight}
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
  variant = 'primary',
  customStyle,
  icon,
  ...props
}) => {
  const customComponents = {
    DropdownIndicator: (defaultProps: any) => (
      <components.DropdownIndicator {...defaultProps}>
        {icon || <IoIosArrowDown />}
      </components.DropdownIndicator>
    ),
    MenuList,
  };

  return (
    <SelectWrapper>
      <ReactSelect
        styles={customStyles(variant)}
        components={customComponents}
        classNamePrefix="paku-select"
        filterOption={createFilter({ ignoreAccents: false })}
        {...props}
      />
    </SelectWrapper>
  );
};

export default Select;
