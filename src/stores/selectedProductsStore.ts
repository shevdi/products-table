import { create } from 'zustand';

interface SelectedProductsState {
  selectedIds: string[];
  setSelectedIds: (ids: string[]) => void;
}

export const useSelectedProductsStore = create<SelectedProductsState>((set) => ({
  selectedIds: [],
  setSelectedIds: (ids) => set({ selectedIds: ids }),
}));
