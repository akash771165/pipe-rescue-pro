"use client";

import Image from "next/image";

import Navbar from "@/components/layout/navbar";
import Footer from "@/components/layout/footer";
import CTA from "@/components/sections/cta";

import {
    Wrench,
    Droplets,
    Flame,
    ShowerHead,
    Building2,
    Home,
    CheckCircle2,
} from "lucide-react";

const services = [
    {
        title: "Emergency Plumbing",
        image: "/images/service-1.png",
        icon: Wrench,
        description:
            "24/7 emergency plumbing repairs for burst pipes, leaks and urgent plumbing issues.",
    },
    {
        title: "Leak Detection",
        image: "/images/service-2.png",
        icon: Droplets,
        description:
            "Advanced leak detection using modern equipment with minimal property damage.",
    },
    {
        title: "Water Heater Repair",
        image: "/images/service-3.png",
        icon: Flame,
        description:
            "Water heater repair, replacement and installation for all major brands.",
    },
    {
        title: "Drain Cleaning",
        image: "/images/service-1.png",
        icon: ShowerHead,
        description:
            "Professional drain cleaning to remove clogs and restore water flow quickly.",
    },
    {
        title: "Commercial Plumbing",
        image: "/images/commercial.png",
        icon: Building2,
        description:
            "Reliable plumbing solutions for offices, restaurants and commercial buildings.",
    },
    {
        title: "Residential Plumbing",
        image: "/images/residential.png",
        icon: Home,
        description:
            "Complete plumbing services for homes including repairs, installations and maintenance.",
    },
];

export default function ServicesPage() {
    return (
        <main className="overflow-x-hidden bg-white">

            <Navbar />

            {/* Hero */}

            <section className="relative overflow-hidden py-28">

                <Image
                    src="/images/service-1.png"
                    alt="Plumbing Services"
                    fill
                    priority
                    className="object-cover"
                />

                <div className="absolute inset-0 bg-blue-900/75" />

                <div className="container-custom relative z-10 text-center">

                    <span className="rounded-full bg-white/20 px-5 py-2 text-sm font-bold text-white">
                        OUR SERVICES
                    </span>

                    <h1 className="mt-8 text-6xl font-black text-white">
                        Complete Plumbing Solutions
                    </h1>

                    <p className="mx-auto mt-8 max-w-3xl text-xl leading-9 text-blue-100">
                        Residential and commercial plumbing services delivered by
                        licensed professionals across Houston.
                    </p>

                </div>

            </section>

            {/* Services */}

            <section className="py-24">

                <div className="container-custom grid gap-10 lg:grid-cols-2">

                    {services.map((service) => {
                        const Icon = service.icon;

                        return (

                            <div
                                key={service.title}
                                className="overflow-hidden rounded-[32px] border border-slate-200 bg-white shadow-xl transition duration-300 hover:-translate-y-2 hover:shadow-2xl"
                            >

                                <div className="relative h-72">

                                    <Image
                                        src={service.image}
                                        alt={service.title}
                                        fill
                                        className="object-cover"
                                    />

                                </div>

                                <div className="p-8">

                                    <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-100">

                                        <Icon
                                            size={34}
                                            className="text-blue-600"
                                        />

                                    </div>

                                    <h2 className="mt-6 text-3xl font-black">
                                        {service.title}
                                    </h2>

                                    <p className="mt-5 leading-8 text-slate-600">
                                        {service.description}
                                    </p>

                                    <div className="mt-8 space-y-4">

                                        <div className="flex items-center gap-3">

                                            <CheckCircle2 className="text-green-600" />

                                            <span>Licensed Professionals</span>

                                        </div>

                                        <div className="flex items-center gap-3">

                                            <CheckCircle2 className="text-green-600" />

                                            <span>Upfront Pricing</span>

                                        </div>

                                        <div className="flex items-center gap-3">

                                            <CheckCircle2 className="text-green-600" />

                                            <span>24/7 Emergency Support</span>

                                        </div>

                                    </div>

                                </div>

                            </div>

                        );
                    })}

                </div>

            </section>

            <CTA />

            <Footer />

        </main>
    );
}

