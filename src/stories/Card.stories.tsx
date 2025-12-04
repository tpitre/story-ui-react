import type { Meta, StoryObj } from '@storybook/react-vite';
import { Card, Text, Button, Group, Badge, Image } from '@mantine/core';

const meta: Meta<typeof Card> = {
  title: 'Mantine/Card',
  component: Card,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Card>;

export const BasicCard: Story = {
  render: () => (
    <Card shadow="sm" padding="lg" radius="md" withBorder style={{ width: 340 }}>
      <Text fw={500} size="lg" mb="xs">
        Card Title
      </Text>
      <Text size="sm" c="dimmed">
        This is a basic Mantine card component with some descriptive text.
      </Text>
      <Button variant="light" color="blue" fullWidth mt="md" radius="md">
        Learn more
      </Button>
    </Card>
  ),
};

export const ProductCard: Story = {
  render: () => (
    <Card shadow="sm" padding="lg" radius="md" withBorder style={{ width: 340 }}>
      <Card.Section>
        <Image
          src="https://images.unsplash.com/photo-1527004013197-933c4bb611b3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=720&q=80"
          height={160}
          alt="Norway"
        />
      </Card.Section>

      <Group justify="space-between" mt="md" mb="xs">
        <Text fw={500}>Norway Fjord Adventures</Text>
        <Badge color="pink">On Sale</Badge>
      </Group>

      <Text size="sm" c="dimmed">
        With Fjord Tours you can explore more of the magical fjord landscapes
        with tours and activities on and around the fjords of Norway.
      </Text>

      <Button color="blue" fullWidth mt="md" radius="md">
        Book classic tour
      </Button>
    </Card>
  ),
};

export const SimpleCard: Story = {
  render: () => (
    <Card shadow="sm" padding="md" radius="md" style={{ width: 300 }}>
      <Text fw={500}>Simple Card</Text>
      <Text size="sm" c="dimmed" mt="xs">
        A minimal card without border
      </Text>
    </Card>
  ),
};
