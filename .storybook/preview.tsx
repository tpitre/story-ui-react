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
  decorators: [
    (Story) => (
      <MantineProvider theme={theme}>
        <Story />
      </MantineProvider>
    ),
  ],
};

export default preview;
