import { TCustomStyle } from '../../utils/types';

export type TInputType = 'text' | 'password' | 'number';

export interface IInputBase {
  customStyle?: TCustomStyle;
}

export interface IInput
  extends React.HTMLAttributes<HTMLInputElement>,
    IInputBase {
  type?: TInputType;
  addonBefore?: React.ReactNode;
  addonAfter?: React.ReactNode;
  min?: number;
  max?: number;
  step?: number;
  value?: string;
  noExtraControl?: boolean;
}

export interface IInputWrapper extends IInputBase {
  focus: boolean;
}
