const BASE_URL =
  import.meta.env.VITE_API_URL ?? 'https://dummyjson.com';

export interface LoginResponse {
  id: number;
  username: string;
  email: string;
  firstName: string;
  lastName: string;
  accessToken: string;
  refreshToken?: string;
}

export interface LoginError {
  message: string;
}

export type AuthApiResponse = LoginResponse | LoginError;

function isLoginError(data: AuthApiResponse): data is LoginError {
  return !('accessToken' in data);
}

export type LoginResult =
  | { ok: true; data: LoginResponse }
  | { ok: false; error: string };

export async function login(
  username: string,
  password: string
): Promise<LoginResult> {
  try {
    const res = await fetch(`${BASE_URL}/auth/login`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ username, password }),
    });

    const data: AuthApiResponse = await res.json();

    if (!res.ok) {
      const message =
        (isLoginError(data) ? data.message : null) ?? `Ошибка авторизации: ${res.status}`;
      return { ok: false, error: message };
    }

    if (isLoginError(data)) {
      return { ok: false, error: data.message ?? 'Ошибка авторизации' };
    }

    return { ok: true, data };
  } catch (err) {
    const message =
      err instanceof Error ? err.message : 'Не удалось подключиться к серверу';
    return { ok: false, error: message };
  }
}
