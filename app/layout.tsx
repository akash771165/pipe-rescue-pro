import type { Metadata, Viewport } from "next";
import { Geist, Inter } from "next/font/google";
import {
  GoogleAnalytics,
  GoogleTagManager,
} from "@next/third-parties/google";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";

import "./globals.css";

import ClarityProvider from "@/components/providers/clarity";
import { siteConfig } from "@/lib/config/site";

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-geist",
  display: "swap",
  preload: true,
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
  preload: true,
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.website),

  title: {
    default: `${siteConfig.company} | 24/7 Emergency Plumbing Services in Houston, TX`,
    template: `%s | ${siteConfig.company}`,
  },

  description:
    "24/7 emergency plumber in Houston, TX. Fast drain cleaning, leak detection, water heater repair, sewer line repair, and residential plumbing services.",

  applicationName: siteConfig.company,

  referrer: "origin-when-cross-origin",

  formatDetection: {
    telephone: false,
    address: false,
    email: false,
  },

  keywords: [
    "Emergency Plumber Houston",
    "Houston Plumber",
    "24/7 Emergency Plumbing",
    "Emergency Plumbing Houston TX",
    "Drain Cleaning Houston",
    "Leak Detection Houston",
    "Water Heater Repair Houston",
    "Water Heater Installation",
    "Pipe Repair Houston",
    "Sewer Line Repair Houston",
    "Residential Plumbing",
    "Commercial Plumbing",
    "Licensed Plumber Houston",
    "Houston Plumbing Company",
  ],

  authors: [
    {
      name: siteConfig.company,
      url: siteConfig.website,
    },
  ],

  creator: siteConfig.company,

  publisher: siteConfig.company,

  category: "Business",

  alternates: {
    canonical: `${siteConfig.website}/`,
  },

  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-video-preview": -1,
      "max-snippet": -1,
    },
  },

  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteConfig.website,
    siteName: siteConfig.company,
    title: `${siteConfig.company} | 24/7 Emergency Plumbing Services Houston`,
    description:
      "24/7 emergency plumber in Houston, TX. Fast drain cleaning, leak detection, water heater repair, sewer line repair, and residential plumbing services.",
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: `${siteConfig.company} Emergency Plumbing`,
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.company} | Emergency Plumbing Houston`,
    description:
      "24/7 emergency plumber in Houston, TX. Drain cleaning, leak detection, sewer repair and water heater services.",
    images: [siteConfig.ogImage],
  },

  icons: {
    icon: siteConfig.favicon,
    shortcut: siteConfig.favicon,
    apple: "/apple-touch-icon.png",
  },

  verification: {
    google: "cISOThami1OgkEXgEDJFCmELq48QtmnNTdu7V-Iovu4",
    other: {
      "msvalidate.01": "F3D745A737355A821E78CB7B47E9DD92",
    },
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#2563eb",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link
          rel="preconnect"
          href="https://www.googletagmanager.com"
          crossOrigin="anonymous"
        />
        <link
          rel="preconnect"
          href="https://www.google-analytics.com"
          crossOrigin="anonymous"
        />
        <link rel="dns-prefetch" href="//www.googletagmanager.com" />
        <link rel="dns-prefetch" href="//www.google-analytics.com" />
      </head>

      <body
        suppressHydrationWarning
        className={`${geist.variable} ${inter.variable} bg-white text-slate-900 antialiased`}
      >
        {children}

        <ClarityProvider />
        <GoogleTagManager gtmId="GTM-TC26LK2X" />
        <GoogleAnalytics gaId="G-CEVKCPR498" />
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}