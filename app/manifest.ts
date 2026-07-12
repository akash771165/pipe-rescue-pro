import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
    return {
        name: "Pipe Rescue",
        short_name: "Pipe Rescue",

        description:
            "24/7 Emergency Plumbing Services in Houston. Drain cleaning, leak detection, sewer repair, water heater repair and residential & commercial plumbing.",

        start_url: "/",

        scope: "/",

        display: "standalone",

        orientation: "portrait",

        background_color: "#ffffff",

        theme_color: "#2563eb",

        categories: [
            "business",
            "home",
            "services",
            "plumbing",
        ],

        lang: "en-US",

        dir: "ltr",

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
            },
            {
                src: "/icon-512.png",
                sizes: "512x512",
                type: "image/png",
            },
            {
                src: "/apple-touch-icon.png",
                sizes: "180x180",
                type: "image/png",
            },
        ],
    };
}
