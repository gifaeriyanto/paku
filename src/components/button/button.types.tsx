import { TVariant, TCustomStyle } from '../../utils/types';

interface IButtonBase {
  customStyle?: TCustomStyle;
  block?: boolean;
  outline?: boolean;
  size?: 'small' | 'large';
}

export interface IButton
  extends React.HTMLAttributes<HTMLButtonElement>,
    IButtonBase {
  variant?: TVariant;
}

export interface IButtonStyled extends IButtonBase {
  variant: TVariant;
  as?: React.ElementType;
  disabled?: boolean;
}
