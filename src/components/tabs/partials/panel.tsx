import React, { useContext } from 'react';
import { ITabsNavAndPanel } from '../tabs.types';
import { TabsPanels } from '../tabs.styles';
import TabsContext from '../tabs.context';

const Panel: React.FC<ITabsNavAndPanel> = ({ tabId, children }) => {
  const { activeTab } = useContext(TabsContext);

  if (tabId === activeTab) {
    return <TabsPanels>{children}</TabsPanels>;
  }
  return null;
};

Panel.displayName = 'Tabs.Panel';

export default Panel;
