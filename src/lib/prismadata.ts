import { PrismaClient } from '@prisma/client';

const db = new PrismaClient();

export const pizzas = await db.product.findMany();