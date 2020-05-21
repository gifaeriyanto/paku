import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render, fireEvent } from '@testing-library/react';
import Input from '..';
import { Color } from '../../../tokens';

describe('Input', () => {
  test('basic render', () => {
    const { container } = render(
      <Input placeholder="Basic usage" value="Value" />,
    );
    expect(container).toMatchSnapshot();
  });

  test('error', () => {
    const { getByTestId } = render(
      <Input placeholder="Basic usage" value="Value" error />,
    );
    expect(getByTestId('paku-input-wrapper')).toHaveStyle({
      borderColor: Color.danger.main,
    });
  });

  test('with addons', () => {
    const { getByTestId } = render(
      <Input
        addonAfter=".com"
        addonBefore="https://"
        placeholder="Your site"
      />,
    );
    expect(getByTestId('paku-input-addon-before')).toHaveTextContent(
      'https://',
    );
    expect(getByTestId('paku-input-addon-after')).toHaveTextContent('.com');
  });

  test('type password', () => {
    const { container, getByTestId } = render(
      <Input placeholder="Password" type="password" />,
    );

    // Show Password
    fireEvent.click(getByTestId('paku-input-show-password'));
    expect(container.getElementsByTagName('input')[0]).toHaveAttribute(
      'type',
      'text',
    );

    // Hide Password
    fireEvent.click(getByTestId('paku-input-show-password'));
    expect(container.getElementsByTagName('input')[0]).toHaveAttribute(
      'type',
      'password',
    );
  });

  test('type number', () => {
    const { container, getByTestId } = render(
      <Input placeholder="Quantity" type="number" value="0" />,
    );

    fireEvent.click(getByTestId('paku-input-number-increment'));
    expect(container.getElementsByTagName('input')[0].value).toBe('1');

    fireEvent.click(getByTestId('paku-input-number-decrement'));
    expect(container.getElementsByTagName('input')[0].value).toBe('0');
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
    expect(container.getElementsByTagName('input')[0].value).toBe('2');

    fireEvent.click(getByTestId('paku-input-number-increment'));
    expect(container.getElementsByTagName('input')[0].value).toBe('7');

    fireEvent.click(getByTestId('paku-input-number-decrement'));
    expect(container.getElementsByTagName('input')[0].value).toBe('2');
  });

  test('events', () => {
    const handleEvent = jest.fn();

    const { getByTestId } = render(
      <Input
        placeholder="Basic usage"
        onFocus={handleEvent}
        onBlur={handleEvent}
        onChange={handleEvent}
      />,
    );

    fireEvent.focus(getByTestId('paku-input'));
    expect(handleEvent).toBeCalledTimes(1);

    fireEvent.change(getByTestId('paku-input'), { target: { value: 'value' } });
    expect(handleEvent).toBeCalledTimes(2);
    expect(getByTestId('paku-input').value).toBe('value');

    fireEvent.blur(getByTestId('paku-input'));
    expect(handleEvent).toBeCalledTimes(3);
  });
});
