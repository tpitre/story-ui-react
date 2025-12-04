import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Card, Text, Button, Stack, Image } from '@mantine/core';

const meta: Meta = {
  title: 'Generated/Simple Card',
  parameters: { layout: 'centered' },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj;

export const Default: Story = {
  render: () => (
    <Card shadow="sm" padding="lg" radius="md" withBorder style={{ width: 340 }}>
      <Card.Section>
        <Image
          src="https://picsum.photos/340/160?random=1"
          alt="Card image"
          height={160}
        />
      </Card.Section>

      <Stack gap="md" style={{ marginTop: 14 }}>
        <Text fw={500} size="lg">
          Card Title
        </Text>

        <Text size="sm" c="dimmed">
          This is a simple card component with an image, title, description, and action button. 
          It demonstrates a common card layout pattern.
        </Text>

        <Button variant="filled" color="blue" fullWidth>
          Learn More
        </Button>
      </Stack>
    </Card>
  ),
};

export const WithoutImage: Story = {
  render: () => (
    <Card shadow="sm" padding="lg" radius="md" withBorder style={{ width: 340 }}>
      <Stack gap="md">
        <Text fw={500} size="lg">
          Simple Card
        </Text>

        <Text size="sm" c="dimmed">
          A minimal card without an image. Perfect for displaying text content and actions.
        </Text>

        <Button variant="light" color="blue" fullWidth>
          Take Action
        </Button>
      </Stack>
    </Card>
  ),
};

export const Minimal: Story = {
  render: () => (
    <Card shadow="xs" padding="md" radius="md" style={{ width: 300 }}>
      <Text fw={500}>Minimal Card</Text>
      <Text size="sm" c="dimmed" style={{ marginTop: 8 }}>
        A very simple card with just text content.
      </Text>
    </Card>
  ),
};