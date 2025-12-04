import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Switch, Stack } from '@mantine/core';

const meta: Meta = {
  title: 'Generated/Switches',
  parameters: { layout: 'centered' },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj;

export const Default: Story = {
  render: () => (
    <Stack>
      <Switch label="Enable notifications" />
      <Switch label="Enable emails" />
    </Stack>
  ),
};

export const Checked: Story = {
  render: () => (
    <Stack>
      <Switch label="WiFi" defaultChecked />
      <Switch label="Bluetooth" defaultChecked />
    </Stack>
  ),
};

export const WithDescription: Story = {
  render: () => (
    <Stack>
      <Switch
        label="Send notifications"
        description="Receive push notifications on your device"
      />
      <Switch
        label="Marketing emails"
        description="Receive promotional emails and updates"
      />
    </Stack>
  ),
};

export const Disabled: Story = {
  render: () => (
    <Stack>
      <Switch label="Disabled unchecked" disabled />
      <Switch label="Disabled checked" disabled defaultChecked />
    </Stack>
  ),
};

export const Different_Sizes: Story = {
  render: () => (
    <Stack>
      <Switch label="Extra small" size="xs" />
      <Switch label="Small" size="sm" />
      <Switch label="Medium" size="md" />
      <Switch label="Large" size="lg" />
      <Switch label="Extra large" size="xl" />
    </Stack>
  ),
};

export const Settings_Panel: Story = {
  render: () => (
    <Stack style={{ width: 320 }}>
      <Switch
        label="Dark mode"
        description="Use dark theme across the application"
        defaultChecked
      />
      <Switch
        label="Auto-save"
        description="Automatically save your work every 5 minutes"
        defaultChecked
      />
      <Switch
        label="Show tips"
        description="Display helpful tips and suggestions"
      />
      <Switch
        label="Sound effects"
        description="Play sound effects for actions"
      />
    </Stack>
  ),
};