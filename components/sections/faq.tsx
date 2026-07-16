"use client";

import Link from "next/link";
import { useState } from "react";
import Image from "next/image";
import { siteConfig } from "@/lib/config/site";
import {
  ChevronDown,
  Phone,
  Clock3,
  MapPin,
} from "lucide-react";

const faqs = [
  {
    q: "What does Pipe Rescue do?",
    a: "Pipe Rescue is an informational website that helps homeowners connect with local plumbing service providers for emergency plumbing and general plumbing services in the Houston area.",
  },
  {
    q: "Is emergency plumbing assistance available 24/7?",
    a: "Emergency service requests can be submitted at any time. Actual availability depends on the local plumbing service provider and your location.",
  },
  {
    q: "What plumbing services can I request?",
    a: "You can request help with emergency plumbing, drain cleaning, leak detection, sewer line services, water heater repair, pipe repair, faucet repair, toilet repair and other residential or commercial plumbing needs.",
  },
  {
    q: "How quickly can a plumber arrive?",
    a: "Response times vary based on your location, traffic conditions, the time of day and the availability of the selected plumbing service provider.",
  },
  {
    q: "Do you guarantee pricing or service availability?",
    a: "No. Pricing, scheduling, warranties and service availability are determined by the plumbing service provider you are connected with.",
  },
  {
    q: "How do I request plumbing service?",
    a: "You can call the phone number listed on this website or submit the contact form. We'll help connect you with a local plumbing service provider based on your request.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState(0);

  return (
    <section className="bg-slate-50 py-24">
      <div className="container-custom">
        {/* Heading */}

        <div className="mx-auto max-w-3xl text-center">
          <span className="rounded-full bg-blue-100 px-5 py-2 text-sm font-bold text-blue-600">
            FREQUENTLY ASKED QUESTIONS
          </span>

          <h2 className="mt-6 text-4xl font-black text-slate-900 lg:text-5xl">
            Plumbing Questions & Answers
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-600">
            Learn more about requesting plumbing services through Pipe Rescue
            and how we help homeowners connect with local plumbing service
            providers.
          </p>
        </div>

        <div className="mt-20 grid gap-10 lg:grid-cols-3">
          {/* FAQ */}

          <div className="space-y-6 lg:col-span-2">
            {faqs.map((item, index) => (
              <div
                key={item.q}
                className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-lg transition-all duration-300 hover:border-blue-600 hover:shadow-xl"
              >
                <button
                  onClick={() => setOpen(open === index ? -1 : index)}
                  className="flex w-full items-center justify-between p-7 text-left"
                >
                  <span className="text-lg font-bold text-slate-900">
                    {item.q}
                  </span>

                  <ChevronDown
                    size={24}
                    className={`transition duration-300 ${
                      open === index ? "rotate-180 text-blue-600" : ""
                    }`}
                  />
                </button>

                {open === index && (
                  <div className="animate-in fade-in duration-300 border-t border-slate-100 px-7 pb-7 pt-5 leading-8 text-slate-600">
                    {item.a}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* CTA */}

          <div className="overflow-hidden rounded-[32px] bg-white shadow-2xl">
            <div className="relative h-64">
              <Image
                src="/images/emergency.png"
                alt="Emergency plumbing services in Houston"
                fill
                quality={75}
                sizes="(max-width:1024px)100vw,33vw"
                className="object-cover"
              />
            </div>

            <div className="bg-gradient-to-b from-blue-700 to-blue-500 p-8 text-white">
              <Phone size={42} />

              <h3 className="mt-6 text-3xl font-black">
                Need Plumbing Assistance?
              </h3>

              <p className="mt-5 leading-8 text-blue-100">
                Call us or submit a service request to be connected with a local
                plumbing service provider in the Houston area.
              </p>

              <div className="mt-8 space-y-5">
                <div className="flex items-center gap-3">
                  <Clock3 size={22} />
                  <span>Emergency Requests Accepted 24/7</span>
                </div>

                <div className="flex items-center gap-3">
                  <MapPin size={22} />
                  <span>Serving Houston & Nearby Areas</span>
                </div>
              </div>

              <div className="mt-10 space-y-4">
                <a
                  href={`tel:${siteConfig.phone}`}
                  className="flex w-full items-center justify-center rounded-full bg-white py-4 text-lg font-bold text-blue-700 transition hover:bg-slate-100"
                >
                  📞 {siteConfig.phoneDisplay}
                </a>

                <Link
                  href="/contact"
                  className="flex w-full items-center justify-center rounded-full border-2 border-white py-4 text-lg font-bold text-white transition hover:bg-white hover:text-blue-700"
                >
                  Request Service
                </Link>
              </div>

              <p className="mt-8 text-sm leading-6 text-blue-100">
                Pipe Rescue helps connect homeowners with local plumbing service
                providers. Service availability and response times may vary by
                location.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}