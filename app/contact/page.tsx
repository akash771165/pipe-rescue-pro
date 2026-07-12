"use client";

import Image from "next/image";
import Navbar from "@/components/layout/navbar";
import Footer from "@/components/layout/footer";
import CTA from "@/components/sections/cta";

import {
    Phone,
    Mail,
    MapPin,
    Clock3,
    Send,
} from "lucide-react";

export default function ContactPage() {
    return (
        <main className="overflow-x-hidden bg-white">

            <Navbar />

            {/* Hero */}

            <section className="relative overflow-hidden py-28">

                <Image
                    src="/images/contact.png"
                    alt="Contact Pipe Rescue"
                    fill
                    priority
                    className="object-cover"
                />

                <div className="absolute inset-0 bg-blue-900/75" />

                <div className="container-custom relative z-10 text-center">

                    <span className="rounded-full bg-white/20 px-5 py-2 text-sm font-bold text-white">
                        CONTACT US
                    </span>

                    <h1 className="mt-8 text-6xl font-black text-white">
                        Get In Touch
                    </h1>

                    <p className="mx-auto mt-8 max-w-3xl text-xl leading-9 text-blue-100">
                        Need emergency plumbing or a free estimate?
                        Our licensed plumbers are available 24 hours a day.
                    </p>

                </div>

            </section>

            {/* Contact */}

            <section className="py-24">

                <div className="container-custom grid gap-16 lg:grid-cols-2">

                    {/* Form */}

                    <div className="rounded-[36px] border border-slate-200 bg-white p-10 shadow-2xl">

                        <h2 className="text-4xl font-black">
                            Request Free Estimate
                        </h2>

                        <p className="mt-4 text-slate-600">
                            Fill out the form below and our plumbing experts
                            will contact you shortly.
                        </p>

                        <form className="mt-10 space-y-6">

                            <input
                                type="text"
                                placeholder="Full Name"
                                className="w-full rounded-xl border border-slate-300 p-4 outline-none focus:border-blue-600"
                            />

                            <input
                                type="email"
                                placeholder="Email Address"
                                className="w-full rounded-xl border border-slate-300 p-4 outline-none focus:border-blue-600"
                            />

                            <input
                                type="tel"
                                placeholder="Phone Number"
                                className="w-full rounded-xl border border-slate-300 p-4 outline-none focus:border-blue-600"
                            />

                            <input
                                type="text"
                                placeholder="Service Required"
                                className="w-full rounded-xl border border-slate-300 p-4 outline-none focus:border-blue-600"
                            />

                            <textarea
                                rows={6}
                                placeholder="Describe Your Plumbing Problem"
                                className="w-full rounded-xl border border-slate-300 p-4 outline-none focus:border-blue-600"
                            />

                            <button className="flex w-full items-center justify-center gap-3 rounded-full bg-blue-600 py-5 text-lg font-bold text-white transition hover:bg-blue-700">

                                <Send size={20} />

                                Send Request

                            </button>

                        </form>

                    </div>

                    {/* Contact Info */}

                    <div>

                        <h2 className="text-4xl font-black">
                            Contact Information
                        </h2>

                        <p className="mt-5 text-lg leading-8 text-slate-600">
                            We're available 24/7 for emergency plumbing services
                            throughout Houston and surrounding areas.
                        </p>

                        <div className="mt-10 space-y-6">

                            <div className="flex items-start gap-5 rounded-3xl border border-slate-200 bg-slate-50 p-8">

                                <div className="rounded-2xl bg-blue-100 p-4">
                                    <Phone className="text-blue-600" />
                                </div>

                                <div>

                                    <h3 className="text-2xl font-bold">
                                        Phone
                                    </h3>

                                    <p className="mt-2 text-slate-600">
                                        (713) 555-0100
                                    </p>

                                </div>

                            </div>

                            <div className="flex items-start gap-5 rounded-3xl border border-slate-200 bg-slate-50 p-8">

                                <div className="rounded-2xl bg-blue-100 p-4">
                                    <Mail className="text-blue-600" />
                                </div>

                                <div>

                                    <h3 className="text-2xl font-bold">
                                        Email
                                    </h3>

                                    <p className="mt-2 text-slate-600">
                                        info@piperesque.com
                                    </p>

                                </div>

                            </div>

                            <div className="flex items-start gap-5 rounded-3xl border border-slate-200 bg-slate-50 p-8">

                                <div className="rounded-2xl bg-blue-100 p-4">
                                    <MapPin className="text-blue-600" />
                                </div>

                                <div>

                                    <h3 className="text-2xl font-bold">
                                        Office
                                    </h3>

                                    <p className="mt-2 text-slate-600">
                                        Houston, Texas, USA
                                    </p>

                                </div>

                            </div>

                            <div className="flex items-start gap-5 rounded-3xl border border-slate-200 bg-slate-50 p-8">

                                <div className="rounded-2xl bg-blue-100 p-4">
                                    <Clock3 className="text-blue-600" />
                                </div>

                                <div>

                                    <h3 className="text-2xl font-bold">
                                        Working Hours
                                    </h3>

                                    <p className="mt-2 text-slate-600">
                                        24 Hours • 7 Days A Week
                                    </p>

                                </div>

                            </div>

                        </div>

                    </div>

                </div>

            </section>

            {/* Map */}

            <section className="pb-24">

                <div className="container-custom">

                    <div className="overflow-hidden rounded-[36px] shadow-2xl">

                        <div className="relative h-[550px]">

                            <Image
                                src="/images/map.png"
                                alt="Houston Service Area Map"
                                fill
                                className="object-cover"
                            />

                        </div>

                    </div>

                </div>

            </section>

            <CTA />

            <Footer />

        </main>
    );
}

