import React, { forwardRef } from 'react';
import { TabsPanels } from '../tabs.styles';

const Panels: React.FC<React.HTMLAttributes<HTMLDivElement>> = forwardRef(
  ({ children, ...props }, ref: React.Ref<HTMLDivElement>) => {
    return (
      <TabsPanels ref={ref} {...props}>
        {children}
      </TabsPanels>
    );
  },
);

Panels.displayName = 'Tabs.Panels';

export default Panels;
