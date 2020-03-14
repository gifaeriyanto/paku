import { IMediaQuery } from './mediaQuery.types';

export const Breakpoint = {
  small: 575.98,
  medium: 767.98,
  large: 991.98,
  extraLarge: 1199.98,
};

const MediaQuery: IMediaQuery = {
  up: {
    extraSmall: '@media (min-width: 0px)',
    small: `@media (min-width: ${Math.round(Breakpoint.small)}px)`,
    medium: `@media (min-width: ${Math.round(Breakpoint.medium)}px)`,
    large: `@media (min-width: ${Math.round(Breakpoint.large)}px)`,
    extraLarge: `@media (min-width: ${Math.round(Breakpoint.extraLarge)}px)`,
  },
  down: {
    extraSmall: `@media (max-width: ${Breakpoint.small}px)`,
    small: `@media (max-width: ${Breakpoint.medium}px)`,
    medium: `@media (max-width: ${Breakpoint.large}px)`,
    large: `@media (max-width: ${Breakpoint.extraLarge}px)`,
  },
};

export default MediaQuery;
