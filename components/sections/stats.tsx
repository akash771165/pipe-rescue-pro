"use client";

import Image from "next/image";
import { Clock3, ShieldCheck, PhoneCall, Wrench, BadgeCheck, MapPin } from "lucide-react";

const highlights = [
  {
    icon: Clock3,
    title: "24/7 Emergency",
    desc: "Emergency plumbing services available day and night.",
  },
  {
    icon: ShieldCheck,
    title: "Licensed Professionals",
    desc: "Work performed by licensed and insured plumbing professionals.",
  },
  {
    icon: PhoneCall,
    title: "Fast Response",
    desc: "Quick response for emergency plumbing calls throughout Houston.",
  },
  {
    icon: Wrench,
    title: "Complete Plumbing",
    desc: "Repairs, installations, maintenance and emergency plumbing.",
  },
  {
    icon: BadgeCheck,
    title: "Upfront Pricing",
    desc: "Clear estimates before any plumbing work begins.",
  },
  {
    icon: MapPin,
    title: "Houston Service Area",
    desc: "Serving homeowners and businesses across Houston, Texas.",
  },
];

export default function Stats() {
  return (
    <section className="relative overflow-hidden py-20 lg:py-24">

     <Image
  src="/images/emergency.png"
  alt="24/7 emergency plumbing service in Houston, Texas"
  fill
  priority={false}
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
    Reliable Plumbing Services Across Houston, Texas
</h2>

          <p className="mt-6 text-lg leading-8 text-blue-100">
            We help connect homeowners with trusted plumbing professionals for
            emergency repairs, drain cleaning, leak detection, water heater
            service and more.
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

      </div>

    </section>
  );
}