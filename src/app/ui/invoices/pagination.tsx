"use client";
import { useSearchParams, usePathname } from "next/navigation";
import { generatePagination } from "@/app/lib/utils";
import Link from "next/link";
import clsx from "clsx";
import { ArrowLeftIcon, ArrowRightIcon } from "@heroicons/react/24/outline";

export default function Pagination({ totalPages }: { totalPages: number }) {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const currentPage = Number(searchParams.get("page")) || 1;
  const allPages = generatePagination(currentPage, totalPages);

  const createPageUrl = (pageNumber: number | string) => {
    const params = new URLSearchParams(searchParams);
    params.set("page", pageNumber.toString());
    return `${pathname}?${params.toString()}`;
  };

  return (
    <div className="inline-flex">
      <PaginationArrow
        href={createPageUrl(currentPage - 1)}
        direction="left"
        isDisabled={currentPage <= 1}
      />

      <div className="flex -space-x-px">
        {allPages.map((page, idx) => {
          let position: "first" | "last" | "single" | "middle" | undefined;
          if (idx === 0) position = "first";

          if (idx === allPages.length - 1) position = "last";

          if (allPages.length === 1) position = "single";
          if (page === "...") position = "middle";

          return (
            <PaginationNumber
              key={idx}
              href={createPageUrl(page)}
              page={page}
              position={position}
              isActive={currentPage === page}
            />
          );
        })}
      </div>

      <PaginationArrow
        href={createPageUrl(currentPage + 1)}
        direction="right"
        isDisabled={currentPage >= totalPages}
      />
    </div>
  );
}

function PaginationNumber({
  href,
  page,
  position,
  isActive,
}: {
  href: string;
  page: number | string;
  position?: string;
  isActive: boolean;
}) {
  let className = clsx(
    "h-10 w-10 flex items-center justify-center text-sm border border-green-500",
    {
      "rounded-l-md": position === "first" || position === "single",
      "rounded-r-md": position === "last" || position === "single",
      "z-10 bg-green-500 border-green-500 text-white": isActive,
      "hover:bg-green-100": !isActive && position !== "middle",
      "text-blue-200 font-bold": position === "middle",
    }
  );

  return isActive || position === "middle" ? (
    <div className={className}>{page}</div>
  ) : (
    <Link href={href} className={className}>
      {page}
    </Link>
  );
}

function PaginationArrow({
  href,
  isDisabled,
  direction,
}: {
  href: string;
  isDisabled: boolean;
  direction: "left" | "right";
}) {
  const icon =
    direction === "left" ? (
      <ArrowLeftIcon className="w-4" />
    ) : (
      <ArrowRightIcon className="w-4" />
    );

  const className = clsx(
    "h-10 w-10 flex items-center justify-center border border-green-500 rounded-md",
    {
      "cursor-not-allowed text-green-300": isDisabled,
      "hover:bg-green-100 transition-colors": !isDisabled,
      "mr-2 md:mr-4": direction === "left",
      "ml-2 md:ml-4": direction === "right",
    }
  );

  return isDisabled ? (
    <div className={className}>{icon}</div>
  ) : (
    <Link href={href} className={className}>
      {icon}
    </Link>
  );
}
