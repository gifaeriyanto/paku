import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render, fireEvent } from '@testing-library/react';
import Checkbox from '..';

describe('Checkbox', () => {
  test('basic render', () => {
    const { container } = render(<Checkbox label="Checkbox" />);
    expect(container).toMatchSnapshot();
  });

  test('default checked', () => {
    const { container } = render(<Checkbox label="Checkbox" checked />);
    expect(container).toMatchSnapshot();
  });

  test('disabled', () => {
    const { container } = render(<Checkbox label="Checkbox" disabled />);
    expect(container).toMatchSnapshot();
  });

  test('error', () => {
    const { container } = render(<Checkbox label="Checkbox" error />);
    expect(container).toMatchSnapshot();
  });

  test('event change', () => {
    let checked = false;
    const handleChange = (checkedStatus) => {
      checked = Boolean(checkedStatus);
    };

    const { getByTestId } = render(
      <Checkbox label="Checkbox" onChange={handleChange} />,
    );

    fireEvent.click(getByTestId('checkbox'));
    expect(checked).toBe(true);

    fireEvent.click(getByTestId('checkbox'));
    expect(checked).toBe(false);
  });
});
