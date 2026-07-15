type Props = {
  items: string[];
};

export default function TableOfContents({ items }: Props) {
  return (
    <aside className="rounded-3xl border border-slate-200 bg-slate-50 p-8">

      <h2 className="text-2xl font-black">
        Table of Contents
      </h2>

      <nav className="mt-6">

        <ul className="space-y-4">

          {items.map((item) => (

            <li key={item}>

              <a
                href={`#${item
                  .toLowerCase()
                  .replace(/[^a-z0-9 ]/g, "")
                  .replace(/\s+/g, "-")}`}
                className="text-slate-600 transition hover:text-blue-600"
              >
                {item}
              </a>

            </li>

          ))}

        </ul>

      </nav>

    </aside>
  );
}