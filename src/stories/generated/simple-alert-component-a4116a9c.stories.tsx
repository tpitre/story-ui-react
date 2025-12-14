import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Alert } from '@mantine/core';

const meta: Meta<typeof Alert> = {
  title: 'Generated/Simple Alert Component',
  component: Alert,
  parameters: { layout: 'padded' },
  tags: ['autodocs'],
  argTypes: {
    color: {
      control: 'select',
      options: ['blue', 'red', 'yellow', 'green', 'gray'],
    },
    variant: {
      control: 'select',
      options: ['filled', 'light', 'outline'],
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    color: 'red',
    title: 'Alert title',
    children: 'This is a simple alert message to inform users about important information.',
  },
};

export const Info: Story = {
  args: {
    color: 'red',
    title: 'Information',
    children: 'This is an informational alert with helpful details for the user.',
  },
};

export const Success: Story = {
  args: {
    color: 'red',
    title: 'Success',
    children: 'Your action was completed successfully!',
  },
};

export const Warning: Story = {
  args: {
    color: 'red',
    title: 'Warning',
    children: 'Please be aware of this important warning message.',
  },
};

export const Error: Story = {
  args: {
    color: 'red',
    title: 'Error',
    children: 'An error occurred while processing your request. Please try again.',
  },
};

export const WithoutTitle: Story = {
  args: {
    color: 'red',
    children: 'This alert has no title, just the message content.',
  },
};

export const FilledVariant: Story = {
  args: {
    color: 'red',
    variant: 'filled',
    title: 'Filled Alert',
    children: 'This alert uses the filled variant style.',
  },
};

export const OutlineVariant: Story = {
  args: {
    color: 'red',
    variant: 'outline',
    title: 'Outline Alert',
    children: 'This alert uses the outline variant style.',
  },
};