import type { Meta, StoryObj } from '@storybook/react';
import { ProgressBar } from './index';

const meta: Meta<typeof ProgressBar> = {
  component: ProgressBar,
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <div style={{ padding: '24px', maxWidth: '400px' }}>
        <Story />
      </div>
    ),
  ],
};

export default meta;

type Story = StoryObj<typeof ProgressBar>;

export const Determinate: Story = {
  args: {
    value: 50,
    max: 100,
  },
};

export const Indeterminate: Story = {
  args: {
    value: null,
  },
};

export const CustomMax: Story = {
  args: {
    value: 75,
    max: 150,
  },
};
