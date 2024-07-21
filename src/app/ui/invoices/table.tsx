import { fetchFilteredInvoices } from "@/app/lib/data";
import { formatCurrency, formatDate } from "@/app/lib/utils";
import { UpdateInvoice, DeleteInvoice } from "./buttons";
import clsx from "clsx";
import Image from "next/image";
import InvoiceSatus from "./status";

export default async function InvoicesTable({
  query,
  currentPage,
}: {
  query: string;
  currentPage: number;
}) {
  const invoices = await fetchFilteredInvoices(query, currentPage);

  return (
    <div className="mt-6 flow-root">
      <div className="inline-block min-w-full align-middle">
        <div className="rounded-lg bg-green-100 p-2 lg:pt-0">
          <div className="lg:hidden">
            {invoices.map((invoice) => (
              <div
                key={invoice.id}
                className="mb-2 p-4 w-full rounded-lg bg-white"
              >
                <div className="flex items-center justify-between border-b p-2">
                  <div>
                    <div className="flex flex-row items-center">
                      <Image
                        src={invoice.owner.image_url}
                        width={28}
                        height={28}
                        className="mr-2 rounded-full object-cover"
                        alt={`profile-imafe-${invoice.owner.name}`}
                      />
                      <p className="italic">{invoice.owner.name}</p>
                    </div>
                    <p className="text-sm text-gray-500">{invoice.owner.email}</p>
                  </div>
                  <InvoiceSatus status={invoice.status ?? ''} />
                </div>
                <div className="pt-2 flex flex-row items-center justify-between">
                  <div>
                    <p className="font-medium text-sm">{formatCurrency(invoice.amount ?? 0)}</p>
                    <p className="font-medium text-sm">{formatDate(invoice.date)}</p>
                  </div>
                  <div className="flex gap-3">
                    <UpdateInvoice id={invoice.id} />
                    <DeleteInvoice id={invoice.id} />
                  </div>
                </div>
              </div>
            ))}
          </div>
          <table className="hidden lg:table min-w-full text-gray-900">
            <thead className="text-left rounded-lg text-sm font-normal">
              <tr>
                <th scope="col" className="px-3 py-5 font-medium sm:pl-6">
                  Customer
                </th>
                <th scope="col" className="px-3 py-5 font-medium">
                  Email
                </th>
                <th scope="col" className="px-3 py-5 font-medium">
                  Amount
                </th>
                <th scope="col" className="px-3 py-5 font-medium">
                  Date
                </th>
                <th scope="col" className="px-3 py-5 font-medium">
                  Status
                </th>
                <th scope="col" className="relative py-3 pl-6 pr-3 font-medium">
                  <span className="sr-only">Edit</span>
                </th>
              </tr>
            </thead>
            <tbody className="bg-white">
              {invoices.map((invoice) => (
                <tr
                  key={invoice.id}
                  className="text-sm divide-y [&:first-child]:divide-y-0"
                >
                  <td className="py-3 pl-6 pr-3 whitespace-nowrap">
                    <div className="flex flex-row items-center gap-3">
                      <Image
                        src={invoice.owner.image_url}
                        alt={`profile-image-${invoice.owner.name}`}
                        width={32}
                        height={32}
                        className="rounded-full object-cover"
                      />
                      <p className="italic">{invoice.owner.name}</p>
                    </div>
                  </td>
                  <td className="px-3 py-3 whitespace-nowrap">
                    {invoice.owner.email}
                  </td>
                  <td className="px-3 py-3 whitespace-nowrap">
                    {formatCurrency(invoice.amount ?? 0)}
                  </td>
                  <td className="px-3 py-3 whitespace-nowrap">
                    {formatDate(invoice.date)}
                  </td>
                  <td
                    className={clsx("px-3 py-3 whitespace-nowrap", {
                      "text-red-500 font-semibold": invoice.status === "paid",
                    })}
                  >
                    {invoice.status}
                  </td>
                  <td className="py-3 pl-6 pr-3 whitespace-nowrap">
                    <div className="flex flex-row gap-3 justify-end">
                      <UpdateInvoice id={invoice.id} />
                      <DeleteInvoice id={invoice.id} />
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
