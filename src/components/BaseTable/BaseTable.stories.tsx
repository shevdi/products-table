import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import type { ColumnDef, SortingState } from '@tanstack/react-table';
import { BaseTable } from './BaseTable';

interface SampleRow {
  id: number;
  name: string;
  category: string;
  price: number;
}

const sampleData: SampleRow[] = [
  { id: 1, name: 'USB Флэшкарта 16GB', category: 'Аксессуары', price: 48652 },
  { id: 2, name: 'Утюг Braun TexStyle 9', category: 'Бытовая техника', price: 4233 },
  { id: 3, name: 'Смартфон Apple iPhone 17', category: 'Телефоны', price: 88652 },
  { id: 4, name: 'Игровая консоль PlayStation 5 Pro', category: 'Игровые консоли', price: 56236 },
  { id: 5, name: 'Фен Dyson Supersonic', category: 'Электроника', price: 48652 },
];

const basicColumns: ColumnDef<SampleRow, unknown>[] = [
  { accessorKey: 'name', header: 'Наименование', enableSorting: true },
  { accessorKey: 'category', header: 'Категория', enableSorting: true },
  {
    accessorKey: 'price',
    header: 'Цена, Р',
    enableSorting: true,
    cell: ({ getValue }) => (getValue() as number).toLocaleString('ru-RU'),
  },
];

const meta: Meta<typeof BaseTable<SampleRow>> = {
  component: BaseTable,
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <div style={{ padding: '24px', maxWidth: 800 }}>
        <Story />
      </div>
    ),
  ],
};

export default meta;

type Story = StoryObj<typeof BaseTable<SampleRow>>;

export const Default: Story = {
  args: {
    data: sampleData,
    columns: basicColumns,
    getRowId: (row) => String(row.id),
  },
};

export const Empty: Story = {
  args: {
    data: [],
    columns: basicColumns,
    emptyMessage: 'Нет данных для отображения',
  },
};

export const WithSorting: Story = {
  render: function WithSortingStory() {
    const [sorting, setSorting] = useState<SortingState>([{ id: 'price', desc: true }]);
    return (
      <BaseTable<SampleRow>
        data={sampleData}
        columns={basicColumns}
        sorting={sorting}
        onSortingChange={setSorting}
        getRowId={(row) => String(row.id)}
      />
    );
  },
};

export const WithSelection: Story = {
  render: function WithSelectionStory() {
    const [rowSelection, setRowSelection] = useState<Record<string, boolean>>({});
    return (
      <BaseTable<SampleRow>
        data={sampleData}
        columns={basicColumns}
        rowSelection={rowSelection}
        onRowSelectionChange={setRowSelection}
        enableRowSelection
        getRowId={(row) => String(row.id)}
      />
    );
  },
};

export const CustomCells: Story = {
  args: {
    data: sampleData,
    columns: [
      {
        accessorKey: 'name',
        header: 'Наименование',
        cell: ({ row }) => (
          <div>
            <div style={{ fontWeight: 600 }}>{row.original.name}</div>
            <div style={{ fontSize: 12, color: 'var(--color-text-secondary)' }}>
              {row.original.category}
            </div>
          </div>
        ),
        meta: { truncate: false },
      },
      {
        accessorKey: 'price',
        header: 'Цена',
        cell: ({ getValue }) => `${(getValue() as number).toLocaleString('ru-RU')} Р`,
      },
    ],
    getRowId: (row) => String(row.id),
  },
};
