import prisma from "../src/app/db";
import bcrypt from "bcrypt";
import {
  users,
  revenue,
  customers,
  invoices,
} from "../src/app/lib/placeholder-data";

async function seedUsers() {
  const insertedUsers = await Promise.all(
    users.map(async (user) => {
      const hashedPassword = await bcrypt.hash(user.password, 10);
      return await prisma.user.upsert({
        where: { email: user.email },
        update: {},
        create: {
          name: user.name,
          email: user.email,
          password: hashedPassword,
        },
      });
    })
  );
  return insertedUsers;
}

async function seedCustomers() {
  const indertedCustomers = await Promise.all(
    customers.map(async (customer, idx) => {
      let start: number = idx === 0 ? 0 : idx * 2;
      let end: number = start + 2;
      return await prisma.customer.upsert({
        where: { email: customer.email },
        update: {},
        create: {
          name: customer.name,
          email: customer.email,
          image_url: customer.image_url,
          invoices: {
            create: invoices.slice(start, end).map((invoice) => {
              return {
                amount: invoice.amount,
                date: invoice.date,
                status: invoice.status,
              };
            }),
          },
        },
      });
    })
  );
  return indertedCustomers;
}

async function seedRevenue() {
  const seedRevenue = await Promise.all(
    revenue.map(async (revenue) => {
      return await prisma.revenue.upsert({
        where: { month: revenue.month },
        update: {},
        create: {
          month: revenue.month,
          revenue: revenue.revenue,
        },
      });
    })
  );
  return seedRevenue;
}

async function mainSeed() {
  try {
    await seedUsers();
    await seedCustomers();
    await seedRevenue();
    await prisma.$disconnect();
  } catch (error) {
    console.error(error);
    await prisma.$disconnect();
    process.exit(1);
  }
}

mainSeed();
