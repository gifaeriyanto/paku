import { TVariants, TCustomStyle } from '../../utils/types';

interface IBadgeBase {
  customStyle?: TCustomStyle;
  size?: 'small' | 'large';
  outline?: boolean | 'withColor';
  closeable?: boolean;
}

export interface IBadge extends IBadgeBase {
  variant?: TVariants;
  onClose?: () => void;
}

export interface IBadgeStyled extends IBadgeBase {
  variant: TVariants;
}
