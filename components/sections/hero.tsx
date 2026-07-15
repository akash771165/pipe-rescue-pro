"use client";

import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/lib/config/site";
export default function Hero() {
    return (
        <section className="relative overflow-hidden bg-gradient-to-br from-slate-50 via-white to-blue-50">

            <div className="absolute inset-0">
                <div className="absolute left-0 top-0 h-96 w-96 rounded-full bg-blue-100 blur-3xl opacity-40" />
                <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-sky-100 blur-3xl opacity-40" />
            </div>

            <div className="container-custom relative z-10 grid min-h-[85vh] items-center gap-16 py-16 lg:min-h-screen lg:grid-cols-2 lg:gap-20 lg:py-24">
{/* LEFT */}

<div>
  <span className="inline-flex items-center rounded-full border border-red-200 bg-red-50 px-5 py-2 text-sm font-semibold text-red-600">
    🚨 24/7 Emergency Plumbing Services
  </span>

  <h1 className="mt-8 text-4xl font-black leading-tight text-slate-900 sm:text-5xl lg:text-7xl">
    24/7 Emergency
    <span className="block text-blue-600">
      Plumbing Services
    </span>
    in Houston, TX
  </h1>

  <p className="mt-8 max-w-2xl text-xl leading-9 text-slate-600">
    Need an emergency plumber in Houston? We connect homeowners with licensed
    plumbing professionals for emergency repairs, drain cleaning, leak
    detection, water heater service, sewer line repair, and more.
  </p>

  {/* CTA Buttons */}

  <div className="mt-10 flex flex-wrap gap-5">
    <Link
      href="/contact"
      className="rounded-full bg-blue-600 px-10 py-5 font-bold text-white transition hover:scale-105 hover:bg-blue-700"
    >
      Request Free Estimate
    </Link>

    <a
      href={`tel:${siteConfig.phone}`}
      className="rounded-full border-2 border-slate-300 bg-white px-10 py-5 font-bold transition hover:border-blue-600 hover:text-blue-600"
    >
      📞 {siteConfig.phoneDisplay}
    </a>
  </div>

  <p className="mt-4 text-sm font-semibold text-red-600">
    🚨 Emergency? Call now — Available 24/7
  </p>

  {/* Stats */}

  <div className="mt-12 grid grid-cols-2 gap-5 lg:grid-cols-4">
    {[
      ["24/7", "Emergency Service"],
      ["Same Day", "Appointments"],
      ["Licensed", "Professionals"],
      ["Houston", "Service Area"],
    ].map(([number, label]) => (
      <div
        key={label}
        className="rounded-2xl bg-white p-5 text-center shadow-lg"
      >
        <h3 className="text-3xl font-black text-blue-600">
          {number}
        </h3>

        <p className="text-slate-600">
          {label}
        </p>
      </div>
    ))}
  </div>

  {/* Services */}

  <div className="mt-8 flex flex-wrap gap-3">
    {[
      "Emergency Plumbing",
      "Drain Cleaning",
      "Water Heater Repair",
      "Leak Detection",
      "Sewer Repair",
    ].map((service) => (
      <span
        key={service}
        className="rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-700"
      >
        {service}
      </span>
    ))}
  </div>

  {/* Trust Badges */}

  <div className="mt-10 flex flex-wrap gap-4">
    <span className="rounded-full bg-green-100 px-4 py-2 font-semibold text-green-700">
      ✔ Licensed Professionals
    </span>

    <span className="rounded-full bg-green-100 px-4 py-2 font-semibold text-green-700">
      ✔ Insured
    </span>

    <span className="rounded-full bg-green-100 px-4 py-2 font-semibold text-green-700">
      ✔ Upfront Pricing
    </span>

    <span className="rounded-full bg-green-100 px-4 py-2 font-semibold text-green-700">
      ✔ Emergency Service
    </span>
  </div>
</div>
                {/* RIGHT */}

                <div className="relative">

                    <div className="overflow-hidden rounded-[40px] shadow-2xl">
<Image
    src="/images/hero.png"
    alt="Pipe Rescue Plumbing Services"
    width={900}
    height={1100}
    priority
    quality={75}
    sizes="(max-width:768px) 100vw, 50vw"
    className="h-[420px] w-full object-cover lg:h-[750px]"
/>

                    </div>

                </div>

            </div>

        </section>
    );
}