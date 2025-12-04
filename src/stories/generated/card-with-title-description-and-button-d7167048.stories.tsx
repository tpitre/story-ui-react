import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Card, Text, Button, Stack } from '@mantine/core';

const meta = {
  title: 'Generated/Card with Title Description and Button',
  component: Card,
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof Card>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <Card shadow="sm" padding="lg" radius="md" withBorder style={{ maxWidth: 400 }}>
      <Stack gap="md">
        <Text size="xl" fw={700}>
          Card Title
        </Text>
        <Text size="sm" c="dimmed">
          This is a simple card component with a title, description, and a button. It demonstrates how to compose multiple Mantine components together to create a cohesive UI element.
        </Text>
        <Button variant="filled" fullWidth mt="md">
          Click Me
        </Button>
      </Stack>
    </Card>
  ),
};

export const WithImage: Story = {
  render: () => (
    <Card shadow="sm" padding="lg" radius="md" withBorder style={{ maxWidth: 400 }}>
      <Card.Section>
        <img
          src="https://picsum.photos/400/200"
          alt="Card header"
          style={{ width: '100%', height: 'auto', display: 'block' }}
        />
      </Card.Section>
      <Stack gap="md" mt="md">
        <Text size="xl" fw={700}>
          Card with Image
        </Text>
        <Text size="sm" c="dimmed">
          This card includes an image section at the top, followed by a title, description, and action button.
        </Text>
        <Button variant="filled" fullWidth mt="md">
          Learn More
        </Button>
      </Stack>
    </Card>
  ),
};

export const Compact: Story = {
  render: () => (
    <Card shadow="sm" padding="md" radius="md" withBorder style={{ maxWidth: 350 }}>
      <Stack gap="sm">
        <Text size="lg" fw={600}>
          Compact Card
        </Text>
        <Text size="xs" c="dimmed">
          A smaller version with reduced padding and spacing.
        </Text>
        <Button variant="light" size="sm" fullWidth>
          Action
        </Button>
      </Stack>
    </Card>
  ),
};