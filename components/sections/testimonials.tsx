"use client";

import Image from "next/image";
import { Star, Quote } from "lucide-react";

const reviews = [
    {
        image: "/images/review-1.png",
        name: "Michael Johnson",
        role: "Houston Homeowner",
        review:
            "Pipe Rescue arrived within 30 minutes and fixed our burst pipe quickly. Very professional team and transparent pricing.",
    },
    {
        image: "/images/review-2.png",
        name: "Sarah Williams",
        role: "Business Owner",
        review:
            "Excellent customer service and quality workmanship. Our commercial plumbing issue was solved the same day.",
    },
    {
        image: "/images/review-3.png",
        name: "David Miller",
        role: "Residential Customer",
        review:
            "Highly recommended. Friendly technicians, fair pricing and outstanding plumbing service from start to finish.",
    },
];

export default function Testimonials() {
    return (
        <section className="bg-slate-50 py-24">
            <div className="container-custom">

                <div className="mx-auto max-w-3xl text-center">

                    <span className="rounded-full bg-blue-100 px-5 py-2 text-sm font-bold text-blue-600">
                        TESTIMONIALS
                    </span>

                    <h2 className="mt-6 text-5xl font-black text-slate-900">
                        Trusted By Hundreds Of Customers
                    </h2>

                    <p className="mt-6 text-lg leading-8 text-slate-600">
                        Our reputation is built on fast response, honest pricing,
                        quality workmanship and outstanding customer service.
                    </p>

                </div>

                <div className="mt-20 grid gap-8 lg:grid-cols-3">

                    {reviews.map((review) => (

                        <div
                            key={review.name}
                            className="group overflow-hidden rounded-[30px] border border-slate-200 bg-white shadow-lg transition duration-300 hover:-translate-y-2 hover:border-blue-600 hover:shadow-2xl"
                        >

                            <div className="relative h-64">

                                <Image
                                    src={review.image}
                                    alt={review.name}
                                    fill
                                    sizes="(max-width:768px)100vw,(max-width:1200px)50vw,33vw"
                                    className="object-cover transition duration-500 group-hover:scale-110"
                                />

                            </div>

                            <div className="p-8">

                                <div className="flex items-center justify-between">

                                    <div className="flex">

                                        {[1, 2, 3, 4, 5].map((star) => (
                                            <Star
                                                key={star}
                                                size={18}
                                                className="fill-yellow-400 text-yellow-400"
                                            />
                                        ))}

                                    </div>

                                    <Quote
                                        className="text-blue-600"
                                        size={34}
                                    />

                                </div>

                                <p className="mt-8 leading-8 text-slate-600">
                                    "{review.review}"
                                </p>

                                <div className="mt-10">

                                    <h3 className="text-xl font-bold text-slate-900">
                                        {review.name}
                                    </h3>

                                    <p className="text-slate-500">
                                        {review.role}
                                    </p>

                                </div>

                            </div>

                        </div>

                    ))}

                </div>

                <div className="mt-20 rounded-[32px] bg-blue-600 p-10 text-center text-white">

                    <h3 className="text-4xl font-black">
                        ⭐ 5.0 Average Google Rating
                    </h3>

                    <p className="mx-auto mt-5 max-w-2xl text-lg text-blue-100">
                        Hundreds of homeowners and businesses trust Pipe Rescue for
                        emergency plumbing, drain cleaning, water heater repair and
                        complete plumbing solutions throughout Houston.
                    </p>

                </div>

            </div>
        </section>
    );
}


