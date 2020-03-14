const path = require('path');

module.exports = {
  stories: ['../src/**/*.stories.(jsx|mdx)'],
  addons: [
    '@storybook/addon-actions',
    '@storybook/addon-knobs',
    '@storybook/addon-a11y/register',
    '@storybook/addon-backgrounds/register',
    '@storybook/addon-jest/register',
    '@storybook/addon-viewport/register',
  ],
  webpackFinal: async (config) => {
    config.module.rules.push({
      test: /\.(ts|tsx)$/,
      loader: require.resolve('babel-loader'),
      options: {
        presets: [['react-app', { flow: false, typescript: true }]],
      },
    });

    config.resolve.extensions.push('.ts', '.tsx');

    config.resolve.alias = {
      ...config.resolve.alias,
      fs: path.resolve(__dirname, 'mocks/fsMock.js'),
    };

    config.performance = {
      ...config.performance,
      maxEntrypointSize: 5120000,
      maxAssetSize: 5120000,
    };

    return config;
  },
};
