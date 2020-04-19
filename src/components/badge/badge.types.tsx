import { TVariants, TCustomStyle, TSize } from '../../utils/types';

interface IBadgeBase {
  customStyle?: TCustomStyle;
  size?: TSize;
  outline?: boolean | 'withColor';
  closeable?: boolean;
  rounded?: boolean;
}

export interface IBadge
  extends IBadgeBase,
    React.HTMLAttributes<HTMLDivElement> {
  variant?: TVariants;
  onClose?: () => void;
}

export interface IBadgeStyled extends IBadgeBase {
  variant: TVariants;
}
