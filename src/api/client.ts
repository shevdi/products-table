const BASE_URL =
  import.meta.env.VITE_API_URL ?? 'https://dummyjson.com';

export async function apiFetch<T>(
  path: string,
  options?: RequestInit
): Promise<T> {
  const url = path.startsWith('http') ? path : `${BASE_URL}${path.startsWith('/') ? '' : '/'}${path}`;
  const res = await fetch(url, {
    ...options,
    cache: options?.cache,
    headers: {
      'Content-Type': 'application/json',
      ...options?.headers,
    },
  });
  if (!res.ok) {
    let message = `${res.status} ${res.statusText}`;
    const contentType = res.headers.get('content-type');
    if (contentType?.includes('application/json')) {
      try {
        const body = (await res.json()) as { message?: string };
        if (body?.message) {
          message = body.message;
        }
      } catch {
        // fallback to statusText if JSON parse fails
      }
    }
    throw new Error(`API error: ${message}`);
  }
  return res.json() as Promise<T>;
}
