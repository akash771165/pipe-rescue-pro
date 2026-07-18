import { siteConfig } from "@/lib/config/site";
import type { City } from "@/lib/data/cities";

interface Props {
  city?: City;
}

export default function LocalBusinessSchema({ city }: Props) {
  const currentCity = city ?? {
    name: siteConfig.city,
    slug: "houston",
    state: "Texas",
  };

  const schema = {
    "@context": "https://schema.org",
    "@type": "Plumber",

    "@id": `${siteConfig.website}/service-areas/${currentCity.slug}#business`,

    name: `${siteConfig.company} - ${currentCity.name}`,

    url: `${siteConfig.website}/service-areas/${currentCity.slug}`,

    logo: `${siteConfig.website}${siteConfig.logo}`,

    image: `${siteConfig.website}${siteConfig.ogImage}`,

    telephone: siteConfig.phone,

    email: siteConfig.email,

    description: `24/7 emergency plumbing, drain cleaning, leak detection, sewer repair and water heater services in ${currentCity.name}, Texas.`,

    priceRange: "$$",

    address: {
      "@type": "PostalAddress",
      addressLocality: currentCity.name,
      addressRegion: currentCity.state,
      addressCountry: "US",
    },

    areaServed: {
      "@type": "City",
      name: currentCity.name,
    },

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