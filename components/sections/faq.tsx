"use client";

import Link from "next/link";
import { useState } from "react";
import Image from "next/image";
import { siteConfig } from "@/lib/config/site";
import {
    ChevronDown,
    Phone,
    ShieldCheck,
    Clock3,
} from "lucide-react";

const faqs = [
  {
    q: "Do you provide 24/7 emergency plumbing services in Houston?",
    a: "Yes. We help connect homeowners with licensed plumbing professionals who provide 24/7 emergency plumbing services throughout Houston, Texas.",
  },
  {
    q: "How quickly can an emergency plumber arrive?",
    a: "Response time depends on your location, traffic and technician availability. Most emergency plumbing requests are handled as quickly as possible.",
  },
  {
    q: "What plumbing services do you provide?",
    a: "We help with emergency plumbing, drain cleaning, leak detection, sewer line repair, water heater repair, pipe repair, toilet repair, faucet repair and residential plumbing services.",
  },
  {
    q: "Do you provide same-day plumbing service?",
    a: "Yes. Same-day service is available for many plumbing repairs depending on scheduling and technician availability.",
  },
  {
    q: "Are your plumbing professionals licensed and insured?",
    a: "Yes. We work with licensed and insured plumbing professionals who meet local service requirements.",
  },
  {
    q: "Can I request a free plumbing estimate?",
    a: "Yes. You can call us or submit the contact form to request a free estimate for your plumbing service.",
  },
];
export default function FAQ() {
    const [open, setOpen] = useState(0);

    return (
        <section className="bg-slate-50 py-24">

            <div className="container-custom">

               <div className="mx-auto max-w-3xl text-center">

    <span className="rounded-full bg-blue-100 px-5 py-2 text-sm font-bold text-blue-600">
        PLUMBING FAQ
    </span>

    <h2 className="mt-6 text-4xl font-black text-slate-900 lg:text-5xl">
        Frequently Asked Plumbing Questions
    </h2>

    <p className="mt-6 text-lg leading-8 text-slate-600">
        Find answers to common questions about emergency plumbing, drain cleaning,
        leak detection, water heater repair and plumbing services in Houston.
    </p>

</div>

                <div className="mt-20 grid gap-10 lg:grid-cols-3">

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
                                        className={`transition duration-300 ${open === index ? "rotate-180 text-blue-600" : ""
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

                    <div className="overflow-hidden rounded-[32px] bg-white shadow-2xl">

    <div className="relative h-64">

        <Image
            src="/images/emergency.png"
            alt="Emergency plumbing service in Houston"
            fill
            quality={75}
            sizes="(max-width:1024px)100vw,33vw"
            className="object-cover"
        />

    </div>

    <div className="bg-gradient-to-b from-blue-700 to-blue-500 p-8 text-white">

        <Phone size={42} />

        <h3 className="mt-6 text-3xl font-black">
            Need Emergency Plumbing?
        </h3>

        <p className="mt-5 leading-8 text-blue-100">
            Available 24/7 for emergency plumbing, drain cleaning,
            leak detection and water heater services.
        </p>

        <div className="mt-8 space-y-5">

            <div className="flex items-center gap-3">
                <Clock3 size={22} />
                <span>24/7 Emergency Response</span>
            </div>

            <div className="flex items-center gap-3">
                <ShieldCheck size={22} />
                <span>Licensed & Insured</span>
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
                Request Free Estimate
            </Link>

        </div>

    </div>

</div>
                </div>

            </div>

        </section>
    );
}