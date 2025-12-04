import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Checkbox, Stack } from '@mantine/core';

const meta: Meta = {
  title: 'Generated/Two Checkboxes',
  parameters: { layout: 'centered' },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj;

export const Default: Story = {
  render: () => (
    <Stack>
      <Checkbox label="Accept terms and conditions" />
      <Checkbox label="Subscribe to newsletter" />
    </Stack>
  ),
};

export const WithDefaultChecked: Story = {
  render: () => (
    <Stack>
      <Checkbox label="Accept terms and conditions" defaultChecked />
      <Checkbox label="Subscribe to newsletter" />
    </Stack>
  ),
};

export const BothChecked: Story = {
  render: () => (
    <Stack>
      <Checkbox label="Accept terms and conditions" defaultChecked />
      <Checkbox label="Subscribe to newsletter" defaultChecked />
    </Stack>
  ),
};