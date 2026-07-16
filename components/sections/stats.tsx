"use client";

import Image from "next/image";
import {
  Clock3,
  PhoneCall,
  Wrench,
  BadgeCheck,
  MapPin,
  ClipboardCheck,
} from "lucide-react";

const highlights = [
  {
    icon: Clock3,
    title: "24/7 Availability",
    desc: "Emergency plumbing assistance available whenever you need help.",
  },
  {
    icon: PhoneCall,
    title: "Fast Response",
    desc: "Quick connection with local plumbing professionals in the Houston area.",
  },
  {
    icon: Wrench,
    title: "Complete Plumbing Services",
    desc: "Emergency repairs, drain cleaning, leak detection, water heater service and more.",
  },
  {
    icon: BadgeCheck,
    title: "Transparent Estimates",
    desc: "Request service and receive clear pricing information before work begins.",
  },
  {
    icon: MapPin,
    title: "Houston Service Area",
    desc: "Helping homeowners and businesses find plumbing services across Houston and nearby communities.",
  },
  {
    icon: ClipboardCheck,
    title: "Easy Service Request",
    desc: "Call or submit a request online and we'll help connect you with a local plumbing provider.",
  },
];

export default function Stats() {
  return (
    <section className="relative overflow-hidden py-20 lg:py-24">
      <Image
        src="/images/emergency.png"
        alt="Emergency plumbing assistance in Houston, Texas"
        fill
        quality={75}
        sizes="100vw"
        className="object-cover"
        style={{
          objectPosition: "center",
        }}
      />

      <div className="absolute inset-0 bg-blue-900/85" />

      <div className="container-custom relative z-10">
        {/* Heading */}

        <div className="mx-auto max-w-3xl text-center">
          <span className="rounded-full bg-white/20 px-5 py-2 text-sm font-bold text-white backdrop-blur">
            AVAILABLE 24/7
          </span>

          <h2 className="mt-6 text-4xl font-black leading-tight text-white lg:text-5xl">
            Plumbing Help When You Need It Most
          </h2>

          <p className="mt-6 text-lg leading-8 text-blue-100">
            Pipe Rescue helps homeowners connect with local plumbing service
            providers for emergency plumbing, drain cleaning, leak detection,
            water heater repair, sewer line services and other residential
            plumbing needs throughout the Houston area.
          </p>
        </div>

        {/* Cards */}

        <div className="mt-16 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {highlights.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.title}
                className="rounded-3xl border border-white/20 bg-white/10 p-8 backdrop-blur-lg transition duration-300 hover:-translate-y-2 hover:bg-white/20"
              >
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-white text-blue-600">
                  <Icon size={30} />
                </div>

                <h3 className="mt-6 text-2xl font-bold text-white">
                  {item.title}
                </h3>

                <p className="mt-4 leading-7 text-blue-100">
                  {item.desc}
                </p>
              </div>
            );
          })}
        </div>

        <div className="mx-auto mt-16 max-w-4xl rounded-3xl border border-white/20 bg-white/10 p-8 text-center backdrop-blur-lg">
          <h3 className="text-2xl font-bold text-white">
            Looking for a Plumber in Houston?
          </h3>

          <p className="mt-4 leading-8 text-blue-100">
            Pipe Rescue is an informational website that helps homeowners
            connect with local plumbing service providers. Service availability,
            response times and pricing may vary depending on your location and
            the provider selected.
          </p>
        </div>
      </div>
    </section>
  );
}