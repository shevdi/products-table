import { useForm, Controller } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { useLoginMutation, type LoginFormValues } from '../hooks/useLoginMutation';
import { Input, Checkbox, Button, Icon } from '@/components';
import styles from './AuthForm.module.css';

const loginSchema = z.object({
  username: z.string().min(1, 'Поле обязательно для заполнения'),
  password: z.string().min(1, 'Поле обязательно для заполнения'),
  rememberMe: z.boolean(),
});

export function AuthForm() {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormValues>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      username: '',
      password: '',
      rememberMe: false,
    },
  });

  const mutation = useLoginMutation();

  const apiError = mutation.error?.message;

  return (
    <form className={styles.form} onSubmit={handleSubmit((values) => mutation.mutate(values))}>
      <div className={styles.formFields}>
        <Controller
          name="username"
          control={control}
          render={({ field }) => (
            <Input.Root
              value={field.value}
              onChange={field.onChange}
              size="md"
              error={errors.username?.message}
            >
              <Input.Label>Логин</Input.Label>
              <Input.Box>
                <Input.Slot>
                  <Icon name="user" size={24} />
                </Input.Slot>
                <Input.Field placeholder="Логин" />
                <Input.Clear />
              </Input.Box>
              <Input.Error />
            </Input.Root>
          )}
        />

        <Controller
          name="password"
          control={control}
          render={({ field }) => (
            <Input.Root
              value={field.value}
              onChange={field.onChange}
              type="password"
              size="md"
              error={errors.password?.message ?? apiError}
            >
              <Input.Label>Пароль</Input.Label>
              <Input.Box>
                <Input.Slot>
                  <Icon name="lock" size={24} />
                </Input.Slot>
                <Input.Field type="password" placeholder="Пароль" />
                <Input.PasswordToggle />
              </Input.Box>
              <Input.Error />
            </Input.Root>
          )}
        />
      </div>

      <Controller
        name="rememberMe"
        control={control}
        render={({ field }) => (
          <Checkbox.Root
            checked={field.value}
            onChange={field.onChange}
            className={styles.rememberRow}
          >
            <Checkbox.Box />
            <Checkbox.Label className={styles.rememberLabel}>Запомнить данные</Checkbox.Label>
          </Checkbox.Root>
        )}
      />

      <div className={styles.actions}>
        <Button
          type="submit"
          variant="primary"
          size="lg"
          className={styles.button}
          disabled={mutation.isPending}
        >
          {mutation.isPending ? 'Вход...' : 'Войти'}
        </Button>

        <div className={styles.separator}>
          <span className={styles.separatorLine} />
          <span className={styles.separatorText}>или</span>
          <span className={styles.separatorLine} />
        </div>
      </div>
    </form>
  );
}
