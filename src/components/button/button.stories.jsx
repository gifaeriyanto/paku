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

export const Basic = () => (
  <Button
    variant={select('Variants', variants, 'primary')}
    disabled={boolean('Disabled', false)}
    block={boolean('Block', false)}
  >
    {text('Text', 'Button')}
  </Button>
);

export const CustomStyle = () => (
  <Button
    customStyle={object('Custom Style', {
      fontWeight: 600,
      '&:hover': {
        color: '#3498db',
      },
    })}
  >
    Custom Button
  </Button>
);
