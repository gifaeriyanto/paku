import React from 'react';
import { text, object } from '@storybook/addon-knobs';
import { Button } from '../';

export default {
  title: 'Components/Button',
  component: Button,
};

export const Basic = () => <Button>{text('Text', 'Button')}</Button>;
export const CustomStyle = () => (
  <Button
    customStyle={object('Custom Style', {
      fontWeight: 600,
      '&:hover': {
        color: '#3498db',
      },
    })}
  >
    {text('Text', 'Button')}
  </Button>
);
