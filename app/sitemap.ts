import type { MetadataRoute } from "next";

import { siteConfig } from "@/lib/config/site";
import { services } from "@/lib/data/services";
import { blogs } from "@/lib/data/blogs";
import { locations } from "@/lib/data/locations";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = siteConfig.website;
  const lastModified = new Date();

  const staticPages: MetadataRoute.Sitemap = [
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

  const servicePages: MetadataRoute.Sitemap = services.map((service) => ({
    url: `${baseUrl}/services/${service.slug}`,
    lastModified,
    changeFrequency: "weekly",
    priority: 0.9,
  }));

  const blogPages: MetadataRoute.Sitemap = blogs.map((blog) => ({
    url: `${baseUrl}/blog/${blog.slug}`,
    lastModified: new Date(blog.updatedAt),
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  const locationPages: MetadataRoute.Sitemap = locations.map((location) => ({
    url: `${baseUrl}/location/${location.slug}`,
    lastModified,
    changeFrequency: "weekly",
    priority: 0.9,
  }));

  const locationServicePages: MetadataRoute.Sitemap = locations.flatMap(
    (location) =>
      services.map((service) => ({
        url: `${baseUrl}/location/${location.slug}/${service.slug}`,
        lastModified,
        changeFrequency: "weekly",
        priority: 0.85,
      }))
  );

  return [
    ...staticPages,
    ...servicePages,
    ...blogPages,
    ...locationPages,
    ...locationServicePages,
  ];
}