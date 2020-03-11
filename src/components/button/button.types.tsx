import { TVariant } from '../../utils/types';

interface IBase {
  customStyle?: any;
  variant?: TVariant;
  block?: boolean;
}

export interface IButton
  extends React.HTMLAttributes<HTMLButtonElement>,
    IBase {}

export interface IButtonStyled extends IBase {
  as?: React.ElementType;
  disabled?: boolean;
}
