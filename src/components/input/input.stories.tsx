import React from 'react';
import { text, object, number, boolean } from '@storybook/addon-knobs';
import Input from './input';

export default {
  title: 'Components/Input',
  component: Input,
};

export const Basic = () => (
  <Input placeholder={text('Placeholder', 'Type here...')} />
);

export const CustomStyle = () => (
  <Input
    placeholder="Your phone number"
    addonBefore="+62"
    customStyle={object('Custom Style', {
      '.paku-input-addon-before': {
        backgroundColor: '#fff',
        paddingTop: 0,
        paddingBottom: 0,
      },
    })}
  />
);

export const WithAddon = () => (
  <Input
    placeholder="Your site"
    addonBefore={text('Addon Before', 'https://')}
    addonAfter={text('Addon After', '.com')}
  />
);

export const InputPassword = () => (
  <Input
    placeholder="Password"
    type="password"
    noExtraControl={boolean('No Extra Control', false)}
  />
);

export const InputNumber = () => (
  <Input
    placeholder="Quantity"
    type="number"
    value={String(number('Value', 0))}
    step={number('Step', 5)}
    min={number('Minimum', 0)}
    max={number('Maximum', 30)}
    noExtraControl={boolean('No Extra Control', false)}
  />
);

Basic.story = {
  parameters: {
    jest: ['__test__/input.test.js'],
  },
};
