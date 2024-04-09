import { PrismaClient } from "@prisma/client";
import { error } from "console";
import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
const prisma = new PrismaClient();

const addWishInput = z.object({
  userId: z.number(),
  productId: z.number(),
});

export async function POST(req: NextRequest) {
  try {
    const { userId, productId } = await req.json();
    const parseData = await addWishInput.safeParseAsync({ userId, productId });
    if (!parseData.success) {
      return NextResponse.json({ message: "Incorrect datatype" });
    }

    const user = await prisma.user.findFirst({
      where: { user_id: userId },
    });
    const product = await prisma.product.findFirst({
      where: { product_id: productId },
    });

    if (!product || !user) {
      return NextResponse.json({ message: "Product or User not found" });
    }

    const wishlist = await prisma.wishlist.create({
      data: {
        user_id: userId,
        product_id: productId,
      },
    });

    return NextResponse.json({ wishlist });
  } catch (error) {
    return NextResponse.json(
      { error: error.message },
      { status: error.status }
    );
  }
}

const delWishInput = z.object({
  wishlistId: z.number(),
});

export async function DELETE(req: NextResponse) {
  try {
    const { wishlistId } = await req.json();

    const parsedData = await delWishInput.safeParseAsync({ wishlistId });
    console.log(wishlistId);
    if (!parsedData.success) {
      return NextResponse.json({ error: "wishlistId type is incorrect" });
    }

    const wishlist = await prisma.wishlist.delete({
      where: { wishlist_id: wishlistId },
    });

    return NextResponse.json(wishlist);
  } catch (error) {
    return NextResponse.json(
      { error: error.message },
      { status: error.status }
    );
  }
}
