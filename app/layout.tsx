import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono, Inter } from "next/font/google";
import {
  GoogleAnalytics,
  GoogleTagManager,
} from "@next/third-parties/google";
import "./globals.css";
import ClarityProvider from "@/components/providers/clarity";

const geist = Geist({
  variable: "--font-geist",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://piperesque.com"),

  title: {
    default: "Pipe Rescue | 24/7 Emergency Plumbing Services Houston",
    template: "%s | Pipe Rescue",
  },

  description:
    "Pipe Rescue provides 24/7 emergency plumbing services in Houston, TX including drain cleaning, leak detection, sewer repair, pipe repair, water heater installation, commercial plumbing and residential plumbing.",

  applicationName: "Pipe Rescue",

  referrer: "origin-when-cross-origin",

  keywords: [
    "Emergency Plumber Houston",
    "24/7 Plumber",
    "Emergency Plumbing",
    "Drain Cleaning Houston",
    "Leak Detection",
    "Pipe Repair",
    "Water Heater Repair",
    "Water Heater Installation",
    "Sewer Line Repair",
    "Commercial Plumbing",
    "Residential Plumbing",
    "Houston Plumbing Company",
  ],

  authors: [
    {
      name: "Pipe Rescue",
      url: "https://piperesque.com",
    },
  ],

  creator: "Pipe Rescue",

  publisher: "Pipe Rescue",

  category: "Business",

  alternates: {
    canonical: "https://piperesque.com",
  },

  robots: {
    index: true,
    follow: true,
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
    url: "https://piperesque.com",
    title: "Pipe Rescue | 24/7 Emergency Plumbing Services Houston",
    description:
      "Professional plumbing company serving Houston with emergency plumbing, drain cleaning, leak detection, sewer repair, water heater services and commercial plumbing.",
    siteName: "Pipe Rescue",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Pipe Rescue",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Pipe Rescue",
    description: "24/7 Emergency Plumbing Services in Houston.",
    images: ["/og-image.png"],
  },

  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
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

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Plumber",
  name: "Pipe Rescue",
  image: "https://piperesque.com/og-image.png",
  url: "https://piperesque.com",
  telephone: "+1-713-555-0100",
  email: "info@piperesque.com",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Houston",
    addressRegion: "TX",
    addressCountry: "US",
  },
  areaServed: "Houston, Texas",
  priceRange: "$$",
  openingHours: "Mo-Su 00:00-23:59",
  description:
    "24/7 Emergency Plumbing, Drain Cleaning, Leak Detection, Water Heater Repair and Sewer Repair in Houston.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        suppressHydrationWarning
        className={`${geist.variable} ${geistMono.variable} ${inter.variable} antialiased bg-white text-slate-900`}
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(jsonLd),
          }}
        />
        <body
          suppressHydrationWarning
          className={`${geist.variable} ${geistMono.variable} ${inter.variable} antialiased bg-white text-slate-900`}
        >
          <ClarityProvider />

          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify(jsonLd),
            }}
          />

          {children}

          <GoogleTagManager gtmId="GTM-TC26LK2X" />
          <GoogleAnalytics gaId="G-CEVKCPR498" />
        </body>
        {children}

        <GoogleTagManager gtmId="GTM-TC26LK2X" />
        <GoogleAnalytics gaId="G-CEVKCPR498" />
      </body>
    </html>
  );
}

