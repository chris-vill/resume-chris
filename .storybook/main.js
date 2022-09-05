const TsconfigPathsPlugin = require("tsconfig-paths-webpack-plugin");

module.exports = {
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
    "storybook-addon-designs",
    "storybook-addon-next",
  ],
  core: {
    builder: "@storybook/builder-webpack5",
  },
  env: (config) => ({
    ...config,
    IS_STORYBOOK_ENV: true,
  }),
  framework: "@storybook/react",
  stories: ["../src/**/*.stories.mdx", "../src/**/*.stories.@(js|jsx|ts|tsx)"],
  webpackFinal: async (config, { configType }) => {
    config.resolve.plugins = [new TsconfigPathsPlugin()];
    return config;
  },
};

