"use client";

import Image from "next/image";
import Navbar from "@/components/layout/navbar";
import Footer from "@/components/layout/footer";
import CTA from "@/components/sections/cta";

import {
    Calendar,
    ArrowRight,
} from "lucide-react";

const posts = [
    {
        title: "5 Signs You Need Emergency Plumbing Service",
        category: "Emergency Plumbing",
        date: "Jan 15, 2026",
        image: "/images/blog.png",
        description:
            "Learn the warning signs that indicate it's time to call a professional emergency plumber.",
    },
    {
        title: "How To Prevent Drain Clogs At Home",
        category: "Drain Cleaning",
        date: "Jan 10, 2026",
        image: "/images/service-2.png",
        description:
            "Simple maintenance tips to keep your kitchen and bathroom drains flowing smoothly.",
    },
    {
        title: "Water Heater Repair vs Replacement",
        category: "Water Heater",
        date: "Jan 05, 2026",
        image: "/images/service-3.png",
        description:
            "Discover when repairing your water heater is enough and when replacement is the better option.",
    },
    {
        title: "Common Plumbing Problems Every Homeowner Faces",
        category: "Residential Plumbing",
        date: "Dec 28, 2025",
        image: "/images/residential.png",
        description:
            "From leaking faucets to burst pipes, here are the most common plumbing issues homeowners face.",
    },
    {
        title: "Why Regular Plumbing Maintenance Saves Money",
        category: "Maintenance",
        date: "Dec 20, 2025",
        image: "/images/plumber-2.png",
        description:
            "Routine inspections help prevent expensive plumbing emergencies and extend system life.",
    },
    {
        title: "Commercial Plumbing Tips For Businesses",
        category: "Commercial",
        date: "Dec 12, 2025",
        image: "/images/commercial.png",
        description:
            "Best practices for maintaining commercial plumbing systems and avoiding costly downtime.",
    },
];

export default function BlogPage() {
    return (
        <main className="overflow-x-hidden bg-white">

            <Navbar />

            {/* Hero */}

            <section className="relative overflow-hidden py-28">

                <Image
                    src="/images/blog.png"
                    alt="Pipe Rescue Blog"
                    fill
                    priority
                    className="object-cover"
                />

                <div className="absolute inset-0 bg-blue-900/75" />

                <div className="container-custom relative z-10 text-center">

                    <span className="rounded-full bg-white/20 px-5 py-2 text-sm font-bold text-white">
                        OUR BLOG
                    </span>

                    <h1 className="mt-8 text-6xl font-black text-white">
                        Plumbing Tips & Guides
                    </h1>

                    <p className="mx-auto mt-8 max-w-3xl text-xl leading-9 text-blue-100">
                        Expert plumbing advice, maintenance tips and homeowner
                        resources from the Pipe Rescue team.
                    </p>

                </div>

            </section>

            {/* Blog */}

            <section className="py-24">

                <div className="container-custom">

                    <div className="grid gap-10 md:grid-cols-2 xl:grid-cols-3">

                        {posts.map((post) => (

                            <article
                                key={post.title}
                                className="overflow-hidden rounded-[32px] border border-slate-200 bg-white shadow-xl transition duration-300 hover:-translate-y-2 hover:shadow-2xl"
                            >

                                <div className="relative h-64">

                                    <Image
                                        src={post.image}
                                        alt={post.title}
                                        fill
                                        className="object-cover transition duration-500 hover:scale-110"
                                    />

                                </div>

                                <div className="p-8">

                                    <span className="rounded-full bg-blue-100 px-4 py-2 text-sm font-bold text-blue-600">
                                        {post.category}
                                    </span>

                                    <div className="mt-5 flex items-center gap-2 text-slate-500">

                                        <Calendar size={18} />

                                        {post.date}

                                    </div>

                                    <h2 className="mt-5 text-3xl font-black leading-tight">
                                        {post.title}
                                    </h2>

                                    <p className="mt-5 leading-8 text-slate-600">
                                        {post.description}
                                    </p>

                                    <button className="mt-8 inline-flex items-center gap-3 rounded-full bg-blue-600 px-7 py-4 font-bold text-white transition hover:bg-blue-700">

                                        Read More

                                        <ArrowRight size={18} />

                                    </button>

                                </div>

                            </article>

                        ))}

                    </div>

                </div>

            </section>

            <CTA />

            <Footer />

        </main>
    );
}

