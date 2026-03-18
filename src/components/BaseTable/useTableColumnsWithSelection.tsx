import { useMemo } from 'react';
import type { ColumnDef } from '@tanstack/react-table';
import { Checkbox } from '../Checkbox';

export function useTableColumnsWithSelection<TData>(
  columns: ColumnDef<TData, unknown>[],
  enableRowSelection: boolean
): ColumnDef<TData, unknown>[] {
  return useMemo(() => {
    if (enableRowSelection) {
      return [
        {
          id: 'select',
          header: ({ table }) => (
            <Checkbox.Root
              checked={table.getIsAllRowsSelected()}
              onChange={(checked) => table.toggleAllRowsSelected(checked)}
            >
              <Checkbox.Box aria-label="Выбрать все" />
            </Checkbox.Root>
          ),
          cell: ({ row }) => (
            <Checkbox.Root checked={row.getIsSelected()} onChange={() => row.toggleSelected()}>
              <Checkbox.Box aria-label={`Выбрать строку ${row.id}`} />
            </Checkbox.Root>
          ),
          enableSorting: false,
          meta: { truncate: false },
        },
        ...columns,
      ];
    }
    return columns;
  }, [enableRowSelection, columns]);
}
