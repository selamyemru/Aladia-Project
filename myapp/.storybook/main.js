/** @type { import('@storybook/vue3-vite').StorybookConfig } */
const config = {
  stories: [
    "../stories/**/*.mdx",
    "../stories/**/*.stories.@(js|jsx|mjs|ts|tsx)",
  ],
  addons: [
    "@storybook/addon-onboarding",
    "@storybook/addon-essentials",
    "@chromatic-com/storybook",
    "@storybook/addon-interactions",
    '@storybook/addon-docs'
  ],
  docs: {
    autodocs: true,
  },
  staticDirs: ['../assets'],
  framework: {
    name: "@storybook/vue3-vite",
    options: {},
  },
  // webpackFinal: async (config) => {
  //   config.module.rules.push({
  //     test: /\.css$/,
  //     use: ['style-loader', 'css-loader', 'postcss-loader'],
  //     include: path.resolve(__dirname, '../'),
  //   });

  //   return config;
  // },
};
export default config;
