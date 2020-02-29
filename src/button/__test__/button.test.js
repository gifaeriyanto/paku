import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render } from '@testing-library/react';
import Button from '../';

test('Button Test Render', () => {
  const { container } = render(<Button>Button</Button>);
  expect(container).toMatchSnapshot();
});
