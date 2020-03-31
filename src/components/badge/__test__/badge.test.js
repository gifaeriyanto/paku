import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render, fireEvent } from '@testing-library/react';
import Badge from '..';

const handleClose = (e) => {
  return e;
};

describe('Badge', () => {
  test('basic render', () => {
    const { container } = render(<Badge>Badge</Badge>);
    expect(container).toMatchSnapshot();
  });

  test('rounded', () => {
    const { container } = render(
      <>
        <Badge rounded>Badge</Badge>
      </>,
    );
    expect(container).toMatchSnapshot();
  });

  test('variants', () => {
    const { container } = render(
      <>
        <Badge variant="primary">Badge</Badge>
        <Badge variant="secondary">Badge</Badge>
        <Badge variant="danger">Badge</Badge>
        <Badge variant="neutral">Badge</Badge>
      </>,
    );
    expect(container).toMatchSnapshot();
  });

  test('sizing', () => {
    const { container } = render(
      <>
        <Badge size="small">Badge</Badge>
        <Badge>Badge</Badge>
        <Badge size="large">Badge</Badge>
      </>,
    );
    expect(container).toMatchSnapshot();
  });

  test('outline style', () => {
    const { container } = render(
      <>
        <Badge outline>Badge</Badge>
        <Badge outline="withColor">Badge</Badge>
      </>,
    );
    expect(container).toMatchSnapshot();
  });

  test('closeable', () => {
    const { container, getByTestId } = render(
      <Badge closeable onClose={handleClose}>
        Badge
      </Badge>,
    );

    fireEvent.click(getByTestId('badge-close'));

    expect(container).toMatchSnapshot();
  });
});
