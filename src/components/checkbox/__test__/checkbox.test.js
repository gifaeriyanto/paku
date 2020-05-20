import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render, fireEvent } from '@testing-library/react';
import Checkbox from '..';
import { Color } from '../../../tokens';

describe('Checkbox', () => {
  test('basic render', () => {
    const { container } = render(<Checkbox label="Checkbox" />);
    expect(container).toMatchSnapshot();
  });

  test('default checked', () => {
    const { container } = render(<Checkbox label="Checkbox" checked />);
    expect(container.getElementsByTagName('input')[0]).toHaveAttribute(
      'checked',
    );
  });

  test('disabled', () => {
    const { container } = render(<Checkbox label="Checkbox" disabled />);
    expect(container.getElementsByTagName('input')[0]).toHaveAttribute(
      'disabled',
    );
  });

  test('error', () => {
    const { getByTestId } = render(<Checkbox label="Checkbox" error />);
    expect(getByTestId('paku-checkbox-box')).toHaveStyle({
      borderColor: Color.danger.main,
    });
  });

  test('event change', () => {
    let checked = false;
    const handleChange = (checkedStatus) => {
      checked = Boolean(checkedStatus);
    };

    const { getByTestId } = render(
      <Checkbox label="Checkbox" value="foo" onChange={handleChange} />,
    );
    expect(getByTestId('paku-checkbox-label')).toHaveTextContent('Checkbox');

    fireEvent.click(getByTestId('paku-checkbox'));
    expect(checked).toBe(true);

    fireEvent.click(getByTestId('paku-checkbox'));
    expect(checked).toBe(false);
  });
});
