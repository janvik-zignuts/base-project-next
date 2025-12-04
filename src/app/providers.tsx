'use client';

import { ReactNode, useState } from 'react';
import { Provider as ReduxProvider } from 'react-redux';
import { QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

import { AuthProvider } from '@/src/features/auth/context/authContext';
import { createQueryClient } from '@/src/lib/react-query';
import { store } from '@/src/store/store';
import { ModalProvider } from '../components/modal/context/modalContext';

export const Providers = ({ children }: { children: ReactNode }) => {
  const [queryClient] = useState(() => createQueryClient());

  return (
    <ReduxProvider store={store}>
      <QueryClientProvider client={queryClient}>
        <AuthProvider>
           <ModalProvider>
            {children}
          </ModalProvider>
         </AuthProvider>
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
    </ReduxProvider>
  );
};

