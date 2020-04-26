import React from 'react';
import { action } from '@storybook/addon-actions';
import { boolean, color } from '@storybook/addon-knobs';
import Dropdown from './dropdown';

export default {
  title: 'Components/Dropdown',
  component: Dropdown,
};

export const Basic = () => (
  <Dropdown>
    <Dropdown.Toggle>Click here</Dropdown.Toggle>
    <Dropdown.Menu right={boolean('Right Menu', false)}>
      <Dropdown.Item
        active={boolean('Active', true)}
        onClick={action('onClick')}
        color={color('Color Option 1', '#000')}
      >
        Option 1
      </Dropdown.Item>
      <Dropdown.Item
        onClick={action('onClick')}
        color={color('Color Option 2', '#000')}
      >
        Option 2
      </Dropdown.Item>
    </Dropdown.Menu>
  </Dropdown>
);

export const AsLink = () => (
  <Dropdown>
    <Dropdown.Toggle>Click here</Dropdown.Toggle>
    <Dropdown.Menu>
      <Dropdown.Item as="a" href="https://www.google.com/" target="_blank">
        Open in new tab
      </Dropdown.Item>
      <Dropdown.Item as="a" href="https://www.google.com/">
        Go to Google
      </Dropdown.Item>
      <Dropdown.Item as="a" href="https://www.facebook.com/">
        Go to Facebook
      </Dropdown.Item>
    </Dropdown.Menu>
  </Dropdown>
);

Basic.story = {
  parameters: {
    jest: ['__test__/dropdown.test.js'],
  },
};
