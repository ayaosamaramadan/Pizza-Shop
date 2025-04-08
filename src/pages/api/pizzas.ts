import { PrismaClient } from "@prisma/client";
import { NextApiRequest, NextApiResponse } from "next";

const prisma = new PrismaClient();

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    const pizzas = await prisma.product.findMany();
    console.log("Fetched pizzas:", pizzas); 
    res.status(200).json(pizzas);
  } catch (error) {
    console.error("Error fetching pizzas:", error);
    res.status(500).json({ error: "Failed to fetch pizzas" });
  } finally {
    await prisma.$disconnect();
  }
}