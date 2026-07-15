"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle2, Phone } from "lucide-react";
import { siteConfig } from "@/lib/config/site";

const services = [
  {
    title: "Emergency Plumbing",
    image: "/images/service-1.png",
    desc: "Fast 24/7 emergency plumbing repairs for burst pipes, overflowing toilets, leaks, and urgent plumbing issues.",
    href: "/services/emergency-plumbing",
  },
  {
    title: "Drain Cleaning",
    image: "/images/service-2.png",
    desc: "Professional drain cleaning services to remove stubborn clogs and restore proper water flow.",
    href: "/services/drain-cleaning",
  },
  {
    title: "Leak Detection",
    image: "/images/service-3.png",
    desc: "Accurate leak detection using modern equipment to prevent costly water damage.",
    href: "/services/leak-detection",
  },
  {
    title: "Water Heater Repair",
    image: "/images/service-1.png",
    desc: "Water heater repair, replacement and installation for residential and commercial properties.",
    href: "/services/water-heater-repair",
  },
  {
    title: "Sewer Line Repair",
    image: "/images/service-2.png",
    desc: "Complete sewer line inspection, repair and replacement by experienced plumbing professionals.",
    href: "/services/sewer-line-repair",
  },
  {
    title: "Residential Plumbing",
    image: "/images/service-3.png",
    desc: "Complete plumbing services for homes including repairs, installations and maintenance.",
    href: "/services/residential-plumbing",
  },
];

export default function Services() {
  return (
    <section className="bg-slate-50 py-20 lg:py-24">

      <div className="container-custom">

        {/* Heading */}

        <div className="mx-auto max-w-3xl text-center">

          <span className="rounded-full bg-blue-100 px-5 py-2 text-sm font-bold text-blue-600">
            OUR SERVICES
          </span>

          <h2 className="mt-6 text-4xl font-black text-slate-900 lg:text-5xl">
            Professional Plumbing Services in Houston, TX
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-600">
            From emergency plumbing repairs to drain cleaning, leak detection,
            sewer repair and water heater services, Pipe Rescue connects you
            with licensed plumbing professionals across Houston.
          </p>

        </div>

        {/* Cards */}

        <div className="mt-16 grid gap-8 md:grid-cols-2 xl:grid-cols-3">

          {services.map((service) => (

            <div
              key={service.title}
              className="group overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-lg transition-all duration-300 hover:-translate-y-2 hover:border-blue-600 hover:shadow-2xl"
            >

              <div className="relative h-64 overflow-hidden">

                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  quality={75}
                  sizes="(max-width:768px)100vw,(max-width:1200px)50vw,33vw"
                  className="object-cover transition duration-500 group-hover:scale-110"
                />

              </div>

              <div className="p-8">

                <h3 className="text-2xl font-bold text-slate-900">
                  {service.title}
                </h3>

                <p className="mt-4 leading-8 text-slate-600">
                  {service.desc}
                </p>

                <div className="mt-6 space-y-3">

                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="h-5 w-5 text-green-600" />
                    <span>Licensed & Insured</span>
                  </div>

                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="h-5 w-5 text-green-600" />
                    <span>Upfront Pricing</span>
                  </div>

                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="h-5 w-5 text-green-600" />
                    <span>24/7 Emergency Support</span>
                  </div>

                </div>

                <div className="mt-8 flex gap-3">

                  <Link
                    href={service.href}
                    className="inline-flex items-center gap-2 rounded-full bg-blue-600 px-5 py-3 font-semibold text-white transition hover:bg-blue-700"
                  >
                    View Service
                    <ArrowRight size={18} />
                  </Link>

                  <a
                    href={`tel:${siteConfig.phone}`}
                    className="inline-flex items-center gap-2 rounded-full border border-slate-300 px-5 py-3 font-semibold transition hover:border-blue-600 hover:text-blue-600"
                  >
                    <Phone size={18} />
                    Call
                  </a>

                </div>

              </div>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}