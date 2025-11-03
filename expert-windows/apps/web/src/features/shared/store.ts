import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export type UserRole = 'office' | 'director' | 'god' | 'crew';

export interface User {
  name: string;
  role: UserRole;
  token: string;
  pin: string;
}

interface AuthState {
  user: User | null;
  isAuthenticated: boolean;
  setUser: (user: User) => void;
  logout: () => void;
}

export const useAuthStore = create<AuthState>()(
  persist(
    (set) => ({
      user: null,
      isAuthenticated: false,
      setUser: (user) =>
        set({
          user,
          isAuthenticated: true,
        }),
      logout: () =>
        set({
          user: null,
          isAuthenticated: false,
        }),
    }),
    {
      name: 'expert-windows-auth',
    }
  )
);
