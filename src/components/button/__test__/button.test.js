import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render, fireEvent } from '@testing-library/react';
import { FaSearch } from 'react-icons/fa';
import Button from '..';
import { Color } from '../../../tokens';

describe('Button', () => {
  test('basic render', () => {
    const { container } = render(<Button>Button</Button>);
    expect(container).toMatchSnapshot();
  });

  test('event click and doubleclick', () => {
    const handleClick = jest.fn();
    const { getByTestId } = render(
      <Button onClick={handleClick}>Button</Button>,
    );
    fireEvent.click(getByTestId('paku-button'));
    expect(handleClick).toBeCalled();
  });

  test('variants', () => {
    const { getByTestId, rerender } = render(
      <Button variant="primary">Button</Button>,
    );
    expect(getByTestId('paku-button')).toHaveStyle({
      backgroundColor: Color.primary.main,
    });

    rerender(<Button variant="secondary">Button</Button>);
    expect(getByTestId('paku-button')).toHaveStyle({
      backgroundColor: Color.secondary.main,
    });

    rerender(<Button variant="danger">Button</Button>);
    expect(getByTestId('paku-button')).toHaveStyle({
      backgroundColor: Color.danger.main,
    });

    rerender(<Button variant="neutral">Button</Button>);
    expect(getByTestId('paku-button')).toHaveStyle({
      backgroundColor: Color.neutral.main,
    });
  });

  test('block Style', () => {
    const { getByTestId } = render(<Button block>Button</Button>);
    expect(getByTestId('paku-button')).toHaveStyle({ width: '100%' });
  });

  test('disabled', () => {
    const handleClick = jest.fn();
    const { getByTestId } = render(
      <Button onClick={handleClick} disabled>
        Button
      </Button>,
    );
    fireEvent.click(getByTestId('paku-button'));
    expect(handleClick).not.toBeCalled();
  });

  test('sizing', () => {
    const { getByTestId, rerender } = render(
      <Button size="small">Button</Button>,
    );
    expect(getByTestId('paku-button')).toHaveStyle({ padding: '6px 9px' });

    rerender(<Button size="medium">Button</Button>);
    expect(getByTestId('paku-button')).toHaveStyle({ padding: '8px 12px' });

    rerender(<Button size="large">Button</Button>);
    expect(getByTestId('paku-button')).toHaveStyle({ padding: '10px 15px' });
  });

  test('outline style', () => {
    const { getByTestId, rerender } = render(<Button outline>Button</Button>);
    expect(getByTestId('paku-button')).toHaveStyle({
      borderColor: Color.border,
    });

    rerender(<Button outline="withColor">Button</Button>);
    expect(getByTestId('paku-button')).toHaveStyle({
      borderColor: Color.primary.main,
    });
  });

  test('with icon', () => {
    const { container } = render(
      <>
        <Button icon={<FaSearch />} iconOnly />
        <Button icon={<FaSearch />}>Search</Button>
        <Button icon={<FaSearch />} iconRight>
          Search
        </Button>
      </>,
    );
    expect(container.getElementsByTagName('svg')).toHaveLength(3);
  });
});
