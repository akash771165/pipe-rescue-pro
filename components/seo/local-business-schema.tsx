export default function LocalBusinessSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Plumber",
    "@id": "https://www.piperesque.com/#business",
    name: "Pipe Rescue",
    url: "https://www.piperesque.com",
    image: "https://www.piperesque.com/images/logo.png",
    telephone: "+1-877-326-7830",

    address: {
      "@type": "PostalAddress",
      addressLocality: "Houston",
      addressRegion: "TX",
      addressCountry: "US",
    },

    areaServed: [
      "Houston",
      "Katy",
      "Sugar Land",
      "Cypress",
      "Spring",
      "Pearland",
      "Pasadena",
      "Richmond",
      "Missouri City",
      "The Woodlands",
    ],

    priceRange: "$$",

    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
          "Sunday",
        ],
        opens: "00:00",
        closes: "23:59",
      },
    ],

    sameAs: [],
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