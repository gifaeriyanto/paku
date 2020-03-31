import React from 'react';
import faker from 'faker';
import { select, text, boolean } from '@storybook/addon-knobs';
import { FaCaretDown } from 'react-icons/fa';
import Select from './select';
import dummyLargeData from './dummy.json';
import { TVariants } from '../../utils/types';

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

type TOption = {
  [key: string]: string;
};

const generateOptions = (
  length: number,
  keyValue = 'value',
  keyLabel = 'label',
) => {
  const options: TOption[] = Array.from(new Array(length), (_, index) => ({
    [`${keyLabel}`]: faker.name.findName(),
    [`${keyValue}`]: index.toString(),
    avatar: faker.image.avatar(),
  }));
  return options;
};

export const Basic = () => (
  <Select
    isMulti={boolean('Multiple Select', false)}
    variant={select('Variant', variants, 'primary') as TVariants}
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
    getOptionValue={(option: TOption) => option.id}
    getOptionLabel={(option: TOption) => option.name}
  />
);

export const CustomOptionsStyle = () => (
  <Select
    options={generateOptions(3, 'id', 'name')}
    getOptionValue={(option: TOption) => option.id}
    getOptionLabel={(option: TOption) => option.name}
    customOption={(option: TOption) => (
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <img
          src={option.avatar}
          alt={option.name.toString()}
          style={{
            width: 20,
            height: 20,
            borderRadius: '50%',
            marginRight: 10,
            backgroundColor: '#eee',
          }}
        />
        {option.name}
      </div>
    )}
  />
);

export const LargeData = () => <Select options={dummyLargeData} />;

Basic.story = {
  parameters: {
    jest: ['__test__/select.test.js'],
  },
};
