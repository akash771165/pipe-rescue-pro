"use client";

import { Phone, ShieldCheck, Clock3, Wrench } from "lucide-react";
import { siteConfig } from "@/lib/config/site";

const benefits = [
  {
    icon: Clock3,
    title: "24/7 Emergency Assistance",
    description:
      "Emergency plumbing requests can be submitted any time, day or night.",
  },
  {
    icon: Wrench,
    title: "Plumbing Services",
    description:
      "Emergency plumbing, drain cleaning, leak detection, water heater repair and sewer line services.",
  },
  {
    icon: ShieldCheck,
    title: "Transparent Process",
    description:
      "We'll help connect you with a local plumbing service provider based on your request and location.",
  },
];

export default function Testimonials() {
  return (
    <section className="bg-slate-50 py-24">
      <div className="container-custom">
        {/* Heading */}

        <div className="mx-auto max-w-3xl text-center">
          <span className="rounded-full bg-blue-100 px-5 py-2 text-sm font-bold text-blue-600">
            WHY CHOOSE PIPE RESCUE
          </span>

          <h2 className="mt-6 text-4xl font-black text-slate-900 lg:text-5xl">
            Fast Access to Local Plumbing Services
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-600">
            Pipe Rescue helps homeowners connect with local plumbing service
            providers for emergency plumbing, drain cleaning, leak detection,
            water heater repair and other residential plumbing services in the
            Houston area.
          </p>
        </div>

        {/* Feature Cards */}

        <div className="mt-20 grid gap-8 lg:grid-cols-3">
          {benefits.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.title}
                className="rounded-3xl border border-slate-200 bg-white p-10 shadow-lg transition duration-300 hover:-translate-y-2 hover:shadow-xl"
              >
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-100 text-blue-600">
                  <Icon size={30} />
                </div>

                <h3 className="mt-8 text-2xl font-bold text-slate-900">
                  {item.title}
                </h3>

                <p className="mt-5 leading-8 text-slate-600">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Disclaimer */}

        <div className="mt-16 rounded-3xl border border-blue-100 bg-blue-50 p-8">
          <h3 className="text-2xl font-bold text-slate-900">
            Service Information
          </h3>

          <p className="mt-4 leading-8 text-slate-600">
            Pipe Rescue is an informational website that helps homeowners
            connect with local plumbing service providers. We do not claim to
            directly employ or dispatch plumbers. Service availability,
            scheduling, response times and pricing depend on the selected
            provider and your location.
          </p>
        </div>

        {/* CTA */}

        <div className="mt-20 rounded-[32px] bg-blue-600 p-10 text-center text-white">
          <h3 className="text-3xl font-black lg:text-4xl">
            Need Plumbing Assistance?
          </h3>

          <p className="mx-auto mt-5 max-w-2xl text-lg text-blue-100">
            Call now or submit a service request to be connected with a local
            plumbing service provider in the Houston area.
          </p>

          <a
            href={`tel:${siteConfig.phone}`}
            className="mt-8 inline-flex items-center gap-3 rounded-full bg-white px-8 py-4 font-bold text-blue-700 transition hover:bg-slate-100"
          >
            <Phone size={20} />
            {siteConfig.phoneDisplay}
          </a>
        </div>
      </div>
    </section>
  );
}