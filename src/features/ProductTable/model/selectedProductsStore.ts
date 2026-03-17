import { create } from 'zustand';
import { devtools } from 'zustand/middleware';

interface SelectedProductsState {
  selectedIds: string[];
  setSelectedIds: (ids: string[]) => void;
}

export const useSelectedProductsStore = create<SelectedProductsState>()(
  devtools(
    (set) => ({
      selectedIds: [],
      setSelectedIds: (ids) => set({ selectedIds: ids }),
    }),
    { name: 'SelectedProductsStore', enabled: import.meta.env.DEV }
  )
);
