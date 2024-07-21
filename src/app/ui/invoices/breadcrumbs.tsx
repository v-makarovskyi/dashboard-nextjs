import Link from "next/link";
import clsx from "clsx";

interface Breadcrumb {
  label: string;
  href: string;
  isActive?: boolean;
}

export default function Breadcrumbs({
  breadcrumbs,
}: {
  breadcrumbs: Breadcrumb[];
}) {
  return (
    <nav className="mb-6 block" aria-label="Beadcrumbs">
      <ol className="flex text-xl md:text-2xl">
        {breadcrumbs.map((b, idx) => (
          <li
            key={b.href}
            aria-current={b.isActive}
            className={clsx(b.isActive ? "text-green-900" : "text-green-500")}
          >
            <Link href={b.href}>{b.label}</Link>
            {idx < breadcrumbs.length - 1 && (
              <span className="text-green-300 mx-3 inline-block">/</span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
