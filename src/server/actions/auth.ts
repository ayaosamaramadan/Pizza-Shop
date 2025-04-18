"use server";
import { db } from "@/lib/prisma";
import { loginSchema } from "@/validations/auth";
import bcrypt from "bcrypt";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const loginUser = async (credentials: Record<"email" | "password", string> | undefined) => {
   
    const result = loginSchema().safeParse(credentials);

    if (!result.success) {
        return { error: result.error.format(),
            status: 400 
         };
    }

    try{

     const user=   await db.user.findUnique({
            where: {
                email: result.data.email,
            },
        });

        if (!user) {
            return { error: "User not found", status: 404 };
        }

        const isPasswordValid = await bcrypt.compare(
            result.data.password,
            user.password
        );

        if (!isPasswordValid) {
            return { error: "Invalid password", status: 401 };
        }

        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const { password, ...userWithoutPassword } = user;
     
        return {
            user: userWithoutPassword,
            message: "Login successful",
            status: 200,
        };

    }

    catch (error) {

        console.error("rror fetching user:", error);
        return { error: "User not found", status: 404 };
   
    }

   



}


export const signNewUser = async (data: {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
}) => {
  try {
  
    const hashedPassword = await bcrypt.hash(data.password, 10);


    const user = await prisma.user.create({
      data: {
        name: data.name,
        email: data.email,
        password: hashedPassword,
      },
    });

    return { success: true, user };
  } catch (error) {
    console.error("Error saving user:", error);
    return { success: false, message: "Failed to register user." };
  }
};