import prisma from "../db";
import bcrypt from "bcrypt";
import { users, revenue, customers, invoices } from "../lib/placeholder-data";

async function seedUser() {
  const insertedUser = await Promise.all(
    users.map(async (u) => {
      const hashedPassword = await bcrypt.hash(u.password, 10);
      return await prisma.user.create({
        data: {
          name: u.name,
          email: u.email,
          password: hashedPassword,
        },
      });
    })
  );
  return insertedUser;
}

async function seedCustomers() {
  const insrtedCustomers = await Promise.all(
    customers.map(async (cust) => {
      return await prisma.customer.create({
        data: {
          name: cust.name,
          email: cust.email,
          image_url: cust.image_url,
        },
      });
    })
  );
  return insrtedCustomers;
}

async function seedInvoices() {
  const insertedInvoices = await Promise.all(
    invoices.map(async (invoice) => {
      return await prisma.invoice.create({
        data: {
          amount: invoice.amount,
          status: invoice.status,
          date: invoice.date,
        },
      });
    })
  );
  return insertedInvoices
}

async function seedRevenue() {
  const insertedRevenue = await Promise.all(
    revenue.map(async (r) => {
      return await prisma.revenue.create({
        data: {
          month: r.month,
          revenue: r.revenue,
        },
      });
    })
  );
  return insertedRevenue;
}

export async function GET() {
  try {
    //await seedUser()
    //await seedCustomers();
    //await seedRevenue()
    await seedInvoices()
    return Response.json({ message: "Database seeded successfully" });
  } catch (error) {
    return Response.json({ error }, { status: 500 });
  }
}
