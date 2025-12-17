import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Group, Anchor, Image, Box, Burger } from '@mantine/core';

const meta: Meta = {
  title: 'Generated/Navigation Bar with Logo and Links',
  id: 'navigation-bar-with-logo-and-links-35d1cf53',
  parameters: { layout: 'fullscreen' },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj;

export const Default: Story = {
  render: () => (
    <Box style={{ borderBottom: '1px solid #e0e0e0', padding: '16px 24px' }}>
      <Group justify="space-between" align="center">
        <Image
          src="https://picsum.photos/120/40?random=1"
          alt="Company Logo"
          width={120}
          height={40}
        />
        <Group gap="xl">
          <Anchor href="#" underline="never" c="dark" fw={500}>
            Home
          </Anchor>
          <Anchor href="#" underline="never" c="dark" fw={500}>
            About
          </Anchor>
          <Anchor href="#" underline="never" c="dark" fw={500}>
            Services
          </Anchor>
          <Anchor href="#" underline="never" c="dark" fw={500}>
            Products
          </Anchor>
          <Anchor href="#" underline="never" c="dark" fw={500}>
            Contact
          </Anchor>
        </Group>
      </Group>
    </Box>
  ),
};

export const WithBurger: Story = {
  render: () => (
    <Box style={{ borderBottom: '1px solid #e0e0e0', padding: '16px 24px' }}>
      <Group justify="space-between" align="center">
        <Image
          src="https://picsum.photos/120/40?random=2"
          alt="Company Logo"
          width={120}
          height={40}
        />
        <Group gap="xl" visibleFrom="md">
          <Anchor href="#" underline="never" c="dark" fw={500}>
            Home
          </Anchor>
          <Anchor href="#" underline="never" c="dark" fw={500}>
            About
          </Anchor>
          <Anchor href="#" underline="never" c="dark" fw={500}>
            Services
          </Anchor>
          <Anchor href="#" underline="never" c="dark" fw={500}>
            Products
          </Anchor>
          <Anchor href="#" underline="never" c="dark" fw={500}>
            Contact
          </Anchor>
        </Group>
        <Box hiddenFrom="md">
          <Burger opened={false} />
        </Box>
      </Group>
    </Box>
  ),
};

export const Centered: Story = {
  render: () => (
    <Box style={{ borderBottom: '1px solid #e0e0e0', padding: '16px 24px' }}>
      <Group justify="center" align="center" gap="xl">
        <Image
          src="https://picsum.photos/120/40?random=3"
          alt="Company Logo"
          width={120}
          height={40}
        />
        <Anchor href="#" underline="never" c="dark" fw={500}>
          Home
        </Anchor>
        <Anchor href="#" underline="never" c="dark" fw={500}>
          About
        </Anchor>
        <Anchor href="#" underline="never" c="dark" fw={500}>
          Services
        </Anchor>
        <Anchor href="#" underline="never" c="dark" fw={500}>
          Products
        </Anchor>
        <Anchor href="#" underline="never" c="dark" fw={500}>
          Contact
        </Anchor>
      </Group>
    </Box>
  ),
};