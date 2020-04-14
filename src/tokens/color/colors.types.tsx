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
  background: {
    level1: string;
    level2: string;
    level3: string;
  };
  border: string;
  placeholder: string;
  white: string;
  black: string;
}
