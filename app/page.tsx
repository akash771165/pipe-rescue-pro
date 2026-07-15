import type { Metadata } from "next";

import Navbar from "@/components/layout/navbar";
import Hero from "@/components/sections/hero";
import Services from "@/components/sections/services";
import WhyUs from "@/components/sections/why-us";
import Stats from "@/components/sections/stats";
import Testimonials from "@/components/sections/testimonials";
import FAQ from "@/components/sections/faq";
import CTA from "@/components/sections/cta";
import Footer from "@/components/layout/footer";

export const metadata: Metadata = {
  title: "24/7 Emergency Plumbing Services in Houston, TX",
  description:
    "Pipe Rescue helps homeowners connect with licensed plumbing professionals for 24/7 emergency plumbing, drain cleaning, leak detection, sewer line repair, water heater repair and residential plumbing services throughout Houston, Texas.",

  keywords: [
    "Emergency Plumber Houston",
    "24/7 Emergency Plumbing",
    "Drain Cleaning Houston",
    "Leak Detection",
    "Water Heater Repair",
    "Pipe Repair",
    "Sewer Line Repair",
    "Residential Plumbing",
    "Licensed Plumber Houston",
  ],

  alternates: {
    canonical: "https://www.piperesque.com",
  },

  openGraph: {
    title: "24/7 Emergency Plumbing Services in Houston | Pipe Rescue",
    description:
      "Emergency plumbing, drain cleaning, sewer repair, leak detection and water heater services available across Houston, Texas.",
    url: "https://www.piperesque.com",
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Pipe Rescue Emergency Plumbing Services",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Pipe Rescue | Emergency Plumbing Houston",
    description:
      "24/7 emergency plumbing, drain cleaning, sewer repair and water heater services in Houston.",
    images: ["/og-image.png"],
  },
};

export default function Home() {
  return (
    <main className="overflow-x-hidden bg-white">

      <Navbar />

      <Hero />

      <Services />

      <WhyUs />

      <Stats />

      <Testimonials />

      <FAQ />

      <CTA />

      <Footer />

    </main>
  );
}