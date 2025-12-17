import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Group, Text, Anchor, Box, Button, Burger, Container } from '@mantine/core';

const meta: Meta = {
  title: 'Generated/Navigation Bar with Logo and Links',
  id: 'navigation-bar-with-logo-and-links-d8b7baf6',
  parameters: { layout: 'fullscreen' },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj;

export const Default: Story = {
  render: () => (
    <Box style={{ borderBottom: '1px solid #e9ecef', backgroundColor: '#fff' }}>
      <Container size="xl">
        <Group justify="space-between" h={60}>
          <Group gap="xs">
            <Box
              style={{
                width: 32,
                height: 32,
                backgroundColor: '#228be6',
                borderRadius: 6,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <Text c="white" fw={700} size="sm">
                A
              </Text>
            </Box>
            <Text fw={700} size="lg">
              Acme Inc
            </Text>
          </Group>

          <Group gap="xl" visibleFrom="sm">
            <Anchor href="#" c="dark" underline="never">
              Home
            </Anchor>
            <Anchor href="#" c="dark" underline="never">
              Products
            </Anchor>
            <Anchor href="#" c="dark" underline="never">
              Services
            </Anchor>
            <Anchor href="#" c="dark" underline="never">
              About
            </Anchor>
            <Anchor href="#" c="dark" underline="never">
              Contact
            </Anchor>
          </Group>

          <Group gap="sm">
            <Button variant="subtle" visibleFrom="sm">
              Sign In
            </Button>
            <Button visibleFrom="sm">Get Started</Button>
            <Burger hiddenFrom="sm" opened={false} />
          </Group>
        </Group>
      </Container>
    </Box>
  ),
};

export const WithTransparentBackground: Story = {
  render: () => (
    <Box style={{ backgroundColor: '#1a1b1e' }}>
      <Container size="xl">
        <Group justify="space-between" h={60}>
          <Group gap="xs">
            <Box
              style={{
                width: 32,
                height: 32,
                backgroundColor: '#40c057',
                borderRadius: 6,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <Text c="white" fw={700} size="sm">
                B
              </Text>
            </Box>
            <Text fw={700} size="lg" c="white">
              Brand
            </Text>
          </Group>

          <Group gap="xl">
            <Anchor href="#" c="gray.4" underline="never">
              Features
            </Anchor>
            <Anchor href="#" c="gray.4" underline="never">
              Pricing
            </Anchor>
            <Anchor href="#" c="gray.4" underline="never">
              Docs
            </Anchor>
            <Anchor href="#" c="gray.4" underline="never">
              Blog
            </Anchor>
          </Group>

          <Group gap="sm">
            <Button variant="subtle" c="white">
              Login
            </Button>
            <Button color="green">Sign Up Free</Button>
          </Group>
        </Group>
      </Container>
    </Box>
  ),
};

export const Centered: Story = {
  render: () => (
    <Box style={{ borderBottom: '1px solid #e9ecef', backgroundColor: '#fff' }}>
      <Container size="xl">
        <Group justify="center" h={60} gap="xl">
          <Anchor href="#" c="dark" underline="never">
            Home
          </Anchor>
          <Anchor href="#" c="dark" underline="never">
            About
          </Anchor>
          <Anchor href="#" c="dark" underline="never">
            Services
          </Anchor>

          <Group gap="xs">
            <Box
              style={{
                width: 40,
                height: 40,
                backgroundColor: '#7950f2',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <Text c="white" fw={700}>
                L
              </Text>
            </Box>
            <Text fw={700} size="xl">
              Logo
            </Text>
          </Group>

          <Anchor href="#" c="dark" underline="never">
            Portfolio
          </Anchor>
          <Anchor href="#" c="dark" underline="never">
            Team
          </Anchor>
          <Anchor href="#" c="dark" underline="never">
            Contact
          </Anchor>
        </Group>
      </Container>
    </Box>
  ),
};

export const WithCTA: Story = {
  render: () => (
    <Box style={{ borderBottom: '1px solid #e9ecef', backgroundColor: '#fff' }}>
      <Container size="xl">
        <Group justify="space-between" h={70}>
          <Group gap="md">
            <Box
              style={{
                width: 36,
                height: 36,
                background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                borderRadius: 8,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <Text c="white" fw={700}>
                S
              </Text>
            </Box>
            <Text fw={700} size="lg">
              Startup
            </Text>
          </Group>

          <Group gap="lg">
            <Anchor href="#" c="dark" underline="never" fw={500}>
              Solutions
            </Anchor>
            <Anchor href="#" c="dark" underline="never" fw={500}>
              Pricing
            </Anchor>
            <Anchor href="#" c="dark" underline="never" fw={500}>
              Resources
            </Anchor>
            <Anchor href="#" c="dark" underline="never" fw={500}>
              Company
            </Anchor>
          </Group>

          <Group gap="md">
            <Anchor href="#" c="dark" underline="never">
              Sign in
            </Anchor>
            <Button
              variant="gradient"
              gradient={{ from: 'indigo', to: 'violet' }}
              radius="xl"
            >
              Start Free Trial
            </Button>
          </Group>
        </Group>
      </Container>
    </Box>
  ),
};