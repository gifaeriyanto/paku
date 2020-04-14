import React from 'react';
import { ColStyled } from './col.styles';
import { ICol } from './col.types';

const Col: React.FC<ICol> = ({ xs, sm, md, lg, xl, offset, children }) => (
  <ColStyled
    className="paku-grid-col"
    xs={xs}
    sm={sm}
    md={md}
    lg={lg}
    xl={xl}
    offset={offset}
  >
    {children}
  </ColStyled>
);

export default Col;
