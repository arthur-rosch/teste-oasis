'use client'

import { client } from '@/lib/apollo';
import { ApolloProvider } from '@apollo/client';
import { Toaster } from 'sonner';


interface ProviderProps {
  children: React.ReactNode;
}

export const Provider: React.FC<ProviderProps> = ({ children }) => {
  return (
    <ApolloProvider client={client}>
      <Toaster
        toastOptions={{
          style: {
            color: '#FFC344',
          },
        }}
      />
      {children}
    </ApolloProvider>
  );
};
