import { TVariant } from '../../utils/types';

interface IBase {
  customStyle?: any;
  block?: boolean;
}

export interface IButton
  extends React.HTMLAttributes<HTMLButtonElement>,
    IBase {
  variant?: TVariant;
}

export interface IButtonStyled extends IBase {
  variant: TVariant;
  as?: React.ElementType;
  disabled?: boolean;
}
