import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";
import { authConfig } from "./auth.config";
import { unknown, z } from "zod";
import type { User } from "@/app/lib/definitions";
import bcrypt from "bcrypt";
import prisma from "@/app/db";

async function getUser(email: string): Promise<User | null> {
  try {
    const user = await prisma.user.findUnique({
      where: { email: `${email}` },
    });
    return user
  } catch (error) {
    console.error("Failed to fetch user: ", error);
    throw new Error("Failed to fetch user");
  }
}

export const { auth, signIn, signOut } = NextAuth({
  ...authConfig,
  providers: [
    Credentials({
      async authorize(credentials) {
        console.log(credentials)
        const parsedCredentials = z
          .object({ email: z.string().email(), password: z.string().min(6) })
          .safeParse(credentials);

        if (parsedCredentials.success) {
          const { email, password } = parsedCredentials.data;
          const user = await getUser(email);
          if (!user) return null;
          const passwordMatch = await bcrypt.compare(password, user.password)
          
          if(passwordMatch) return user
        }
        console.log('invalid credentials')
        return null;
      },
    }),
  ],
});


