import React from 'react';
import { FaSearch } from 'react-icons/fa';
import { text, object, select, boolean } from '@storybook/addon-knobs';
import Button from './button';
import { TVariants } from '../../utils/types';

export default {
  title: 'Components/Button',
  component: Button,
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
  <Button
    variant={select('Variant', variants, 'primary') as TVariants}
    size={select('Size', sizes, 'medium') as 'small' | 'large'}
    disabled={boolean('Disabled', false)}
    block={boolean('Block', false)}
    outline={boolean('Outline', false)}
  >
    {text('Text', 'Button')}
  </Button>
);

export const OutlineWithColor = () => (
  <Button outline="withColor">Button</Button>
);

export const CustomStyle = () => (
  <Button
    customStyle={object('Custom Style', {
      fontWeight: 600,
      transition: 'all .1s linear',
      '&:hover': {
        transform: 'scale(1.1)',
      },
    })}
  >
    Custom Button
  </Button>
);

export const WithIcon = () => (
  <Button
    icon={<FaSearch />}
    iconRight={boolean('Icon Right', false)}
    iconOnly={boolean('Icon Only', false)}
  >
    Search
  </Button>
);

Basic.story = {
  parameters: {
    jest: ['__test__/button.test.js'],
  },
};
