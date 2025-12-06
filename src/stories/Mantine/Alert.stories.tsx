import type { Meta, StoryObj } from '@storybook/react';
import { Alert, Stack } from '@mantine/core';

const meta: Meta<typeof Alert> = {
  title: 'Mantine/Alert',
  component: Alert,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  render: () => (
    <Alert variant="light" color="blue" title="Information" style={{ width: 400 }}>
      This is an informational alert. Alerts are used to display important messages to users.
    </Alert>
  ),
};

export const Colors: Story = {
  render: () => (
    <Stack style={{ width: 400 }}>
      <Alert variant="light" color="blue" title="Info">
        This is an informational message.
      </Alert>
      <Alert variant="light" color="green" title="Success">
        Operation completed successfully!
      </Alert>
      <Alert variant="light" color="yellow" title="Warning">
        Please review before continuing.
      </Alert>
      <Alert variant="light" color="red" title="Error">
        Something went wrong. Please try again.
      </Alert>
    </Stack>
  ),
};

export const Variants: Story = {
  render: () => (
    <Stack style={{ width: 400 }}>
      <Alert variant="light" color="blue" title="Light Variant">
        This uses the light variant.
      </Alert>
      <Alert variant="filled" color="blue" title="Filled Variant">
        This uses the filled variant.
      </Alert>
      <Alert variant="outline" color="blue" title="Outline Variant">
        This uses the outline variant.
      </Alert>
    </Stack>
  ),
};

export const WithRadius: Story = {
  render: () => (
    <Stack style={{ width: 400 }}>
      <Alert variant="light" color="cyan" title="Sharp" radius={0}>
        No border radius.
      </Alert>
      <Alert variant="light" color="cyan" title="Rounded" radius="md">
        Medium border radius.
      </Alert>
      <Alert variant="light" color="cyan" title="Pill" radius="xl">
        Extra large border radius.
      </Alert>
    </Stack>
  ),
};
