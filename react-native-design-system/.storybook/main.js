module.exports = {
  stories: [
    "../app/components/**/*.stories.mdx",
    "../app/components/**/*.stories.@(js|jsx|ts|tsx)",
  ],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-react-native-web",
  ],
  core: {
    builder: "webpack5",
  },
  framework: "@storybook/react",
};
