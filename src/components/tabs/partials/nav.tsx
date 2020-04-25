import React, { useContext, forwardRef } from 'react';
import { TabsNav } from '../tabs.styles';
import { ITabsNavAndPanel } from '../tabs.types';
import TabsContext from '../tabs.context';

const Nav: React.FC<ITabsNavAndPanel> = forwardRef(
  ({ tabId, children, ...props }, ref: React.Ref<HTMLDivElement>) => {
    const { activeTab, setActiveTab } = useContext(TabsContext);

    const handleClick = () => {
      setActiveTab && setActiveTab(tabId);
    };

    return (
      <TabsNav
        active={tabId === activeTab}
        onClick={handleClick}
        ref={ref}
        {...props}
      >
        {children}
      </TabsNav>
    );
  },
);

Nav.displayName = 'Tabs.Nav';

export default Nav;
