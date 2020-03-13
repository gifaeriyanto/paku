import { TVariant, TCustomStyle } from '../../utils/types';

interface IButtonBase {
  customStyle?: TCustomStyle;
  size?: 'small' | 'large';
  block?: boolean;
  outline?: boolean;
  icon?: React.ReactNode;
  iconRight?: boolean;
  iconOnly?: boolean;
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
