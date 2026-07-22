import type { MetadataRoute } from "next";

import { siteConfig } from "@/lib/config/site";
import { services } from "@/lib/data/services";
import { blogs } from "@/lib/data/blogs";
import { locations } from "@/lib/data/locations";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = siteConfig.website;
  const now = new Date();

  const staticPages: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: now,
      changeFrequency: "daily",
      priority: 1,
    },
    {
      url: `${baseUrl}/services`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.95,
    },
    {
      url: `${baseUrl}/service-areas`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.85,
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.85,
    },
    {
      url: `${baseUrl}/privacy-policy`,
      lastModified: now,
      changeFrequency: "yearly",
      priority: 0.3,
    },
    {
      url: `${baseUrl}/terms`,
      lastModified: now,
      changeFrequency: "yearly",
      priority: 0.3,
    },
  ];

  const servicePages: MetadataRoute.Sitemap = services.map((service) => ({
    url: `${baseUrl}/services/${service.slug}`,
    lastModified: now,
    changeFrequency: "weekly",
    priority: 0.9,
  }));

  const blogPages: MetadataRoute.Sitemap = blogs.map((blog) => {
    let blogDate = new Date(blog.updatedAt);

    // Invalid date ya future date ho to current date use karo
    if (isNaN(blogDate.getTime()) || blogDate > now) {
      blogDate = now;
    }

    return {
      url: `${baseUrl}/blog/${blog.slug}`,
      lastModified: blogDate,
      changeFrequency: "monthly",
      priority: 0.8,
    };
  });

  const locationPages: MetadataRoute.Sitemap = locations.map((location) => ({
    url: `${baseUrl}/location/${location.slug}`,
    lastModified: now,
    changeFrequency: "weekly",
    priority: 0.9,
  }));

  const locationServicePages: MetadataRoute.Sitemap = locations.flatMap(
    (location) =>
      services.map((service) => ({
        url: `${baseUrl}/location/${location.slug}/${service.slug}`,
        lastModified: now,
        changeFrequency: "weekly",
        priority: 0.85,
      }))
  );

  const sitemap = [
    ...staticPages,
    ...servicePages,
    ...blogPages,
    ...locationPages,
    ...locationServicePages,
  ];

  // Duplicate URLs remove karo
  return sitemap.filter(
    (item, index, self) =>
      index === self.findIndex((entry) => entry.url === item.url)
  );
}