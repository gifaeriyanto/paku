import { createContext } from 'react';
import { ITabsContext } from './tabs.types';

const TabsContext = createContext<ITabsContext>({
  activeTab: '',
  setActiveTab: undefined,
});

export default TabsContext;
