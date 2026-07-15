"use client";

import Image from "next/image";
import { siteConfig } from "@/lib/config/site";
import {
    ShieldCheck,
    Clock3,
    BadgeCheck,
    Wrench,
    Star,
    DollarSign,
    PhoneCall,
    ThumbsUp,
} from "lucide-react";

const features = [
    {
        icon: ShieldCheck,
        title: "Licensed & Insured",
        desc: "Every plumber is licensed, insured and professionally trained.",
    },
    {
        icon: Clock3,
        title: "24/7 Emergency Service",
        desc: "Fast response whenever you need emergency plumbing assistance.",
    },
    {
        icon: BadgeCheck,
        title: "Quality Guaranteed",
        desc: "We stand behind every repair with workmanship you can trust.",
    },
    {
        icon: Wrench,
        title: "Experienced Technicians",
        desc: "Over 15 years of plumbing expertise for residential and commercial projects.",
    },
    {
        icon: DollarSign,
        title: "Upfront Pricing",
        desc: "No hidden charges. Honest estimates before any work begins.",
    },
    {
        icon: PhoneCall,
        title: "Same Day Service",
        desc: "Most plumbing repairs are completed on the same day.",
    },
    {
        icon: Star,
        title: "5-Star Reputation",
        desc: "Trusted by hundreds of satisfied homeowners and businesses.",
    },
    {
        icon: ThumbsUp,
        title: "Customer First",
        desc: "Friendly service with complete satisfaction as our highest priority.",
    },
];

export default function WhyUs() {
    return (
        <section className="bg-white py-20 lg:py-24">

            <div className="container-custom">

                {/* Heading */}

                <div className="mx-auto max-w-3xl text-center">

                    <span className="rounded-full bg-blue-100 px-5 py-2 text-sm font-bold text-blue-600">
                        WHY CHOOSE PIPE RESCUE
                    </span>

                    <h2 className="mt-6 text-4xl font-black text-slate-900 lg:text-5xl">
                        Why Houston Homeowners Choose Our Plumbing Services
                    </h2>

                    <p className="mt-6 text-lg leading-8 text-slate-600">
                        We connect customers with licensed plumbing professionals
                        who provide fast response times, upfront pricing and
                        dependable workmanship for every plumbing project.
                    </p>

                </div>

                {/* Content */}

                <div className="mt-16 grid items-center gap-16 lg:grid-cols-2">

                    {/* Image */}

                    <div className="relative overflow-hidden rounded-[40px] shadow-2xl">

                        <Image
                            src="/images/about.png"
                            alt="Licensed plumbing professionals in Houston"
                            width={900}
                            height={700}
                            quality={75}
                            sizes="(max-width:768px) 100vw, 50vw"
                            className="h-[420px] w-full object-cover lg:h-[700px]"
                        />

                    </div>

                    {/* Features */}

                    <div className="grid gap-6 sm:grid-cols-2">

                        {features.map((item) => {
                            const Icon = item.icon;

                            return (
                                <div
                                    key={item.title}
                                    className="rounded-3xl border border-slate-200 bg-slate-50 p-7 transition duration-300 hover:-translate-y-2 hover:border-blue-600 hover:bg-white hover:shadow-xl"
                                >

                                    <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-100">

                                        <Icon className="h-8 w-8 text-blue-600" />

                                    </div>

                                    <h3 className="mt-6 text-xl font-bold text-slate-900">
                                        {item.title}
                                    </h3>

                                    <p className="mt-3 leading-7 text-slate-600">
                                        {item.desc}
                                    </p>

                                </div>
                            );
                        })}

                    </div>

                </div>

                {/* CTA */}

                <div className="mt-20 rounded-[32px] bg-gradient-to-r from-blue-700 to-blue-500 p-10 text-white lg:flex lg:items-center lg:justify-between">

                    <div>

                        <h3 className="text-3xl font-black lg:text-4xl">
                            Need Emergency Plumbing Help?
                        </h3>

                        <p className="mt-4 max-w-2xl text-blue-100">
                            Emergency plumbing available 24/7 throughout Houston.
                            Call now to connect with a licensed plumbing professional.
                        </p>

                    </div>

                    <div className="mt-8 flex flex-wrap gap-4 lg:mt-0">

                        <a
                            href={`tel:${siteConfig.phone}`}
                            className="rounded-full bg-white px-8 py-4 font-bold text-blue-700 transition hover:bg-slate-100"
                        >
                            📞 {siteConfig.phoneDisplay}
                        </a>

                        <a
                            href="/contact"
                            className="rounded-full border-2 border-white px-8 py-4 font-bold transition hover:bg-white hover:text-blue-700"
                        >
                            Request Free Estimate
                        </a>

                    </div>

                </div>

            </div>

        </section>
    );
}


