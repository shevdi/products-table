import { Input, Icon } from '@/components';

export interface ProductSearchProps {
  value?: string;
  onChange?: (value: string) => void;
  className?: string;
}

export function ProductSearch({ value = '', onChange, className }: ProductSearchProps) {
  return (
    <Input.Root value={value} onChange={onChange} className={className}>
      <Input.Box>
        <Input.Slot>
          <Icon name="search" size={24} />
        </Input.Slot>
        <Input.Field placeholder="Найти" aria-label="Найти" />
      </Input.Box>
    </Input.Root>
  );
}
