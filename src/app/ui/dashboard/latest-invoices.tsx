import { ArrowPathIcon } from "@heroicons/react/24/outline";
import clsx from "clsx";
import Image from "next/image";
import { LatestInvoice } from "@/app/lib/definitions";
import { fetchLatestInvoices } from "@/app/lib/data";

export default async function LatestInvoices() {

  const latestInvoices = await fetchLatestInvoices()

  return (
    <div className="w-full md:col-span-4 flex flex-col">
      <h2 className="mb-2 text-xl md:text-2xl">Latest Invoices</h2>
      <div className="p-6 pb-3 flex flex-col grow bg-gray-100 rounded-lg">
        <div className="p-2 bg-white">
          {latestInvoices.map((invc, idx) => {
            return (
              <div
                key={invc.id}
                className={clsx(
                  "py-3 flex flex-row items-center justify-between",
                  {
                    "border-t": idx !== 0,
                  }
                )}
              >
                <div className="flex flex-row items-center">
                  <Image
                    src={invc.owner.image_url}
                    alt={`${invc.owner.name}-profile-picture`}
                    height={32}
                    width={32}
                    priority
                    className="mr-3 rounded-full object-cover"
                  />
                  <div className="min-w-0 break-all">
                    <p  className="text-ellipsis overflow-hidden text-sm font-medium md:text-base">{invc.owner.name}</p>
                    <p>{invc.owner.email}</p>
                  </div>
                </div>
                <p className="truncate text-sm text-red-600 font-semibold md:text-base">{invc.amount}</p>
              </div>
            );
          })}
        </div>
        <div className="pt-4 pb-2 flex flex-row">
          <ArrowPathIcon className="h-5 w-5 text-gray-400" />
          <h3 className="text-sm text-gray-400">12th last month</h3>
        </div>
      </div>
    </div>
  );
}
