import { useForm, Controller } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { useMutation } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';
import { LoginResponse, login } from '@/api/auth';
import { useAuthStore } from '../model/authStore';
import { Input, Checkbox, Button, Icon } from '@/components';
import styles from './AuthForm.module.css';

const loginSchema = z.object({
  username: z.string().min(1, 'Поле обязательно для заполнения'),
  password: z.string().min(1, 'Поле обязательно для заполнения'),
  rememberMe: z.boolean(),
});

type LoginFormValues = z.infer<typeof loginSchema>;

export function AuthForm() {
  const navigate = useNavigate();
  const setAuth = useAuthStore((s) => s.setAuth);

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

  const mutation = useMutation({
    mutationFn: async (values: LoginFormValues) => {
      const result = await login(values.username, values.password);
      if (!result.ok) {
        throw new Error(result.error);
      }
      return { ...result.data, rememberMe: values.rememberMe };
    },
    onSuccess: (data: LoginResponse & { rememberMe: boolean }) => {
      setAuth(data.accessToken, data, data.rememberMe);
      navigate('/products');
    },
  });

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
            <Checkbox.Label>Запомнить данные</Checkbox.Label>
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
