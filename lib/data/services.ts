import {
  Wrench,
  Droplets,
  Flame,
  ShowerHead,
  Building2,
  Home,
  Toilet,
  Pipette,
  Hammer,
  Bath,
  type LucideIcon,
} from "lucide-react";

export interface Service {
  slug: string;
  title: string;
  shortTitle: string;
  icon: LucideIcon;
  image: string;

  seoTitle: string;
  metaDescription: string;

  heroTitle: string;
  heroDescription: string;

  description: string;

  benefits: string[];

  keywords: string[];
}

export const services: Service[] = [
  {
    slug: "emergency-plumbing",
    title: "Emergency Plumbing Services",
    shortTitle: "Emergency Plumbing",
    icon: Wrench,
    image: "/images/service-1.png",

    seoTitle:
      "24/7 Emergency Plumbing Services in Houston, TX",

    metaDescription:
      "Fast emergency plumbing services in Houston, Texas. Burst pipes, plumbing leaks, overflowing toilets and urgent plumbing repairs available 24/7.",

    heroTitle:
      "24/7 Emergency Plumbing Services",

    heroDescription:
      "Fast response for burst pipes, leaks, clogged drains and emergency plumbing problems throughout Houston.",

    description:
      "Professional emergency plumbing services for residential and commercial properties. Available day and night with fast response times.",

    benefits: [
      "24/7 Availability",
      "Licensed Plumbers",
      "Fast Emergency Response",
      "Upfront Pricing",
      "Residential & Commercial",
    ],

    keywords: [
      "Emergency Plumber Houston",
      "24 Hour Plumber",
      "Emergency Plumbing",
    ],
  },

  {
    slug: "drain-cleaning",
    title: "Drain Cleaning Services",
    shortTitle: "Drain Cleaning",
    icon: ShowerHead,
    image: "/images/service-2.png",

    seoTitle:
      "Drain Cleaning Services Houston",

    metaDescription:
      "Professional drain cleaning services for clogged sinks, showers, bathtubs and sewer drains in Houston.",

    heroTitle:
      "Professional Drain Cleaning",

    heroDescription:
      "Restore proper water flow with professional drain cleaning services.",

    description:
      "Drain cleaning for residential and commercial plumbing systems using modern equipment.",

    benefits: [
      "Kitchen Drains",
      "Bathroom Drains",
      "Main Sewer Lines",
      "Prevent Future Clogs",
    ],

    keywords: [
      "Drain Cleaning Houston",
      "Clogged Drain",
      "Drain Service",
    ],
  },

  {
    slug: "leak-detection",
    title: "Leak Detection Services",
    shortTitle: "Leak Detection",
    icon: Droplets,
    image: "/images/service-3.png",

    seoTitle:
      "Leak Detection Houston",

    metaDescription:
      "Professional plumbing leak detection services in Houston using modern leak detection equipment.",

    heroTitle:
      "Professional Leak Detection",

    heroDescription:
      "Accurate leak detection with minimal damage to your property.",

    description:
      "Detect hidden plumbing leaks quickly to reduce water damage and repair costs.",

    benefits: [
      "Hidden Leak Detection",
      "Water Line Leaks",
      "Slab Leak Detection",
      "Advanced Equipment",
    ],

    keywords: [
      "Leak Detection Houston",
      "Water Leak Repair",
    ],
  },

  {
    slug: "water-heater-repair",
    title: "Water Heater Repair",
    shortTitle: "Water Heater",
    icon: Flame,
    image: "/images/service-3.png",

    seoTitle:
      "Water Heater Repair Houston",

    metaDescription:
      "Water heater repair and replacement services in Houston for gas and electric water heaters.",

    heroTitle:
      "Water Heater Repair",

    heroDescription:
      "Repair, replacement and installation of residential water heaters.",

    description:
      "Experienced plumbing professionals providing complete water heater services.",

    benefits: [
      "Gas Water Heaters",
      "Electric Water Heaters",
      "Tankless Systems",
      "Same Day Service",
    ],

    keywords: [
      "Water Heater Repair Houston",
      "Tankless Water Heater",
    ],
  },

  {
    slug: "commercial-plumbing",
    title: "Commercial Plumbing",
    shortTitle: "Commercial",
    icon: Building2,
    image: "/images/commercial.png",

    seoTitle:
      "Commercial Plumbing Houston",

    metaDescription:
      "Commercial plumbing services for offices, restaurants and businesses across Houston.",

    heroTitle:
      "Commercial Plumbing Services",

    heroDescription:
      "Reliable commercial plumbing solutions for businesses.",

    description:
      "Commercial plumbing repairs, maintenance and emergency services.",

    benefits: [
      "Restaurants",
      "Office Buildings",
      "Retail Stores",
      "Maintenance Contracts",
    ],

    keywords: [
      "Commercial Plumber Houston",
    ],
  },

  {
    slug: "residential-plumbing",
    title: "Residential Plumbing",
    shortTitle: "Residential",
    icon: Home,
    image: "/images/residential.png",

    seoTitle:
      "Residential Plumbing Houston",

    metaDescription:
      "Residential plumbing services including repairs, installations and maintenance in Houston.",

    heroTitle:
      "Residential Plumbing Services",

    heroDescription:
      "Complete plumbing solutions for homeowners throughout Houston.",

    description:
      "Professional plumbing repairs and installations for residential properties.",

    benefits: [
      "Pipe Repair",
      "Fixture Installation",
      "Leak Repair",
      "Maintenance",
    ],

    keywords: [
      "Residential Plumber Houston",
    ],
  },

  {
    slug: "pipe-repair",
    title: "Pipe Repair",
    shortTitle: "Pipe Repair",
    icon: Hammer,
    image: "/images/service-1.png",

    seoTitle:
      "Pipe Repair Houston",

    metaDescription:
      "Professional pipe repair services for leaking, damaged and burst pipes.",

    heroTitle:
      "Pipe Repair Services",

    heroDescription:
      "Reliable pipe repair throughout Houston.",

    description:
      "Repair damaged plumbing pipes quickly and efficiently.",

    benefits: [
      "Burst Pipes",
      "Frozen Pipes",
      "Water Pipes",
      "Emergency Repairs",
    ],

    keywords: [
      "Pipe Repair Houston",
    ],
  },

  {
    slug: "toilet-repair",
    title: "Toilet Repair",
    shortTitle: "Toilet Repair",
    icon: Toilet,
    image: "/images/service-2.png",

    seoTitle:
      "Toilet Repair Houston",

    metaDescription:
      "Professional toilet repair and installation services.",

    heroTitle:
      "Toilet Repair Services",

    heroDescription:
      "Fast toilet repair and replacement.",

    description:
      "Repair leaking, clogged and constantly running toilets.",

    benefits: [
      "Toilet Installation",
      "Toilet Replacement",
      "Leak Repairs",
      "Emergency Service",
    ],

    keywords: [
      "Toilet Repair Houston",
    ],
  },

  {
    slug: "faucet-repair",
    title: "Faucet Repair",
    shortTitle: "Faucet Repair",
    icon: Bath,
    image: "/images/service-2.png",

    seoTitle:
      "Faucet Repair Houston",

    metaDescription:
      "Kitchen and bathroom faucet repair and installation.",

    heroTitle:
      "Faucet Repair Services",

    heroDescription:
      "Professional faucet repair for kitchens and bathrooms.",

    description:
      "Repair dripping faucets and replace damaged fixtures.",

    benefits: [
      "Kitchen Faucets",
      "Bathroom Faucets",
      "Replacement",
      "Leak Repair",
    ],

    keywords: [
      "Faucet Repair Houston",
    ],
  },

  {
    slug: "sewer-line-repair",
    title: "Sewer Line Repair",
    shortTitle: "Sewer Repair",
    icon: Pipette,
    image: "/images/service-3.png",

    seoTitle:
      "Sewer Line Repair Houston",

    metaDescription:
      "Professional sewer line repair and replacement services.",

    heroTitle:
      "Sewer Line Repair",

    heroDescription:
      "Repair damaged sewer lines quickly.",

    description:
      "Complete sewer repair solutions using modern equipment.",

    benefits: [
      "Sewer Inspection",
      "Pipe Replacement",
      "Emergency Repair",
      "Residential & Commercial",
    ],

    keywords: [
      "Sewer Repair Houston",
    ],
  },
];