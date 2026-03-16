import type { Meta, StoryObj } from '@storybook/react';
import { ToastProvider, toast } from './index';
import { Button } from '../Button';

const meta: Meta<typeof ToastProvider> = {
  component: ToastProvider,
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <ToastProvider>
        <div style={{ padding: '24px' }}>
          <Story />
        </div>
      </ToastProvider>
    ),
  ],
};

export default meta;

type Story = StoryObj<typeof ToastProvider>;

export const Default: Story = {
  render: function DefaultStory() {
    return (
      <Button
        onClick={() =>
          toast({
            title: 'Уведомление',
            description: 'Это тестовое уведомление. Оно закроется автоматически.',
          })
        }
      >
        Показать Toast
      </Button>
    );
  },
};

export const Success: Story = {
  render: function SuccessStory() {
    return (
      <Button
        onClick={() =>
          toast({
            title: 'Успешно',
            description: 'Товар добавлен',
          })
        }
      >
        Добавить товар
      </Button>
    );
  },
};
