import React from 'react';
import { text } from '@storybook/addon-knobs';
import Button from './';

export default {
  title: 'Components/Button',
  component: Button,
};

export const Text = () => <Button name="halo">{text('Text', 'Button')}</Button>;
