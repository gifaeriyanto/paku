import React, { forwardRef } from 'react';
import { IContainer } from './container.types';
import { ContainerStyled } from './container.styles';

const Container: React.FC<IContainer> = forwardRef(
  (
    {
      gutter = 32,
      size = 1140,
      fluid,
      noPadding,
      children,
      verticalSpace,
      ...props
    },
    ref: React.Ref<HTMLDivElement>,
  ) => (
    <ContainerStyled
      gutter={gutter}
      noPadding={noPadding}
      size={size}
      verticalSpace={verticalSpace}
      fluid={fluid}
      ref={ref}
      data-testid="paku-grid-container"
      {...props}
    >
      {children}
    </ContainerStyled>
  ),
);

Container.displayName = 'Container';

export default Container;
