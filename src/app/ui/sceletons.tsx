const shimmer = "before:absolute before:inset-0 before:translate-x-full before:animate-[shimmer_2s_infinite] before:bg-gradient-to-r before:from-transparent before:via-white/60 before:to-transparent";

export function CardSkeleton() {
  return (
    <div
      className={`${shimmer} relative bg-green-100 p-2 rounded-xl overflow-hidden shadow-sm`}
    >
      <div className="p-4 flex">
        <div className="w-5 h-5 bg-green-200 rounded-lg" />
        <div className="ml-2 h-6 w-16 rounded-md bg-green-200 text-sm font-medium" />
      </div>
      <div className="flex items-center justify-center px-4 py-8 bg-white truncate rounded-xl">
        <div className="h-6 w-20 bg-green-200 rounded-md" />
      </div>
    </div>
  );
}

export function CardsSkeleton() {
    return (
        <>
            <CardSkeleton />
            <CardSkeleton />
            <CardSkeleton />
            <CardSkeleton />
        </>
    )
}

export function InvoiceSkeleton() {
  return (
    <div className="py-3 flex flex-row items-center justify-between border-b border-green-100">
      <div className="flex flex-row items-center">
        <div className="mr-2 h-8 w-8 bg-green-200 rounded-full" />
        <div className="min-w-0">
          <div className="h-5 w-40 bg-green-200 rounded-md" />
          <div className="mt-2 h-4 w-12 bg-green-200 rounded-md" />
        </div>
      </div>
      <div className="h-5 w-10 bg-green-200 rounded-md" />
    </div>
  );
}

export function RevenueChartsSkeleton() {
  return (
    <div className={`${shimmer} relative w-full overflow-hidden  md:col-span-4`}>
      <div className="mb-2 w-36 h-8 bg-green-200 rounded-md" />
      <div className="p-6 bg-green-100 rounded-lg">
        <div className="mt-0 h-[400px] grid p-2 bg-white rounded-xl" />
        <div className="pt-6 pb-2 flex flex-row">
          <div className="h-5 w-5 bg-green-200 rounded-full" />
          <div className="ml-2 h-6 w-20 bg-green-200 rounded-md" />
        </div>
      </div>
    </div>
  );
}

export function LatestInvoicesSkeleton() {
  return (
    <div className="relative w-full md:col-span-4 flex flex-col overflow-hidden">
      <div className="mb-2 w-36 h-8 bg-green-200 rounded-md" />
      <div className="p-6 grow flex flex-col bg-green-100 rounded-lg">
        <div className="p-2 bg-white rounded-xl">
          <InvoiceSkeleton />
          <InvoiceSkeleton />
          <InvoiceSkeleton />
          <InvoiceSkeleton />
          <InvoiceSkeleton />
        </div>
        <div className="pt-6 pb-2 flex flex-row">
          <div className="h-5 w-5 bg-green-200 rounded-full" />
          <div className="ml-2 h-6 w-20 bg-green-200 rounded-md" />
        </div>
      </div>
    </div>
  );
}

export default function DashboardSceleton() {
  return (
    <>
      {/*  <div className={`${shimmer} relative mb-4 h-8 w-36 overflow-hidden rounded-md bg-gray-100`}/> */}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        <CardSkeleton />
        <CardSkeleton />
        <CardSkeleton />
        <CardSkeleton />
      </div>
      <div className="mt-6 grid gap-6 grid-cols-1 md:grid-cols-4 lg:grid-cols-8">
        <RevenueChartsSkeleton />
        <LatestInvoicesSkeleton />
      </div>
    </>
  );
}
