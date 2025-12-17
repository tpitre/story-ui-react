import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { SimpleGrid, Card, CardSection, Image, Text, Badge, Group, Button } from '@mantine/core';

const meta: Meta = {
  title: 'Generated/Event Cards - 2x4 Grid',
  parameters: { layout: 'padded' },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj;

export const EventCardsGrid: Story = {
  render: () => (
    <SimpleGrid cols={4} spacing="lg" style={{ display: 'flex' }}>
      <div>
        <Card shadow="sm" padding="lg" radius="md" withBorder>
          <CardSection>
            <Image
              src="https://picsum.photos/400/200?random=1"
              height={160}
              alt="Tech Conference 2024"
            />
          </CardSection>
          <Group justify="space-between" mt="md" mb="xs">
            <Text fw={500}>Tech Conference 2024</Text>
            <Badge color="blue" variant="light">Technology</Badge>
          </Group>
          <Text size="sm" c="dimmed">March 15, 2024 • 9:00 AM</Text>
          <Text size="sm" c="dimmed" mb="md">San Francisco, CA</Text>
          <Button color="cyan" fullWidth mt="auto" radius="md">Register Now</Button>
        </Card>
      </div>
      <div>
        <Card shadow="sm" padding="lg" radius="md" withBorder>
          <CardSection>
            <Image
              src="https://picsum.photos/400/200?random=2"
              height={160}
              alt="Music Festival"
            />
          </CardSection>
          <Group justify="space-between" mt="md" mb="xs">
            <Text fw={500}>Music Festival</Text>
            <Badge color="blue" variant="light">Music</Badge>
          </Group>
          <Text size="sm" c="dimmed">April 20, 2024 • 2:00 PM</Text>
          <Text size="sm" c="dimmed" mb="md">Austin, TX</Text>
          <Button color="cyan" fullWidth mt="auto" radius="md">Register Now</Button>
        </Card>
      </div>
      <div>
        <Card shadow="sm" padding="lg" radius="md" withBorder>
          <CardSection>
            <Image
              src="https://picsum.photos/400/200?random=3"
              height={160}
              alt="Art Exhibition Opening"
            />
          </CardSection>
          <Group justify="space-between" mt="md" mb="xs">
            <Text fw={500}>Art Exhibition Opening</Text>
            <Badge color="blue" variant="light">Art</Badge>
          </Group>
          <Text size="sm" c="dimmed">May 5, 2024 • 6:00 PM</Text>
          <Text size="sm" c="dimmed" mb="md">New York, NY</Text>
          <Button color="cyan" fullWidth mt="auto" radius="md">Register Now</Button>
        </Card>
      </div>
      <div>
        <Card shadow="sm" padding="lg" radius="md" withBorder>
          <CardSection>
            <Image
              src="https://picsum.photos/400/200?random=4"
              height={160}
              alt="Startup Pitch Night"
            />
          </CardSection>
          <Group justify="space-between" mt="md" mb="xs">
            <Text fw={500}>Startup Pitch Night</Text>
            <Badge color="blue" variant="light">Business</Badge>
          </Group>
          <Text size="sm" c="dimmed">March 28, 2024 • 7:00 PM</Text>
          <Text size="sm" c="dimmed" mb="md">Seattle, WA</Text>
          <Button color="cyan" fullWidth mt="auto" radius="md">Register Now</Button>
        </Card>
      </div>
      <div>
        <Card shadow="sm" padding="lg" radius="md" withBorder>
          <CardSection>
            <Image
              src="https://picsum.photos/400/200?random=5"
              height={160}
              alt="Yoga Retreat Weekend"
            />
          </CardSection>
          <Group justify="space-between" mt="md" mb="xs">
            <Text fw={500}>Yoga Retreat Weekend</Text>
            <Badge color="blue" variant="light">Wellness</Badge>
          </Group>
          <Text size="sm" c="dimmed">June 10, 2024 • 8:00 AM</Text>
          <Text size="sm" c="dimmed" mb="md">Boulder, CO</Text>
          <Button color="cyan" fullWidth mt="auto" radius="md">Register Now</Button>
        </Card>
      </div>
      <div>
        <Card shadow="sm" padding="lg" radius="md" withBorder>
          <CardSection>
            <Image
              src="https://picsum.photos/400/200?random=6"
              height={160}
              alt="Food & Wine Tasting"
            />
          </CardSection>
          <Group justify="space-between" mt="md" mb="xs">
            <Text fw={500}>Food & Wine Tasting</Text>
            <Badge color="blue" variant="light">Food</Badge>
          </Group>
          <Text size="sm" c="dimmed">April 8, 2024 • 5:00 PM</Text>
          <Text size="sm" c="dimmed" mb="md">Napa Valley, CA</Text>
          <Button color="cyan" fullWidth mt="auto" radius="md">Register Now</Button>
        </Card>
      </div>
      <div>
        <Card shadow="sm" padding="lg" radius="md" withBorder>
          <CardSection>
            <Image
              src="https://picsum.photos/400/200?random=7"
              height={160}
              alt="Photography Workshop"
            />
          </CardSection>
          <Group justify="space-between" mt="md" mb="xs">
            <Text fw={500}>Photography Workshop</Text>
            <Badge color="blue" variant="light">Education</Badge>
          </Group>
          <Text size="sm" c="dimmed">May 18, 2024 • 10:00 AM</Text>
          <Text size="sm" c="dimmed" mb="md">Portland, OR</Text>
          <Button color="cyan" fullWidth mt="auto" radius="md">Register Now</Button>
        </Card>
      </div>
      <div>
        <Card shadow="sm" padding="lg" radius="md" withBorder>
          <CardSection>
            <Image
              src="https://picsum.photos/400/200?random=8"
              height={160}
              alt="Marathon 2024"
            />
          </CardSection>
          <Group justify="space-between" mt="md" mb="xs">
            <Text fw={500}>Marathon 2024</Text>
            <Badge color="blue" variant="light">Sports</Badge>
          </Group>
          <Text size="sm" c="dimmed">June 25, 2024 • 6:00 AM</Text>
          <Text size="sm" c="dimmed" mb="md">Chicago, IL</Text>
          <Button color="cyan" fullWidth mt="auto" radius="md">Register Now</Button>
        </Card>
      </div>
    </SimpleGrid>
  ),
};
