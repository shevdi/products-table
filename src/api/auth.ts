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

    const data = await res.json();

    if (!res.ok) {
      const message =
        (data as LoginError).message ?? `Ошибка авторизации: ${res.status}`;
      return { ok: false, error: message };
    }

    return { ok: true, data: data as LoginResponse };
  } catch (err) {
    const message =
      err instanceof Error ? err.message : 'Не удалось подключиться к серверу';
    return { ok: false, error: message };
  }
}
