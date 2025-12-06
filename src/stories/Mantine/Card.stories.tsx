import type { Meta, StoryObj } from '@storybook/react';
import { Card, Image, Text, Badge, Button, Group, Stack } from '@mantine/core';

const meta: Meta<typeof Card> = {
  title: 'Mantine/Card',
  component: Card,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  render: () => (
    <Card shadow="sm" padding="lg" radius="md" withBorder style={{ width: 340 }}>
      <Text fw={500} size="lg" mb="xs">Card Title</Text>
      <Text size="sm" c="dimmed">
        This is a basic card component from Mantine. Cards are used to group related content
        and actions about a single subject.
      </Text>
    </Card>
  ),
};

export const WithImage: Story = {
  render: () => (
    <Card shadow="sm" padding="lg" radius="md" withBorder style={{ width: 340 }}>
      <Card.Section>
        <Image
          src="https://images.unsplash.com/photo-1527004013197-933c4bb611b3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=720&q=80"
          height={160}
          alt="Norway"
        />
      </Card.Section>

      <Group justify="space-between" mt="md" mb="xs">
        <Text fw={500}>Norway Fjord Adventures</Text>
        <Badge color="pink">On Sale</Badge>
      </Group>

      <Text size="sm" c="dimmed">
        With Fjord Tours you can explore more of the magical fjord landscapes with tours and
        activities on and around the fjords of Norway.
      </Text>

      <Button color="blue" fullWidth mt="md" radius="md">
        Book classic tour now
      </Button>
    </Card>
  ),
};

export const WithSections: Story = {
  render: () => (
    <Card shadow="sm" padding="lg" radius="md" withBorder style={{ width: 340 }}>
      <Card.Section withBorder inheritPadding py="xs">
        <Group justify="space-between">
          <Text fw={500}>Review pics</Text>
          <Badge color="green">Active</Badge>
        </Group>
      </Card.Section>

      <Text mt="sm" c="dimmed" size="sm">
        Please press the button below to submit your review photos.
        All photos must meet our community guidelines.
      </Text>

      <Card.Section withBorder inheritPadding mt="sm" py="md">
        <Button variant="light" fullWidth>Upload photos</Button>
      </Card.Section>
    </Card>
  ),
};
