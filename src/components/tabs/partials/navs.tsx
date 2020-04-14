import React from 'react';
import { TabsNavs } from '../tabs.styles';

const Navs: React.FC = ({ children }) => {
  return <TabsNavs>{children}</TabsNavs>;
};

Navs.displayName = 'Tabs.Navs';

export default Navs;
