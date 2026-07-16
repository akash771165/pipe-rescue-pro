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

import { siteConfig } from "@/lib/config/site";

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

        <div className="absolute inset-0 bg-blue-900/80" />

        <div className="container-custom relative z-10 text-center">

          <span className="rounded-full bg-white/20 px-5 py-2 text-sm font-bold text-white backdrop-blur">
            PLUMBING SERVICE REQUESTS
          </span>

          <h1 className="mt-8 text-5xl font-black text-white lg:text-6xl">
            Contact Pipe Rescue
          </h1>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-blue-100">
            Submit a plumbing service request or contact us with questions.
            Pipe Rescue helps homeowners connect with independent plumbing
            service providers serving Houston and nearby communities.
          </p>

        </div>

      </section>

      {/* Content */}

      <section className="py-24">

        <div className="container-custom grid gap-16 lg:grid-cols-2">

          {/* Form */}

          <div className="rounded-[36px] border border-slate-200 bg-white p-10 shadow-xl">

            <h2 className="text-4xl font-black">
              Request Plumbing Service
            </h2>

            <p className="mt-4 leading-8 text-slate-600">
              Complete the form below and we'll review your request. If service
              is available in your area, we'll help connect you with an
              independent plumbing service provider.
            </p>

            <div className="mt-10">
              <ContactForm />
            </div>

          </div>

          {/* Contact Info */}

          <div>

            <h2 className="text-4xl font-black">
              Contact Information
            </h2>

            <p className="mt-5 leading-8 text-slate-600">
              You can reach us by phone or email if you have questions about
              submitting a plumbing service request.
            </p>

            <div className="mt-10 space-y-8">

              <div className="flex items-start gap-4">

                <Phone className="mt-1 text-blue-600" />

                <div>

                  <h3 className="font-bold">
                    Phone
                  </h3>

                  <a
                    href={`tel:${siteConfig.phone}`}
                    className="text-slate-600 transition hover:text-blue-600"
                  >
                    {siteConfig.phoneDisplay}
                  </a>

                </div>

              </div>

              <div className="flex items-start gap-4">

                <Mail className="mt-1 text-blue-600" />

                <div>

                  <h3 className="font-bold">
                    Email
                  </h3>

                  <a
                    href={`mailto:${siteConfig.email}`}
                    className="text-slate-600 transition hover:text-blue-600"
                  >
                    {siteConfig.email}
                  </a>

                </div>

              </div>

              <div className="flex items-start gap-4">

                <MapPin className="mt-1 text-blue-600" />

                <div>

                  <h3 className="font-bold">
                    Service Area
                  </h3>

                  <p className="text-slate-600">
                    Houston, Texas & Nearby Communities
                  </p>

                </div>

              </div>

              <div className="flex items-start gap-4">

                <Clock3 className="mt-1 text-blue-600" />

                <div>

                  <h3 className="font-bold">
                    Service Requests
                  </h3>

                  <p className="text-slate-600">
                    Requests can be submitted online at any time. Provider
                    availability may vary depending on location.
                  </p>

                </div>

              </div>

            </div>

            {/* Disclaimer */}

            <div className="mt-12 rounded-3xl border border-blue-100 bg-blue-50 p-8">

              <h3 className="text-2xl font-bold text-slate-900">
                Important Information
              </h3>

              <p className="mt-4 leading-8 text-slate-600">
                Pipe Rescue is an independent informational website. We help
                homeowners submit plumbing service requests and connect with
                independent plumbing service providers. Pipe Rescue does not
                directly perform plumbing work or guarantee pricing, response
                times, scheduling or service availability.
              </p>

            </div>

          </div>

        </div>

      </section>

      <CTA />

      <Footer />

    </main>
  );
}