import React, { forwardRef } from 'react';
import { DividerStyled } from './divider.styles';

const Divider: React.FC<React.HTMLAttributes<HTMLDivElement>> = forwardRef(
  ({ ...props }, ref: React.Ref<HTMLDivElement>) => {
    return <DividerStyled ref={ref} {...props} />;
  },
);

Divider.displayName = 'Divider';

export default Divider;
