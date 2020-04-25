import React, { forwardRef } from 'react';
import { TabsNavs } from '../tabs.styles';

const Navs: React.FC<React.HTMLAttributes<HTMLDivElement>> = forwardRef(
  ({ children, ...props }, ref: React.Ref<HTMLDivElement>) => {
    return (
      <TabsNavs ref={ref} {...props}>
        {children}
      </TabsNavs>
    );
  },
);

Navs.displayName = 'Tabs.Navs';

export default Navs;
