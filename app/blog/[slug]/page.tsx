import { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";

import Navbar from "@/components/layout/navbar";
import Footer from "@/components/layout/footer";
import CTA from "@/components/sections/cta";

import { blogs } from "@/lib/data/blogs";
import { blogContent } from "@/lib/data/blog-content";
import type { BlogContent } from "@/lib/data/blog-content/types";

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

  const article: BlogContent | undefined =
    blogContent[slug as keyof typeof blogContent];

  const related = blogs
    .filter((item) => item.slug !== blog.slug)
    .slice(0, 3);

  return (
    <main className="overflow-x-hidden bg-white">
      <Navbar />

      {/* Hero */}

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

      {/* Article */}

      <section className="py-20">
        <div className="container-custom">
          <div className="mx-auto max-w-4xl">
            <p className="text-xl leading-9 text-slate-700">
              {blog.description}
            </p>
            
<div className="mt-12">
  {article ? (
    <>
      {article.introduction.map(
        (paragraph: string, index: number) => (
          <p
            key={index}
            className="mb-6 text-lg leading-8 text-slate-700"
          >
            {paragraph}
          </p>
        )
      )}

      {article.sections.map((section) => (
        <section
          key={section.id}
          className="mt-14"
        >
          <h2 className="mb-6 text-3xl font-black text-slate-900">
            {section.title}
          </h2>

          {section.content.map(
            (paragraph: string, index: number) => (
              <p
                key={index}
                className="mb-6 leading-8 text-slate-700"
              >
                {paragraph}
              </p>
            )
          )}
        </section>
      ))}

      <section className="mt-16 rounded-3xl bg-blue-600 p-10 text-white">
        <h2 className="text-3xl font-black">
          {article.callToAction.title}
        </h2>

        <p className="mt-4 text-lg leading-8">
          {article.callToAction.description}
        </p>

        <a
          href="tel:+18773640861"
          className="mt-8 inline-block rounded-full bg-white px-8 py-4 font-bold text-blue-700 transition hover:bg-slate-100"
        >
          📞 {article.callToAction.phone}
        </a>
      </section>

      <section className="mt-16">
        <h2 className="mb-8 text-3xl font-black">
          Frequently Asked Questions
        </h2>

        <div className="space-y-6">
          {article.faqs.map((faq, index: number) => (
            <div
              key={index}
              className="rounded-2xl border border-slate-200 p-6"
            >
              <h3 className="text-xl font-bold text-slate-900">
                {faq.question}
              </h3>

              <p className="mt-3 leading-8 text-slate-600">
                {faq.answer}
              </p>
            </div>
          ))}
        </div>
      </section>
    </>
  ) : (
    <p className="mt-8 text-lg text-slate-700">
      Full article coming soon.
    </p>
  )}
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