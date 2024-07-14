import { Suspense } from "react";
import {
  CardsSkeleton,
  LatestInvoicesSkeleton,
  RevenueChartsSkeleton,
} from "@/app/ui/sceletons";
import LatestInvoices from "../../ui/dashboard/latest-invoices";
import RevenueCharts from "../../ui/dashboard/revenue-chart";
import { jost } from "../../ui/fonts";
import CardWrapper from "../../ui/dashboard/cards";

export default async function Page() {

  return (
    <main>
      <h1 className={`${jost.className} mb-4 text-xl md:text-2xl`}>
        Dashboard
      </h1>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        <Suspense fallback={<CardsSkeleton />}>
          <CardWrapper />
        </Suspense>
      </div>
      <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-4 lg:grid-cols-8">
        <Suspense fallback={<RevenueChartsSkeleton />}>
          <RevenueCharts />
        </Suspense>
        <Suspense fallback={<LatestInvoicesSkeleton />}>
          <LatestInvoices />
        </Suspense>
      </div>
    </main>
  );
}
