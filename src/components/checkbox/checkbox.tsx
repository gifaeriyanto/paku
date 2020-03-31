import React, { useState, useEffect } from 'react';
import { v1 as uuidv1 } from 'uuid';
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
  const [id, setId] = useState('');
  const [isChecked, setIsChecked] = useState(Boolean(checked));

  useEffect(() => {
    if (!id) {
      setId(uuidv1());
    }
  }, [id]);

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
        id={id}
        checked={isChecked}
        onChange={handleChange}
        disabled={disabled}
        value={value}
        aria-hidden
        {...props}
      />
      <CheckboxBox className="paku-checkbox__box" checked={isChecked}>
        <IoMdCheckmark />
      </CheckboxBox>
      <CheckboxLabel className="paku-checkbox__label">{label}</CheckboxLabel>
    </CheckboxStyled>
  );
};

export default Checkbox;
