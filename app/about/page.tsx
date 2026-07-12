"use client";

import Image from "next/image";

import Navbar from "@/components/layout/navbar";
import Footer from "@/components/layout/footer";
import CTA from "@/components/sections/cta";

export default function AboutPage() {
    return (
        <main className="overflow-x-hidden bg-white">

            <Navbar />

            {/* Hero */}

            <section className="relative overflow-hidden py-28">

                <Image
                    src="/images/about.png"
                    alt="About Pipe Rescue"
                    fill
                    priority
                    sizes="100vw"
                    className="object-cover"
                />

                <div className="absolute inset-0 bg-blue-900/75" />

                <div className="container-custom relative z-10 text-center">

                    <span className="rounded-full bg-white/20 px-5 py-2 text-sm font-bold text-white">
                        ABOUT PIPE RESCUE
                    </span>

                    <h1 className="mt-8 text-6xl font-black text-white">
                        Houston's Trusted Plumbing Company
                    </h1>

                    <p className="mx-auto mt-8 max-w-3xl text-xl leading-9 text-blue-100">
                        Pipe Rescue delivers fast, reliable and affordable plumbing
                        services backed by licensed professionals and outstanding
                        customer support.
                    </p>

                </div>

            </section>

            {/* About */}

            <section className="py-24">

                <div className="container-custom grid items-center gap-20 lg:grid-cols-2">

                    <div className="relative aspect-[9/7] overflow-hidden rounded-[36px] shadow-2xl">

                        <Image
                            src="/images/plumber-1.png"
                            alt="Professional Plumber"
                            fill
                            sizes="(max-width:1024px) 100vw, 50vw"
                            className="object-cover"
                        />

                    </div>

                    <div>

                        <span className="rounded-full bg-blue-100 px-5 py-2 text-sm font-bold text-blue-600">
                            WHO WE ARE
                        </span>

                        <h2 className="mt-8 text-5xl font-black text-slate-900">
                            Professional Plumbing Experts
                        </h2>

                        <p className="mt-8 text-lg leading-9 text-slate-600">
                            Pipe Rescue has proudly served homeowners and businesses
                            throughout Houston with dependable plumbing solutions,
                            emergency repairs and exceptional customer service.
                        </p>

                        <p className="mt-6 text-lg leading-9 text-slate-600">
                            Our licensed plumbers specialize in emergency plumbing,
                            drain cleaning, sewer repair, leak detection, water heater
                            installation and commercial plumbing services.
                        </p>

                        <div className="mt-10 grid grid-cols-2 gap-6">

                            <div className="rounded-3xl bg-slate-100 p-6 text-center">

                                <h3 className="text-5xl font-black text-blue-600">
                                    15+
                                </h3>

                                <p className="mt-2">
                                    Years Experience
                                </p>

                            </div>

                            <div className="rounded-3xl bg-slate-100 p-6 text-center">

                                <h3 className="text-5xl font-black text-blue-600">
                                    500+
                                </h3>

                                <p className="mt-2">
                                    Happy Customers
                                </p>

                            </div>

                            <div className="rounded-3xl bg-slate-100 p-6 text-center">

                                <h3 className="text-5xl font-black text-blue-600">
                                    24/7
                                </h3>

                                <p className="mt-2">
                                    Emergency Service
                                </p>

                            </div>

                            <div className="rounded-3xl bg-slate-100 p-6 text-center">

                                <h3 className="text-5xl font-black text-blue-600">
                                    100%
                                </h3>

                                <p className="mt-2">
                                    Satisfaction
                                </p>

                            </div>

                        </div>

                    </div>

                </div>

            </section>

            {/* Team */}

            <section className="bg-slate-50 py-24">

                <div className="container-custom">

                    <div className="mx-auto max-w-3xl text-center">

                        <h2 className="text-5xl font-black text-slate-900">
                            Meet Our Professional Team
                        </h2>

                        <p className="mt-6 text-lg leading-8 text-slate-600">
                            Licensed plumbers committed to quality workmanship,
                            honest pricing and exceptional customer service.
                        </p>

                    </div>

                    <div className="mt-16 grid gap-10 lg:grid-cols-2">

                        <div className="overflow-hidden rounded-[36px] bg-white shadow-xl">

                            <div className="relative aspect-[4/3]">

                                <Image
                                    src="/images/plumber-1.png"
                                    alt="Senior Plumbing Expert"
                                    fill
                                    sizes="(max-width:1024px) 100vw, 50vw"
                                    className="object-cover"
                                />

                            </div>

                            <div className="p-8">

                                <h3 className="text-3xl font-black">
                                    Senior Plumbing Expert
                                </h3>

                                <p className="mt-3 text-slate-600">
                                    15+ Years Experience
                                </p>

                            </div>

                        </div>

                        <div className="overflow-hidden rounded-[36px] bg-white shadow-xl">

                            <div className="relative aspect-[4/3]">

                                <Image
                                    src="/images/plumber-2.png"
                                    alt="Emergency Plumbing Specialist"
                                    fill
                                    sizes="(max-width:1024px) 100vw, 50vw"
                                    className="object-cover"
                                />

                            </div>

                            <div className="p-8">

                                <h3 className="text-3xl font-black">
                                    Emergency Plumbing Specialist
                                </h3>

                                <p className="mt-3 text-slate-600">
                                    Available 24 Hours A Day
                                </p>

                            </div>

                        </div>

                    </div>

                </div>

            </section>

            <CTA />

            <Footer />

        </main>
    );
}
