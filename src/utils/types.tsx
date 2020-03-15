import { CSSProperties } from 'react';

export type TVariants =
  | 'primary'
  | 'secondary'
  | 'success'
  | 'warning'
  | 'danger'
  | 'neutral'
  | 'clean';

export type TCustomStyle =
  | CSSProperties
  | {
      [key: string]: CSSProperties | TCustomStyle;
    };
