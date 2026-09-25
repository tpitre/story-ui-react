import React from 'react';
import type { Preview } from '@storybook/react-vite';
import { MantineProvider, createTheme } from '@mantine/core';
import { themes } from 'storybook/theming';
import '@mantine/core/styles.css';

const theme = createTheme({
  primaryColor: 'blue',
  primaryShade: 6,
});

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    docs: {
      theme: themes.dark,
    },
    a11y: {
      test: 'todo',
    },
  },
  // A Light/Dark toolbar setting. The Voice Canvas reads globalTypes, so
  // "dark mode" / "black UI" switches this instead of asking a model to restyle.
  globalTypes: {
    theme: {
      description: 'Mantine color scheme',
      toolbar: {
        title: 'Theme',
        icon: 'mirror',
        items: [
          { value: 'light', title: 'Light', icon: 'sun' },
          { value: 'dark', title: 'Dark', icon: 'moon' },
        ],
        dynamicTitle: true,
      },
    },
  },
  initialGlobals: { theme: 'light' },
  decorators: [
    (Story, context) => (
      <MantineProvider theme={theme} forceColorScheme={context.globals.theme === 'dark' ? 'dark' : 'light'}>
        <Story />
      </MantineProvider>
    ),
  ],
};

export default preview;
