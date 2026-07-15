import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/config/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = siteConfig.website;
  const lastModified = new Date();

  return [
    {
      url: baseUrl,
      lastModified,
      changeFrequency: "daily",
      priority: 1,
    },

    {
      url: `${baseUrl}/services`,
      lastModified,
      changeFrequency: "weekly",
      priority: 0.95,
    },

    {
      url: `${baseUrl}/service-areas`,
      lastModified,
      changeFrequency: "weekly",
      priority: 0.9,
    },

    {
      url: `${baseUrl}/about`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.8,
    },

    {
      url: `${baseUrl}/contact`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.85,
    },

    {
      url: `${baseUrl}/blog`,
      lastModified,
      changeFrequency: "weekly",
      priority: 0.85,
    },

    // Service Pages

    {
      url: `${baseUrl}/services/emergency-plumbing`,
      lastModified,
      changeFrequency: "weekly",
      priority: 0.9,
    },

    {
      url: `${baseUrl}/services/drain-cleaning`,
      lastModified,
      changeFrequency: "weekly",
      priority: 0.9,
    },

    {
      url: `${baseUrl}/services/leak-detection`,
      lastModified,
      changeFrequency: "weekly",
      priority: 0.9,
    },

    {
      url: `${baseUrl}/services/water-heater-repair`,
      lastModified,
      changeFrequency: "weekly",
      priority: 0.9,
    },

    {
      url: `${baseUrl}/services/sewer-line-repair`,
      lastModified,
      changeFrequency: "weekly",
      priority: 0.9,
    },

    {
      url: `${baseUrl}/services/residential-plumbing`,
      lastModified,
      changeFrequency: "weekly",
      priority: 0.9,
    },

    // Legal Pages

    {
      url: `${baseUrl}/privacy-policy`,
      lastModified,
      changeFrequency: "yearly",
      priority: 0.3,
    },

    {
      url: `${baseUrl}/terms`,
      lastModified,
      changeFrequency: "yearly",
      priority: 0.3,
    },
  ];
}