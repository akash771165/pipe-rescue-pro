import Image from "next/image";

import Navbar from "@/components/layout/navbar";
import Footer from "@/components/layout/footer";
import CTA from "@/components/sections/cta";

import ContactForm from "@/components/contact/contact-form";

import {
  Phone,
  Mail,
  MapPin,
  Clock3,
} from "lucide-react";

export default function ContactPage() {
  return (
    <main className="overflow-x-hidden bg-white">

      <Navbar />

      {/* Hero */}

      <section className="relative overflow-hidden py-28">

        <Image
          src="/images/contact.png"
          alt="Contact Pipe Rescue"
          fill
          priority
          className="object-cover"
        />

        <div className="absolute inset-0 bg-blue-900/75" />

        <div className="container-custom relative z-10 text-center">

          <span className="rounded-full bg-white/20 px-5 py-2 text-sm font-bold text-white">
            CONTACT US
          </span>

          <h1 className="mt-8 text-6xl font-black text-white">
            Get In Touch
          </h1>

        </div>

      </section>

      <section className="py-24">

        <div className="container-custom grid gap-16 lg:grid-cols-2">

          <div className="rounded-[36px] border border-slate-200 bg-white p-10 shadow-2xl">

            <h2 className="text-4xl font-black">
              Request Free Estimate
            </h2>

            <p className="mt-4 text-slate-600">
              Fill out the form below and we'll contact you shortly.
            </p>

            <div className="mt-10">
              <ContactForm />
            </div>

          </div>

          <div>

            <h2 className="text-4xl font-black">
              Contact Information
            </h2>

            <div className="mt-10 space-y-6">

              <div className="flex gap-4">
                <Phone />
                <span>+1 (713) 555-0100</span>
              </div>

              <div className="flex gap-4">
                <Mail />
                <span>info@piperesque.com</span>
              </div>

              <div className="flex gap-4">
                <MapPin />
                <span>Houston, Texas</span>
              </div>

              <div className="flex gap-4">
                <Clock3 />
                <span>24 Hours • 7 Days</span>
              </div>

            </div>

          </div>

        </div>

      </section>

      <CTA />

      <Footer />

    </main>
  );
}