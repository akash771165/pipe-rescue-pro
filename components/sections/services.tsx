"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";

const services = [
    {
        image: "/images/service-1.png",
        title: "Emergency Plumbing",
        desc: "24/7 emergency plumbing repairs with fast response throughout Houston.",
    },
    {
        image: "/images/service-2.png",
        title: "Leak Detection",
        desc: "Advanced leak detection using modern equipment and non-invasive methods.",
    },
    {
        image: "/images/service-3.png",
        title: "Water Heater Repair",
        desc: "Water heater repair, installation and replacement services.",
    },
    {
        image: "/images/service-1.png",
        title: "Drain Cleaning",
        desc: "Professional drain cleaning to remove stubborn clogs quickly.",
    },
    {
        image: "/images/service-2.png",
        title: "Sewer Line Repair",
        desc: "Complete sewer inspection, repair and replacement solutions.",
    },
    {
        image: "/images/service-3.png",
        title: "Residential Plumbing",
        desc: "Complete plumbing services for homes, apartments and condominiums.",
    },
];

export default function Services() {
    return (
        <section className="bg-slate-50 py-24">
            <div className="container-custom">
                <div className="mx-auto max-w-3xl text-center">
                    <span className="rounded-full bg-blue-100 px-5 py-2 text-sm font-bold text-blue-600">
                        OUR SERVICES
                    </span>

                    <h2 className="mt-6 text-5xl font-black text-slate-900">
                        Complete Plumbing Solutions
                    </h2>

                    <p className="mt-6 text-lg leading-8 text-slate-600">
                        Pipe Rescue provides residential and commercial plumbing
                        services with certified technicians, transparent pricing
                        and same-day emergency response.
                    </p>
                </div>

                <div className="mt-20 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
                    {services.map((service) => (
                        <div
                            key={service.title}
                            className="group overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-lg transition duration-300 hover:-translate-y-2 hover:border-blue-600 hover:shadow-2xl"
                        >
                            <div className="relative h-64 overflow-hidden">
                                <Image
                                    src={service.image}
                                    alt={service.title}
                                    fill
                                    sizes="(max-width:768px)100vw,(max-width:1200px)50vw,33vw"
                                    className="object-cover transition duration-500 group-hover:scale-110"
                                />
                            </div>

                            <div className="p-8">
                                <h3 className="text-2xl font-bold text-slate-900">
                                    {service.title}
                                </h3>

                                <p className="mt-4 leading-8 text-slate-600">
                                    {service.desc}
                                </p>

                                <div className="mt-8 space-y-3">
                                    <div className="flex items-center gap-2">
                                        <CheckCircle2 className="h-5 w-5 text-green-600" />
                                        <span>Licensed Professionals</span>
                                    </div>

                                    <div className="flex items-center gap-2">
                                        <CheckCircle2 className="h-5 w-5 text-green-600" />
                                        <span>Upfront Pricing</span>
                                    </div>

                                    <div className="flex items-center gap-2">
                                        <CheckCircle2 className="h-5 w-5 text-green-600" />
                                        <span>Same Day Service</span>
                                    </div>
                                </div>

                                <Link
                                    href="/services"
                                    className="mt-8 inline-flex items-center gap-2 font-bold text-blue-600 transition hover:gap-4"
                                >
                                    Learn More
                                    <ArrowRight size={18} />
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}


