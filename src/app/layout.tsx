import type { Metadata } from 'next';
import './globals.css';
import Header from '../components/Header';
import Footer from '../components/Footer';

export const metadata: Metadata = {
  title: {
    default: 'Advanced Plumbing Kamloops | Professional Plumbing, HVAC & Gas Services',
    template: '%s | Advanced Plumbing Kamloops'
  },
  description: 'Advanced Plumbing Kamloops specializes in high-quality plumbing, HVAC, and cooling services, ensuring reliable solutions for both residential and commercial clients in Kamloops, BC.',
  keywords: ['plumbing Kamloops', 'HVAC Kamloops', 'gas fitting Kamloops', 'heating cooling Kamloops', 'plumber Kamloops BC'],
  authors: [{ name: 'Advanced Plumbing Kamloops' }],
  creator: 'Advanced Plumbing Kamloops',
  publisher: 'Advanced Plumbing Kamloops',
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
  openGraph: {
    type: 'website',
    locale: 'en_CA',
    url: 'https://kamloops.plumbing',
    siteName: 'Advanced Plumbing Kamloops',
    title: 'Advanced Plumbing Kamloops | Professional Plumbing, HVAC & Gas Services',
    description: 'Professional plumbing, HVAC, cooling, and gas fitting services in Kamloops, BC. Reliable solutions for residential and commercial clients.',
    images: [
      {
        url: '/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Advanced Plumbing Kamloops - Professional Services',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Advanced Plumbing Kamloops | Professional Services',
    description: 'Professional plumbing, HVAC, cooling, and gas fitting services in Kamloops, BC.',
    images: ['/images/og-image.jpg'],
  },
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 1,
  },
  verification: {
    google: 'your-google-verification-code', // You'll need to add this when setting up Google Search Console
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="canonical" href="https://kamloops.plumbing" />
        <link rel="icon" href="/favicon.ico" />
        <meta name="geo.region" content="CA-BC" />
        <meta name="geo.placename" content="Kamloops" />
        <meta name="geo.position" content="50.6745;-120.3273" />
        <meta name="ICBM" content="50.6745, -120.3273" />
      </head>
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}