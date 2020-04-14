import React, { useContext, useState, useEffect } from 'react';
import { TabsNavs, TabsNav, TabsPanels } from './tabs.styles';
import { ITabs, ISubTabs, ITabsNavAndPanel, ITabsContext } from './tabs.types';

const TabsContext = React.createContext<ITabsContext>({
  activeTab: '',
  setActiveTab: undefined,
});

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

// // // // // // // // // // // // // // // // // // // // // // // // //

const Panel: React.FC<ITabsNavAndPanel> = ({ tabId, children }) => {
  const { activeTab } = useContext(TabsContext);

  if (tabId === activeTab) {
    return <TabsPanels>{children}</TabsPanels>;
  }
  return null;
};

Panel.displayName = 'Tabs.Panel';

// // // // // // // // // // // // // // // // // // // // // // // // //

const Navs: React.FC = ({ children }) => {
  return <TabsNavs>{children}</TabsNavs>;
};

Navs.displayName = 'Tabs.Navs';

// // // // // // // // // // // // // // // // // // // // // // // // //

const Panels: React.FC = ({ children }) => {
  return <TabsPanels>{children}</TabsPanels>;
};

Panels.displayName = 'Tabs.Panels';

// // // // // // // // // // // // // // // // // // // // // // // // //

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
