import React from 'react';
import { FaSearch } from 'react-icons/fa';
import '@testing-library/jest-dom/extend-expect';
import { render, fireEvent } from '@testing-library/react';
import Button from '..';

const handleClick = (e) => {
  return e;
};

test('Button basic render', () => {
  const { container } = render(<Button>Button</Button>);
  expect(container).toMatchSnapshot();
});

test('Button event click and doubleclick', () => {
  const { container, getByText } = render(
    <Button onClick={handleClick}>Click</Button>,
  );

  fireEvent.click(getByText('Click'));
  fireEvent.doubleClick(getByText('Click'));

  expect(container).toMatchSnapshot();
});

test('Button variants', () => {
  const { container } = render(
    <>
      <Button variant="primary">Button</Button>
      <Button variant="secondary">Button</Button>
      <Button variant="danger">Button</Button>
      <Button variant="neutral">Button</Button>
    </>,
  );
  expect(container).toMatchSnapshot();
});

test('Button block', () => {
  const { container } = render(<Button block>Button</Button>);
  expect(container).toMatchSnapshot();
});

test('Button disabled', () => {
  const { container } = render(<Button disabled>Button</Button>);
  expect(container).toMatchSnapshot();
});

test('Button size', () => {
  const { container } = render(
    <>
      <Button size="small">Button</Button>
      <Button>Button</Button>
      <Button size="large">Button</Button>
    </>,
  );
  expect(container).toMatchSnapshot();
});

test('Button outline style', () => {
  const { container } = render(
    <>
      <Button outline>Button</Button>
      <Button outline="withColor">Button</Button>
    </>,
  );
  expect(container).toMatchSnapshot();
});

test('Button with icon', () => {
  const { container } = render(
    <>
      <Button icon={<FaSearch />} iconOnly />
      <Button icon={<FaSearch />}>Search</Button>
      <Button icon={<FaSearch />} iconRight>
        Search
      </Button>
    </>,
  );
  expect(container).toMatchSnapshot();
});
