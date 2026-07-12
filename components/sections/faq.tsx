"use client";

import Link from "next/link";
import { useState } from "react";
import Image from "next/image";
import {
    ChevronDown,
    Phone,
    ShieldCheck,
    Clock3,
} from "lucide-react";

const faqs = [
    {
        q: "Do you provide 24/7 emergency plumbing services?",
        a: "Yes. Our licensed plumbers are available 24 hours a day, 7 days a week for emergency plumbing services throughout Houston and nearby areas.",
    },
    {
        q: "How quickly can a plumber arrive?",
        a: "Most emergency calls receive a response within 30–60 minutes depending on your location and traffic conditions.",
    },
    {
        q: "Do you offer same-day plumbing service?",
        a: "Yes. Most plumbing repairs and installations are completed on the same day whenever possible.",
    },
    {
        q: "Are your plumbers licensed and insured?",
        a: "Absolutely. Every Pipe Rescue technician is fully licensed, insured and professionally trained.",
    },
    {
        q: "Do you provide free estimates?",
        a: "Yes. We provide honest, upfront estimates before any work begins with no hidden charges.",
    },
    {
        q: "What plumbing services do you offer?",
        a: "We provide emergency plumbing, drain cleaning, leak detection, water heater repair, sewer repair, pipe replacement, faucet repair and commercial plumbing services.",
    },
];

export default function FAQ() {
    const [open, setOpen] = useState(0);

    return (
        <section className="bg-slate-50 py-24">

            <div className="container-custom">

                <div className="mx-auto max-w-3xl text-center">

                    <span className="rounded-full bg-blue-100 px-5 py-2 text-sm font-bold text-blue-600">
                        FAQ
                    </span>

                    <h2 className="mt-6 text-5xl font-black text-slate-900">
                        Frequently Asked Questions
                    </h2>

                    <p className="mt-6 text-lg leading-8 text-slate-600">
                        Find answers to the most common questions about our plumbing
                        services, emergency response and pricing.
                    </p>

                </div>

                <div className="mt-20 grid gap-10 lg:grid-cols-3">

                    <div className="space-y-6 lg:col-span-2">

                        {faqs.map((item, index) => (

                            <div
                                key={item.q}
                                className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-lg"
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

                                    <div className="border-t border-slate-100 px-7 pb-7 pt-5 leading-8 text-slate-600">
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
                                alt="Emergency Plumbing"
                                fill
                                sizes="(max-width:1024px) 100vw, 33vw"
                                className="object-cover"
                            />

                        </div>

                        <div className="bg-gradient-to-b from-blue-700 to-blue-500 p-8 text-white">

                            <Phone size={42} />

                            <h3 className="mt-6 text-3xl font-black">
                                Need Immediate Help?
                            </h3>

                            <p className="mt-5 leading-8 text-blue-100">
                                Our emergency plumbing team is available day and night
                                to solve your plumbing problems quickly.
                            </p>

                            <div className="mt-8 space-y-5">

                                <div className="flex items-center gap-3">
                                    <Clock3 size={22} />
                                    <span>24/7 Emergency Service</span>
                                </div>

                                <div className="flex items-center gap-3">
                                    <ShieldCheck size={22} />
                                    <span>Licensed &amp; Insured</span>
                                </div>

                            </div>

                            <div className="mt-10 space-y-4">

                                <a
                                    href="tel:+918447987505"
                                    className="flex w-full items-center justify-center rounded-full bg-white py-4 text-lg font-bold text-blue-700 transition hover:bg-slate-100"
                                >
                                    📞 +91 84479 87505
                                </a>

                                <a
                                    href="tel:+919718507728"
                                    className="flex w-full items-center justify-center rounded-full border-2 border-white py-4 text-lg font-bold text-white transition hover:bg-white hover:text-blue-700"
                                >
                                    📞 +91 97185 07728
                                </a>

                                <Link
                                    href="/contact"
                                    className="flex w-full items-center justify-center rounded-full bg-slate-900 py-4 text-lg font-bold text-white transition hover:bg-black"
                                >
                                    Get Free Estimate
                                </Link>

                            </div>

                        </div>

                    </div>

                </div>

            </div>

        </section>
    );
}