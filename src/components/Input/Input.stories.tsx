import type { Meta, StoryObj } from '@storybook/react';
import { Input } from './index';
import { Icon } from '../Icon';

const meta: Meta<typeof Input.Root> = {
  component: Input.Root,
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <div style={{ width: '400px', padding: '24px' }}>
        <Story />
      </div>
    ),
  ],
};

export default meta;

type Story = StoryObj<typeof Input.Root>;

export const Default: Story = {
  render: () => (
    <Input.Root>
      <Input.Box>
        <Input.Field placeholder="Enter text..." />
      </Input.Box>
    </Input.Root>
  ),
};

export const Search: Story = {
  render: () => (
    <Input.Root>
      <Input.Box>
        <Input.Leading>
          <Icon name="search" size={24} />
        </Input.Leading>
        <Input.Field placeholder="Найти" />
      </Input.Box>
    </Input.Root>
  ),
};

export const UsernameWithClear: Story = {
  render: () => (
    <Input.Root>
      <Input.Box>
        <Input.Leading>
          <Icon name="user" size={24} />
        </Input.Leading>
        <Input.Field placeholder="Username" />
        <Input.Trailing>
          <Input.Clear />
        </Input.Trailing>
      </Input.Box>
    </Input.Root>
  ),
};

export const Password: Story = {
  render: () => (
    <Input.Root type="password">
      <Input.Box>
        <Input.Leading>
          <Icon name="lock" size={24} />
        </Input.Leading>
        <Input.Field type="password" placeholder="Password" />
        <Input.Trailing>
          <Input.PasswordToggle />
        </Input.Trailing>
      </Input.Box>
    </Input.Root>
  ),
};

export const WithLabel: Story = {
  render: () => (
    <Input.Root>
      <Input.Label>Логин</Input.Label>
      <Input.Box>
        <Input.Leading>
          <Icon name="user" size={24} />
        </Input.Leading>
        <Input.Field placeholder="Username" />
        <Input.Trailing>
          <Input.Clear />
        </Input.Trailing>
      </Input.Box>
    </Input.Root>
  ),
};

export const WithError: Story = {
  render: () => (
    <Input.Root error="Обязательное поле">
      <Input.Label>Логин</Input.Label>
      <Input.Box>
        <Input.Leading>
          <Icon name="user" size={24} />
        </Input.Leading>
        <Input.Field placeholder="Username" />
        <Input.Trailing>
          <Input.Clear />
        </Input.Trailing>
      </Input.Box>
      <Input.Error />
    </Input.Root>
  ),
};

export const Disabled: Story = {
  render: () => (
    <Input.Root disabled>
      <Input.Box>
        <Input.Leading>
          <Icon name="search" size={24} />
        </Input.Leading>
        <Input.Field placeholder="Disabled" disabled />
      </Input.Box>
    </Input.Root>
  ),
};

export const Sizes: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
      <Input.Root size="sm">
        <Input.Label>Search (sm)</Input.Label>
        <Input.Box>
          <Input.Leading>
            <Icon name="search" size={24} />
          </Input.Leading>
          <Input.Field placeholder="48px height, 8px radius" />
        </Input.Box>
      </Input.Root>
      <Input.Root size="md">
        <Input.Label>Login (md)</Input.Label>
        <Input.Box>
          <Input.Leading>
            <Icon name="user" size={24} />
          </Input.Leading>
          <Input.Field placeholder="55px height, 12px radius" />
        </Input.Box>
      </Input.Root>
    </div>
  ),
};
