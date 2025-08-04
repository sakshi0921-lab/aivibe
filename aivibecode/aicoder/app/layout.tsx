import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

const inter = Inter({ 
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800', '900'],
  display: 'swap'
});

export const metadata: Metadata = {
  title: 'ModernTech - Revolutionary Solutions for Tomorrow',
  description: 'Transform your business with cutting-edge technology and innovative solutions that drive growth and success.',
  keywords: 'modern technology, business solutions, innovation, digital transformation',
  authors: [{ name: 'ModernTech Team' }],
  creator: 'ModernTech',
  publisher: 'ModernTech',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://moderntech.com',
    title: 'ModernTech - Revolutionary Solutions for Tomorrow',
    description: 'Transform your business with cutting-edge technology and innovative solutions that drive growth and success.',
    siteName: 'ModernTech',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ModernTech - Revolutionary Solutions for Tomorrow',
    description: 'Transform your business with cutting-edge technology and innovative solutions that drive growth and success.',
    creator: '@moderntech',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} antialiased`}>
        {children}
      </body>
    </html>
  );
}