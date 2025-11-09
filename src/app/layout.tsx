import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Providers } from './providers';
import Script from 'next/script';
//@ts-ignore
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Cyberrk Technology - Empowering Businesses with Cutting-Edge Web Solutions & Tech Training',
  description: 'Cyberrk Technology empowers businesses with cutting-edge web solutions, mobile applications, SEO optimization, and professional tech training in web development and data analysis. Located in Benin City, Edo State, Nigeria, and Lagos.',
  keywords: 'web solutions, mobile applications, SEO optimization, tech training, web development, data analysis, Benin City, Edo State, Nigeria, Lagos, Cyberrk Technology',
  authors: [{ name: 'Cyberrk Technology' }],
  creator: 'Cyberrk Technology',
  publisher: 'Cyberrk Technology',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://cyberrk-technology.com'), // Replace with actual domain
  alternates: {
    canonical: '/',
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
  icons: {
    icon: [
      { url: '/favicon.svg', type: 'image/svg+xml' },
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
  },
  openGraph: {
    title: 'Cyberrk Technology - Empowering Businesses with Cutting-Edge Web Solutions & Tech Training',
    description: 'Cyberrk Technology empowers businesses with cutting-edge web solutions, mobile applications, SEO optimization, and professional tech training in web development and data analysis. Located in Benin City, Edo State, Nigeria, and Lagos.',
    url: 'https://cyberrk-technology.com', // Replace with actual domain
    siteName: 'Cyberrk Technology',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: '/og-image.jpg', // Add an OG image
        width: 1200,
        height: 630,
        alt: 'Cyberrk Technology - Digital Solutions & Tech Training',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Cyberrk Technology - Empowering Businesses with Cutting-Edge Web Solutions & Tech Training',
    description: 'Cyberrk Technology empowers businesses with cutting-edge web solutions, mobile applications, SEO optimization, and professional tech training in web development and data analysis.',
    images: ['/og-image.jpg'], // Add an OG image
  },
  verification: {
    google: 'your-google-site-verification-code', // Add actual verification code
  },
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 1,
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
        {/* Google Analytics */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=GA_TRACKING_ID"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'GA_TRACKING_ID');
          `}
        </Script>
        {/* Structured Data for Local Business */}
        <Script
          id="structured-data"
          type="application/ld+json"
          strategy="afterInteractive"
        >
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "Cyberrk Technology",
            "description": "Cyberrk Technology empowers businesses with cutting-edge web solutions, mobile applications, SEO optimization, and professional tech training services in web development and data analysis.",
            "url": "https://cyberrk-technology.com",
            "logo": "https://cyberrk-technology.com/logo.png",
            "address": [
              {
                "@type": "PostalAddress",
                "addressLocality": "Benin City",
                "addressRegion": "Edo State",
                "addressCountry": "Nigeria"
              },
              {
                "@type": "PostalAddress",
                "addressLocality": "Lagos",
                "addressCountry": "Nigeria"
              }
            ],
            "contactPoint": {
              "@type": "ContactPoint",
              "contactType": "Customer Service",
              "availableLanguage": "English"
            },
            "sameAs": [
              // Add social media URLs if available
            ]
          })}
        </Script>
      </head>
      <body className={inter.className}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
