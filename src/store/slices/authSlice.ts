import { PayloadAction, createSlice } from '@reduxjs/toolkit';

export type AuthUser = {
  email: string;
  lastLoginAt: string;
};

export type AuthState = {
  user: AuthUser | null;
  status: 'idle' | 'authenticated';
};

type CredentialsPayload = {
  email: string;
};

const initialState: AuthState = {
  user: null,
  status: 'idle',
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setCredentials: (state, action: PayloadAction<CredentialsPayload>) => {
      state.user = {
        email: action.payload.email,
        lastLoginAt: new Date().toISOString(),
      };
      state.status = 'authenticated';
    },
    clearCredentials: (state) => {
      state.user = null;
      state.status = 'idle';
    },
  },
});

export const { setCredentials, clearCredentials } = authSlice.actions;
export const selectAuthState = (state: { auth: AuthState }) => state.auth;

export const authReducer = authSlice.reducer;

