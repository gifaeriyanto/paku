import React from 'react';
import { text, object, select, boolean } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';
import Badge from './badge';
import { TVariants } from '../../utils/types';

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

export const Basic = () => (
  <Badge
    variant={select('Variant', variants, 'primary') as TVariants}
    size={select('Size', sizes, 'medium') as 'small' | 'large'}
    outline={boolean('Outline', false)}
    closeable={boolean('Closeable', false)}
    rounded={boolean('Rounded', false)}
  >
    {text('Text', 'Badge')}
  </Badge>
);

export const OutlineWithColor = () => <Badge outline="withColor">Badge</Badge>;

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
    jest: ['__test__/badge.test.js'],
  },
};
