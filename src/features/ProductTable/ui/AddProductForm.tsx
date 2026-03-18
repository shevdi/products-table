import { useForm, Controller } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { toast, Input, Button } from '@/components';
import styles from './AddProductForm.module.css';

const addProductSchema = z.object({
  title: z.string().min(1, 'Поле обязательно для заполнения'),
  price: z
    .string()
    .min(1, 'Поле обязательно для заполнения')
    .refine((v) => {
      const n = parseFloat(v);
      return !Number.isNaN(n) && n > 0;
    }, 'Цена должна быть положительным числом'),
  brand: z.string().min(1, 'Поле обязательно для заполнения'),
  sku: z.string().min(1, 'Поле обязательно для заполнения'),
});

type AddProductFormValues = z.infer<typeof addProductSchema>;

export interface AddProductFormProps {
  onSuccess?: () => void;
}

export function AddProductForm({ onSuccess }: AddProductFormProps) {
  const {
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<AddProductFormValues>({
    resolver: zodResolver(addProductSchema),
    defaultValues: {
      title: '',
      price: '',
      brand: '',
      sku: '',
    },
  });

  const onSubmit = handleSubmit(() => {
    toast({ title: 'Товар добавлен' });
    reset();
    onSuccess?.();
  });

  return (
    <form className={styles.form} onSubmit={onSubmit}>
      <div className={styles.formFields}>
        <Controller
          name="title"
          control={control}
          render={({ field }) => (
            <Input.Root
              value={field.value}
              onChange={field.onChange}
              size="md"
              error={errors.title?.message}
            >
              <Input.Label>Наименование</Input.Label>
              <Input.Box>
                <Input.Field placeholder="Наименование" />
                <Input.Clear />
              </Input.Box>
              <Input.Error />
            </Input.Root>
          )}
        />

        <Controller
          name="price"
          control={control}
          render={({ field }) => (
            <Input.Root
              value={field.value}
              onChange={field.onChange}
              size="md"
              error={errors.price?.message}
            >
              <Input.Label>Цена</Input.Label>
              <Input.Box>
                <Input.Field placeholder="Цена" inputMode="decimal" />
                <Input.Clear />
              </Input.Box>
              <Input.Error />
            </Input.Root>
          )}
        />

        <Controller
          name="brand"
          control={control}
          render={({ field }) => (
            <Input.Root
              value={field.value}
              onChange={field.onChange}
              size="md"
              error={errors.brand?.message}
            >
              <Input.Label>Вендор</Input.Label>
              <Input.Box>
                <Input.Field placeholder="Вендор" />
                <Input.Clear />
              </Input.Box>
              <Input.Error />
            </Input.Root>
          )}
        />

        <Controller
          name="sku"
          control={control}
          render={({ field }) => (
            <Input.Root
              value={field.value}
              onChange={field.onChange}
              size="md"
              error={errors.sku?.message}
            >
              <Input.Label>Артикул</Input.Label>
              <Input.Box>
                <Input.Field placeholder="Артикул" />
                <Input.Clear />
              </Input.Box>
              <Input.Error />
            </Input.Root>
          )}
        />
      </div>

      <div className={styles.actions}>
        <Button type="submit" variant="primary" size="lg" className={styles.button}>
          Добавить
        </Button>
      </div>
    </form>
  );
}
