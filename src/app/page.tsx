import Image from "next/image";
import Link from "next/link";
import AcmeLogo from "./ui/acme-logo";
import { ArrowRightIcon } from "@heroicons/react/24/outline";

export default function Home() {
  return (
    <main className="min-h-screen p-6 flex flex-col">
      <div className="h-20 md:h-40 flex flex-row items-end shrink-0 bg-blue-600 p-4 rounded-lg">
        <AcmeLogo />
      </div>
      <div className="flex flex-col md:flex-row grow gap-4">
        <div className="px-6 py-10 md:px-20 flex flex-col justify-center md:w-2/5 bg-gray-50 rounded-lg gap-6">
          <p className="text-xl md:text-3xl md:leading-normal text-gray-800">
            <strong>Рады приветствовать Вас</strong> на курсе по изучению
            фреймворка{" "}
            <a href="#" className="text-blue-600">
              {" "}
              <strong>NextJS</strong>{" "}
            </a>
          </p>
          <Link href='/login' className="flex flex-row items-center self-start gap-6 rounded-lg bg-blue-600 hover:bg-blue-800 hover:text-blue-100 transition-colors text-sm md:text-base text-white font-medium py-3 px-6">
            <span>Log In</span> <ArrowRightIcon className="w-6" />
          </Link>
        </div>
        <div className="md:w-3/5 flex flex-row items-center justify-center p-6 md:py-10 md:px-24">
          <Image 
            src='/hero-desktop.png'
            width={1000}
            height={760}
            alt="img"
          />
        </div>
      </div>
    </main>
  );
}
