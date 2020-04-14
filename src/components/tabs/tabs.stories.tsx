import React from 'react';
import Tabs from '.';

export default {
  title: 'Components/Tabs',
  component: Tabs,
};

export const Basic = () => (
  <Tabs activeTab="tab1">
    <Tabs.Navs>
      <Tabs.Nav tabId="tab1">Tab 1</Tabs.Nav>
      <Tabs.Nav tabId="tab2">Tab 2</Tabs.Nav>
      <Tabs.Nav tabId="tab3">Tab 3</Tabs.Nav>
    </Tabs.Navs>

    <Tabs.Panels>
      <Tabs.Panel tabId="tab1">
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
      </Tabs.Panel>
      <Tabs.Panel tabId="tab2">
        Quasi non sapiente itaque qui omnis suscipit ab corporis mollitia sed
        nihil quam doloribus.
      </Tabs.Panel>
      <Tabs.Panel tabId="tab3">
        Possimus illum magnam provident quo voluptate iste autem.
      </Tabs.Panel>
    </Tabs.Panels>
  </Tabs>
);
