import { Revenue, LatestInvoice } from "./definitions";
import { formatCurrency } from "./utils";
import prisma from "../db";
import { resolve } from "path";
import { number } from "zod";

export async function fetchRevenue() {
  try {
    console.log("Fetching revenue data...");
    await new Promise((resolve) => setTimeout(resolve, 1000));
    const data: Revenue[] = await prisma.revenue.findMany();
    console.log("Данные получены через 4 секунды");
    return data;
  } catch (error) {
    console.error("DataBase error:", error);
    throw new Error("Failed to fetch revenue data!");
  }
}

export async function fetchLatestInvoices() {
  try {
    console.log("Fething latest invoices data...");
    await new Promise((resolve) => setTimeout(resolve, 6000));
    const data: LatestInvoice[] = await prisma.invoice.findMany({
      orderBy: {
        id: "desc",
      },
      select: {
        id: true,
        amount: true,
        owner: {
          select: {
            id: true,
            name: true,
            image_url: true,
            email: true,
          },
        },
      },
      take: 5,
    });
    console.log(":Данный аолучены через 6 сек");
    return data;
  } catch (error) {
    console.error("Database error:", error);
    throw new Error("Failed to fetch invoices data");
  }
}

export async function fetchCardData() {
  try {
    console.log("Loading data...");
    await new Promise((resolve) => setTimeout(resolve, 2000));
    const invoicesCountPromise: number = await prisma.invoice.count();
    const customersCountPromise: number = await prisma.customer.count();
    const invoicesStatusPaidPromise = await prisma.invoice.aggregate({
      where: {
        status: "paid",
      },
      _sum: {
        amount: true,
      },
    });
    const invoicesStatusPendingPromise = await prisma.invoice.aggregate({
      where: {
        status: "pending",
      },
      _sum: {
        amount: true,
      },
    });

    const data = await Promise.all([
      invoicesCountPromise,
      customersCountPromise,
      invoicesStatusPaidPromise,
      invoicesStatusPendingPromise,
    ]);

    const countOfInvoices = Number(data[0] ?? 0);
    const countOfCustomers = Number(data[1] ?? 0);
    const totalPaidInvoices = formatCurrency(data[2]["_sum"].amount ?? 0);
    const totalPendingInvoices = formatCurrency(data[3]["_sum"].amount ?? 0);

    return {
      countOfCustomers,
      countOfInvoices,
      totalPaidInvoices,
      totalPendingInvoices,
    };
  } catch (error) {
    console.error("DB error:", error);
    throw new Error("Failed to fetch card data");
  }
}

const ITEMS_PER_PAGE = 6;

export async function fetchFilteredInvoices(
  query: string,
  currentPage: number
) {
  const offset = (currentPage - 1) * ITEMS_PER_PAGE;
  try {
    const data = await prisma.invoice.findMany({
      where: {
        OR: [
          {
            owner: {
              name: {
                startsWith: query,
                mode: 'insensitive'
              },
            },
          },
          {
            owner: {
              email: {
                equals: query,
              },
            },
          },
          {
            amount: {
              equals: +query
            }
          },
          {
            date: {
              contains: query
            }
          },
          {
            status: {
              startsWith: query
            }
          }
        ],
      },
      include: {
        owner: {
          select: {
            name: true,
            email: true,
            image_url: true
          },
        },
      },
      orderBy: {
        date: 'asc'
      },
      skip: offset,
      take: ITEMS_PER_PAGE

    });
    return data;
  } catch (error) {
    console.error("DataBase Error", error);
    throw new Error("Failed to fetch invoices");
  }
}
