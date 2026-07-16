interface FAQ {
  question: string;
  answer: string;
}

type Props = {
  faqs: FAQ[];
};

export default function BlogFAQ({ faqs }: Props) {
  if (faqs.length === 0) return null;

  return (
    <section className="mt-20">

      <h2 className="mb-10 text-4xl font-black">
        Frequently Asked Questions
      </h2>

      <div className="space-y-6">

        {faqs.map((faq) => (

          <div
            key={faq.question}
            className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm"
          >

            <h3 className="text-xl font-bold">
              {faq.question}
            </h3>

            <p className="mt-4 leading-8 text-slate-600">
              {faq.answer}
            </p>

          </div>

        ))}

      </div>

    </section>
  );
}