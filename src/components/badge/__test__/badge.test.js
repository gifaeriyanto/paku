import React from 'react';
import { FaSearch } from 'react-icons/fa';
import '@testing-library/jest-dom/extend-expect';
import { render } from '@testing-library/react';
import Badge from '..';

const handleClose = (e) => {
  return e;
};

test('Badge basic render', () => {
  const { container } = render(<Badge>Badge</Badge>);
  expect(container).toMatchSnapshot();
});

test('Badge variants', () => {
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

test('Badge size', () => {
  const { container } = render(
    <>
      <Badge size="small">Badge</Badge>
      <Badge>Badge</Badge>
      <Badge size="large">Badge</Badge>
    </>,
  );
  expect(container).toMatchSnapshot();
});

test('Badge outline style', () => {
  const { container } = render(
    <>
      <Badge outline>Badge</Badge>
      <Badge outline="withColor">Badge</Badge>
    </>,
  );
  expect(container).toMatchSnapshot();
});

test('Badge closeable', () => {
  const { container, getByTestId } = render(
    <>
      <Badge closeable>Badge</Badge>
      <Badge onClose={handleClose}>Badge</Badge>
    </>,
  );

  fireEvent.click(getByTestId('badge-close'));

  expect(container).toMatchSnapshot();
});
