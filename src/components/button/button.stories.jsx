import React from 'react';
import { FaSearch } from 'react-icons/fa';
import { text, object, select, boolean } from '@storybook/addon-knobs';
import Button from './button';

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
  Medium: false,
  Large: 'large',
};

const outlines = {
  None: false,
  Common: true,
  'With Color': 'withColor',
};

export const Basic = () => (
  <Button
    variant={select('Variants', variants, 'primary')}
    size={select('Size', sizes, false)}
    disabled={boolean('Disabled', false)}
    block={boolean('Block', false)}
    outline={select('Outline', outlines, false)}
  >
    {text('Text', 'Button')}
  </Button>
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
