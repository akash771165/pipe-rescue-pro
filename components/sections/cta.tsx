"use client";

import Link from "next/link";
import Image from "next/image";
import {
  Phone,
  ArrowRight,
  Clock3,
  MapPin,
  Wrench,
  CheckCircle2,
} from "lucide-react";
import { siteConfig } from "@/lib/config/site";

export default function CTA() {
  return (
    <section className="relative overflow-hidden py-20 lg:py-28">

      {/* Background */}

      <Image
        src="/images/emergency.jpg"
        alt="Emergency plumbing assistance in Houston"
        fill
        quality={90}
        sizes="100vw"
        className="object-cover"
      />

      <div className="absolute inset-0 bg-gradient-to-r from-slate-950/90 via-blue-950/85 to-blue-700/80" />

      <div className="container-custom relative z-10">

        <div className="mx-auto max-w-7xl overflow-hidden rounded-[36px] border border-white/20 bg-white/10 shadow-2xl backdrop-blur-xl">

          <div className="grid items-center lg:grid-cols-2">

            {/* Left */}

            <div className="p-8 lg:p-14">

              <span className="inline-flex items-center rounded-full bg-red-500/20 px-5 py-2 text-sm font-bold text-red-100">
                🚨 EMERGENCY PLUMBING REQUESTS
              </span>

              <h2 className="mt-8 text-4xl font-black leading-tight text-white lg:text-6xl">
                Need Plumbing
                <span className="block text-blue-300">
                  Assistance in Houston?
                </span>
              </h2>

              <p className="mt-6 max-w-xl text-lg leading-8 text-blue-100">
                Pipe Rescue helps homeowners and businesses connect with
                independent plumbing service providers for emergency plumbing,
                drain cleaning, leak detection, sewer line repair, water heater
                services and other plumbing needs throughout the Houston area.
              </p>

              {/* Features */}

              <div className="mt-8 grid gap-3 sm:grid-cols-2">

                {[
                  "Emergency Plumbing",
                  "Drain Cleaning",
                  "Leak Detection",
                  "Water Heater Services",
                ].map((item) => (

                  <div
                    key={item}
                    className="flex items-center gap-2 text-white"
                  >

                    <CheckCircle2
                      size={18}
                      className="text-green-400"
                    />

                    <span>{item}</span>

                  </div>

                ))}

              </div>

              {/* CTA */}

              <div className="mt-10 flex flex-wrap gap-4">

                <a
                  href={`tel:${siteConfig.phone}`}
                  className="inline-flex items-center gap-3 rounded-full bg-white px-8 py-4 text-lg font-bold text-blue-700 transition hover:bg-slate-100"
                >
                  <Phone size={20} />
                  {siteConfig.phoneDisplay}
                </a>

                <Link
                  href="/contact"
                  className="inline-flex items-center gap-3 rounded-full bg-blue-600 px-8 py-4 text-lg font-bold text-white transition hover:bg-blue-700"
                >
                  Request Service
                  <ArrowRight size={20} />
                </Link>

              </div>

              <p className="mt-6 text-sm leading-6 text-blue-100">
                Pipe Rescue is an informational website that helps users connect
                with independent plumbing service providers. Service
                availability may vary by location.
              </p>

            </div>

            {/* Right */}

            <div className="relative h-[380px] lg:h-[620px]">

              <Image
                src="/images/emergency.jpg"
                alt="Local plumbing service provider"
                fill
                quality={90}
                sizes="(max-width:1024px)100vw,50vw"
                className="object-cover"
              />

              <div className="absolute bottom-8 left-8 rounded-3xl border border-white/20 bg-white/15 p-6 backdrop-blur-xl">

                <div className="text-3xl font-black text-white">
                  Houston
                </div>

                <div className="mt-2 text-blue-100">
                  Plumbing Service Area
                </div>

              </div>

            </div>

          </div>

          {/* Bottom Cards */}

          <div className="grid border-t border-white/20 md:grid-cols-3">

            <div className="p-8 text-center">

              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-white/15">

                <Clock3
                  size={30}
                  className="text-white"
                />

              </div>

              <h3 className="mt-5 text-xl font-bold text-white">
                Emergency Requests
              </h3>

              <p className="mt-3 leading-7 text-blue-100">
                Plumbing assistance requests can be submitted 24 hours a day.
              </p>

            </div>

            <div className="border-y border-white/20 p-8 text-center md:border-x md:border-y-0">

              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-white/15">

                <Wrench
                  size={30}
                  className="text-white"
                />

              </div>

              <h3 className="mt-5 text-xl font-bold text-white">
                Plumbing Services
              </h3>

              <p className="mt-3 leading-7 text-blue-100">
                Residential and commercial plumbing service requests throughout
                Houston.
              </p>

            </div>

            <div className="p-8 text-center">

              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-white/15">

                <MapPin
                  size={30}
                  className="text-white"
                />

              </div>

              <h3 className="mt-5 text-xl font-bold text-white">
                Houston Coverage
              </h3>

              <p className="mt-3 leading-7 text-blue-100">
                Helping customers connect with plumbing providers across Houston
                and nearby communities.
              </p>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}