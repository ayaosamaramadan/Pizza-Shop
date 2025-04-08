import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    const pizzas = await prisma.product.findMany(); // استبدل 'product' باسم الجدول الخاص بك
    res.status(200).json(pizzas);
  } catch (error) {
    console.error("Error fetching pizzas:", error);
    res.status(500).json({ error: "Failed to fetch pizzas" });
  } finally {
    await prisma.$disconnect();
  }
}