import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render, fireEvent } from '@testing-library/react';
import Button from '..';

const handleClick = (e) => {
  return e;
};

test('Button Render Test', () => {
  const { container } = render(<Button>Button</Button>);
  expect(container).toMatchSnapshot();
});

test('Button Event Test', () => {
  const { container, getByText } = render(
    <Button onClick={handleClick}>Click</Button>,
  );

  fireEvent.click(getByText('Click'));
  fireEvent.doubleClick(getByText('Click'));

  expect(container).toMatchSnapshot();
});

test('Button Variants', () => {
  const { container } = render(
    <>
      <Button variant="primary">Button</Button>
      <Button variant="secondary">Button</Button>
      <Button variant="success">Button</Button>
      <Button variant="warning">Button</Button>
      <Button variant="danger">Button</Button>
      <Button variant="neutral">Button</Button>
      <Button variant="clean">Button</Button>
    </>,
  );
  expect(container).toMatchSnapshot();
});

test('Button Block', () => {
  const { container } = render(<Button block>Button</Button>);
  expect(container).toMatchSnapshot();
});

test('Button Disabled', () => {
  const { container } = render(<Button disabled>Button</Button>);
  expect(container).toMatchSnapshot();
});

test('Button Size', () => {
  const { container } = render(
    <>
      <Button size="small">Button</Button>
      <Button>Button</Button>
      <Button size="large">Button</Button>
    </>,
  );
  expect(container).toMatchSnapshot();
});

test('Button Outline Style', () => {
  const { container } = render(<Button outline>Button</Button>);
  expect(container).toMatchSnapshot();
});

test('Button With Icon', () => {
  const { container } = render(
    <>
      <Button icon="search" iconOnly />
      <Button icon="search">Search</Button>
      <Button icon="search" iconPosition="right">
        Search
      </Button>
    </>,
  );
  expect(container).toMatchSnapshot();
});
