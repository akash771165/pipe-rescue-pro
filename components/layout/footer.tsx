"use client";

import Link from "next/link";
import Image from "next/image";
import {
    Phone,
    Mail,
    MapPin,
    Clock3,
    Wrench,
    ArrowRight,
} from "lucide-react";

const services = [
    "Emergency Plumbing",
    "Drain Cleaning",
    "Leak Detection",
    "Water Heater Repair",
    "Sewer Line Repair",
    "Commercial Plumbing",
];

const company = [
    { title: "Home", href: "/" },
    { title: "About Us", href: "/about" },
    { title: "Services", href: "/services" },
    { title: "Service Areas", href: "/service-areas" },
    { title: "Blog", href: "/blog" },
    { title: "Contact", href: "/contact" },
];

export default function Footer() {
    return (
        <footer className="relative overflow-hidden bg-slate-950 text-white">

            <Image
                src="/images/map.png"
                alt="Houston Service Area"
                fill sizes="100vw" className="object-cover opacity-10"
            />

            <div className="relative z-10">

                <div className="border-b border-slate-800">

                    <div className="container-custom flex flex-col items-center justify-between gap-8 py-14 lg:flex-row">

                        <div>

                            <h2 className="text-4xl font-black">
                                Ready To Fix Your Plumbing Problem?
                            </h2>

                            <p className="mt-4 max-w-2xl text-lg text-slate-300">
                                Fast response, licensed plumbers and honest pricing.
                                Available 24 hours a day across Houston.
                            </p>

                        </div>

                        <div className="flex flex-wrap gap-4">
                            <a
                                href="tel:+918447987505"
                                className="rounded-full bg-blue-600 px-8 py-4 font-bold transition hover:bg-blue-700"
                            >
                                📞 Call Now
                            </a>


                            <Link
                                href="/contact"
                                className="rounded-full border border-white/30 px-8 py-4 font-bold transition hover:bg-white hover:text-slate-900"
                            >
                                Free Estimate
                            </Link>
                        </div>

                    </div>

                </div>

                <div className="container-custom py-20">

                    <div className="grid gap-12 lg:grid-cols-4">

                        <div>

                            <div className="flex items-center gap-4">

                                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-600">

                                    <Wrench size={28} />

                                </div>

                                <div>

                                    <h2 className="text-3xl font-black">
                                        Pipe Rescue
                                    </h2>

                                    <p className="text-sm text-slate-400">
                                        24/7 Emergency Plumbing
                                    </p>

                                </div>

                            </div>

                            <p className="mt-6 leading-8 text-slate-400">
                                Pipe Rescue provides trusted residential and commercial
                                plumbing services including emergency repairs, drain
                                cleaning, sewer repair and water heater installation.
                            </p>

                        </div>

                        <div>

                            <h3 className="mb-6 text-2xl font-bold">
                                Services
                            </h3>

                            <ul className="space-y-4">

                                {services.map((service) => (

                                    <li key={service}>

                                        <Link
                                            href="/services"
                                            className="flex items-center gap-2 text-slate-400 transition hover:text-blue-400"
                                        >

                                            <ArrowRight size={16} />

                                            {service}

                                        </Link>

                                    </li>

                                ))}

                            </ul>

                        </div>

                        <div>

                            <h3 className="mb-6 text-2xl font-bold">
                                Company
                            </h3>

                            <ul className="space-y-4">

                                {company.map((item) => (

                                    <li key={item.href}>

                                        <Link
                                            href={item.href}
                                            className="flex items-center gap-2 text-slate-400 transition hover:text-blue-400"
                                        >

                                            <ArrowRight size={16} />

                                            {item.title}

                                        </Link>

                                    </li>

                                ))}

                            </ul>

                        </div>

                        <div>

                            <h3 className="mb-6 text-2xl font-bold">
                                Contact Us
                            </h3>

                            <div className="space-y-6">

                                <div className="flex gap-4">

                                    <Phone className="mt-1 text-blue-500" />

                                    <div>

                                        <h4 className="font-bold">
                                            Call Anytime
                                        </h4>

                                        <p className="text-slate-400">
                                            <a
                                                href="tel:+918447987505"
                                                className="text-slate-400 hover:text-white"
                                            >
                                                +91 84479 87505
                                            </a>

                                            <p className="text-slate-500">
                                                +91 97185 07728
                                            </p>
                                        </p>

                                    </div>

                                </div>

                                <div className="flex gap-4">

                                    <Mail className="mt-1 text-blue-500" />

                                    <div>

                                        <h4 className="font-bold">
                                            Email
                                        </h4>

                                        <p className="text-slate-400">
                                            <a
                                                href="mailto:info@piperesque.com"
                                                className="text-slate-400 hover:text-white"
                                            >
                                                info@piperesque.com
                                            </a>
                                        </p>

                                    </div>

                                </div>

                                <div className="flex gap-4">

                                    <MapPin className="mt-1 text-blue-500" />

                                    <div>

                                        <h4 className="font-bold">
                                            Office
                                        </h4>

                                        <p className="text-slate-400">
                                            Houston, Texas
                                        </p>

                                    </div>

                                </div>

                                <div className="flex gap-4">

                                    <Clock3 className="mt-1 text-blue-500" />

                                    <div>

                                        <h4 className="font-bold">
                                            Working Hours
                                        </h4>

                                        <p className="text-slate-400">
                                            24 Hours • 7 Days A Week
                                        </p>

                                    </div>

                                </div>

                            </div>

                        </div>

                    </div>

                    <div className="mt-20 flex flex-col items-center justify-between gap-6 border-t border-slate-800 pt-8 text-center text-slate-500 lg:flex-row">

                        <p>
                            © 2026 Pipe Rescue. All Rights Reserved.
                        </p>

                        <div className="flex gap-8">

                            <Link
                                href="/privacy-policy"
                                className="hover:text-white"
                            >
                                Privacy Policy
                            </Link>

                            <Link
                                href="/terms"
                                className="hover:text-white"
                            >
                                Terms & Conditions
                            </Link>

                            <Link
                                href="/contact"
                                className="hover:text-white"
                            >
                                Contact
                            </Link>

                        </div>

                    </div>

                </div>

            </div>

        </footer>
    );
}


