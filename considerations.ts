/**
 * Mantine Design System Considerations for Story UI
 *
 * This file provides design system context to the AI for generating
 * accurate Storybook stories using Mantine v8 components.
 */

export const considerations = `
## Mantine v8 Design System Guidelines

### Import Conventions
- All Mantine components are imported from '@mantine/core'
- Hooks are imported from '@mantine/hooks'
- Icons should use '@tabler/icons-react' (Mantine's recommended icon library)

### Theme Colors
Mantine uses semantic color tokens. Always use these instead of hardcoded values:
- Primary actions: 'blue' (default primary)
- Success: 'green'
- Warning: 'yellow'
- Error/Destructive: 'red'
- Neutral: 'gray'

Use color shade notation: color.N where N is 0-9 (e.g., 'blue.6' for primary shade)

### Component Best Practices

#### Buttons
- Use variant="filled" for primary actions
- Use variant="light" for secondary actions
- Use variant="outline" for tertiary actions
- Use variant="subtle" for ghost buttons
- Always include meaningful text or aria-label for accessibility

#### Cards
- Use shadow="sm" for subtle elevation
- Use radius="md" for consistent corner rounding
- Use padding="lg" for comfortable spacing
- Use withBorder for outlined style

#### Text & Typography
- Use Text component with size="sm", "md", "lg", etc.
- Use c="dimmed" for secondary text (NOT color="gray")
- Use fw={500} for medium weight, fw={700} for bold
- Use Title component for headings (order={1-6})

#### Layout
- Use Group for horizontal layouts with gap="md"
- Use Stack for vertical layouts with gap="md"
- Use Grid and Grid.Col for complex layouts
- Use Container for max-width constraints

#### Form Inputs
- Use TextInput, NumberInput, Select, etc. from @mantine/core
- Always include label prop for accessibility
- Use withAsterisk for required fields
- Use error prop for validation messages

### Spacing Scale
Mantine uses a consistent spacing scale:
- xs: 10px, sm: 12px, md: 16px, lg: 20px, xl: 32px

### Responsive Design
- Use breakpoints: xs, sm, md, lg, xl
- Use hiddenFrom and visibleFrom props for responsive visibility
- Use responsive object syntax: {{ base: 'sm', md: 'lg' }}

### Accessibility
- Always use semantic HTML elements
- Include aria-labels on icon-only buttons
- Use the native Mantine accessibility features
- Ensure sufficient color contrast

### Common Patterns
- Modal: Use Modal component with title, centered
- Notifications: Use @mantine/notifications package
- Forms: Use @mantine/form for form state management
- Tables: Use Table component with striped, highlightOnHover
`;

export default considerations;
