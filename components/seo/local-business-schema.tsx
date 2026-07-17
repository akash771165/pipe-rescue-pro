import { siteConfig } from "@/lib/config/site";

export default function LocalBusinessSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Plumber",

    "@id": `${siteConfig.website}/#business`,

    name: siteConfig.company,

    url: siteConfig.website,

    logo: `${siteConfig.website}${siteConfig.logo}`,

    image: `${siteConfig.website}${siteConfig.ogImage}`,

    telephone: siteConfig.phone,

    email: siteConfig.email,

    description:
      "24/7 Emergency Plumbing, Drain Cleaning, Leak Detection, Sewer Repair and Water Heater Services in Houston, Texas.",

    priceRange: "$$",

    address: {
      "@type": "PostalAddress",
      addressLocality: siteConfig.city,
      addressRegion: siteConfig.stateCode,
      addressCountry: siteConfig.countryCode,
    },

    areaServed: [
      {
        "@type": "City",
        name: siteConfig.city,
      },
    ],

    openingHours: siteConfig.openingHours,

    contactPoint: {
      "@type": "ContactPoint",
      telephone: siteConfig.phone,
      contactType: "customer service",
      areaServed: "US",
      availableLanguage: "English",
    },

    sameAs: [
      siteConfig.facebook,
      siteConfig.instagram,
      siteConfig.linkedin,
      siteConfig.youtube,
      siteConfig.x,
    ].filter(Boolean),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(schema),
      }}
    />
  );
}