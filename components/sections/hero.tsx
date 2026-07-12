"use client";

import Image from "next/image";
import Link from "next/link";

export default function Hero() {
    return (
        <section className="relative overflow-hidden bg-gradient-to-br from-slate-50 via-white to-blue-50">

            <div className="absolute inset-0">
                <div className="absolute left-0 top-0 h-96 w-96 rounded-full bg-blue-100 blur-3xl opacity-40" />
                <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-sky-100 blur-3xl opacity-40" />
            </div>

            <div className="container-custom relative z-10 grid min-h-screen items-center gap-20 py-24 lg:grid-cols-2">

                {/* LEFT */}

                <div>

                    <span className="inline-flex items-center rounded-full border border-red-200 bg-red-50 px-5 py-2 text-sm font-semibold text-red-600">
                        🚨 24/7 Emergency Plumbing Services
                    </span>

                    <h1 className="mt-8 text-5xl font-black leading-tight text-slate-900 lg:text-7xl">
                        Houston's
                        <span className="block text-blue-600">
                            Most Trusted
                        </span>
                        Plumbing Experts
                    </h1>

                    <p className="mt-8 max-w-2xl text-xl leading-9 text-slate-600">
                        Fast emergency plumbing, drain cleaning, leak detection,
                        water heater repair, sewer repair and commercial plumbing.
                        Same-day service across Houston.
                    </p>

                    <div className="mt-10 flex flex-wrap gap-5">

                        <Link
                            href="/contact"
                            className="rounded-full bg-blue-600 px-10 py-5 font-bold text-white transition hover:scale-105 hover:bg-blue-700"
                        >
                            Get Free Estimate
                        </Link>

                        <a
                            href="tel:+918447987505"
                            className="rounded-full border-2 border-slate-300 bg-white px-10 py-5 font-bold transition hover:border-blue-600 hover:text-blue-600"
                        >
                            📞 +91 84479 87505
                        </a>

                    </div>

                    <div className="mt-5 flex flex-wrap gap-5">

                        <a
                            href="tel:+919718507728"
                            className="rounded-full border-2 border-slate-300 bg-white px-8 py-4 font-semibold transition hover:border-blue-600 hover:text-blue-600"
                        >
                            📞 +91 97185 07728
                        </a>

                    </div>

                    <div className="mt-12 grid grid-cols-2 gap-5 lg:grid-cols-4">

                        {[
                            ["15+", "Years"],
                            ["500+", "Customers"],
                            ["24/7", "Support"],
                            ["100%", "Guaranteed"],
                        ].map(([number, label]) => (

                            <div
                                key={label}
                                className="rounded-2xl bg-white p-5 text-center shadow-lg"
                            >
                                <h3 className="text-3xl font-black text-blue-600">
                                    {number}
                                </h3>

                                <p className="text-slate-600">
                                    {label}
                                </p>

                            </div>

                        ))}

                    </div>

                    <div className="mt-10 flex flex-wrap gap-4">

                        <span className="rounded-full bg-green-100 px-4 py-2 font-semibold text-green-700">
                            ✔ Licensed
                        </span>

                        <span className="rounded-full bg-green-100 px-4 py-2 font-semibold text-green-700">
                            ✔ Insured
                        </span>

                        <span className="rounded-full bg-green-100 px-4 py-2 font-semibold text-green-700">
                            ✔ Same Day Service
                        </span>

                        <span className="rounded-full bg-yellow-100 px-4 py-2 font-semibold text-yellow-700">
                            ⭐ 5.0 Google Rating
                        </span>

                    </div>

                </div>

                {/* RIGHT */}

                <div className="relative">

                    <div className="overflow-hidden rounded-[40px] shadow-2xl">

                        <Image
                            src="/images/hero.png"
                            alt="Pipe Rescue Plumbing Services"
                            width={900}
                            height={1100}
                            priority
                            className="h-[750px] w-full object-cover"
                        />

                    </div>

                </div>

            </div>

        </section>
    );
}