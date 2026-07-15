import Link from "next/link";
import { services } from "@/lib/data/services";

type Props = {
  currentSlug?: string;
};

export default function RelatedServices({
  currentSlug,
}: Props) {
  const related = services
    .filter((service) => service.slug !== currentSlug)
    .slice(0, 4);

  return (
    <section className="mt-20">

      <h2 className="text-3xl font-black">
        Related Plumbing Services
      </h2>

      <div className="mt-8 grid gap-6 md:grid-cols-2">

        {related.map((service) => (

          <Link
            key={service.slug}
            href={`/services/${service.slug}`}
            className="rounded-2xl border border-slate-200 p-6 transition hover:border-blue-600 hover:shadow-lg"
          >
            <h3 className="text-xl font-bold">
              {service.shortTitle}
            </h3>

            <p className="mt-3 text-slate-600">
              {service.metaDescription}
            </p>

          </Link>

        ))}

      </div>

    </section>
  );
}