import { Prisma, PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";
import prisma from "@/client";

// export async function POST(req:NextResponse) {
//   try {
//     const body = await req.json()
//     const allProducts = await prisma.product.createMany({
//         data: body
//       })
//   } catch (error) {
//     console.log(error.message)
//   }
// }

export async function GET() {
  try {
    const products = await prisma.product.findMany({
      take: 8,
    });
    if (!products) {
      return NextResponse.json(
        { message: "No product found" },
        { status: 404 }
      );
    }
    return NextResponse.json(products);
  } catch (error) {
    return NextResponse.json(
      { error: error.message },
      { status: error.status }
    );
  }
}
