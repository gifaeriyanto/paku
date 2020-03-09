import React from 'react';
import { text } from '@storybook/addon-knobs';
import { Button } from '../';

export default {
  title: 'Components/Button',
  component: Button,
};

export const Basic = () => <Button>{text('Text', 'Button')}</Button>;
export const CustomStyle = () => (
  <Button
    customStyle={{
      borderRadius: 50,
      borderColor: '#000',
      backgroundColor: '#000',
      color: '#fff',
      paddingLeft: 20,
      paddingRight: 20,
      '&:hover': {
        borderColor: '#ccc',
        boxShadow: '0 0 0 4px #ccc',
      },
    }}
  >
    {text('Text', 'Button')}
  </Button>
);
