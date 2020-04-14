import React from 'react';
import { RowStyled } from './row.styles';
import { IRow } from './row.types';

const Row: React.FC<IRow> = ({ center = false, children }) => (
  <RowStyled className="paku-grid-row" center={center}>
    {children}
  </RowStyled>
);

export default Row;
