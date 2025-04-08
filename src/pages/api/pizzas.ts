import { PrismaClient } from "@prisma/client";
import { NextApiRequest, NextApiResponse } from "next";

const prisma = new PrismaClient();

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    // Fetch all pizzas from the database
    const pizzas = await prisma.product.findMany(); // Replace 'product' with your actual table name
    res.status(200).json(pizzas); // Return the pizzas as JSON
  } catch (error) {
    console.error("Error fetching pizzas:", error);
    res.status(500).json({ error: "Failed to fetch pizzas" }); // Handle errors
  } finally {
    await prisma.$disconnect(); // Disconnect Prisma client
  }
}