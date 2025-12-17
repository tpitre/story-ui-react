import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { 
  SimpleGrid, 
  Card, 
  Title, 
  Text, 
  Badge, 
  Button, 
  Group, 
  Stack,
  Image,
  Progress,
  Table,
  TableThead,
  TableTbody,
  TableTr,
  TableTh,
  TableTd,
  ActionIcon,
  Paper,
  Divider
} from '@mantine/core';

const meta: Meta = {
  title: 'Generated/Women\'s Apparel Inventory Dashboard',
  parameters: { layout: 'padded' },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj;

export const WomensApparelDashboard: Story = {
  render: () => (
    <Stack gap="xl">
      <div>
        <Title order={1}>Women's Apparel Inventory</Title>
        <Text c="dimmed" size="sm">Manage and track your product inventory</Text>
      </div>

      <SimpleGrid cols={4} spacing="lg">
        <div>
          <Paper shadow="xs" p="md" withBorder>
            <Text size="sm" c="dimmed">Total Products</Text>
            <Title order={2}>248</Title>
            <Text size="xs" c="green">+12% from last month</Text>
          </Paper>
        </div>
        <div>
          <Paper shadow="xs" p="md" withBorder>
            <Text size="sm" c="dimmed">Low Stock Items</Text>
            <Title order={2}>18</Title>
            <Text size="xs" c="orange">Needs attention</Text>
          </Paper>
        </div>
        <div>
          <Paper shadow="xs" p="md" withBorder>
            <Text size="sm" c="dimmed">Out of Stock</Text>
            <Title order={2}>5</Title>
            <Text size="xs" c="red">Requires reorder</Text>
          </Paper>
        </div>
        <div>
          <Paper shadow="xs" p="md" withBorder>
            <Text size="sm" c="dimmed">Total Value</Text>
            <Title order={2}>$45,890</Title>
            <Text size="xs" c="blue">Current inventory</Text>
          </Paper>
        </div>
      </SimpleGrid>

      <Card shadow="sm" padding="lg" withBorder>
        <Title order={3} mb="md">Featured Products</Title>
        <SimpleGrid cols={3} spacing="lg">
          <div>
            <Card shadow="xs" padding="md" withBorder>
              <Card.Section>
                <Image
                  src="https://picsum.photos/400/300?random=1"
                  alt="Summer Maxi Dress"
                  height={200}
                />
              </Card.Section>
              <Stack gap="xs" mt="md">
                <Group justify="space-between">
                  <Text fw={600}>Summer Maxi Dress</Text>
                  <Badge color="green">In Stock</Badge>
                </Group>
                <Text size="sm" c="dimmed">SKU: WD-2024-001</Text>
                <Group justify="space-between">
                  <Text size="lg" fw={700}>$89.99</Text>
                  <Text size="sm" c="dimmed">Stock: 45</Text>
                </Group>
                <Progress value={75} color="green" size="sm" />
                <Group justify="space-between" mt="xs">
                  <Button variant="light" size="xs">Edit</Button>
                  <Button variant="filled" size="xs">Reorder</Button>
                </Group>
              </Stack>
            </Card>
          </div>
          <div>
            <Card shadow="xs" padding="md" withBorder>
              <Card.Section>
                <Image
                  src="https://picsum.photos/400/300?random=2"
                  alt="Silk Blouse"
                  height={200}
                />
              </Card.Section>
              <Stack gap="xs" mt="md">
                <Group justify="space-between">
                  <Text fw={600}>Silk Blouse</Text>
                  <Badge color="orange">Low Stock</Badge>
                </Group>
                <Text size="sm" c="dimmed">SKU: WB-2024-015</Text>
                <Group justify="space-between">
                  <Text size="lg" fw={700}>$64.99</Text>
                  <Text size="sm" c="dimmed">Stock: 8</Text>
                </Group>
                <Progress value={20} color="orange" size="sm" />
                <Group justify="space-between" mt="xs">
                  <Button variant="light" size="xs">Edit</Button>
                  <Button variant="filled" size="xs">Reorder</Button>
                </Group>
              </Stack>
            </Card>
          </div>
          <div>
            <Card shadow="xs" padding="md" withBorder>
              <Card.Section>
                <Image
                  src="https://picsum.photos/400/300?random=3"
                  alt="Denim Jacket"
                  height={200}
                />
              </Card.Section>
              <Stack gap="xs" mt="md">
                <Group justify="space-between">
                  <Text fw={600}>Denim Jacket</Text>
                  <Badge color="red">Out of Stock</Badge>
                </Group>
                <Text size="sm" c="dimmed">SKU: WJ-2024-008</Text>
                <Group justify="space-between">
                  <Text size="lg" fw={700}>$129.99</Text>
                  <Text size="sm" c="dimmed">Stock: 0</Text>
                </Group>
                <Progress value={0} color="red" size="sm" />
                <Group justify="space-between" mt="xs">
                  <Button variant="light" size="xs">Edit</Button>
                  <Button variant="filled" size="xs" color="red">Urgent Reorder</Button>
                </Group>
              </Stack>
            </Card>
          </div>
        </SimpleGrid>
      </Card>

      <Card shadow="sm" padding="lg" withBorder>
        <Group justify="space-between" mb="md">
          <Title order={3}>Recent Inventory Activity</Title>
          <Button variant="light" size="sm">View All</Button>
        </Group>
        <Table striped highlightOnHover>
          <TableThead>
            <TableTr>
              <TableTh>Product Name</TableTh>
              <TableTh>SKU</TableTh>
              <TableTh>Category</TableTh>
              <TableTh>Stock</TableTh>
              <TableTh>Price</TableTh>
              <TableTh>Status</TableTh>
              <TableTh>Actions</TableTh>
            </TableTr>
          </TableThead>
          <TableTbody>
            <TableTr>
              <TableTd>Floral Print Dress</TableTd>
              <TableTd>WD-2024-023</TableTd>
              <TableTd>Dresses</TableTd>
              <TableTd>32</TableTd>
              <TableTd>$79.99</TableTd>
              <TableTd><Badge color="green">In Stock</Badge></TableTd>
              <TableTd>
                <Group gap="xs">
                  <ActionIcon variant="light" size="sm">Edit</ActionIcon>
                  <ActionIcon variant="light" size="sm" color="blue">View</ActionIcon>
                </Group>
              </TableTd>
            </TableTr>
            <TableTr>
              <TableTd>Leather Handbag</TableTd>
              <TableTd>WA-2024-042</TableTd>
              <TableTd>Accessories</TableTd>
              <TableTd>15</TableTd>
              <TableTd>$149.99</TableTd>
              <TableTd><Badge color="green">In Stock</Badge></TableTd>
              <TableTd>
                <Group gap="xs">
                  <ActionIcon variant="light" size="sm">Edit</ActionIcon>
                  <ActionIcon variant="light" size="sm" color="blue">View</ActionIcon>
                </Group>
              </TableTd>
            </TableTr>
            <TableTr>
              <TableTd>Wool Cardigan</TableTd>
              <TableTd>WS-2024-017</TableTd>
              <TableTd>Sweaters</TableTd>
              <TableTd>6</TableTd>
              <TableTd>$94.99</TableTd>
              <TableTd><Badge color="orange">Low Stock</Badge></TableTd>
              <TableTd>
                <Group gap="xs">
                  <ActionIcon variant="light" size="sm">Edit</ActionIcon>
                  <ActionIcon variant="light" size="sm" color="blue">View</ActionIcon>
                </Group>
              </TableTd>
            </TableTr>
            <TableTr>
              <TableTd>High-Waist Jeans</TableTd>
              <TableTd>WP-2024-009</TableTd>
              <TableTd>Pants</TableTd>
              <TableTd>28</TableTd>
              <TableTd>$69.99</TableTd>
              <TableTd><Badge color="green">In Stock</Badge></TableTd>
              <TableTd>
                <Group gap="xs">
                  <ActionIcon variant="light" size="sm">Edit</ActionIcon>
                  <ActionIcon variant="light" size="sm" color="blue">View</ActionIcon>
                </Group>
              </TableTd>
            </TableTr>
            <TableTr>
              <TableTd>Cashmere Scarf</TableTd>
              <TableTd>WA-2024-055</TableTd>
              <TableTd>Accessories</TableTd>
              <TableTd>0</TableTd>
              <TableTd>$59.99</TableTd>
              <TableTd><Badge color="red">Out of Stock</Badge></TableTd>
              <TableTd>
                <Group gap="xs">
                  <ActionIcon variant="light" size="sm">Edit</ActionIcon>
                  <ActionIcon variant="light" size="sm" color="blue">View</ActionIcon>
                </Group>
              </TableTd>
            </TableTr>
          </TableTbody>
        </Table>
      </Card>
    </Stack>
  ),
};