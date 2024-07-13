import {
  InboxIcon,
  UserGroupIcon,
  ClockIcon,
  BanknotesIcon,
} from "@heroicons/react/24/outline";

import { fetchCardData } from "@/app/lib/data";

const iconMap = {
  collected: BanknotesIcon,
  customers: UserGroupIcon,
  pending: ClockIcon,
  invoices: InboxIcon,
};

export default async function CardWrapper() {
  const {
    countOfCustomers,
    countOfInvoices,
    totalPaidInvoices,
    totalPendingInvoices,
  } = await fetchCardData(); 

  return (
    <>
      <Card title='Collected' value={totalPaidInvoices} type="collected" />
      <Card title='Pending' value={totalPendingInvoices} type="pending" />
      <Card title='Total Invoices' value={countOfInvoices} type="invoices" />
      <Card title='Total Customers' value={countOfCustomers} type="customers" />
    </>
  )
}

export function Card({
  title,
  value,
  type,
}: {
  title: string;
  value: number | string;
  type: "customers" | "invoices" | "pending" | "collected";
}) {
  const Icon = iconMap[type];

  return (
    <div className="p-2 bg-green-50 shadow-sm rounded-xl">
      <div className="p-4 flex justify-start">
        {Icon ? <Icon className="w-5 h-5 text-gray-500" /> : null}
        <h3 className="ml-2 text-sm font-medium truncate">{title}</h3>
      </div>
      <p className="px-4 py-8 text-center font-semibold rounded-xl bg-white">
        {value}
      </p>
    </div>
  );
}
