"use server";
import { db } from "@/lib/prisma";
import { loginSchema, signupSchema } from "@/validations/auth";
import bcrypt from "bcrypt";
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


export const signNewUser = async (prevState:unknown,formDate:FormData)=>{
    // console.log("formDate",formDate);
    
    const result = signupSchema().safeParse(
        Object.fromEntries(formDate.entries())
    );

    if(!result.success) {
        return { error: result.error.format(),
            FormData,
            status: 400 
         };
    }

   try{
 
    const user = await db.user.findUnique({
        where: {
            email: result.data.email,
        },
    });
  
    if (user) {
        return {  formDate, error: "User already exists", status: 409 };
      
    }

    const hashedPassword = await bcrypt.hash(result.data.password, 10);
  
    const newUser = await db.user.create({
        data: {
            name: result.data.name,
            email: result.data.email,
            password: hashedPassword,
        },
    });

    return {
        user: {
            id: newUser.id,
            name: newUser.name,
            email: newUser.email,
        },
        message: "User created successfully",
        status: 201,
    };

   }

   catch (error) {
        console.error("Error creating user:", error);
        return { error: "User not found", status: 404 };
    }   

}