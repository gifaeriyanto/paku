import React from 'react';
import Divider from './divider';

export default {
  title: 'Components/Divider',
  component: Divider,
};

export const Basic = () => <Divider />;

Basic.story = {
  parameters: {
    jest: ['__test__/divider.test.js'],
  },
};
