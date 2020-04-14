import { Props as ReactSelectProps } from 'react-select';
import { TCustomStyle } from '../../utils/types';

export interface ISelect
  extends ReactSelectProps<{
    [key: string]: any;
  }> {
  customStyle?: TCustomStyle;
  customOption?: (option: any) => JSX.Element;
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
