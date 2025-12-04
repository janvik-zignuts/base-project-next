'use client';

import { ReactNode, createContext, useContext, useMemo } from 'react';
import { useRouter } from 'next/navigation';
import { useQueryClient } from '@tanstack/react-query';

import {
  clearCredentials,
  selectAuthState,
  setCredentials,
} from '@/src/store/slices/authSlice';
import { useAppDispatch, useAppSelector } from '@/src/store/hooks';

type AuthContextValue = {
  state: ReturnType<typeof selectAuthState>;
  setCredentials: (payload: { email: string }) => void;
  logout: () => void;
};

const AuthContext = createContext<AuthContextValue | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const dispatch = useAppDispatch();
  const authState = useAppSelector(selectAuthState);
  const router = useRouter();
  const queryClient = useQueryClient();

  const value = useMemo<AuthContextValue>(
    () => ({
      state: authState,
      setCredentials: (payload) => dispatch(setCredentials(payload)),
      logout: () => {
        dispatch(clearCredentials());
        queryClient.clear();
        router.replace('/login');
      },
    }),
    [authState, dispatch, queryClient, router],
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuthContext = () => {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error('useAuthContext must be used within an AuthProvider');
  }

  return context;
};

