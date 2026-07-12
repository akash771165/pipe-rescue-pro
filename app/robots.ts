import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
    return {
        rules: [
            {
                userAgent: "*",
                allow: "/",

                disallow: [
                    "/api/",
                    "/admin/",
                    "/dashboard/",
                    "/private/",
                    "/_next/",
                    "/404",
                ],
            },
        ],

        sitemap: "https://piperesque.com/sitemap.xml",

        host: "https://piperesque.com",
    };
}
