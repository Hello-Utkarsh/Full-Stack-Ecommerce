import prisma from "@/client";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const keywords = body.keywords.split(" ");

    if (typeof body.keywords !== "string") {
      return NextResponse.json({ message: "Invalid Input" });
    }

    let searchConditions = [];
    keywords.map(
      (keyword) =>
        searchConditions.push({
          OR: [
            { name: { contains: keyword, mode: "insensitive" } },
            { processor: { contains: keyword, mode: "insensitive" } },
            { ram: { contains: keyword, mode: "insensitive" } },
            { storage: { contains: keyword, mode: "insensitive" } },
          ],
        })
    );

    const products = await prisma.product.findMany({
      where: {
        AND: searchConditions,
      },
    });

    const extraProducts = await prisma.product.findMany({
      where: {
        OR: searchConditions
      }
    })

    return NextResponse.json({ products, extraProducts, message: "success" });
  } catch (error) {
    return NextResponse.json(
      { message: error.message },
      { status: error.status }
    );
  }
}
