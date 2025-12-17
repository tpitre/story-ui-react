import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Card, Image, Text, Title, Stack } from '@mantine/core';

const meta: Meta = {
  title: 'Generated/Card with Image and Text',
  id: 'card-with-image-and-text-6f74e5f1',
  parameters: { layout: 'padded' },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const ResponsiveCard: Story = {
  render: () => (
    <Card withBorder radius="md" padding="md">
      <Card.Section>
        <Image
          src="https://picsum.photos/900/500?random=1"
          alt="Scenic placeholder image for the card"
          height={200}
        />
      </Card.Section>

      <Stack gap="xs" mt="md">
        <Title order={3}>Weekend getaway</Title>
        <Text c="dimmed">
          Discover a cozy, modern retreat with nearby trails, great coffee shops, and a quiet place to
          unwind after a long week.
        </Text>
      </Stack>
    </Card>
  ),
};

export const WithLongDescription: Story = {
  render: () => (
    <Card withBorder radius="md" padding="md">
      <Card.Section>
        <Image
          src="https://picsum.photos/900/500?random=2"
          alt="City skyline placeholder image for the card"
          height={200}
        />
      </Card.Section>

      <Stack gap="xs" mt="md">
        <Title order={3}>City highlights</Title>
        <Text c="dimmed">
          A curated guide to local favorites—museums, parks, and dinner spots. Great for first-time
          visitors and returning explorers alike, with plenty of flexible options.
        </Text>
      </Stack>
    </Card>
  ),
};

export const Compact: Story = {
  render: () => (
    <Card withBorder radius="md" padding="sm">
      <Card.Section>
        <Image
          src="https://picsum.photos/900/500?random=3"
          alt="Nature placeholder image for the compact card"
          height={160}
        />
      </Card.Section>

      <Stack gap={6} mt="sm">
        <Title order={4}>Morning hike</Title>
        <Text size="sm" c="dimmed">
          A short trail with a big view—perfect before brunch.
        </Text>
      </Stack>
    </Card>
  ),
};