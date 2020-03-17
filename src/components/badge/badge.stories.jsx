import React from 'react';
import { text, object, select, boolean } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';
import Badge from './badge';

export default {
  title: 'Components/Badge',
  component: Badge,
};

const variants = {
  Primary: 'primary',
  Secondary: 'secondary',
  Danger: 'danger',
  Neutral: 'neutral',
};

const sizes = {
  Small: 'small',
  Medium: 'medium',
  Large: 'large',
};

const outlines = {
  None: false,
  Common: true,
  'With Color': 'withColor',
};

export const Basic = () => (
  <Badge
    variant={select('Variant', variants, 'primary')}
    size={select('Size', sizes, 'medium')}
    outline={select('Outline', outlines, false)}
    closeable={boolean('Closeable', false)}
  >
    {text('Text', 'Badge')}
  </Badge>
);

export const CustomStyle = () => (
  <Badge
    customStyle={object('Custom Style', {
      backgroundColor: 'black',
    })}
  >
    Custom Badge
  </Badge>
);

export const ActionClose = () => (
  <Badge onClose={action('onClose')}>Badge</Badge>
);

Basic.story = {
  parameters: {
    jest: ['__test__/Badge.test.js'],
  },
};
