import { NextAuthOptions } from "next-auth";
import Credentials from "next-auth/providers/credentials";
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import { db } from "@/lib/prisma";
export const authOptions: NextAuthOptions = {
   
    session: {
        strategy: "jwt",
        maxAge: 30 * 24 * 60 * 60, // 30 days
        updateAge: 24 * 60 * 60, // 24 hours
    },

    secret: process.env.NEXTAUTH_SECRET,
   
    debug: process.env.NODE_ENV === "development",

    adapter: PrismaAdapter(db),

  providers: [
    Credentials({
      name: "Credentials",
      credentials: {
        email: {
          label: "Email",
          type: "email",
          placeholder: "emailex@gmail.com",
        },
        password: {
          label: "Password",
          type: "password",
        },
      },
      authorize: (credentials) => {
        const user = credentials;
        return {
          id: crypto.randomUUID(),
          ...user,
        };
      },
    }),
  ],

    pages: {
        signIn: "auth/login",
    
    },
};
