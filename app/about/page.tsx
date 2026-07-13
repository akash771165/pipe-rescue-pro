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

            {/* Hero */}

            <section className="relative overflow-hidden min-h-[700px] flex items-center">

                <Image
                    src="/images/about.png"
                    alt="Pipe Rescue Houston"
                    fill
                    priority
                    sizes="100vw"
                    className="object-cover"
                />

                <div className="absolute inset-0 bg-gradient-to-r from-slate-950/90 via-blue-950/80 to-blue-900/60" />

                <div className="container-custom relative z-10 py-28">

                    <div className="max-w-3xl">

                        <div className="flex flex-wrap gap-3">

                            <span className="rounded-full bg-red-600 px-5 py-2 text-sm font-bold text-white">
                                🚨 24/7 Emergency Plumbing
                            </span>

                            <span className="rounded-full bg-white/15 px-5 py-2 text-sm font-bold text-white backdrop-blur">
                                ⭐ 4.9 Google Rating
                            </span>

                            <span className="rounded-full bg-white/15 px-5 py-2 text-sm font-bold text-white backdrop-blur">
                                Licensed & Insured
                            </span>

                        </div>

                        <h1 className="mt-8 text-5xl font-black leading-tight text-white md:text-7xl">
                            Houston's Trusted Plumbing Professionals
                        </h1>

                        <p className="mt-8 max-w-2xl text-xl leading-9 text-blue-100">
                            Pipe Rescue provides fast, dependable and affordable plumbing
                            solutions for homeowners and businesses across Houston, Katy,
                            Sugar Land, Pearland and surrounding areas. Whether you need an
                            emergency plumber, drain cleaning, leak detection or water heater
                            repair, our licensed experts are available 24 hours a day.
                        </p>

                        <div className="mt-10 flex flex-wrap gap-5">

                            <a
                                href="/contact"
                                className="rounded-xl bg-red-600 px-8 py-4 text-lg font-bold text-white transition hover:bg-red-700"
                            >
                                Get Free Estimate
                            </a>

                            <a
                                href="tel:+18325551234"
                                className="rounded-xl border-2 border-white px-8 py-4 text-lg font-bold text-white transition hover:bg-white hover:text-slate-900"
                            >
                                Call (832) 555-1234
                            </a>

                        </div>

                        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">

                            <div className="rounded-2xl bg-white/10 p-5 backdrop-blur">

                                <h3 className="text-3xl font-black text-white">
                                    15+
                                </h3>

                                <p className="mt-2 text-blue-100">
                                    Years Experience
                                </p>

                            </div>

                            <div className="rounded-2xl bg-white/10 p-5 backdrop-blur">

                                <h3 className="text-3xl font-black text-white">
                                    10,000+
                                </h3>

                                <p className="mt-2 text-blue-100">
                                    Plumbing Jobs Completed
                                </p>

                            </div>

                            <div className="rounded-2xl bg-white/10 p-5 backdrop-blur">

                                <h3 className="text-3xl font-black text-white">
                                    24/7
                                </h3>

                                <p className="mt-2 text-blue-100">
                                    Emergency Service
                                </p>

                            </div>

                            <div className="rounded-2xl bg-white/10 p-5 backdrop-blur">

                                <h3 className="text-3xl font-black text-white">
                                    100%
                                </h3>

                                <p className="mt-2 text-blue-100">
                                    Satisfaction Guarantee
                                </p>

                            </div>

                        </div>

                    </div>

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
                        <span className="rounded-full bg-blue-100 px-5 py-2 text-sm font-bold text-blue-700">
                            WHO WE ARE
                        </span>

                        <h2 className="mt-8 text-5xl font-black leading-tight text-slate-900">
                            Houston's Most Trusted Plumbing Professionals
                        </h2>

                        <p className="mt-8 text-lg leading-9 text-slate-600">
                            Pipe Rescue proudly delivers dependable residential and commercial
                            plumbing services throughout Houston and the surrounding communities.
                            Our experienced team is committed to providing honest pricing,
                            quality workmanship and fast response times for every customer.
                        </p>

                        <p className="mt-6 text-lg leading-9 text-slate-600">
                            From emergency plumbing repairs and drain cleaning to water heater
                            installation, sewer line repairs and leak detection, our licensed
                            technicians use modern equipment and proven techniques to solve
                            plumbing problems quickly and efficiently.
                        </p>

                        <div className="mt-10 grid gap-4">

                            <div className="flex items-center gap-3 rounded-xl bg-slate-100 p-4">
                                <span className="text-2xl">✔</span>
                                <span className="font-semibold">
                                    Licensed & Insured Plumbing Professionals
                                </span>
                            </div>

                            <div className="flex items-center gap-3 rounded-xl bg-slate-100 p-4">
                                <span className="text-2xl">✔</span>
                                <span className="font-semibold">
                                    Same-Day & Emergency Plumbing Services
                                </span>
                            </div>

                            <div className="flex items-center gap-3 rounded-xl bg-slate-100 p-4">
                                <span className="text-2xl">✔</span>
                                <span className="font-semibold">
                                    Upfront Pricing With No Hidden Charges
                                </span>
                            </div>

                            <div className="flex items-center gap-3 rounded-xl bg-slate-100 p-4">
                                <span className="text-2xl">✔</span>
                                <span className="font-semibold">
                                    Residential & Commercial Plumbing Solutions
                                </span>
                            </div>

                            <div className="flex items-center gap-3 rounded-xl bg-slate-100 p-4">
                                <span className="text-2xl">✔</span>
                                <span className="font-semibold">
                                    Background Checked & Experienced Technicians
                                </span>
                            </div>

                            <div className="flex items-center gap-3 rounded-xl bg-slate-100 p-4">
                                <span className="text-2xl">✔</span>
                                <span className="font-semibold">
                                    100% Customer Satisfaction Guarantee
                                </span>
                            </div>

                        </div>

                        <div className="mt-12 grid grid-cols-2 gap-6">

                            <div className="rounded-3xl bg-blue-600 p-6 text-center text-white">
                                <h3 className="text-5xl font-black">15+</h3>
                                <p className="mt-2">Years Experience</p>
                            </div>

                            <div className="rounded-3xl bg-blue-600 p-6 text-center text-white">
                                <h3 className="text-5xl font-black">10,000+</h3>
                                <p className="mt-2">Projects Completed</p>
                            </div>

                            <div className="rounded-3xl bg-blue-600 p-6 text-center text-white">
                                <h3 className="text-5xl font-black">24/7</h3>
                                <p className="mt-2">Emergency Service</p>
                            </div>

                            <div className="rounded-3xl bg-blue-600 p-6 text-center text-white">
                                <h3 className="text-5xl font-black">4.9★</h3>
                                <p className="mt-2">Customer Rating</p>
                            </div>

                        </div>
                    </div>
                </div>

            </section>

            {/* Team */}

            {/* Why Choose Us */}

            <section className="bg-slate-50 py-24">

                <div className="container-custom">

                    <div className="mx-auto max-w-3xl text-center">

                        <span className="rounded-full bg-blue-100 px-5 py-2 text-sm font-bold text-blue-700">
                            WHY CHOOSE US
                        </span>

                        <h2 className="mt-6 text-5xl font-black text-slate-900">
                            Why Houston Homeowners Choose Pipe Rescue
                        </h2>

                        <p className="mt-6 text-lg leading-8 text-slate-600">
                            We combine years of experience, modern equipment and exceptional
                            customer service to provide dependable plumbing solutions for
                            homes and businesses across Houston.
                        </p>

                    </div>

                    <div className="mt-20 grid gap-8 md:grid-cols-2 lg:grid-cols-3">

                        <div className="rounded-3xl bg-white p-8 shadow-xl">

                            <div className="text-5xl">🔧</div>

                            <h3 className="mt-6 text-2xl font-black">
                                Licensed Plumbers
                            </h3>

                            <p className="mt-4 leading-8 text-slate-600">
                                Experienced professionals trained to solve plumbing problems
                                safely and efficiently.
                            </p>

                        </div>

                        <div className="rounded-3xl bg-white p-8 shadow-xl">

                            <div className="text-5xl">🚨</div>

                            <h3 className="mt-6 text-2xl font-black">
                                24/7 Emergency Service
                            </h3>

                            <p className="mt-4 leading-8 text-slate-600">
                                Fast emergency plumbing support whenever you need immediate
                                assistance.
                            </p>

                        </div>

                        <div className="rounded-3xl bg-white p-8 shadow-xl">

                            <div className="text-5xl">💲</div>

                            <h3 className="mt-6 text-2xl font-black">
                                Honest Pricing
                            </h3>

                            <p className="mt-4 leading-8 text-slate-600">
                                Transparent estimates with no hidden costs or surprise
                                charges.
                            </p>

                        </div>

                        <div className="rounded-3xl bg-white p-8 shadow-xl">

                            <div className="text-5xl">🚐</div>

                            <h3 className="mt-6 text-2xl font-black">
                                Fully Equipped Vans
                            </h3>

                            <p className="mt-4 leading-8 text-slate-600">
                                Our service vehicles carry advanced tools and replacement
                                parts for faster repairs.
                            </p>

                        </div>

                        <div className="rounded-3xl bg-white p-8 shadow-xl">

                            <div className="text-5xl">🏠</div>

                            <h3 className="mt-6 text-2xl font-black">
                                Residential & Commercial
                            </h3>

                            <p className="mt-4 leading-8 text-slate-600">
                                Complete plumbing services for homes, offices, restaurants
                                and commercial properties.
                            </p>

                        </div>

                        <div className="rounded-3xl bg-white p-8 shadow-xl">

                            <div className="text-5xl">⭐</div>

                            <h3 className="mt-6 text-2xl font-black">
                                Satisfaction Guarantee
                            </h3>

                            <p className="mt-4 leading-8 text-slate-600">
                                We stand behind every plumbing project with dependable
                                workmanship and outstanding customer care.
                            </p>

                        </div>

                    </div>

                </div>

            </section>

            <CTA />

            <Footer />

        </main>
    );
}
