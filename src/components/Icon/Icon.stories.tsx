import type { Meta, StoryObj } from '@storybook/react';
import { Icon, ICON_NAMES } from './Icon';

const meta: Meta<typeof Icon> = {
  component: Icon,
  tags: ['autodocs'],
  argTypes: {
    name: {
      control: 'select',
      options: ICON_NAMES,
    },
    size: {
      control: { type: 'number', min: 16, max: 48, step: 4 },
    },
    color: {
      control: 'color',
      description: 'Цвет иконки',
    },
  },
};

export default meta;

type Story = StoryObj<typeof Icon & { color?: string }>;

const COLOR_SAMPLES = ['#333333', '#e74c3c', '#3498db', '#2ecc71', '#9b59b6'] as const;

export const Default: Story = {
  args: {
    name: 'search',
    size: 24,
    color: '#333333',
  },
  render: (args) => (
    <Icon
      name={args.name}
      size={args.size}
      style={args.color ? { color: args.color } : undefined}
    />
  ),
};

export const AllIcons: Story = {
  args: {
    size: 24,
  },
  argTypes: {
    name: { table: { disable: true } },
    color: { table: { disable: true } },
  },
  render: (args) => (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(4, 1fr)',
        gap: '24px',
        padding: '24px',
      }}
    >
      {ICON_NAMES.map((name) => (
        <div
          key={name}
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '8px',
          }}
        >
          <Icon name={name} size={args.size} />
          <span style={{ fontSize: '12px', color: '#666' }}>{name}</span>
        </div>
      ))}
    </div>
  ),
};

export const Colors: Story = {
  args: {
    name: 'search',
    size: 32,
  },
  argTypes: {
    color: { table: { disable: true } },
  },
  render: (args) => (
    <div
      style={{
        display: 'flex',
        flexWrap: 'wrap',
        gap: '24px',
        padding: '24px',
        alignItems: 'center',
      }}
    >
      {COLOR_SAMPLES.map((color) => (
        <div
          key={color}
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '8px',
          }}
        >
          <Icon name={args.name} size={args.size} style={{ color }} />
          <span style={{ fontSize: '12px', color: '#666' }}>{color}</span>
        </div>
      ))}
    </div>
  ),
};
