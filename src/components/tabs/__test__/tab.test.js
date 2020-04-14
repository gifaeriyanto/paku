import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render, fireEvent } from '@testing-library/react';
import Tabs from '..';

describe('Tabs', () => {
  test('basic render', () => {
    const { container } = render(
      <Tabs activeTab="tab1">
        <Tabs.Navs>
          <Tabs.Nav tabId="tab1">Tab 1</Tabs.Nav>
          <Tabs.Nav tabId="tab2">Tab 2</Tabs.Nav>
        </Tabs.Navs>

        <Tabs.Panels>
          <Tabs.Panel tabId="tab1">Panel from tab 1</Tabs.Panel>
          <Tabs.Panel tabId="tab2">Panel from tab 2</Tabs.Panel>
        </Tabs.Panels>
      </Tabs>,
    );
    expect(container).toMatchSnapshot();
  });

  test('event', () => {
    let activeTab = 'tab1';
    const handleChange = (tabId) => {
      activeTab = tabId;
    };

    const { getByText } = render(
      <Tabs activeTab={activeTab} onChange={handleChange}>
        <Tabs.Navs>
          <Tabs.Nav tabId="tab1">Tab 1</Tabs.Nav>
          <Tabs.Nav tabId="tab2">Tab 2</Tabs.Nav>
        </Tabs.Navs>

        <Tabs.Panels>
          <Tabs.Panel tabId="tab1">Panel from tab 1</Tabs.Panel>
          <Tabs.Panel tabId="tab2">Panel from tab 2</Tabs.Panel>
        </Tabs.Panels>
      </Tabs>,
    );

    fireEvent.click(getByText('Tab 2'));
    expect(activeTab).toBe('tab2');
  });
});
