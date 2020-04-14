import React from 'react';
import { TabsPanels } from '../tabs.styles';

const Panels: React.FC = ({ children }) => {
  return <TabsPanels>{children}</TabsPanels>;
};

Panels.displayName = 'Tabs.Panels';

export default Panels;
