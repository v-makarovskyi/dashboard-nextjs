import Link from "next/link";
import { PlusIcon, PencilIcon, TrashIcon } from "@heroicons/react/24/outline";
import { deleteInvoice } from "@/app/lib/actions";

export function CreateInvoice() {
  return (
    <Link
      href="/dashboard/invoices/create"
      className="h-10 px-4 flex flex-row items-center bg-green-600 rounded-lg text-sm font-medium text-white transition-colors hover:bg-green-500 focus-visible:outline-double focus-visible:outline-offset-4 focus-visible:outline-green-600"
    >
      <span className="hidden md:block">Create Invoice</span>{" "}
      <PlusIcon className="h-5 md:ml-4" />
    </Link>
  );
}

export function UpdateInvoice({ id }: { id: string }) {
  return (
    <Link
      href={`/dashboard/invoices/${id}/edit`}
      className="p-2 rounded-md border hover:bg-green-100"
    >
      <PencilIcon className="w-5" />
    </Link>
  );
}

export function DeleteInvoice({ id }: { id: string }) {
  const deleteInvoiceWithId = deleteInvoice.bind(null, id)
  return (
    <form action={deleteInvoiceWithId}>
      <button className=" p-2 rounded-md border hover:bg-green-100">
        <span className="sr-only">Delete</span>
        <TrashIcon className="w-5" />
      </button>
    </form>
  );
}
