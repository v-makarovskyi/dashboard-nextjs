import { PrismaClient } from "@prisma/client";
import { Revenue } from "./definitions";

const prisma = new PrismaClient()

export async function fetchRevenue() {
    try {
        const data:Revenue[] = await prisma.revenue.findMany()
        return data
    } catch (error) {
        console.error('DataBase error:', error)
        throw new Error('Failed to fetch revenue data!')
    }
}