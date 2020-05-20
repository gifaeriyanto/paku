import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render, fireEvent } from '@testing-library/react';
import Badge from '..';
import { Radius, Color } from '../../../tokens';

describe('Badge', () => {
  test('basic render', () => {
    const { container } = render(<Badge>Badge</Badge>);
    expect(container).toMatchSnapshot();
  });

  test('rounded', () => {
    const { getByTestId } = render(<Badge rounded>Badge</Badge>);
    expect(getByTestId('paku-badge')).toHaveStyle({
      borderRadius: Radius.round + 'px',
    });
  });

  test('variants', () => {
    const { getByTestId, rerender } = render(
      <Badge variant="primary">Badge</Badge>,
    );
    expect(getByTestId('paku-badge')).toHaveStyle({
      backgroundColor: Color.primary.main,
    });

    rerender(<Badge variant="secondary">Badge</Badge>);
    expect(getByTestId('paku-badge')).toHaveStyle({
      backgroundColor: Color.secondary.main,
    });

    rerender(<Badge variant="danger">Badge</Badge>);
    expect(getByTestId('paku-badge')).toHaveStyle({
      backgroundColor: Color.danger.main,
    });

    rerender(<Badge variant="neutral">Badge</Badge>);
    expect(getByTestId('paku-badge')).toHaveStyle({
      backgroundColor: Color.neutral.main,
    });
  });

  test('sizing', () => {
    const { getByTestId, rerender } = render(<Badge size="small">Badge</Badge>);
    expect(getByTestId('paku-badge')).toHaveStyle({ padding: '4px 8px' });

    rerender(<Badge size="medium">Badge</Badge>);
    expect(getByTestId('paku-badge')).toHaveStyle({ padding: '6px 12px' });

    rerender(<Badge size="large">Badge</Badge>);
    expect(getByTestId('paku-badge')).toHaveStyle({ padding: '8px 16px' });
  });

  test('outline style', () => {
    const { getByTestId, rerender } = render(<Badge outline>Badge</Badge>);
    expect(getByTestId('paku-badge')).toHaveStyle({
      borderColor: Color.border,
    });

    rerender(<Badge outline="withColor">Badge</Badge>);
    expect(getByTestId('paku-badge')).toHaveStyle({
      borderColor: Color.primary.main,
    });
  });

  test('closeable', () => {
    const handleClose = jest.fn();

    const { getByTestId } = render(
      <Badge closeable onClose={handleClose}>
        Badge
      </Badge>,
    );

    fireEvent.click(getByTestId('badge-close'));

    expect(handleClose).toBeCalled();
  });
});
