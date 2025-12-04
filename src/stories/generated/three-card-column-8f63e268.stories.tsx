import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { SimpleGrid, Card, Image, Text, Button, Badge, Group } from '@mantine/core';

const meta: Meta = {
  title: 'Generated/Three Card Column',
  parameters: { layout: 'padded' },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj;

export const ThreeCardColumn: Story = {
  render: () => (
    <SimpleGrid cols={3} spacing="lg">
      <div>
        <Card shadow="sm" padding="lg" radius="md" withBorder>
          <Card.Section>
            <Image
              src="https://picsum.photos/400/300?random=1"
              height={200}
              alt="Mountain landscape"
            />
          </Card.Section>

          <Group justify="space-between" mt="md" mb="xs">
            <Text fw={500}>Mountain Adventure</Text>
            <Badge color="blue">Featured</Badge>
          </Group>

          <Text size="sm" c="dimmed">
            Explore breathtaking mountain trails and discover hidden natural wonders in this amazing adventure experience.
          </Text>

          <Button color="blue" fullWidth mt="md" radius="md">
            Learn More
          </Button>
        </Card>
      </div>

      <div>
        <Card shadow="sm" padding="lg" radius="md" withBorder>
          <Card.Section>
            <Image
              src="https://picsum.photos/400/300?random=2"
              height={200}
              alt="Ocean view"
            />
          </Card.Section>

          <Group justify="space-between" mt="md" mb="xs">
            <Text fw={500}>Ocean Retreat</Text>
            <Badge color="teal">Popular</Badge>
          </Group>

          <Text size="sm" c="dimmed">
            Relax by the serene ocean shores and enjoy peaceful sunsets while experiencing coastal luxury at its finest.
          </Text>

          <Button color="blue" fullWidth mt="md" radius="md">
            Learn More
          </Button>
        </Card>
      </div>

      <div>
        <Card shadow="sm" padding="lg" radius="md" withBorder>
          <Card.Section>
            <Image
              src="https://picsum.photos/400/300?random=3"
              height={200}
              alt="Forest trail"
            />
          </Card.Section>

          <Group justify="space-between" mt="md" mb="xs">
            <Text fw={500}>Forest Escape</Text>
            <Badge color="green">New</Badge>
          </Group>

          <Text size="sm" c="dimmed">
            Immerse yourself in lush forest trails and reconnect with nature in this tranquil woodland sanctuary.
          </Text>

          <Button color="blue" fullWidth mt="md" radius="md">
            Learn More
          </Button>
        </Card>
      </div>
    </SimpleGrid>
  ),
};