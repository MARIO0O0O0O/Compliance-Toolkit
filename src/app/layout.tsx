import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import './globals.css';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });

export const metadata: Metadata = {
  title: {
    default: 'California Compliance Consultancy | HR Compliance Experts',
    template: '%s | CA Compliance',
  },
  description:
    'Expert HR compliance consulting for California businesses. Navigate federal, state, and local mandates with our tech-first approach. 10+ years government experience.',
  keywords: [
    'California HR compliance',
    'California labor law',
    'HR consultancy',
    'workplace compliance',
    'CalOSHA',
    'CFRA',
    'FEHA',
    'wage and hour compliance',
    'harassment prevention training',
    'California employer requirements',
  ],
  authors: [{ name: 'California Compliance Consultancy' }],
  creator: 'California Compliance Consultancy',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://cacompliance.com',
    siteName: 'California Compliance Consultancy',
    title: 'California Compliance Consultancy | HR Compliance Experts',
    description:
      'Expert HR compliance consulting for California businesses. Navigate federal, state, and local mandates with our tech-first approach.',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'California Compliance Consultancy',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'California Compliance Consultancy | HR Compliance Experts',
    description:
      'Expert HR compliance consulting for California businesses.',
    images: ['/og-image.png'],
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
    <html lang="en" suppressHydrationWarning>
      <body className={inter.variable}>
        <div className="flex min-h-screen flex-col">
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
