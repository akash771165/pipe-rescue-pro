"use client";

import Image from "next/image";
import {
    Clock3,
    Users,
    ShieldCheck,
    Star,
    Wrench,
    Building2,
} from "lucide-react";

const stats = [
    {
        icon: Clock3,
        number: "15+",
        label: "Years Experience",
    },
    {
        icon: Users,
        number: "500+",
        label: "Happy Customers",
    },
    {
        icon: Wrench,
        number: "10K+",
        label: "Projects Completed",
    },
    {
        icon: ShieldCheck,
        number: "100%",
        label: "Licensed & Insured",
    },
    {
        icon: Star,
        number: "5.0",
        label: "Google Rating",
    },
    {
        icon: Building2,
        number: "24/7",
        label: "Emergency Service",
    },
];

export default function Stats() {
    return (
        <section className="relative overflow-hidden py-24">

            <Image
                src="/images/emergency.png"
                alt="Emergency Plumbing"
                fill
                priority
                className="object-cover"
            />

            <div className="absolute inset-0 bg-blue-900/80" />

            <div className="container-custom relative z-10">

                <div className="mx-auto max-w-3xl text-center">

                    <span className="rounded-full bg-white/20 px-5 py-2 text-sm font-bold text-white backdrop-blur">
                        PIPE RESCUE IN NUMBERS
                    </span>

                    <h2 className="mt-6 text-5xl font-black text-white">
                        Trusted By Houston Homeowners
                    </h2>

                    <p className="mt-6 text-lg leading-8 text-blue-100">
                        We deliver dependable plumbing services with fast response,
                        certified technicians and customer-first support.
                    </p>

                </div>

                <div className="mt-20 grid gap-8 md:grid-cols-2 xl:grid-cols-3">

                    {stats.map((item) => {
                        const Icon = item.icon;

                        return (

                            <div
                                key={item.label}
                                className="rounded-3xl border border-white/20 bg-white/10 p-8 text-center backdrop-blur-lg transition duration-300 hover:-translate-y-2 hover:bg-white/20"
                            >

                                <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-white text-blue-600">

                                    <Icon size={36} />

                                </div>

                                <h3 className="mt-8 text-6xl font-black text-white">
                                    {item.number}
                                </h3>

                                <p className="mt-3 text-lg font-medium text-blue-100">
                                    {item.label}
                                </p>

                            </div>

                        );
                    })}

                </div>

            </div>

        </section>
    );
}


