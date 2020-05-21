import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render, fireEvent } from '@testing-library/react';
import Select from '..';
import { Color } from '../../../tokens';

const options = [
  {
    label: 'Colten Zboncak',
    value: 0,
  },
  {
    label: 'Dr. Lillian Hodkiewicz',
    value: 1,
  },
  {
    label: "Jaden O'Reilly",
    value: 2,
  },
  {
    label: 'Mariela Reinger',
    value: 3,
  },
];

const largeOptions = [
  {
    label: 'Colten Zboncak',
    value: 0,
  },
  {
    label: 'Dr. Lillian Hodkiewicz',
    value: 1,
  },
  {
    label: "Jaden O'Reilly",
    value: 2,
  },
  {
    label: 'Mariela Reinger',
    value: 3,
  },
  {
    label: 'Dave Runolfsson',
    value: 4,
  },
  {
    label: 'Jacey Cassin',
    value: 5,
  },
  {
    label: 'Hassan Schoen',
    value: 6,
  },
  {
    label: 'Carroll Sanford',
    value: 7,
  },
  {
    label: 'Mrs. Halle Smitham',
    value: 8,
  },
  {
    label: 'Danny Leffler',
    value: 9,
  },
  {
    label: 'Mattie McGlynn',
    value: 10,
  },
];

describe('Select', () => {
  test('basic render', () => {
    const { container } = render(<Select options={options} />);
    expect(container).toMatchSnapshot();
  });

  test('multi values', () => {
    const { container } = render(
      <Select
        isMulti
        options={options}
        value={[
          {
            label: 'Colten Zboncak',
            value: 0,
          },
          {
            label: 'Dr. Lillian Hodkiewicz',
            value: 1,
          },
        ]}
      />,
    );
    expect(container).toMatchSnapshot();
  });

  test('open menu', () => {
    const { container } = render(
      <Select options={options} value={options[0]} defaultMenuIsOpen />,
    );
    expect(container.getElementsByClassName('paku-select__menu')).toHaveLength(
      1,
    );
  });

  test('large options', () => {
    const { container } = render(
      <Select
        options={largeOptions}
        value={largeOptions[0]}
        defaultMenuIsOpen
      />,
    );
    expect(container).toMatchSnapshot();
  });

  test('custom icon', () => {
    const { container } = render(
      <Select
        value={options[1]}
        options={options}
        icon={<div className="paku-select-icon">+</div>}
      />,
    );
    expect(container.getElementsByClassName('paku-select-icon')).toHaveLength(
      1,
    );
  });

  test('custom option', () => {
    const { container } = render(
      <Select
        options={options}
        customOption={(option) => (
          <b>
            {option.value} - {option.label}
          </b>
        )}
        defaultMenuIsOpen
      />,
    );
    expect(container.getElementsByTagName('b')[0]).toHaveTextContent(
      `${options[0].value} - ${options[0].label}`,
    );
  });

  test('focus event style', () => {
    const { container, getByRole } = render(
      <Select options={options} defaultMenuIsOpen />,
    );

    fireEvent.focus(getByRole('textbox'));

    expect(
      container.getElementsByClassName('paku-select__control')[0],
    ).toHaveStyle({
      borderColor: Color.primary.main,
    });
  });
});
