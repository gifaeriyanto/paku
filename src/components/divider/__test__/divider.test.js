import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render } from '@testing-library/react';
import Divider from '..';

describe('Divider', () => {
  test('basic render', () => {
    const { container } = render(<Divider />);
    expect(container).toMatchSnapshot();
  });
});
