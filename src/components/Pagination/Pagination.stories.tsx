import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import { Pagination } from './index';

const meta: Meta<typeof Pagination> = {
  component: Pagination,
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <div style={{ padding: '24px', maxWidth: '600px' }}>
        <Story />
      </div>
    ),
  ],
};

export default meta;

type Story = StoryObj<typeof Pagination>;

function PaginationInteractive({
  totalItems,
  pageSize,
  initialPage = 1,
}: {
  totalItems: number;
  pageSize: number;
  initialPage?: number;
}) {
  const [page, setPage] = useState(initialPage);
  return (
    <Pagination
      page={page}
      totalItems={totalItems}
      pageSize={pageSize}
      onPageChange={setPage}
    />
  );
}

export const Default: Story = {
  render: () => (
    <PaginationInteractive totalItems={120} pageSize={20} initialPage={1} />
  ),
};

export const FirstPage: Story = {
  render: () => (
    <PaginationInteractive totalItems={120} pageSize={20} initialPage={1} />
  ),
};

export const MiddlePage: Story = {
  render: () => (
    <PaginationInteractive totalItems={120} pageSize={20} initialPage={3} />
  ),
};

export const LastPage: Story = {
  render: () => (
    <PaginationInteractive totalItems={120} pageSize={20} initialPage={6} />
  ),
};

export const ManyPagesWithEllipsis: Story = {
  render: () => (
    <PaginationInteractive totalItems={500} pageSize={10} initialPage={25} />
  ),
};

export const FewPages: Story = {
  render: () => (
    <PaginationInteractive totalItems={100} pageSize={20} initialPage={2} />
  ),
};

export const Empty: Story = {
  render: () => (
    <Pagination
      page={1}
      totalItems={0}
      pageSize={20}
      onPageChange={() => {}}
    />
  ),
};
