import type { StorybookConfig } from '@storybook/react-vite';

const config: StorybookConfig = {
  "stories": [
    "../src/**/*.mdx",
    "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"
  ],
  "tags": {
    "voice-canvas-internal": {
      "defaultFilterSelection": "exclude"
    }
  },
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
    // The excluded package's ESM dist imports @radix-ui/themes, whose ESM
    // build imports the CJS-only `classnames`. An excluded package's CJS
    // transitive deps are never interop'd unless included via the `>` chain,
    // so without this the V2 workspace fails to mount with "does not provide
    // an export named 'default'".
    config.optimizeDeps.include = [
      ...(config.optimizeDeps.include || []),
      '@tpitre/story-ui > @radix-ui/themes > classnames',
      // The Voice Canvas renders through react-live. Discovered on first use,
      // Vite re-optimizes mid-session and the page ends up with two Reacts
      // ("reading 'useState' of null"); pre-bundling it at startup avoids that.
      'react-live',
    ];
    // NOTE: this used to be `ignored: ['!**/node_modules/@tpitre/story-ui/**']`,
    // which REPLACES Vite's defaults. With only a negated pattern, nothing is
    // ignored at all — so the dev server watched the entire node_modules tree
    // and the file watcher stopped delivering events, which made newly
    // generated stories never appear in the sidebar. Keep the default
    // node_modules ignore and un-ignore just the one package.
    config.server = config.server || {};
    config.server.watch = config.server.watch || {};
    config.server.watch.ignored = [
      '**/.git/**',
      '**/node_modules/**',
      '!**/node_modules/@tpitre/story-ui/**',
    ];
    return config;
  }
};
export default config;