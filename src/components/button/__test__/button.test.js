import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render } from '@testing-library/react';
import Button from '..';

test('Button Test Render', () => {
  const { container } = render(
    <Button variant="primary" block>
      Button
    </Button>,
  );
  expect(container).toMatchSnapshot();
});

test('Button Disabled', () => {
  const { container } = render(<Button disabled>Button</Button>);
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
