import { CSSProperties } from 'react';

export type TVariants = 'primary' | 'secondary' | 'danger' | 'neutral';

export type TSize = 'small' | 'medium' | 'large';

export type TCustomStyle =
  | CSSProperties
  | {
      [key: string]: CSSProperties | TCustomStyle;
    };
