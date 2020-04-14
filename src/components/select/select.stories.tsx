import React from 'react';
import faker from 'faker';
import { text, boolean } from '@storybook/addon-knobs';
import { FaCaretDown } from 'react-icons/fa';
import Select from './select';
import dummyLargeData from './dummy.json';

export default {
  title: 'Components/Select',
  component: Select,
};

type TOption = {
  [key: string]: string;
};

const generateOptions = (
  length: number,
  keyValue = 'value',
  keyLabel = 'label',
  withAvatar?: boolean,
) => {
  const options: TOption[] = Array.from(new Array(length), (_, index) => {
    const data = {
      [`${keyLabel}`]: faker.name.findName(),
      [`${keyValue}`]: index.toString(),
    };
    if (withAvatar) {
      return {
        ...data,
        avatar: faker.image.avatar(),
      };
    }
    return data;
  });
  return options;
};

export const Basic = () => (
  <Select
    isMulti={boolean('Multiple Select', false)}
    placeholder={text('Placeholder', 'Select...')}
    options={generateOptions(3)}
    isClearable
  />
);

export const CustomIcon = () => (
  <Select options={generateOptions(3)} icon={<FaCaretDown />} />
);

export const CustomOptions = () => (
  <Select
    options={generateOptions(3, 'id', 'name', true)}
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

export const DynamicObjects = () => (
  <Select
    options={generateOptions(3, 'id', 'name')}
    getOptionValue={(option: TOption) => option.id}
    getOptionLabel={(option: TOption) => option.name}
  />
);

export const LargeData = () => <Select options={dummyLargeData} />;

Basic.story = {
  parameters: {
    jest: ['__test__/select.test.js'],
  },
};
