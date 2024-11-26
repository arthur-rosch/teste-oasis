'use client'

import './globals.css';
import type { Metadata } from 'next';
import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';
import { Newsletter } from '@/components/newsletter';
import { Plus_Jakarta_Sans } from 'next/font/google';
import { Provider } from '@/components/provider';

const plusJakartaSans = Plus_Jakarta_Sans({ subsets: ['latin'] });

const metadata: Metadata = {
  title: 'Oasis - Front End Development Blog',
  description: 'A blog about front-end development, tutorials, best practices, and the latest trends in web development.',
  keywords: ['front-end development', 'web development', 'tutorials', 'best practices', 'React', 'JavaScript', 'CSS'],
  openGraph: {
    title: 'Oasis - Front End Development Blog',
    description: 'A blog about front-end development, tutorials, best practices, and the latest trends in web development.',
    url: 'https://teste-oasis.vercel.app/',
  },
  twitter: {
    card: 'summary_large_image',
    site: '@OasisBlog',
    title: 'Oasis - Front End Development Blog',
    description: 'A blog about front-end development, tutorials, best practices, and the latest trends in web development.',
  },
  robots: {
    index: true, 
    follow: true,
  }
};


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body className={plusJakartaSans.className}>
        <Provider>
          <Navbar />
          <main>{children}</main>
          <Newsletter />
          <Footer />
        </Provider>
      </body>
    </html>
  );
}
