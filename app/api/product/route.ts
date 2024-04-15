import { Prisma, PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";
import prisma from "@/client";


export async function GET() {
  const products = await prisma.product.findMany({
    take: 8,
  });
  if (!products) {
    return NextResponse.json({ message: "No product found" }, { status: 404 });
  }
  return NextResponse.json(products);
}
