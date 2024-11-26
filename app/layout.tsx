
'use client';

import './globals.css';
import type { Metadata } from 'next';
import { Toaster, toast } from 'sonner'
import { client } from '@/lib/apollo'; 
import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';
import { ApolloProvider } from '@apollo/client';
import { Newsletter } from '@/components/newsletter';
import { Plus_Jakarta_Sans } from 'next/font/google';

const plusJakartaSans = Plus_Jakarta_Sans({ subsets: ['latin'] });

const metadata: Metadata = {
  title: 'Oasis - Front End Development Blog',
  description: 'A blog about front-end development, tutorials, and best practices',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body className={plusJakartaSans.className}>
        <ApolloProvider client={client}>
          <Toaster 
            toastOptions={{
              style: {
                color: '#FFC344', 
              },
          }}
          />
          <Navbar />
          <main>{children}</main>
          <Newsletter />
          <Footer />
        </ApolloProvider>
      </body>
    </html>
  );
}
