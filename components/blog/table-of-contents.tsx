type Props = {
  items: string[];
};

export default function TableOfContents({ items }: Props) {
  if (items.length === 0) return null;

  return (
    <aside className="sticky top-28 rounded-3xl border border-slate-200 bg-slate-50 p-8">

      <h2 className="text-2xl font-black">
        Table of Contents
      </h2>

      <nav className="mt-6">

        <ul className="space-y-4">

          {items.map((item) => {

            const id = item
              .toLowerCase()
              .replace(/[^a-z0-9 ]/g, "")
              .replace(/\s+/g, "-");

            return (

              <li key={id}>

                <a
                  href={`#${id}`}
                  className="transition hover:text-blue-600 text-slate-600"
                >
                  {item}
                </a>

              </li>

            );

          })}

        </ul>

      </nav>

    </aside>
  );
}