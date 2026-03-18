import { useCallback, useMemo } from 'react';
import type { OnChangeFn, RowSelectionState } from '@tanstack/react-table';

export function useTableRowSelection(
  selectedIds: string[],
  setSelectedIds: (ids: string[]) => void
) {
  const rowSelection = useMemo(() => {
    return Object.fromEntries(selectedIds.map((id) => [id, true]));
  }, [selectedIds]);

  const handleRowSelectionChange = useCallback<OnChangeFn<RowSelectionState>>(
    (updaterOrValue) => {
      const current = Object.fromEntries(selectedIds.map((id) => [id, true]));

      const next =
        typeof updaterOrValue === 'function'
          ? updaterOrValue(current)
          : updaterOrValue;

      setSelectedIds(Object.keys(next).filter((id) => next[id]));
    },
    [selectedIds, setSelectedIds]
  );

  return { rowSelection, handleRowSelectionChange };
}
