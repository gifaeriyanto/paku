import React from 'react';
import { IContainer } from './container.types';
import { ContainerStyled } from './container.styles';

const Container: React.FC<IContainer> = ({
  gutter = 32,
  size = 1140,
  fluid,
  noPadding,
  children,
  verticalSpace,
}) => (
  <ContainerStyled
    gutter={gutter}
    noPadding={noPadding}
    size={size}
    verticalSpace={verticalSpace}
    fluid={fluid}
  >
    {children}
  </ContainerStyled>
);

export default Container;
