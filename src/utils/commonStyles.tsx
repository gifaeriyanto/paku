import { Color } from '../tokens';
import { TVariants } from './types';

export const isOutline = (
  variant: TVariants,
  outline?: boolean | 'withColor',
) => {
  let borderColor = Color.border;
  if (outline === 'withColor') {
    borderColor = Color[variant].main;
  }

  if (outline) {
    return {
      backgroundColor: '#fff',
      border: `1px solid ${borderColor}`,
      color: Color[variant].main,
      '&:hover': {
        backgroundColor: '#fff',
        color: Color[variant].hover,
        border: `1px solid ${Color[variant].hover}`,
      },
      '&:active': {
        backgroundColor: '#fff',
        color: Color[variant].active,
        border: `1px solid ${Color[variant].active}`,
      },
    };
  }
  return {};
};
