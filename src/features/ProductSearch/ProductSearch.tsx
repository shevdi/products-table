import { Input } from '@/components/Input';
import { Icon } from '@/components/Icon';

export interface ProductSearchProps {
  value?: string;
  onChange?: (value: string) => void;
}

export function ProductSearch({ value = '', onChange }: ProductSearchProps) {
  return (
    <Input.Root value={value} onChange={onChange}>
      <Input.Box>
        <Input.Slot>
          <Icon name="search" size={20} />
        </Input.Slot>
        <Input.Field placeholder="Поиск товаров" />
      </Input.Box>
    </Input.Root>
  );
}
