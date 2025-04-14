import * as z from "zod";

export const loginSchema = () => {
    return z.object({
        email: z.string().trim().email("Invalid email address"),
        password: z.string()
            .min(8, "Password must be at least 8 characters long")
            .max(20, "Password must be at most 20 characters long"),
    });
};

export const signupSchema = () => {
    return z.object({
        name: z.string().trim().min(1, "Name is required"),
        email: z.string().trim().email("Invalid email address"),
        password: z.string()
            .min(8, "Password must be at least 8 characters long")
            .max(20, "Password must be at most 20 characters long"),
    });
};