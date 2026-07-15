"use client";

import Link from "next/link";
import Image from "next/image";
import {
    Phone,
    ArrowRight,
    ShieldCheck,
    Clock3,
    BadgeCheck,
    CheckCircle2,
} from "lucide-react";
import { siteConfig } from "@/lib/config/site";

export default function CTA() {
    return (
        <section className="relative overflow-hidden py-20 lg:py-28">

            {/* Background */}

            <Image
                src="/images/emergency.png"
                alt="24/7 emergency plumbing services in Houston, Texas"
                fill
                priority={false}
                quality={75}
                sizes="100vw"
                className="object-cover"
            />

            <div className="absolute inset-0 bg-gradient-to-r from-slate-950/90 via-blue-950/85 to-blue-700/80" />

            <div className="container-custom relative z-10">

                <div className="mx-auto max-w-7xl overflow-hidden rounded-[36px] border border-white/20 bg-white/10 shadow-2xl backdrop-blur-xl">

                    {/* Main Section */}

                    <div className="grid items-center lg:grid-cols-2">

                        {/* Left */}

                        <div className="p-8 lg:p-14">

                            <span className="inline-flex items-center rounded-full bg-red-500/20 px-5 py-2 text-sm font-bold tracking-wide text-red-100">
                                🚨 AVAILABLE 24/7
                            </span>

                            <h2 className="mt-8 text-4xl font-black leading-tight text-white lg:text-6xl">
                                Need an Emergency
                                <span className="block text-blue-300">
                                    Plumber in Houston?
                                </span>
                            </h2>

                            <p className="mt-6 max-w-xl text-lg leading-8 text-blue-100">
                                Connect with licensed plumbing professionals for
                                emergency plumbing, drain cleaning, leak detection,
                                sewer line repair, water heater repair, toilet repair,
                                burst pipes and complete residential plumbing services
                                throughout Houston, Texas.
                            </p>

                            {/* Trust Points */}

                            <div className="mt-8 grid gap-3 sm:grid-cols-2">

                                {[
                                    "Licensed & Insured",
                                    "24/7 Emergency Response",
                                    "Upfront Pricing",
                                    "Same-Day Service",
                                ].map((item) => (
                                    <div
                                        key={item}
                                        className="flex items-center gap-2 text-white"
                                    >
                                        <CheckCircle2
                                            size={18}
                                            className="text-green-400"
                                        />

                                        <span className="font-medium">
                                            {item}
                                        </span>
                                    </div>
                                ))}

                            </div>

                            {/* CTA */}

                            <div className="mt-10 flex flex-wrap gap-4">

                                <a
                                    href={`tel:${siteConfig.phone}`}
                                    className="inline-flex items-center gap-3 rounded-full bg-white px-8 py-4 text-lg font-bold text-blue-700 transition-all duration-300 hover:scale-105 hover:bg-slate-100"
                                >
                                    <Phone size={22} />
                                    {siteConfig.phoneDisplay}
                                </a>

                                <Link
                                    href="/contact"
                                    className="inline-flex items-center gap-3 rounded-full bg-blue-600 px-8 py-4 text-lg font-bold text-white transition-all duration-300 hover:bg-blue-700"
                                >
                                    Request Free Estimate
                                    <ArrowRight size={20} />
                                </Link>

                            </div>

                            <p className="mt-6 text-sm font-semibold text-white/90">
                                No hidden fees • Fast response • Trusted local plumbing professionals
                            </p>

                        </div>

                        {/* Right */}

                        <div className="relative h-[380px] lg:h-[620px]">

                            <Image
                                src="/images/emergency.png"
                                alt="Licensed emergency plumber providing plumbing services in Houston"
                                fill
                                quality={75}
                                sizes="(max-width:1024px)100vw,50vw"
                                className="object-cover"
                            />

                            <div className="absolute bottom-8 left-8 rounded-3xl border border-white/20 bg-white/15 p-6 backdrop-blur-xl">

                                <div className="text-4xl font-black text-white">
                                    24/7
                                </div>

                                <div className="mt-1 text-sm font-semibold text-blue-100">
                                    Emergency Plumbing
                                </div>

                            </div>

                        </div>

                    </div>

                    {/* Bottom Features */}

                    <div className="grid border-t border-white/20 md:grid-cols-3">

                        <div className="p-8 text-center">

                            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-white/15">

                                <Clock3
                                    size={30}
                                    className="text-white"
                                />

                            </div>

                            <h3 className="mt-5 text-xl font-bold text-white">
                                Fast Emergency Response
                            </h3>

                            <p className="mt-3 leading-7 text-blue-100">
                                Plumbing assistance available day and night throughout Houston.
                            </p>

                        </div>

                        <div className="border-y border-white/20 p-8 text-center md:border-x md:border-y-0">

                            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-white/15">

                                <ShieldCheck
                                    size={30}
                                    className="text-white"
                                />

                            </div>

                            <h3 className="mt-5 text-xl font-bold text-white">
                                Licensed & Insured
                            </h3>

                            <p className="mt-3 leading-7 text-blue-100">
                                Trusted plumbing professionals for residential and commercial jobs.
                            </p>

                        </div>

                        <div className="p-8 text-center">

                            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-white/15">

                                <BadgeCheck
                                    size={30}
                                    className="text-white"
                                />

                            </div>

                            <h3 className="mt-5 text-xl font-bold text-white">
                                Honest Upfront Pricing
                            </h3>

                            <p className="mt-3 leading-7 text-blue-100">
                                Transparent estimates before work begins with no surprise charges.
                            </p>

                        </div>

                    </div>

                </div>

            </div>

        </section>
    );
}