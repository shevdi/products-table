import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import { Checkbox } from './index';

const meta: Meta<typeof Checkbox.Root> = {
  component: Checkbox.Root,
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <div style={{ padding: '24px' }}>
        <Story />
      </div>
    ),
  ],
};

export default meta;

type Story = StoryObj<typeof Checkbox.Root>;

export const Default: Story = {
  render: () => (
    <Checkbox.Root>
      <Checkbox.Box />
    </Checkbox.Root>
  ),
};

export const WithLabel: Story = {
  render: () => (
    <Checkbox.Root>
      <Checkbox.Box />
      <Checkbox.Label>Наименование</Checkbox.Label>
    </Checkbox.Root>
  ),
};

export const Checked: Story = {
  render: () => (
    <Checkbox.Root checked onChange={() => {}}>
      <Checkbox.Box />
      <Checkbox.Label>Наименование</Checkbox.Label>
    </Checkbox.Root>
  ),
};

export const Disabled: Story = {
  render: () => (
    <Checkbox.Root disabled>
      <Checkbox.Box />
      <Checkbox.Label>Disabled</Checkbox.Label>
    </Checkbox.Root>
  ),
};

export const Error: Story = {
  render: () => (
    <Checkbox.Root error="Обязательное поле">
      <Checkbox.Box />
      <Checkbox.Label>Согласие с условиями</Checkbox.Label>
    </Checkbox.Root>
  ),
};

export const FormUsage: Story = {
  render: function FormUsageStory() {
    const [agreed, setAgreed] = useState(false);
    return (
      <form
        onSubmit={(e) => {
          e.preventDefault();
          alert(`Submitted: agreed=${agreed}`);
        }}
        style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}
      >
        <Checkbox.Root checked={agreed} onChange={setAgreed}>
          <Checkbox.Box />
          <Checkbox.Label>Я согласен с условиями</Checkbox.Label>
        </Checkbox.Root>
        <button type="submit">Отправить</button>
      </form>
    );
  },
};
