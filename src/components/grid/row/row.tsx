import React, { forwardRef } from 'react';
import { RowStyled } from './row.styles';
import { IRow } from './row.types';

const Row: React.FC<IRow> = forwardRef(
  ({ center = false, children, ...props }, ref: React.Ref<HTMLDivElement>) => (
    <RowStyled
      className="paku-grid-row"
      center={center}
      ref={ref}
      data-testid="paku-grid-row"
      {...props}
    >
      {children}
    </RowStyled>
  ),
);

Row.displayName = 'Row';

export default Row;
