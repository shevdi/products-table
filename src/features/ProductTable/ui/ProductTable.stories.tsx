import type { Meta, StoryObj } from '@storybook/react';
import { ProductTable } from './ProductTable';
import type { Product } from '@/shared/types/product';

const sampleProducts: Product[] = [
  {
    id: 1,
    title: 'USB Флэшкарта 16GB',
    category: 'Аксессуары',
    brand: 'Samsung',
    sku: 'RCH45Q1A',
    rating: 4.3,
    price: 48652,
  },
  {
    id: 2,
    title: 'Утюг Braun TexStyle 9',
    category: 'Бытовая техника',
    brand: 'TexStyle',
    sku: 'DFCHQ1A',
    rating: 4.9,
    price: 4233,
  },
  {
    id: 3,
    title: 'Смартфон Apple iPhone 17',
    category: 'Телефоны',
    brand: 'Apple',
    sku: 'GUYHD2-X4',
    rating: 4.7,
    price: 88652,
  },
  {
    id: 4,
    title: 'Игровая консоль PlayStation 5 Pro',
    category: 'Игровые консоли',
    brand: 'Sony',
    sku: 'HT45Q21',
    rating: 4.1,
    price: 56236,
  },
  {
    id: 5,
    title: 'Фен Dyson Supersonic Nural',
    category: 'Электроника',
    brand: 'Dyson',
    sku: 'FJHHGF-CR4',
    rating: 2.3,
    price: 48652,
  },
];

const meta: Meta<typeof ProductTable> = {
  component: ProductTable,
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <div style={{ padding: '24px', maxWidth: 900 }}>
        <Story />
      </div>
    ),
  ],
};

export default meta;

type Story = StoryObj<typeof ProductTable>;

export const Default: Story = {
  args: {
    products: sampleProducts,
  },
};

export const WithSelection: Story = {
  args: {
    products: sampleProducts,
  },
};

export const Empty: Story = {
  args: {
    products: [],
  },
};

export const LongNames: Story = {
  args: {
    products: [
      ...sampleProducts,
      {
        id: 6,
        title: 'Очень длинное наименование товара которое должно обрезаться с многоточием при отображении в таблице',
        category: 'Категория с длинным названием',
        brand: 'Производитель',
        sku: 'SKU123',
        rating: 4.5,
        price: 99999,
      } as Product,
    ],
  },
};
