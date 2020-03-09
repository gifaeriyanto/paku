import { TObjectStyles } from '../../theme/theme.types';

export interface IButton extends React.HTMLAttributes<HTMLButtonElement> {
  customStyle?: TObjectStyles;
}

export interface IButtonBase {
  customStyle?: TObjectStyles;
  as?: React.ElementType;
}
