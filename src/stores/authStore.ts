import { create } from 'zustand';

interface AuthState {
  token: string | null;
  user: { username: string } | null;
}

export const useAuthStore = create<AuthState>(() => ({
  token: null,
  user: null,
}));
