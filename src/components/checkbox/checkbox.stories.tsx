import React from 'react';
import { action } from '@storybook/addon-actions';
import { boolean } from '@storybook/addon-knobs';
import Checkbox from './checkbox';

export default {
  title: 'Components/Checkbox',
  component: Checkbox,
};

export const Basic = () => (
  <Checkbox
    label="Checkbox"
    value="foo"
    onChange={action('onChange')}
    disabled={boolean('Disabled', false)}
    error={boolean('Error', false)}
    checked
  />
);

Basic.story = {
  parameters: {
    jest: ['__test__/checkbox.test.js'],
  },
};
