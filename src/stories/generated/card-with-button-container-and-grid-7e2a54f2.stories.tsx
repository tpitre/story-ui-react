import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Card, CardSection, Button, Text, Image, Badge, Group, Stack } from '@mantine/core';

const meta: Meta<typeof Card> = {
  title: 'Generated/Feature Card',
  component: Card,
  parameters: { layout: 'centered' },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <Card shadow="sm" padding="lg" radius="md" withBorder style={{ width: 340 }}>
      <CardSection>
        <Image
          src="https://picsum.photos/340/160?random=1"
          alt="Feature preview"
          height={160}
        />
      </CardSection>

      <Stack mt="md" mb="xs" gap="sm">
        <Group justify="space-between">
          <Text fw={500}>Amazing Feature</Text>
          <Badge color="blue" variant="light">
            New
          </Badge>
        </Group>

        <Text size="sm" c="dimmed">
          Discover the power of our latest feature designed to enhance your workflow and boost productivity.
        </Text>
      </Stack>

      <Button color="blue" fullWidth mt="md" radius="md">
        Learn More
      </Button>
    </Card>
  ),
};

export const WithoutImage: Story = {
  render: () => (
    <Card shadow="sm" padding="lg" radius="md" withBorder style={{ width: 340 }}>
      <Stack gap="sm">
        <Group justify="space-between">
          <Text fw={500}>Premium Plan</Text>
          <Badge color="grape" variant="filled">
            Popular
          </Badge>
        </Group>

        <Text size="sm" c="dimmed">
          Unlock all features and get unlimited access to our entire platform.
        </Text>

        <Text size="xl" fw={700} mt="md">
          $29/month
        </Text>

        <Button color="grape" fullWidth mt="md" radius="md">
          Subscribe Now
        </Button>
      </Stack>
    </Card>
  ),
};

export const Minimal: Story = {
  render: () => (
    <Card shadow="md" padding="xl" radius="md" style={{ width: 300 }}>
      <Text fw={600} size="lg" mb="md">
        Quick Action
      </Text>
      <Text size="sm" c="dimmed" mb="lg">
        Complete this action to continue with your task.
      </Text>
      <Button variant="light" fullWidth>
        Continue
      </Button>
    </Card>
  ),
};