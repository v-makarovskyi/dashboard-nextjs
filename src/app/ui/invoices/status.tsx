import { CheckIcon, ClockIcon } from "@heroicons/react/24/outline";
import clsx from "clsx";

export default function InvoiceSatus({ status }: { status: string }) {
  return (
    <span className={clsx(
        'inline-flex items-center px-2 py-1 text-xs rounded-full',
        {
          'bg-gray-100 text-gray-500':status === 'pending',
          'bg-green-500 text-white':status === 'paid'   
        }
        
    )}>
      {status === "pending" ? (
        <>
          pending
          <ClockIcon className="ml-2 w-4 text-gray-500" />
        </>
      ) : null}
      {status === "paid" ? (
        <>
          paid
          <CheckIcon className="ml-2 w-4 text-white" />
        </>
      ) : null}
    </span>
  );
}
