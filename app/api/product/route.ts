import { Prisma, PrismaClient } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";
import prisma from "@/client";
import { number } from "zod";

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

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    if (typeof(body.product_id) !== 'number') {
      return NextResponse.json({message: 'Invalid product id'})
    }
    const product = await prisma.product.findFirst({
      where: { product_id: body.product_id },
    });
    return NextResponse.json({ message: 'success', product });
  } catch (error) {
    return NextResponse.json(
      { message: error.message },
      { status: error.status }
    );
  }
}

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
