import { PrismaClient } from "@prisma/client";
import { Revenue, LatestInvoice } from "./definitions";
import prisma from "../db";

export async function fetchRevenue() {
  try {
    const data: Revenue[] = await prisma.revenue.findMany();
    return data;
  } catch (error) {
    console.error("DataBase error:", error);
    throw new Error("Failed to fetch revenue data!");
  }
}

export async function fetchLatestInvoices() {
  try {
    const data: LatestInvoice[] = await prisma.invoice.findMany({
      select: {
        amount: true,
        owner: true
      }
    });
    return data;
  } catch (error) {
    console.error("Database error:", error);
    throw new Error("Failed to fetch invoices data");
  }
}
