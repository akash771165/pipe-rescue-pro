"use client";

import Image from "next/image";
import { Star, Quote } from "lucide-react";
import { siteConfig } from "@/lib/config/site";

const reviews = [
  {
    image: "/images/review-1.png",
    name: "Michael Johnson",
    role: "Houston Homeowner",
    review:
      "Called for an emergency pipe leak late at night. A licensed plumber arrived quickly, explained everything clearly and fixed the issue fast. Excellent experience.",
  },
  {
    image: "/images/review-2.png",
    name: "Sarah Williams",
    role: "Property Manager",
    review:
      "Needed urgent drain cleaning for one of our rental properties. Fast response, professional service and transparent pricing. Highly recommended.",
  },
  {
    image: "/images/review-3.png",
    name: "David Miller",
    role: "Homeowner",
    review:
      "Very easy to schedule. The plumber repaired our water heater the same day. Friendly service and quality workmanship from start to finish.",
  },
];
export default function Testimonials() {
    return (
        <section className="bg-slate-50 py-24">
            <div className="container-custom">

                <div className="mx-auto max-w-3xl text-center">

    <span className="rounded-full bg-blue-100 px-5 py-2 text-sm font-bold text-blue-600">
        CUSTOMER REVIEWS
    </span>

    <h2 className="mt-6 text-4xl font-black text-slate-900 lg:text-5xl">
        Trusted By Homeowners Across Houston
    </h2>

    <p className="mt-6 text-lg leading-8 text-slate-600">
        Real customer experiences from homeowners who needed emergency plumbing,
        drain cleaning, water heater repair and other plumbing services.
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
    alt={`${review.name} plumbing review`}
    fill
    quality={75}
    sizes="(max-width:768px) 100vw, (max-width:1200px) 50vw, 33vw"
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

   <h3 className="text-3xl font-black lg:text-4xl">
    Need a Licensed Plumber in Houston Today?
</h3>

<p className="mx-auto mt-5 max-w-2xl text-lg text-blue-100">
    Call now to connect with a trusted plumbing professional for emergency
    plumbing, drain cleaning, leak detection, sewer line repair and water
    heater services.
</p>

    <a
        href={`tel:${siteConfig.phone}`}
        className="mt-8 inline-block rounded-full bg-white px-8 py-4 font-bold text-blue-700 transition hover:bg-slate-100"
    >
        📞 {siteConfig.phoneDisplay}
    </a>

</div>

            </div>
        </section>
    );
}


