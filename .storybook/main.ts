import type { StorybookConfig } from '@storybook/react-vite';

const config: StorybookConfig = {
  "stories": [
    "../src/**/*.mdx",
    "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"
  ],
  "addons": [
    "@chromatic-com/storybook",
    "@storybook/addon-vitest",
    "@storybook/addon-a11y",
    "@storybook/addon-docs"
  ],
  "framework": "@storybook/react-vite",
  // Configure Vite to not pre-bundle the symlinked story-ui package
  // This ensures changes to the linked package are picked up immediately
  viteFinal: async (config) => {
    config.optimizeDeps = config.optimizeDeps || {};
    config.optimizeDeps.exclude = [
      ...(config.optimizeDeps.exclude || []),
      '@tpitre/story-ui'
    ];
    // Also ensure the symlinked package is treated as source code
    config.server = config.server || {};
    config.server.watch = config.server.watch || {};
    config.server.watch.ignored = ['!**/node_modules/@tpitre/story-ui/**'];
    return config;
  }
};
export default config;