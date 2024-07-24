"use client";

import { authenticate } from "../lib/actions";
import { useActionState } from "react";

import {
  AtSymbolIcon,
  KeyIcon,
  ExclamationCircleIcon,
} from "@heroicons/react/24/outline";
import { ArrowRightIcon } from "@heroicons/react/20/solid";
import { Button } from "../ui/button";

export default function LoginForm() {
  const [errorMessage, formAction, isPending] = useActionState(
    authenticate,
    undefined
  );

  return (
    <form className="" action={formAction}>
      <div className="px-6 pt-8 pb-4 bg-gray-100 rounded-lg">
        <h1 className="mb-3 text-2xl">Please log in to continue</h1>
        <div className="w-full mb-8">
          <div className="mb-3">
            <label htmlFor="email" className="mb-2 inline-block">
              Enter your email
            </label>
            <div className="relative">
              <input
                id="email"
                type="email"
                name="email"
                required
                placeholder="your email, please"
                className="block w-full rounded-md py-[9px] pl-10 focus-visible:outline-none focus-visible:outline-1 focus-visible:outline-green-500 placeholder:text-gray-400 placeholder:italic"
              />
              <AtSymbolIcon className="h-[18px] w-[18px] absolute left-3 top-1/2 -translate-y-1/2 text-green-300 peer-focus-visible:text-green-500" />
            </div>
          </div>
          <div>
            <label htmlFor="password" className="mb-2 inline-block">
              Enter your password
            </label>
            <div className="relative">
              <input
                type="password"
                id="password"
                name="password"
                required
                minLength={6}
                placeholder="your password, please"
                className="relative peer mb-3 pl-10 w-full block py-[9px] rounded-md focus-visible:outline-none focus-visible:outline-1 focus-visible:outline-green-500 placeholder:text-gray-400 placeholder:italic"
              />
              <KeyIcon className="absolute top-1/2 left-3 -translate-y-1/2 h-[18px] w-[18px] text-green-300 peer-focus-visible:text-green-500" />
            </div>
          </div>
        </div>
        <Button className="mt-4 w-full" aria-disabled={isPending}>
          Log in <ArrowRightIcon className="w-5 h-5 ml-auto text-gray-50" />
        </Button>
        <div
          className="h-8 flex items-end space-x-1"
          aria-live="polite"
          aria-atomic="true"
        >
          {errorMessage && (
            <>
              <ExclamationCircleIcon className="w-5 h-5 text-red-500" />
              <p className="text-sm text-red-500">{errorMessage}</p>
            </>
          )}
        </div>
      </div>
    </form>
  );
}
