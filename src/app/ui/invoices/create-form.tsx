"use client";
import { useActionState } from "react";
import { CustomerField } from "@/app/lib/definitions";
import Link from "next/link";
import {
  CheckIcon,
  ClockIcon,
  CurrencyDollarIcon,
  UserCircleIcon,
} from "@heroicons/react/24/outline";
import { Button } from "../button";
import { createInvoice, State } from "@/app/lib/actions";

export default function Form({ customers }: { customers: CustomerField[] }) {
  const initialState: State = { message: null, errors: {} };
  const [state, formAction] = useActionState(createInvoice, initialState);
  console.log(state);

  return (
    <form action={formAction}>
      <div className="rounded-lg bg-green-100 p-4 md:p-6">
        <div className="mb-4">
          <label htmlFor="customer" className="block mb-2 text-sm font-medium">
            Choose Customer
          </label>
          <div className="relative">
            <select
              id="customer"
              name="customer-error"
              defaultValue=""
              aria-describedby="customerId"
              className="py-2 pl-10 peer block w-full cursor-pointer rounded-md border border-gray-200 text-sm outline-2 placeholder:text-green-500"
            >
              <option value="" disabled>
                Select a customer
              </option>
              {customers.map((customer) => (
                <option key={customer.id} value={customer.id}>
                  {customer.name}
                </option>
              ))}
            </select>
            <UserCircleIcon className="h-[18px] w-[18px] pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-gray-500" />
          </div>
          <div id="customer-error" aria-live="polite" aria-atomic="true">
            {state.errors?.customerId &&
              state.errors.customerId.map((error: string) => (
                <p key={error} className="mt-2 italic text-red-500 text-sm">
                  * {error}
                </p>
              ))}
          </div>
        </div>

        <div className="mb-4">
          <label htmlFor="amount" className="block mb-2 text-sm font-medium">
            Choose Amount
          </label>
          <div className="relative mt-2 rounded-md">
            <div className="relative">
              <input
                id="amount"
                name="amount"
                type="number"
                step="0.01"
                aria-describedby="amount-error"
                placeholder="Enter USD amount"
                className="py-2 pl-10 peer block w-full rounded-md border border-gray-200 text-sm font-medium outline-2  placeholder:text-gray-400 placeholder:text-sm placeholder:italic"
              />
              <CurrencyDollarIcon className="w-[18px] h-[18px] absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none text-gray-500 peer-focus:text-gray-900" />
            </div>
          </div>
          <div id="amount-error" aria-atomic="true" aria-live="polite">
            {state.errors?.amount &&
              state.errors.amount.map((error) => (
                <p key={error} className="mt-2 text-sm italic text-red-500">
                  * {error}
                </p>
              ))}
          </div>
        </div>

        <fieldset>
          <legend className="mb-2 block text-sm font-medium">
            Set in Invoice status
          </legend>
          <div className="px-[14px] py-3 rounded-md bg-white border border-gray-200">
            <div className="flex gap-4">
              <div className="flex items-center">
                <input
                  id="pending"
                  type="radio"
                  value="pending"
                  name="status"
                  aria-describedby="status-error"
                />
                <label
                  htmlFor="pending"
                  className="py-1.5 px-3 ml-2 flex items-center bg-gray-100 rounded-full gap-1.5 text-xs font-medium cursor-pointer text-gray-600"
                >
                  Pending <ClockIcon className="w-4 h-4" />
                </label>
              </div>
              <div className="flex items-center">
                <input
                  id="paid"
                  type="radio"
                  name="status"
                  value="paid"
                  aria-describedby="status-error"
                />
                <label
                  htmlFor="paid"
                  className="py-1.5 px-3 flex items-center ml-2 gap-1.5 cursor-pointer bg-green-400 text-xs font-medium text-white rounded-full"
                >
                  Paid <CheckIcon className="w-4 h-4" />
                </label>
              </div>
            </div>
          </div>
          <div id="status-error" aria-live="polite" aria-atomic="true">
            {state.errors?.status &&
              state.errors.status.map((error) => (
                <p key={error} className="mt-2 text-sm italic text-red-500">
                  * {error}
                </p>
              ))}
          </div>
        </fieldset>
        <div>
          {state.message !== null && (
            <p className="mt-2 text-sm text-red-500 italic font-medium">
              * {state.message}
            </p>
          )}
        </div>
      </div>
      <div className="mt-6 flex justify-end gap-4">
        <Link
          href="/dashboard/invoices"
          className="h-10 px-4 flex items-center bg-green-100 rounded-lg text-sm font-medium text-green-700 transition-colors hover:bg-green-200"
        >
          Cancel
        </Link>
        <Button type="submit">Create Invoice</Button>
      </div>
    </form>
  );
}
