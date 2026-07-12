"use client";

import Link from "next/link";
import Image from "next/image";
import {
    Phone,
    ArrowRight,
    ShieldCheck,
    Clock3,
    BadgeCheck,
} from "lucide-react";

export default function CTA() {
    return (
        <section className="relative overflow-hidden py-28">

            <Image
                src="/images/emergency.png"
                alt="Emergency Plumbing"
                fill
                priority
                sizes="100vw"
                className="object-cover"
            />

            <div className="absolute inset-0 bg-blue-900/80" />

            <div className="container-custom relative z-10">

                <div className="mx-auto max-w-6xl overflow-hidden rounded-[36px] border border-white/20 bg-white/10 backdrop-blur-xl">

                    <div className="grid items-center lg:grid-cols-2">

                        <div className="p-12">

                            <span className="rounded-full bg-white/20 px-5 py-2 text-sm font-bold text-white">
                                AVAILABLE 24 HOURS A DAY
                            </span>

                            <h2 className="mt-8 text-5xl font-black text-white lg:text-6xl">
                                Need an Emergency Plumber?
                            </h2>

                            <p className="mt-6 text-xl leading-9 text-blue-100">
                                Pipe Rescue provides fast emergency plumbing,
                                drain cleaning, leak detection, sewer repair and
                                water heater services throughout Houston with
                                licensed professionals.
                            </p>

                            <div className="mt-10 flex flex-wrap gap-5">

                                <a
                                    href="tel:+918447987505"
                                    className="flex items-center gap-3 rounded-full bg-white px-10 py-5 text-lg font-bold text-blue-700 transition hover:scale-105"
                                >
                                    <Phone size={22} />
                                    +91 84479 87505
                                </a>

                                <a
                                    href="tel:+919718507728"
                                    className="flex items-center gap-3 rounded-full border-2 border-white px-10 py-5 text-lg font-bold text-white transition hover:bg-white hover:text-blue-700"
                                >
                                    <Phone size={22} />
                                    +91 97185 07728
                                </a>

                                <Link
                                    href="/contact"
                                    className="flex items-center gap-3 rounded-full bg-blue-600 px-10 py-5 text-lg font-bold text-white transition hover:bg-blue-700"
                                >
                                    Get Free Estimate
                                    <ArrowRight size={20} />
                                </Link>

                            </div>

                        </div>

                        <div className="relative h-[550px]">

                            <Image
                                src="/images/emergency.png"
                                alt="Emergency Service"
                                fill
                                sizes="(max-width:1024px) 100vw, 50vw"
                                className="object-cover"
                            />

                        </div>

                    </div>

                    <div className="grid border-t border-white/20 md:grid-cols-3">

                        <div className="p-8 text-center">

                            <Clock3
                                size={36}
                                className="mx-auto text-white"
                            />

                            <h3 className="mt-4 text-xl font-bold text-white">
                                24/7 Emergency
                            </h3>

                            <p className="mt-2 text-blue-100">
                                Day & Night Plumbing Service
                            </p>

                        </div>

                        <div className="border-y border-white/20 p-8 text-center md:border-x md:border-y-0">

                            <ShieldCheck
                                size={36}
                                className="mx-auto text-white"
                            />

                            <h3 className="mt-4 text-xl font-bold text-white">
                                Licensed & Insured
                            </h3>

                            <p className="mt-2 text-blue-100">
                                Certified Plumbing Experts
                            </p>

                        </div>

                        <div className="p-8 text-center">

                            <BadgeCheck
                                size={36}
                                className="mx-auto text-white"
                            />

                            <h3 className="mt-4 text-xl font-bold text-white">
                                100% Satisfaction
                            </h3>

                            <p className="mt-2 text-blue-100">
                                Quality Guaranteed
                            </p>

                        </div>

                    </div>

                </div>

            </div>

        </section>
    );
}