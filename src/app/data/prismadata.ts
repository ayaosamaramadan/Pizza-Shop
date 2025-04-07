import { db } from "@/lib/prisma";

 export const pizzas = await db.product.findMany();
