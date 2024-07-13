import { Revenue } from "@/app/lib/definitions";
import { CalendarIcon } from "@heroicons/react/24/outline";
import { generateYAxis } from "@/app/lib/utils";
import { fetchRevenue } from "@/app/lib/data";

export default async function RevenueCharts({
}: {
}) {
  const revenue = await fetchRevenue()
  const chartHeight = 350;
  const { yLabelsAxis, topLabel } = generateYAxis(revenue);

  if (!revenue || revenue.length === 0) {
    return <p className="pt-4 text-red-600">No data for available</p>;
  }

  return (
    <div className="w-full md:col-span-4">
      <h2 className="text-xl md:text-2xl mb-2">Recent Revenue</h2>
      <div className="p-6 bg-gray-100 rounded-lg">
        <div className="p-2 flex flex-row bg-white gap-4">
          <div
            className="hidden sm:flex flex-col justify-between text-sm"
            style={{ height: `${chartHeight}px` }}
          >
            {yLabelsAxis.map((label) => (
              <p key={label} className="text-sm text-gray-400">
                {label}
              </p>
            ))}
          </div>
          <div className="w-full grid grid-cols-12 items-end gap-2 md:gap-4">
            {revenue.map((rev) => (
              <div key={rev.month} className="flex flex-col items-center gap-3">
                <div
                  className="bg-green-400 rounded-lg w-full"
                  style={{
                    height: `${(chartHeight / topLabel) * rev.revenue}px`,
                  }}
                />
                <p className="-rotate-90 sm:rotate-0 text-sm text-gray-600">
                  {rev.month}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-row pt-6 pb-2">
          <CalendarIcon className="h-5 w-5 text-gray-400" />
          <h3 className="ml-2 text-gray-400 text-sm">Last 12th month*</h3>
        </div>
      </div>
    </div>
  );
}
