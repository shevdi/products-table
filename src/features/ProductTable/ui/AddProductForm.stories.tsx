import type { Meta, StoryObj } from '@storybook/react';
import { ToastProvider } from '@/components/Toast';
import { AddProductForm } from './AddProductForm';

const meta: Meta<typeof AddProductForm> = {
  component: AddProductForm,
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <ToastProvider>
        <div style={{ padding: '24px', maxWidth: 400 }}>
          <Story />
        </div>
      </ToastProvider>
    ),
  ],
};

export default meta;

type Story = StoryObj<typeof AddProductForm>;

export const Default: Story = {};

export const WithOnSuccess: Story = {
  args: {
    onSuccess: () => console.log('Form submitted successfully'),
  },
};
