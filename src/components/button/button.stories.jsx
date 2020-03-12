import React from 'react';
import { text, object, select, boolean } from '@storybook/addon-knobs';
import { Button } from '..';

export default {
  title: 'Components/Button',
  component: Button,
};

const variants = {
  Primary: 'primary',
  Secondary: 'secondary',
  Success: 'success',
  Warning: 'warning',
  Danger: 'danger',
  Neutral: 'neutral',
  Clean: 'clean',
};

const sizes = {
  Small: 'small',
  Normal: '',
  Large: 'large',
};

export const Basic = () => (
  <Button
    variant={select('Variants', variants, 'primary')}
    disabled={boolean('Disabled', false)}
    block={boolean('Block', false)}
    size={select('Size', sizes, '')}
    iconOnly
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
