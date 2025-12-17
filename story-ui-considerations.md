# Mantine Design System - AI Considerations

**Library Name**: Mantine
**Import Path**: `@mantine/core`

## Core Principles

- Use Mantine's built-in props for styling (size, color, variant) instead of custom CSS
- Leverage Mantine's responsive props for mobile-first design
- Use Mantine's spacing system (xs, sm, md, lg, xl) for consistent layouts
- Prefer Mantine components over raw HTML elements

## Do's and Don'ts

### DO

- Use Paper or Box for standalone containers and navigation bars
- Use Group for horizontal layouts with consistent spacing
- Use Stack for vertical layouts
- Use SimpleGrid for responsive grid layouts
- Use Container for max-width constrained content
- Import icons from @tabler/icons-react when icons are needed

### DON'T

- Use AppShellHeader, AppShellNavbar, AppShellAside, AppShellFooter, or AppShellMain outside of an AppShell parent component
- Use raw div elements when Mantine provides a semantic component (Box, Paper, Group, Stack)
- Use inline styles for spacing - use Mantine's spacing props instead
- Use CSS Grid properties as component props - use SimpleGrid or Flex instead

## Special Considerations

- AppShell sub-components (AppShellHeader, AppShellNavbar, etc.) require an AppShell parent to function. For standalone navigation bars or headers, use Paper or Box instead.
- Example standalone navbar: `<Paper shadow="sm" p="md"><Group justify="space-between">...</Group></Paper>`
- Mantine v8 uses `c` prop for colors (e.g., `c="blue"`) and `fw` for font weight
- Use `visibleFrom` and `hiddenFrom` props for responsive visibility

## Error Patterns

1. **Wrong**: `<AppShellHeader height={60}>...</AppShellHeader>` (standalone)
   **Right**: `<Paper shadow="sm" p="md">...</Paper>` (for standalone nav)
   **Why**: AppShellHeader requires AppShell parent context to render properly

2. **Wrong**: `<div style={{ display: 'flex' }}>...</div>`
   **Right**: `<Group>...</Group>` or `<Flex>...</Flex>`
   **Why**: Mantine provides layout components with consistent spacing and responsive behavior
