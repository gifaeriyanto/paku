interface IContainerBase {
  noPadding?: boolean;
  verticalSpace?: number;
  fluid?: boolean;
}

export interface IContainer
  extends IContainerBase,
    React.HTMLAttributes<HTMLDivElement> {
  gutter?: number;
  size?: number;
}

export interface IContainerStyled extends IContainerBase {
  gutter: number;
  size: number;
}
