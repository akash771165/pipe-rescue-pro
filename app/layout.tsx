import type { Metadata, Viewport } from "next";
import { Geist, Inter } from "next/font/google";
import { GoogleAnalytics, GoogleTagManager } from "@next/third-parties/google";

import "./globals.css";

import ClarityProvider from "@/components/providers/clarity";
import LocalBusinessSchema from "@/components/seo/local-business-schema";
import { siteConfig } from "@/lib/config/site";

const geist = Geist({
  variable: "--font-geist",
  subsets: ["latin"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.website),

  title: {
    default: `${siteConfig.company} | 24/7 Emergency Plumbing Services in Houston, TX`,
    template: `%s | ${siteConfig.company}`,
  },

  description:
    "Need a licensed emergency plumber in Houston? Pipe Rescue provides 24/7 emergency plumbing, drain cleaning, leak detection, sewer line repair, pipe repair, water heater repair, water heater installation and residential plumbing services.",

  applicationName: siteConfig.company,

  referrer: "origin-when-cross-origin",

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
    canonical: siteConfig.website,
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
      "Licensed plumbing professionals providing emergency plumbing, drain cleaning, leak detection, sewer repair and water heater services throughout Houston, Texas.",
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
      "24/7 Emergency Plumbing, Drain Cleaning & Water Heater Repair in Houston.",
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
      <body
        suppressHydrationWarning
        className={`${geist.variable} ${inter.variable} bg-white text-slate-900 antialiased`}
      >
        <LocalBusinessSchema />

        <ClarityProvider />

        {children}

        <GoogleTagManager gtmId="GTM-TC26LK2X" />
        <GoogleAnalytics gaId="G-CEVKCPR498" />
      </body>
    </html>
  );
}