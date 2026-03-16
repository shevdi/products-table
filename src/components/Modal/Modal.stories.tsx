import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import { Modal } from './index';
import { Button } from '../Button';

const meta: Meta<typeof Modal> = {
  component: Modal,
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

type Story = StoryObj<typeof Modal>;

export const Default: Story = {
  render: function DefaultStory() {
    const [open, setOpen] = useState(false);
    return (
      <>
        <Button onClick={() => setOpen(true)}>Open Modal</Button>
        <Modal open={open} onOpenChange={setOpen}>
          <h2 style={{ marginBottom: '16px', fontSize: '18px' }}>Modal Title</h2>
          <p style={{ marginBottom: '24px', color: 'var(--color-text-secondary)' }}>
            This is the modal content. Click outside or press Escape to close.
          </p>
          <Button variant="secondary" onClick={() => setOpen(false)}>
            Close
          </Button>
        </Modal>
      </>
    );
  },
};

export const FormContent: Story = {
  render: function FormContentStory() {
    const [open, setOpen] = useState(false);
    return (
      <>
        <Button iconLeft="plus-circle" onClick={() => setOpen(true)}>
          Добавить
        </Button>
        <Modal open={open} onOpenChange={setOpen}>
          <h2 style={{ marginBottom: '20px', fontSize: '18px' }}>Добавить товар</h2>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              setOpen(false);
            }}
            style={{ display: 'flex', flexDirection: 'column', gap: '16px', minWidth: '300px' }}
          >
            <label>
              <span style={{ display: 'block', marginBottom: '4px', fontSize: '14px' }}>
                Наименование
              </span>
              <input
                type="text"
                placeholder="Введите наименование"
                style={{
                  width: '100%',
                  padding: '8px 12px',
                  border: '1px solid var(--color-border-light)',
                  borderRadius: '6px',
                }}
              />
            </label>
            <label>
              <span style={{ display: 'block', marginBottom: '4px', fontSize: '14px' }}>
                Цена
              </span>
              <input
                type="number"
                placeholder="0"
                style={{
                  width: '100%',
                  padding: '8px 12px',
                  border: '1px solid var(--color-border-light)',
                  borderRadius: '6px',
                }}
              />
            </label>
            <label>
              <span style={{ display: 'block', marginBottom: '4px', fontSize: '14px' }}>
                Вендор
              </span>
              <input
                type="text"
                placeholder="Введите вендора"
                style={{
                  width: '100%',
                  padding: '8px 12px',
                  border: '1px solid var(--color-border-light)',
                  borderRadius: '6px',
                }}
              />
            </label>
            <label>
              <span style={{ display: 'block', marginBottom: '4px', fontSize: '14px' }}>
                Артикул
              </span>
              <input
                type="text"
                placeholder="Введите артикул"
                style={{
                  width: '100%',
                  padding: '8px 12px',
                  border: '1px solid var(--color-border-light)',
                  borderRadius: '6px',
                }}
              />
            </label>
            <div style={{ display: 'flex', gap: '12px', marginTop: '8px' }}>
              <Button type="submit">Создать</Button>
              <Button variant="secondary" type="button" onClick={() => setOpen(false)}>
                Отмена
              </Button>
            </div>
          </form>
        </Modal>
      </>
    );
  },
};
