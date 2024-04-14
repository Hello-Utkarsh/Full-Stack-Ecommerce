import { Prisma, PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";
const prisma = new PrismaClient();

export async function GET() {
  const products = await prisma.product.findMany({
    take: 5,
  });
  if (!products) {
    return NextResponse.json({ message: "No product found" }, { status: 404 });
  }
  return NextResponse.json(products);
}
