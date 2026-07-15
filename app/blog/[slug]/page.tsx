import { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";

import Navbar from "@/components/layout/navbar";
import Footer from "@/components/layout/footer";
import CTA from "@/components/sections/cta";

import { blogs } from "@/lib/data/blogs";

type Props = {
  params: Promise<{
    slug: string;
  }>;
};

export async function generateStaticParams() {
  return blogs.map((blog) => ({
    slug: blog.slug,
  }));
}

export async function generateMetadata({
  params,
}: Props): Promise<Metadata> {
  const { slug } = await params;

  const blog = blogs.find((post) => post.slug === slug);

  if (!blog) {
    return {
      title: "Article Not Found",
    };
  }

  return {
    title: blog.title,
    description: blog.description,
    keywords: blog.keywords,
    alternates: {
      canonical: `https://www.piperesque.com/blog/${blog.slug}`,
    },
    openGraph: {
      title: blog.title,
      description: blog.description,
      url: `https://www.piperesque.com/blog/${blog.slug}`,
      type: "article",
      publishedTime: blog.publishedAt,
      modifiedTime: blog.updatedAt,
      images: [
        {
          url: blog.image,
          width: 1200,
          height: 630,
          alt: blog.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: blog.title,
      description: blog.description,
      images: [blog.image],
    },
  };
}

export default async function BlogArticle({
  params,
}: Props) {
  const { slug } = await params;

  const blog = blogs.find((post) => post.slug === slug);

  if (!blog) {
    notFound();
  }

  const related = blogs
    .filter((item) => item.slug !== blog.slug)
    .slice(0, 3);

  return (
    <main className="overflow-x-hidden bg-white">

      <Navbar />

      <section className="relative overflow-hidden py-24">

        <Image
          src={blog.image}
          alt={blog.title}
          fill
          priority
          className="object-cover"
        />

        <div className="absolute inset-0 bg-slate-900/70" />

        <div className="container-custom relative z-10">

          <div className="max-w-4xl">

            <span className="rounded-full bg-blue-600 px-5 py-2 text-sm font-bold text-white">
              {blog.category}
            </span>

            <h1 className="mt-8 text-5xl font-black leading-tight text-white lg:text-6xl">
              {blog.title}
            </h1>

            <div className="mt-8 flex flex-wrap gap-6 text-white/90">

              <span>{blog.author}</span>

              <span>{blog.publishedAt}</span>

              <span>{blog.readingTime}</span>

            </div>

          </div>

        </div>

      </section>

      <section className="py-20">

        <div className="container-custom">

          <div className="mx-auto max-w-4xl">

            <p className="text-xl leading-9 text-slate-700">
              {blog.description}
            </p>

            <div className="prose prose-lg mt-12 max-w-none">

              <h2>Why This Matters</h2>

              <p>
                Plumbing emergencies can happen at any time. Acting quickly can
                help reduce property damage and expensive repairs.
              </p>

              <h2>Common Signs</h2>

              <ul>
                <li>Low water pressure</li>
                <li>Water leaks</li>
                <li>Burst pipes</li>
                <li>Slow drains</li>
                <li>Overflowing toilets</li>
              </ul>

              <h2>Professional Recommendation</h2>

              <p>
                Always work with licensed plumbing professionals who provide
                upfront pricing and emergency services.
              </p>

              <h2>Conclusion</h2>

              <p>
                Regular maintenance and fast response to plumbing issues can
                prevent costly damage and keep your plumbing system operating
                efficiently.
              </p>

            </div>

          </div>

        </div>

      </section>

      <section className="pb-24">

        <div className="container-custom">

          <h2 className="text-4xl font-black">
            Related Articles
          </h2>

          <div className="mt-12 grid gap-8 md:grid-cols-3">

            {related.map((post) => (

              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-lg transition hover:-translate-y-2 hover:shadow-xl"
              >

                <div className="relative h-56">

                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover"
                  />

                </div>

                <div className="p-6">

                  <span className="text-sm font-bold text-blue-600">
                    {post.category}
                  </span>

                  <h3 className="mt-4 text-2xl font-black">
                    {post.title}
                  </h3>

                  <p className="mt-4 text-slate-600">
                    {post.description}
                  </p>

                </div>

              </Link>

            ))}

          </div>

        </div>

      </section>

      <CTA />

      <Footer />

    </main>
  );
}