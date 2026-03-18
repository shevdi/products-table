import { useMutation } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';
import { LoginResponse, login } from '@/api/auth';
import { useAuthStore } from '../model/authStore';

export interface LoginFormValues {
  username: string;
  password: string;
  rememberMe: boolean;
}

export function useLoginMutation() {
  const navigate = useNavigate();
  const setAuth = useAuthStore((s) => s.setAuth);

  return useMutation({
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
}
