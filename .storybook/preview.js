import { addDecorator, addParameters } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { withA11y } from '@storybook/addon-a11y';
import './global.css';

addDecorator(
  withInfo({
    header: false,
    inline: true,
  }),
);

addDecorator(
  withA11y({
    element: '#story-root',
  }),
);

addParameters({
  backgrounds: [{ name: 'dark', value: '#000' }],
});
