import Navbar from "@/components/layout/navbar";
import Hero from "@/components/sections/hero";
import Services from "@/components/sections/services";
import WhyUs from "@/components/sections/why-us";
import Stats from "@/components/sections/stats";
import Testimonials from "@/components/sections/testimonials";
import FAQ from "@/components/sections/faq";
import CTA from "@/components/sections/cta";
import Footer from "@/components/layout/footer";

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

