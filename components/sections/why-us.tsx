"use client";

import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/lib/config/site";
import {
  Clock3,
  BadgeCheck,
  Wrench,
  DollarSign,
  PhoneCall,
  MapPin,
  Home,
  ClipboardCheck,
} from "lucide-react";

const features = [
  {
    icon: Clock3,
    title: "24/7 Service Requests",
    desc: "Submit emergency plumbing requests any time, day or night.",
  },
  {
    icon: PhoneCall,
    title: "Fast Response",
    desc: "We'll help connect you with a local plumbing service provider as quickly as possible.",
  },
  {
    icon: Wrench,
    title: "Complete Plumbing Services",
    desc: "Emergency plumbing, drain cleaning, leak detection, sewer line services and water heater repair.",
  },
  {
    icon: DollarSign,
    title: "Transparent Estimates",
    desc: "Pricing and service details are provided by the plumbing company before work begins.",
  },
  {
    icon: Home,
    title: "Residential & Commercial",
    desc: "Support for homes, apartments, offices and commercial properties.",
  },
  {
    icon: MapPin,
    title: "Houston Area",
    desc: "Helping customers find plumbing services throughout Houston and nearby communities.",
  },
  {
    icon: BadgeCheck,
    title: "Simple Process",
    desc: "Call or submit a request online and we'll help you find a local plumbing provider.",
  },
  {
    icon: ClipboardCheck,
    title: "Customer Support",
    desc: "We're here to help you request plumbing assistance and answer general questions.",
  },
];

export default function WhyUs() {
  return (
    <section className="bg-white py-20 lg:py-24">
      <div className="container-custom">
        {/* Heading */}

        <div className="mx-auto max-w-3xl text-center">
          <span className="rounded-full bg-blue-100 px-5 py-2 text-sm font-bold text-blue-600">
            WHY CHOOSE PIPE RESCUE
          </span>

          <h2 className="mt-6 text-4xl font-black text-slate-900 lg:text-5xl">
            A Simple Way to Find Plumbing Services in Houston
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-600">
            Pipe Rescue helps homeowners connect with local plumbing service
            providers for emergency plumbing, drain cleaning, leak detection,
            water heater repair and other plumbing needs throughout the Houston
            area.
          </p>
        </div>

        {/* Content */}

        <div className="mt-16 grid items-center gap-16 lg:grid-cols-2">
          {/* Image */}

          <div className="relative overflow-hidden rounded-[40px] shadow-2xl">
            <Image
              src="/images/about.png"
              alt="Local plumbing services in Houston"
              width={900}
              height={700}
              quality={75}
              sizes="(max-width:768px) 100vw, 50vw"
              className="h-[420px] w-full object-cover lg:h-[700px]"
            />
          </div>

          {/* Features */}

          <div className="grid gap-6 sm:grid-cols-2">
            {features.map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.title}
                  className="rounded-3xl border border-slate-200 bg-slate-50 p-7 transition duration-300 hover:-translate-y-2 hover:border-blue-600 hover:bg-white hover:shadow-xl"
                >
                  <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-100">
                    <Icon className="h-8 w-8 text-blue-600" />
                  </div>

                  <h3 className="mt-6 text-xl font-bold text-slate-900">
                    {item.title}
                  </h3>

                  <p className="mt-3 leading-7 text-slate-600">
                    {item.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Information Box */}

        <div className="mt-16 rounded-3xl border border-blue-100 bg-blue-50 p-8">
          <h3 className="text-2xl font-bold text-slate-900">
            About Pipe Rescue
          </h3>

          <p className="mt-4 leading-8 text-slate-600">
            Pipe Rescue is an informational website that helps homeowners
            connect with local plumbing service providers. We do not claim to
            directly employ plumbers or guarantee response times, pricing or
            service availability. These may vary depending on the provider and
            your location.
          </p>
        </div>

        {/* CTA */}

        <div className="mt-20 rounded-[32px] bg-gradient-to-r from-blue-700 to-blue-500 p-10 text-white lg:flex lg:items-center lg:justify-between">
          <div>
            <h3 className="text-3xl font-black lg:text-4xl">
              Need Plumbing Assistance?
            </h3>

            <p className="mt-4 max-w-2xl text-blue-100">
              Call now or submit a request to be connected with a local plumbing
              service provider in the Houston area.
            </p>
          </div>

          <div className="mt-8 flex flex-wrap gap-4 lg:mt-0">
            <a
              href={`tel:${siteConfig.phone}`}
              className="rounded-full bg-white px-8 py-4 font-bold text-blue-700 transition hover:bg-slate-100"
            >
              📞 {siteConfig.phoneDisplay}
            </a>

            <Link
              href="/contact"
              className="rounded-full border-2 border-white px-8 py-4 font-bold transition hover:bg-white hover:text-blue-700"
            >
              Request Service
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}