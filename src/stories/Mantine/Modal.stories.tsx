import type { Meta, StoryObj } from '@storybook/react';
import { Modal, Button, Text, Group, TextInput, Stack } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';

const meta: Meta<typeof Modal> = {
  title: 'Mantine/Modal',
  component: Modal,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  render: () => {
    const [opened, { open, close }] = useDisclosure(false);

    return (
      <>
        <Modal opened={opened} onClose={close} title="Authentication">
          <Text size="sm">
            This is a basic modal dialog. Modals are used to display content that requires
            user interaction before they can continue.
          </Text>
        </Modal>

        <Button onClick={open}>Open modal</Button>
      </>
    );
  },
};

export const WithForm: Story = {
  render: () => {
    const [opened, { open, close }] = useDisclosure(false);

    return (
      <>
        <Modal opened={opened} onClose={close} title="Create Account">
          <Stack>
            <TextInput label="Name" placeholder="Your name" />
            <TextInput label="Email" placeholder="you@email.com" />
            <Group justify="flex-end" mt="md">
              <Button variant="light" onClick={close}>Cancel</Button>
              <Button onClick={close}>Submit</Button>
            </Group>
          </Stack>
        </Modal>

        <Button onClick={open}>Open form modal</Button>
      </>
    );
  },
};

export const Sizes: Story = {
  render: () => {
    const [opened, { open, close }] = useDisclosure(false);
    const [size, setSize] = useState<string>('md');

    return (
      <>
        <Modal opened={opened} onClose={close} title={`${size} Modal`} size={size}>
          <Text size="sm">
            This modal has size &quot;{size}&quot;. Try different sizes to see how the modal
            adapts to different content widths.
          </Text>
        </Modal>

        <Group>
          <Button onClick={() => { setSize('xs'); open(); }}>XS</Button>
          <Button onClick={() => { setSize('sm'); open(); }}>SM</Button>
          <Button onClick={() => { setSize('md'); open(); }}>MD</Button>
          <Button onClick={() => { setSize('lg'); open(); }}>LG</Button>
          <Button onClick={() => { setSize('xl'); open(); }}>XL</Button>
        </Group>
      </>
    );
  },
};

export const Centered: Story = {
  render: () => {
    const [opened, { open, close }] = useDisclosure(false);

    return (
      <>
        <Modal opened={opened} onClose={close} title="Centered Modal" centered>
          <Text size="sm">
            This modal is centered vertically on the screen.
          </Text>
        </Modal>

        <Button onClick={open}>Open centered modal</Button>
      </>
    );
  },
};

function useState<T>(initial: T): [T, (val: T) => void] {
  const [state, setState] = require('react').useState(initial);
  return [state, setState];
}
