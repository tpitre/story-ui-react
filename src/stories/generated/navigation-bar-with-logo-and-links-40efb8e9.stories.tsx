import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Paper, Group, Text, Anchor, Burger, Container } from '@mantine/core';
import { IconHome, IconSearch, IconUser, IconMail } from '@tabler/icons-react';

const meta: Meta = {
  title: 'Generated/Navigation Bar with Logo and Links v2',
  id: 'navigation-bar-with-logo-and-links-v2-40efb8e9',
  parameters: { layout: 'fullscreen' },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj;

export const Default: Story = {
  render: () => (
    <Paper shadow="sm" p="md" style={{ position: 'sticky', top: 0, zIndex: 100 }}>
      <Container size="lg">
        <Group justify="space-between">
          <Group>
            <Text size="xl" fw={700} c="blue">
              Logo
            </Text>
          </Group>

          <Group gap="md" visibleFrom="sm">
            <Anchor href="#" underline="hover">
              <Group gap="xs">
                <IconHome size={16} />
                <Text>Home</Text>
              </Group>
            </Anchor>
            <Anchor href="#" underline="hover">
              <Group gap="xs">
                <IconSearch size={16} />
                <Text>Search</Text>
              </Group>
            </Anchor>
            <Anchor href="#" underline="hover">
              <Group gap="xs">
                <IconMail size={16} />
                <Text>Contact</Text>
              </Group>
            </Anchor>
            <Anchor href="#" underline="hover">
              <Group gap="xs">
                <IconUser size={16} />
                <Text>Profile</Text>
              </Group>
            </Anchor>
          </Group>

          <Burger hiddenFrom="sm" size="sm" />
        </Group>
      </Container>
    </Paper>
  ),
};

export const WithImageLogo: Story = {
  render: () => (
    <Paper shadow="sm" p="md" style={{ position: 'sticky', top: 0, zIndex: 100 }}>
      <Container size="lg">
        <Group justify="space-between">
          <Group>
            <img
              src="https://picsum.photos/40/40"
              alt="Company Logo"
              style={{ borderRadius: '4px' }}
            />
            <Text size="lg" fw={600}>
              Company
            </Text>
          </Group>

          <Group gap="lg" visibleFrom="md">
            <Anchor href="#" underline="hover" fw={500}>
              Products
            </Anchor>
            <Anchor href="#" underline="hover" fw={500}>
              Solutions
            </Anchor>
            <Anchor href="#" underline="hover" fw={500}>
              Pricing
            </Anchor>
            <Anchor href="#" underline="hover" fw={500}>
              About
            </Anchor>
            <Anchor href="#" underline="hover" fw={500}>
              Support
            </Anchor>
          </Group>

          <Burger hiddenFrom="md" size="sm" />
        </Group>
      </Container>
    </Paper>
  ),
};

export const Minimal: Story = {
  render: () => (
    <Paper shadow="xs" p="sm" style={{ position: 'sticky', top: 0, zIndex: 100 }}>
      <Container size="xl">
        <Group justify="space-between">
          <Text size="lg" fw={700} c="dark">
            Brand
          </Text>

          <Group gap="xl" visibleFrom="sm">
            <Anchor href="#" underline="never" c="dark">
              Home
            </Anchor>
            <Anchor href="#" underline="never" c="dark">
              About
            </Anchor>
            <Anchor href="#" underline="never" c="dark">
              Services
            </Anchor>
            <Anchor href="#" underline="never" c="dark">
              Contact
            </Anchor>
          </Group>

          <Burger hiddenFrom="sm" size="sm" />
        </Group>
      </Container>
    </Paper>
  ),
};
