import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render } from '@testing-library/react';
import Input from '..';

describe('Input', () => {
  test('basic render', () => {
    const { container } = render(<Input placeholder="Basic usage" />);
    expect(container).toMatchSnapshot();
  });

  test('With addons', () => {
    const { container } = render(
      <Input addonBefore="http://" addonAfter=".com" defaultValue="mysite" />,
    );
    expect(container).toMatchSnapshot();
  });
});
