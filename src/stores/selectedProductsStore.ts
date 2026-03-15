import { create } from 'zustand';

interface SelectedProductsState {
  selectedIds: number[];
}

export const useSelectedProductsStore = create<SelectedProductsState>(() => ({
  selectedIds: [],
}));
