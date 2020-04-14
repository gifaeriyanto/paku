import React, { useContext } from 'react';
import { TabsNav } from '../tabs.styles';
import { ITabsNavAndPanel } from '../tabs.types';
import TabsContext from '../tabs.context';

const Nav: React.FC<ITabsNavAndPanel> = ({ tabId, children }) => {
  const { activeTab, setActiveTab } = useContext(TabsContext);

  const handleClick = () => {
    setActiveTab && setActiveTab(tabId);
  };

  return (
    <TabsNav active={tabId === activeTab} onClick={handleClick}>
      {children}
    </TabsNav>
  );
};

Nav.displayName = 'Tabs.Nav';

export default Nav;
