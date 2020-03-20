import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render } from '@testing-library/react';
import Select from '..';
import dummyData from '../dummy.json';

const options = [
  {
    label: 'Tamia Hettinger',
    value: 0,
  },
  {
    label: 'Summer Brown',
    value: 1,
  },
  {
    label: 'Ardella Gaylord',
    value: 2,
  },
];

describe('Select', () => {
  test('basic render', () => {
    const { container } = render(<Select options={options} />);
    expect(container).toMatchSnapshot();
  });

  test('variants', () => {
    const { container } = render(
      <>
        <Select variant="primary" value={options[1]} options={options} />
        <Select variant="secondary" value={options[1]} options={options} />
        <Select variant="danger" value={options[1]} options={options} />
        <Select variant="neutral" value={options[1]} options={options} />
      </>,
    );
    expect(container).toMatchSnapshot();
  });

  test('custom icon', () => {
    const { container } = render(
      <Select value={options[1]} options={options} icon={<div>+</div>} />,
    );
    expect(container).toMatchSnapshot();
  });

  test('large(2000) data', () => {
    const { container } = render(
      <Select value={dummyData[1]} options={dummyData} />,
    );
    expect(container).toMatchSnapshot();
  });
});
