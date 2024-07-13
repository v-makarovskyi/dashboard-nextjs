"use client";
import { useSearchParams, useRouter, usePathname } from "next/navigation";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";

export default function Search({ placeholder }: { placeholder: string }) {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const router = useRouter();
  console.log('search', searchParams)

  function handleSearch(term: string) {
    const params = new URLSearchParams(searchParams);
    params.set('page', '1')

    if (term) {
      params.set("query", term);
    } else {
      params.delete("query");
    }

    router.replace(`${pathname}?${params.toString()}`);
  }

  return (
    <div className="relative flex flex-1">
      <label htmlFor="search" className="sr-only">
        Search
      </label>
      <input
        placeholder={placeholder}
        defaultValue={searchParams.get("query")?.toString()}
        onChange={(e) => handleSearch(e.target.value)}
        className="p-[9px] peer block w-full rounded-md border border-green-200 text-sm outline-2 placeholder:text-green-500"
      />
      <MagnifyingGlassIcon className="absolute right-3 top-1/2 -translate-y-1/2 h-[18px] w-[18px] text-gray-500 peer-focus:text-green-900" />
    </div>
  );
}
