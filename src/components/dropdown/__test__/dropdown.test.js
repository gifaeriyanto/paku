import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render, fireEvent } from '@testing-library/react';
import Dropdown from '../dropdown';

describe('Dropdown', () => {
  test('basic render', () => {
    const { container } = render(
      <Dropdown>
        <Dropdown.Toggle>Show Menu</Dropdown.Toggle>
        <Dropdown.Menu>
          <Dropdown.Item active>Item 1</Dropdown.Item>
          <Dropdown.Item>Item 2</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>,
    );

    expect(container).toMatchSnapshot();
  });

  test('align right', () => {
    const { getByTestId } = render(
      <Dropdown>
        <Dropdown.Toggle>Show Menu</Dropdown.Toggle>
        <Dropdown.Menu right>
          <Dropdown.Item active>Item 1</Dropdown.Item>
          <Dropdown.Item>Item 2</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>,
    );
    expect(getByTestId('paku-dropdown-menu')).toHaveStyle({
      right: 0,
    });
  });

  test('events', () => {
    let selected = '';
    const handleClick = (value) => {
      selected = value;
    };

    const { getByText } = render(
      <Dropdown>
        <Dropdown.Toggle>Show Menu</Dropdown.Toggle>
        <Dropdown.Menu>
          <Dropdown.Item active>Item 1</Dropdown.Item>
          <Dropdown.Item onClick={handleClick}>Item 2</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>,
    );

    // Click outside
    fireEvent.click(getByText('Show Menu'));
    fireEvent.click(document);

    // Click item
    fireEvent.click(getByText('Show Menu'));
    fireEvent.click(getByText('Item 2'));

    expect(selected).toBe('Item 2');
  });
});
