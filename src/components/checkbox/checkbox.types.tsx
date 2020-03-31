import { TCustomStyle } from '../../utils/types';

export interface ICheckbox
  extends Omit<React.HTMLAttributes<HTMLInputElement>, 'onChange'> {
  label: string;
  checked?: boolean;
  customStyle?: TCustomStyle;
  value?: string;
  onChange?: (checked: boolean, value: string) => void;
  disabled?: boolean;
  error?: boolean;
}

export interface ICheckboxBox {
  checked: boolean;
}

export interface ICheckboxStyled extends ICheckboxBox {
  disabled: boolean;
  error: boolean;
}
