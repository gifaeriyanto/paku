import React, { useState } from 'react';
import { IoMdCheckmark } from 'react-icons/io';
import { ICheckbox } from './checkbox.types';
import { CheckboxStyled, CheckboxBox, CheckboxLabel } from './checkbox.styles';

const Checkbox: React.FC<ICheckbox> = ({
  disabled = false,
  error = false,
  value = '',
  label,
  checked,
  customStyle,
  onChange,
  ...props
}) => {
  const [isChecked, setIsChecked] = useState(Boolean(checked));

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setIsChecked(e.currentTarget.checked);
    onChange && onChange(e.currentTarget.checked, e.currentTarget.value);
  };

  return (
    <CheckboxStyled
      checked={isChecked}
      disabled={disabled}
      error={error}
      data-testid="checkbox"
    >
      <input
        type="checkbox"
        checked={isChecked}
        onChange={handleChange}
        disabled={disabled}
        value={value}
        aria-hidden
        {...props}
      />
      <CheckboxBox className="paku-checkbox-box" checked={isChecked}>
        <IoMdCheckmark />
      </CheckboxBox>
      <CheckboxLabel className="paku-checkbox-label">{label}</CheckboxLabel>
    </CheckboxStyled>
  );
};

export default Checkbox;
