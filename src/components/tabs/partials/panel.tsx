import React, { useContext, forwardRef } from 'react';
import { ITabsNavAndPanel } from '../tabs.types';
import { TabsPanels } from '../tabs.styles';
import TabsContext from '../tabs.context';

const Panel: React.FC<ITabsNavAndPanel> = forwardRef(
  ({ tabId, children, ...props }, ref: React.Ref<HTMLDivElement>) => {
    const { activeTab } = useContext(TabsContext);

    if (tabId === activeTab) {
      return (
        <TabsPanels ref={ref} {...props}>
          {children}
        </TabsPanels>
      );
    }
    return null;
  },
);

Panel.displayName = 'Tabs.Panel';

export default Panel;
