export interface ITabsContext {
  activeTab: string;
  setActiveTab?: (activeTab: string) => void;
}

export interface ITabsNavAndPanel extends React.HTMLAttributes<HTMLDivElement> {
  tabId: string;
}

export interface ITabsNavStyled {
  active?: boolean;
}

export interface ISubTabs {
  Nav: React.FC<ITabsNavAndPanel>;
  Navs: React.FC;
  Panel: React.FC<ITabsNavAndPanel>;
  Panels: React.FC;
}

export interface ITabs {
  activeTab: string;
  onChange?: (activeTab: string) => void;
}
