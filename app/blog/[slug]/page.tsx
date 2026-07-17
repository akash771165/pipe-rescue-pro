import { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import Script from "next/script";

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
    const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: blog.title,
  description: blog.description,
  image: [`https://www.piperesque.com${blog.image}`],
  datePublished: blog.publishedAt,
  dateModified: blog.updatedAt,
  author: {
    "@type": "Person",
    name: blog.author,
  },
  publisher: {
    "@type": "Organization",
    name: "Pipe Rescue",
    logo: {
      "@type": "ImageObject",
      url: "https://www.piperesque.com/images/logo.png",
    },
  },
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": `https://www.piperesque.com/blog/${blog.slug}`,
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Home",
      item: "https://www.piperesque.com",
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "Blog",
      item: "https://www.piperesque.com/blog",
    },
    {
      "@type": "ListItem",
      position: 3,
      name: blog.title,
      item: `https://www.piperesque.com/blog/${blog.slug}`,
    },
  ],
};

const faqSchema = article
  ? {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: article.faqs.map((faq) => ({
        "@type": "Question",
        name: faq.question,
        acceptedAnswer: {
          "@type": "Answer",
          text: faq.answer,
        },
      })),
    }
  : null;

  return (
    <main className="overflow-x-hidden bg-white">
      <Script
  id="article-schema"
  type="application/ld+json"
  dangerouslySetInnerHTML={{
    __html: JSON.stringify(articleSchema),
  }}
/>

<Script
  id="breadcrumb-schema"
  type="application/ld+json"
  dangerouslySetInnerHTML={{
    __html: JSON.stringify(breadcrumbSchema),
  }}
/>

{faqSchema && (
  <Script
    id="faq-schema"
    type="application/ld+json"
    dangerouslySetInnerHTML={{
      __html: JSON.stringify(faqSchema),
    }}
  />
)}

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

      {article ? (
        <>

          {/* Table of Contents */}

          <nav className="mt-12 rounded-3xl border border-slate-200 bg-slate-50 p-8">
            <h2 className="text-2xl font-black text-slate-900">
              Table of Contents
            </h2>

            <ul className="mt-6 space-y-3">
              {article.sections.map((section) => (
                <li key={section.id}>
                  <a
                    href={`#${section.id}`}
                    className="font-medium text-blue-700 transition hover:text-blue-900 hover:underline"
                  >
                    {section.title}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Introduction */}

          <div className="mt-12">
            {article.introduction.map((paragraph, index) => (
              <p
                key={index}
                className="mb-6 text-lg leading-8 text-slate-700"
              >
                {paragraph}
              </p>
            ))}
          </div>

          {/* Article Sections */}

          {article.sections.map((section) => (
            <section
              id={section.id}
              key={section.id}
              className="mt-16 scroll-mt-32"
            >
              <h2 className="mb-6 text-3xl font-black text-slate-900">
                {section.title}
              </h2>

              {section.content.map((paragraph, index) => (
                <p
                  key={index}
                  className="mb-6 text-lg leading-8 text-slate-700"
                >
                  {paragraph}
                </p>
              ))}
            </section>
          ))}

          {/* CTA */}

          <section className="mt-20 rounded-3xl bg-blue-600 p-10 text-white">
            <h2 className="text-3xl font-black">
              {article.callToAction.title}
            </h2>

            <p className="mt-4 text-lg leading-8">
              {article.callToAction.description}
            </p>

            <a
              href={`tel:${article.callToAction.phone}`}
              className="mt-8 inline-block rounded-full bg-white px-8 py-4 font-bold text-blue-700 transition hover:bg-slate-100"
            >
              📞 {article.callToAction.phone}
            </a>
          </section>

          {/* FAQ */}

          <section className="mt-20">
            <h2 className="mb-8 text-3xl font-black text-slate-900">
              Frequently Asked Questions
            </h2>

            <div className="space-y-6">
              {article.faqs.map((faq, index) => (
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
</section>
            <section className="pb-24">
  <div className="container-custom">

    <div className="flex items-center justify-between gap-4">
      <div>
        <p className="font-semibold uppercase tracking-wider text-blue-600">
          Continue Reading
        </p>

        <h2 className="mt-2 text-4xl font-black text-slate-900">
          Related Articles
        </h2>

        <p className="mt-3 max-w-2xl text-lg text-slate-600">
          Explore more plumbing guides, maintenance tips, and emergency
          plumbing resources for Houston homeowners and businesses.
        </p>
      </div>
    </div>

    <div className="mt-12 grid gap-8 md:grid-cols-3">
      {related.map((post) => (
        <Link
          key={post.slug}
          href={`/blog/${post.slug}`}
          className="group overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-lg transition-all duration-300 hover:-translate-y-2 hover:border-blue-200 hover:shadow-2xl"
        >
          <div className="relative h-56 overflow-hidden">
            <Image
              src={post.image}
              alt={post.title}
              fill
              className="object-cover transition duration-500 group-hover:scale-105"
            />
          </div>

          <div className="p-6">

            <span className="inline-flex rounded-full bg-blue-50 px-3 py-1 text-xs font-bold uppercase tracking-wide text-blue-700">
              {post.category}
            </span>

            <h3 className="mt-4 text-2xl font-black leading-tight text-slate-900 transition group-hover:text-blue-700">
              {post.title}
            </h3>

            <div className="mt-4 flex flex-wrap gap-4 text-sm text-slate-500">
              <span>{post.publishedAt}</span>
              <span>•</span>
              <span>{post.readingTime}</span>
            </div>

            <p className="mt-5 leading-7 text-slate-600">
              {post.description}
            </p>

            <div className="mt-6 inline-flex items-center font-bold text-blue-700 transition group-hover:translate-x-1">
              Read Article →
            </div>

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