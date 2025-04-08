import { PrismaClient } from "@prisma/client";
import { NextApiRequest, NextApiResponse } from "next";

const prisma = new PrismaClient();

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    const categories = await prisma.category.findMany({
      include: {
        products: true, 
      },
    });
    res.status(200).json(categories);
  } catch (error) {
    console.error("Error fetching categories with products:", error);
    res.status(500).json({ error: "Failed to fetch categories with products" });
  } finally {
    await prisma.$disconnect();
  }
}