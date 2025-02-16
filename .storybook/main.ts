import type { StorybookConfig } from "@storybook/react-vite";

const config: StorybookConfig = {
  stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"],
  addons: [
    "@storybook/addon-docs",
    "@storybook/addon-onboarding",
    "@storybook/addon-essentials",
    "@chromatic-com/storybook",
    "@storybook/addon-interactions",
  ],
  framework: {
    name: "@storybook/react-vite",
    options: {},
  },
  refs: {
     "external2-storybook": {
      title: "External2 Storybook",
      url: 'https://679de4f29bac5fac91afbb9f-xsuekloiie.chromatic.com/',
      expanded: false, // Optional, true by default,
    },
    "external-storybook": {
      title: "External Storybook",
      url: 'https://master--5ccbc373887ca40020446347.chromatic.com/',
      expanded: false, // Optional, true by default,
    },
   
  }
};
export default config;
