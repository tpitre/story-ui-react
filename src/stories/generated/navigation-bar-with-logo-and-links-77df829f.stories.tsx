import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Group, Anchor, Image, Container, Burger } from '@mantine/core';
import { IconHome, IconUser, IconMail, IconSettings } from '@tabler/icons-react';

const meta: Meta = {
  title: 'Generated/Navigation Bar with Logo and Links v3',
  id: 'navigation-bar-with-logo-and-links-v3-77df829f',
  parameters: { layout: 'fullscreen' },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj;

export const Default: Story = {
  render: () => (
    <Container size="xl" style={{ padding: '1rem 0' }}>
      <Group justify="space-between" align="center">
        <Group align="center">
          <Image
            src="https://picsum.photos/40/40?random=1"
            alt="Logo"
            width={40}
            height={40}
            style={{ borderRadius: '8px' }}
          />
        </Group>
        
        <Group gap="xl" visibleFrom="sm">
          <Anchor href="#" style={{ textDecoration: 'none', color: 'inherit' }}>
            <Group gap="xs" align="center">
              <IconHome size={16} />
              Home
            </Group>
          </Anchor>
          <Anchor href="#" style={{ textDecoration: 'none', color: 'inherit' }}>
            <Group gap="xs" align="center">
              <IconUser size={16} />
              About
            </Group>
          </Anchor>
          <Anchor href="#" style={{ textDecoration: 'none', color: 'inherit' }}>
            <Group gap="xs" align="center">
              <IconMail size={16} />
              Contact
            </Group>
          </Anchor>
          <Anchor href="#" style={{ textDecoration: 'none', color: 'inherit' }}>
            <Group gap="xs" align="center">
              <IconSettings size={16} />
              Services
            </Group>
          </Anchor>
        </Group>
        
        <Burger opened={false} hiddenFrom="sm" aria-label="Toggle navigation" />
      </Group>
    </Container>
  ),
};

export const WithTextLogo: Story = {
  render: () => (
    <Container size="xl" style={{ padding: '1rem 0' }}>
      <Group justify="space-between" align="center">
        <Group align="center">
          <div style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#228be6' }}>
            BrandName
          </div>
        </Group>
        
        <Group gap="xl" visibleFrom="sm">
          <Anchor href="#" style={{ textDecoration: 'none', color: 'inherit' }}>
            Home
          </Anchor>
          <Anchor href="#" style={{ textDecoration: 'none', color: 'inherit' }}>
            Products
          </Anchor>
          <Anchor href="#" style={{ textDecoration: 'none', color: 'inherit' }}>
            About
          </Anchor>
          <Anchor href="#" style={{ textDecoration: 'none', color: 'inherit' }}>
            Contact
          </Anchor>
        </Group>
        
        <Burger opened={false} hiddenFrom="sm" aria-label="Toggle navigation" />
      </Group>
    </Container>
  ),
};

export const Centered: Story = {
  render: () => (
    <Container size="xl" style={{ padding: '1rem 0' }}>
      <Group justify="center" align="center" style={{ marginBottom: '1rem' }}>
        <Group align="center">
          <Image
            src="https://picsum.photos/50/50?random=2"
            alt="Logo"
            width={50}
            height={50}
            style={{ borderRadius: '50%' }}
          />
          <div style={{ fontSize: '1.25rem', fontWeight: 'bold' }}>
            Company
          </div>
        </Group>
      </Group>
      
      <Group justify="center" gap="xl">
        <Anchor href="#" style={{ textDecoration: 'none', color: 'inherit' }}>
          <Group gap="xs" align="center">
            <IconHome size={16} />
            Home
          </Group>
        </Anchor>
        <Anchor href="#" style={{ textDecoration: 'none', color: 'inherit' }}>
          Products
        </Anchor>
        <Anchor href="#" style={{ textDecoration: 'none', color: 'inherit' }}>
          Solutions
        </Anchor>
        <Anchor href="#" style={{ textDecoration: 'none', color: 'inherit' }}>
          Support
        </Anchor>
        <Anchor href="#" style={{ textDecoration: 'none', color: 'inherit' }}>
          Contact
        </Anchor>
      </Group>
    </Container>
  ),
};