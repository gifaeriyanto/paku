import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render, fireEvent } from '@testing-library/react';
import Input from '..';

describe('Input', () => {
  test('basic render', () => {
    const { container } = render(
      <Input placeholder="Basic usage" value="Value" />,
    );
    expect(container).toMatchSnapshot();
  });

  test('with addons', () => {
    const { container } = render(
      <Input
        addonAfter=".com"
        addonBefore="https://"
        placeholder="Your site"
      />,
    );
    expect(container).toMatchSnapshot();
  });

  test('type password', () => {
    const { container, getByTestId } = render(
      <Input placeholder="Password" type="password" />,
    );

    // Show Password
    fireEvent.click(getByTestId('paku-input-show-password'));

    // Hide Password
    fireEvent.click(getByTestId('paku-input-show-password'));

    expect(container).toMatchSnapshot();
  });

  test('type number', () => {
    const { container, getByTestId } = render(
      <Input placeholder="Quantity" type="number" value="0" />,
    );

    fireEvent.click(getByTestId('paku-input-number-increment'));
    fireEvent.click(getByTestId('paku-input-number-decrement'));

    expect(container).toMatchSnapshot();
  });

  test('type number with step, min and max', () => {
    const { container, getByTestId } = render(
      <Input
        max={10}
        min={0}
        placeholder="Quantity"
        step={5}
        type="number"
        value="0"
      />,
    );

    fireEvent.change(getByTestId('paku-input'), { target: { value: '2' } });
    fireEvent.click(getByTestId('paku-input-number-increment'));
    fireEvent.click(getByTestId('paku-input-number-decrement'));

    expect(container).toMatchSnapshot();
  });

  test('events', () => {
    const handleEvent = jest.fn();

    const { container, getByTestId } = render(
      <Input
        placeholder="Basic usage"
        onFocus={handleEvent}
        onBlur={handleEvent}
        onChange={handleEvent}
      />,
    );

    fireEvent.focus(getByTestId('paku-input'));
    fireEvent.change(getByTestId('paku-input'), { target: { value: 'value' } });
    fireEvent.blur(getByTestId('paku-input'));

    expect(getByTestId('paku-input').value).toBe('value');
    expect(container).toMatchSnapshot();
  });
});
