import { TVariants } from '../../utils/types';

type TColor = {
  [key in TVariants]: {
    main: string;
    text: string;
    hover: string;
    active: string;
    disabled: string;
    outline: string;
  };
};

export interface IColor extends TColor {
  border: string;
  white: string;
  black: string;
}
