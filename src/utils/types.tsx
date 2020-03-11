import { CSSProperties } from 'react';

export type TVariant =
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
