import React, { useState, useEffect } from 'react';
import { ITabs, ISubTabs } from './tabs.types';
import Navs from './partials/navs';
import Nav from './partials/nav';
import Panel from './partials/panel';
import Panels from './partials/panels';
import TabsContext from './tabs.context';

const Tabs: React.FC<ITabs> & ISubTabs = ({
  activeTab,
  onChange,
  children,
}) => {
  const [activeTabId, setActiveTabId] = useState(activeTab);

  useEffect(() => {
    onChange && onChange(activeTabId);
  }, [activeTabId]);

  const handleChangeActiveTab = (tabId: string) => {
    setActiveTabId(tabId);
  };

  return (
    <TabsContext.Provider
      value={{
        activeTab: activeTabId,
        setActiveTab: handleChangeActiveTab,
      }}
    >
      {children}
    </TabsContext.Provider>
  );
};

export default Tabs;
Tabs.Nav = Nav;
Tabs.Navs = Navs;
Tabs.Panel = Panel;
Tabs.Panels = Panels;
