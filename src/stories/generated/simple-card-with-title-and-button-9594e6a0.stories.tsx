import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Card, Text, Button, Stack } from '@mantine/core';

const meta = {
  title: 'Generated/Simple Card with Title and Button',
  component: Card,
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof Card>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <Card shadow="sm" padding="lg" radius="md" withBorder style={{ width: 400 }}>
      <Stack gap="md">
        <Text size="xl" fw={700}>
          Card Title
        </Text>
        <Text size="sm" c="dimmed">
          This is a simple card component with a title, description, and a button. 
          It demonstrates how to compose Mantine components together to create a 
          cohesive UI element.
        </Text>
        <Button variant="filled" color="blue" fullWidth>
          Action Button
        </Button>
      </Stack>
    </Card>
  ),
};

export const WithImage: Story = {
  render: () => (
    <Card shadow="sm" padding="lg" radius="md" withBorder style={{ width: 400 }}>
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
          This variation includes an image at the top of the card, making it 
          perfect for featured content or product displays.
        </Text>
        <Button variant="filled" color="blue" fullWidth>
          Learn More
        </Button>
      </Stack>
    </Card>
  ),
};

export const Compact: Story = {
  render: () => (
    <Card shadow="sm" padding="md" radius="md" withBorder style={{ width: 300 }}>
      <Stack gap="sm">
        <Text size="lg" fw={600}>
          Compact Card
        </Text>
        <Text size="sm" c="dimmed">
          A smaller card variant with reduced padding and content.
        </Text>
        <Button variant="light" color="blue" fullWidth size="sm">
          View Details
        </Button>
      </Stack>
    </Card>
  ),
};