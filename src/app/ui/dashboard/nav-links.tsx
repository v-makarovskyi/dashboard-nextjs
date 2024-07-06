import {
  HomeIcon,
  UserGroupIcon,
  DocumentDuplicateIcon,
} from "@heroicons/react/24/outline";
import Link from "next/link";

const links = [
  { name: "Home", href: "/dashboard", icon: HomeIcon },
  {
    name: "Invoices",
    href: "/dashboard/invoices",
    icon: DocumentDuplicateIcon,
  },
  { name: "Customers", href: "/dashboard/customers", icon: UserGroupIcon },
];

export default function NavLinks() {
  return (
    <>
      {links.map((el) => {
        const LinkEl = el.icon;
        return (
          <Link
            key={el.name}
            href={el.href}
            className="p-3 md:px-3 md:p-2 flex flex-row items-center gap-3 font-medium text-sm rounded-md md:bg-gray-50 md:hover:bg-blue-100 transition-colors"
          >
            <LinkEl className="w-6" />
            <p className="hidden md:block">{el.name}</p>
          </Link>
        );
      })}
    </>
  );
}
