import { Color } from '../tokens';
import { TVariants } from './types';

export const isOutline = (
  variant: TVariants,
  outline?: boolean | 'withColor',
  withoutEvent?: boolean,
) => {
  let borderColor = Color.border;
  if (outline === 'withColor') {
    borderColor = Color[variant].main;
  }

  let events = {};
  if (!withoutEvent) {
    events = {
      '&:hover': {
        color: Color[variant].hover,
        border: `1px solid ${Color[variant].hover}`,
      },
      '&:active': {
        color: Color[variant].active,
        border: `1px solid ${Color[variant].active}`,
      },
    };
  }

  if (outline) {
    return {
      backgroundColor: '#fff',
      border: `1px solid ${borderColor}`,
      color: Color[variant].main,
      ...events,
    };
  }
  return null;
};
