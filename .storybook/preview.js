import { addDecorator, addParameters } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { withA11y } from '@storybook/addon-a11y';
import { withTests } from '@storybook/addon-jest';
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport';
import './global.css';

// Jest test result
import results from './jest-test-reports.json';

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

addDecorator(
  withTests({
    results,
  }),
);

addParameters({
  backgrounds: [{ name: 'dark', value: '#000' }],
  viewport: {
    viewports: INITIAL_VIEWPORTS,
  },
});
