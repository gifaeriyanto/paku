import React, { forwardRef } from 'react';
import { ColStyled } from './col.styles';
import { ICol } from './col.types';

const Col: React.FC<ICol> = forwardRef(
  (
    { xs, sm, md, lg, xl, offset, children, ...props },
    ref: React.Ref<HTMLDivElement>,
  ) => (
    <ColStyled
      className="paku-grid-col"
      xs={xs}
      sm={sm}
      md={md}
      lg={lg}
      xl={xl}
      offset={offset}
      ref={ref}
      {...props}
    >
      {children}
    </ColStyled>
  ),
);

Col.displayName = 'Col';

export default Col;
