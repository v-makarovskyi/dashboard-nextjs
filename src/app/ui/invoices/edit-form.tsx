"use client";
import { useActionState } from "react";
import { CustomerField, InvoiceForm } from "@/app/lib/definitions";
import {
  CheckIcon,
  ClockIcon,
  CurrencyDollarIcon,
  UserCircleIcon,
} from "@heroicons/react/24/outline";
import Link from "next/link";
import { Button } from "../button";
import { updateInvoice, State } from "@/app/lib/actions";

export default function EditInvoiceForm({
  invoice,
  customers,
}: {
  invoice: InvoiceForm;
  customers: CustomerField[];
}) {
  const initialState: State = { message: null, errors: {} };
  const updateInvoiceWithId = updateInvoice.bind(null, invoice.id);
  const [state, formAction] = useActionState(updateInvoiceWithId, initialState);
  console.log(state);

  return (
    <form action={formAction}>
      <div className="p-4 md:p-6 rounded-lg bg-green-100">
        <div className="mb-4">
          <label htmlFor="customer" className="mb-2 block text-sm font-medium">
            Choose Customer
          </label>
          <div className="relative">
            <select
              name="customerId"
              id="customer"
              aria-describedby="customer-error"
              className="peer py-2 pl-10 block w-full cursor-pointer rounded-md border border-gray-200 text-sm placeholder:text-green-500"
              defaultValue={invoice.ownerId}
            >
              <option value="" disabled>
                Select a Customer
              </option>
              {customers.map((c) => (
                <option key={c.id} value={c.id}>
                  {c.name}
                </option>
              ))}
            </select>
            <UserCircleIcon className="w-[18px] h-[18px] pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-gray-500" />
          </div>
          <div id="customer-error" aria-atomic="true" aria-live="polite">
            {state.errors?.customerId &&
              state.errors.customerId.map((error) => (
                <p key={error} className="mt-2 text-sm text-red-500 italic">
                  * {error}
                </p>
              ))}
          </div>
        </div>
        <div className="mb-4">
          <label
            htmlFor="amount"
            className="mb-2 block w-full text-sm font-medium"
          >
            Choose Amount
          </label>
          <div className="relative mt-2 roinded-md">
            <input
              type="number"
              name="amount"
              id="amount"
              aria-describedby="amount-error"
              step="0.01"
              defaultValue={invoice.amount ? invoice.amount / 100 : 0}
              placeholder="Enter USD Amount"
              className="py-2 pl-10 peer block w-full rounded-md border border-gray-100 outline-none focus-visible:border-green-500 placeholder:text-gray-400 placeholder:text-sm placeholder:italic"
            />
            <CurrencyDollarIcon className="w-[18px] h-[18px] absolute top-1/2 left-3 -translate-y-1/2 text-gray-500  peer-focus-visible:text-green-500" />
          </div>
          <div id="amount-error" aria-atomic="true" aria-live="polite">
            {state.errors?.amount &&
              state.errors.amount.map((error) => (
                <p key={error} className="mt-2 italic text-red-500 text-sm">
                  * {error}
                </p>
              ))}
          </div>
        </div>
        <fieldset>
          <legend className="mb-2 block text-sm font-medium">
            Set the invoice status
          </legend>
          <div className="px-[14px] py-3 rounded-md bg-white border border-gray-200">
            <div className="flex flex-row gap-4">
              <div className="flex flex-row gap-2 items-center">
                <input
                  id="pending"
                  aria-describedby="status-error"
                  type="radio"
                  name="status"
                  value="pending"
                  defaultChecked={invoice.status === "pending"}
                />
                <label
                  htmlFor="pending"
                  className="px-3 py-1 flex flex-row items-center bg-gray-200 rounded-full text-xs font-medium text-gray-500 hover:bg-gray-300"
                >
                  Pending <ClockIcon className="h-[16px] w-[16px] ml-1.5" />
                </label>
              </div>
              <div className="flex flex-row gap-2 items-center">
                <input
                  id="paid"
                  aria-describedby="status-error"
                  name="status"
                  value="paid"
                  type="radio"
                  defaultChecked={invoice.status === "paid"}
                />
                <label
                  htmlFor="paid"
                  className="px-3 py-1 flex flex-row items-center bg-green-300 rounded-full text-xs font-medium text-gray-500 hover:bg-green-400 hover:text-white transition-colors"
                >
                  Paid <CheckIcon className="ml-1.5 w-[16px] h-[16px]" />
                </label>
              </div>
            </div>
          </div>
          <div id="status-error" aria-atomic="true" aria-live="polite">
            {state.errors?.status &&
              state.errors.status.map((error) => (
                <p key={error} className="mt-2 text-sm text-red-500 italic">
                  * {error}
                </p>
              ))}
          </div>
        </fieldset>
        <div>
          {state.message !== null && (
            <p className="pt-2 text-sm text-red-500 font-medium italic">
              * {state.message}
            </p>
          )}
        </div>
      </div>

      <div className="mt-6 flex flex-row justify-end items-center gap-4">
        <Link
          href="/dascboard/invoices"
          className="h-10 px-4 flex items-center bg-green-100 rounded-lg text-sm font-medium text-green-700 hover:bg-green-200 transition-colors"
        >
          Cancel
        </Link>
        <Button type="submit">Edit Invoice</Button>
      </div>
    </form>
  );
}
