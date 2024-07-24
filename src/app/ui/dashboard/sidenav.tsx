import AcmeLogo from "../acme-logo";
import Link from "next/link";
import NavLinks from "./nav-links";
import { PowerIcon } from "@heroicons/react/24/outline";
import { signOut } from "../../../../auth";

export default function SideNav() {
  return (
    <div className="px-3 md:px-2 py-4 h-full flex flex-col">
      <Link
        href="/login"
        className="mb-2 p-4 h-20 md:h-40 flex flex-row items-end bg-green-500 rounded-md"
      >
        <div className="w-32 md:w-40">
          <AcmeLogo />
        </div>
      </Link>
      <div className="flex grow flex-row md:flex-col justify-between space-x-2 md:space-x-0 md:space-y-2">
        <NavLinks />
        <div className="hidden md:block h-auto grow bg-gray-50 rounded-md"></div>
        <form action={async () => {
          'use server'
          await signOut({redirectTo:'/'})
        }}>
          <button className="w-full p-3 md:px-3 md:p-2 h-[48px] flex flex-row items-center justify-center md:justify-start gap-3 font-medium text-sm md:bg-gray-50 md:hover:bg-blue-100 transition-colors rounded-md ">
            <PowerIcon className="w-6" />
            <div className="hidden md:block">Sign Out</div>
          </button>
        </form>
      </div>
    </div>
  );
}
