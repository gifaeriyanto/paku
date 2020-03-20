import React from 'react';
import faker from 'faker';
import { select, text, boolean } from '@storybook/addon-knobs';
import { FaCaretDown } from 'react-icons/fa';
import Select from './select';
import dummyLargeData from './dummy.json';

export default {
  title: 'Components/Select',
  component: Select,
};

const variants = {
  Primary: 'primary',
  Secondary: 'secondary',
  Danger: 'danger',
  Neutral: 'neutral',
};

const generateOptions = (length, keyValue = 'value', keyLabel = 'label') => {
  const options = Array.from(new Array(length), (_, index) => ({
    [`${keyLabel}`]: faker.name.findName(),
    [`${keyValue}`]: index,
  }));
  return options;
};

export const Basic = () => (
  <Select
    isMulti={boolean('Multiple Select', false)}
    variant={select('Variant', variants, 'primary')}
    placeholder={text('Placeholder', 'Select...')}
    options={generateOptions(3)}
  />
);

export const CustomIcon = () => (
  <Select options={generateOptions(3)} icon={<FaCaretDown />} />
);

export const CustomOptions = () => (
  <Select
    options={generateOptions(3, 'id', 'name')}
    getOptionValue={(options) => options.id}
    getOptionLabel={(options) => options.name}
  />
);

export const LargeData = () => <Select options={dummyLargeData} />;

Basic.story = {
  parameters: {
    jest: ['__test__/select.test.js'],
  },
};
