import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/config/site";

export default function manifest(): MetadataRoute.Manifest {
  return {
    id: "/",

    name: `${siteConfig.company} | ${siteConfig.tagline}`,

    short_name: siteConfig.company,

    description:
      "24/7 Emergency Plumbing Services in Houston, Texas. Emergency plumbing, drain cleaning, leak detection, sewer line repair, water heater repair, residential and commercial plumbing.",

    start_url: "/",

    scope: "/",

    display: "standalone",

    display_override: ["standalone", "minimal-ui"],

    orientation: "portrait",

    background_color: "#ffffff",

    theme_color: "#2563eb",

    lang: "en-US",

    dir: "ltr",

    categories: [
      "business",
      "home-services",
      "plumbing",
      "utilities",
      "local-business",
    ],

    icons: [
      {
        src: "/favicon.ico",
        sizes: "any",
        type: "image/x-icon",
      },
      {
        src: "/icon-192.png",
        sizes: "192x192",
        type: "image/png",
        purpose: "maskable",
      },
      {
        src: "/icon-512.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "maskable",
      },
      {
        src: "/apple-touch-icon.png",
        sizes: "180x180",
        type: "image/png",
      },
    ],

    shortcuts: [
      {
        name: "Call Now",
        short_name: "Call",
        url: `tel:${siteConfig.phone}`,
      },
      {
        name: "Request Estimate",
        short_name: "Estimate",
        url: "/contact",
      },
      {
        name: "Our Services",
        short_name: "Services",
        url: "/services",
      },
    ],
  };
}