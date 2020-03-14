type TBreakpoint = {
  extraSmall: string;
  small: string;
  medium: string;
  large: string;
};

export interface IMediaQuery {
  up: TBreakpoint & {
    extraLarge: string;
  };
  down: TBreakpoint;
}
