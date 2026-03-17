import { create } from 'zustand';
import {
  devtools,
  persist,
  createJSONStorage,
  type StateStorage,
} from 'zustand/middleware';
import { immer } from 'zustand/middleware/immer';

const AUTH_STORAGE_KEY = 'auth';

let lastRememberMe = false;

function createAuthStorage(): StateStorage {
  return {
    getItem: (name: string): string | null => {
      if (name !== AUTH_STORAGE_KEY) return null;
      return localStorage.getItem(name) ?? sessionStorage.getItem(name);
    },
    setItem: (name: string, value: string): void => {
      if (name !== AUTH_STORAGE_KEY) return;
      const storage = lastRememberMe ? localStorage : sessionStorage;
      const other = lastRememberMe ? sessionStorage : localStorage;
      other.removeItem(name);
      storage.setItem(name, value);
    },
    removeItem: (name: string): void => {
      localStorage.removeItem(name);
      sessionStorage.removeItem(name);
    },
  };
}

export interface AuthUser {
  id: number;
  username: string;
  email?: string;
  firstName?: string;
  lastName?: string;
}

interface AuthState {
  token: string | null;
  user: AuthUser | null;
  rememberMe: boolean;
  setAuth: (token: string, user: AuthUser, rememberMe: boolean) => void;
  clearAuth: () => void;
}

export const useAuthStore = create<AuthState>()(
  devtools(
    persist(
      immer((set) => ({
        token: null,
        user: null,
        rememberMe: false,
        setAuth: (token, user, rememberMe) =>
          set(
            (state) => {
              lastRememberMe = rememberMe;
              state.token = token;
              state.user = user;
              state.rememberMe = rememberMe;
            },
            false,
            'setAuth'
          ),
        clearAuth: () =>
          set(
            (state) => {
              state.token = null;
              state.user = null;
              state.rememberMe = false;
            },
            false,
            'clearAuth'
          ),
      })),
      {
        name: AUTH_STORAGE_KEY,
        storage: createJSONStorage(createAuthStorage),
        partialize: (s) => ({
          token: s.token,
          user: s.user,
        }),
      }
    ),
    { name: 'AuthStore', enabled: import.meta.env.DEV }
  )
);
