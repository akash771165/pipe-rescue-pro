import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/lib/config/site";

export default function Hero() {
  const highlights = [
    ["24/7", "Emergency Assistance"],
    ["Houston", "Service Area"],
    ["Residential", "Plumbing"],
    ["Commercial", "Plumbing"],
  ] as const;

  const services = [
    "Emergency Plumbing",
    "Drain Cleaning",
    "Leak Detection",
    "Water Heater Repair",
    "Sewer Line Services",
  ];

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-slate-50 via-white to-blue-50">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute left-0 top-0 h-80 w-80 rounded-full bg-blue-100/40 blur-2xl" />
        <div className="absolute bottom-0 right-0 h-80 w-80 rounded-full bg-sky-100/40 blur-2xl" />
      </div>

      <div className="container-custom relative z-10 grid min-h-[80vh] items-center gap-14 py-14 lg:min-h-[90vh] lg:grid-cols-2 lg:gap-20 lg:py-20">
        {/* LEFT */}

        <div>
          <span className="inline-flex items-center rounded-full border border-red-200 bg-red-50 px-5 py-2 text-sm font-semibold text-red-600">
            🚨 24/7 Emergency Plumbing Assistance
          </span>

          <h1 className="mt-8 text-4xl font-black leading-tight text-slate-900 sm:text-5xl lg:text-7xl">
            Emergency
            <span className="block text-blue-600">
              Plumbing Services
            </span>
            in Houston, TX
          </h1>

          <p className="mt-8 max-w-2xl text-lg leading-8 text-slate-600 lg:text-xl">
            Pipe Rescue helps homeowners connect with local plumbing
            professionals for emergency plumbing, drain cleaning, leak
            detection, water heater repair, sewer line services, and
            residential or commercial plumbing assistance throughout
            Houston and nearby communities.
          </p>

          <div className="mt-10 flex flex-wrap gap-5">
            <Link
              href="/contact"
              className="rounded-full bg-blue-600 px-10 py-5 font-bold text-white transition-transform duration-300 hover:scale-105 hover:bg-blue-700"
            >
              Request Assistance
            </Link>

            <a
              href={`tel:${siteConfig.phone}`}
              className="rounded-full border-2 border-slate-300 bg-white px-10 py-5 font-bold transition-colors duration-300 hover:border-blue-600 hover:text-blue-600"
            >
              📞 {siteConfig.phoneDisplay}
            </a>
          </div>

          <p className="mt-5 text-sm font-semibold text-red-600">
            Need plumbing assistance? Contact us anytime.
          </p>

          <div className="mt-12 grid grid-cols-2 gap-5 lg:grid-cols-4">
            {highlights.map(([title, label], index) => (
              <div
                key={`${title}-${label}-${index}`}
                className="rounded-2xl bg-white p-5 text-center shadow-lg"
              >
                <h2 className="text-3xl font-black text-blue-600">
                  {title}
                </h2>

                <p className="mt-2 text-slate-600">
                  {label}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-10 flex flex-wrap gap-3">
            {services.map((service) => (
              <span
                key={service}
                className="rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-700"
              >
                {service}
              </span>
            ))}
          </div>

          <div className="mt-10 flex flex-wrap gap-4">
            <span className="rounded-full bg-green-100 px-4 py-2 font-semibold text-green-700">
              ✔ Emergency Plumbing
            </span>

            <span className="rounded-full bg-green-100 px-4 py-2 font-semibold text-green-700">
              ✔ Drain Cleaning
            </span>

            <span className="rounded-full bg-green-100 px-4 py-2 font-semibold text-green-700">
              ✔ Residential &amp; Commercial
            </span>

            <span className="rounded-full bg-green-100 px-4 py-2 font-semibold text-green-700">
              ✔ Emergency Assistance
            </span>
          </div>

          <p className="mt-6 max-w-2xl text-sm leading-6 text-slate-500">
            Pipe Rescue helps connect homeowners with local plumbing service
            providers. Services and availability may vary depending on
            location and provider availability.
          </p>
        </div>

        {/* RIGHT */}

        <div className="relative">
          <div className="overflow-hidden rounded-[40px] shadow-xl">
            <Image
              src="/images/hero.avif"
              alt="Emergency plumbing services in Houston, Texas"
              width={1200}
              height={800}
              priority
              fetchPriority="high"
              quality={60}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 600px"
              className="aspect-[3/2] h-auto w-full object-cover lg:h-[650px]"
            />
          </div>
        </div>
      </div>
    </section>
  );
}