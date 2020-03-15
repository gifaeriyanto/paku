import { TVariants, TCustomStyle } from '../../utils/types';

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
  variant?: TVariants;
}

export interface IButtonStyled extends IButtonBase {
  variant: TVariants;
  as?: React.ElementType;
  disabled?: boolean;
}
