import { TVariants, TCustomStyle } from '../../utils/types';

export interface ISelect {
  variant?: TVariants;
  customStyle?: TCustomStyle;
  icon?: React.ReactNode;
}

export interface ISelectWrapper {
  customStyle?: TCustomStyle;
}

export interface IMenuList {
  options: any;
  children: any;
  maxHeight: number;
  getValue: () => any;
}
