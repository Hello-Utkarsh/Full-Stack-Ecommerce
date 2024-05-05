import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
const jwt = require("jsonwebtoken");
import prisma from "@/client";

export async function GET(request: NextRequest) {
  try {
    const cookie = request.cookies.get("token").value;

    const userData = await jwt.verify(
      cookie,
      process.env.NEXT_PUBLIC_API_SECRET
    );

    if (!userData) {
      return NextResponse.json({ message: "Invalid token" }, { status: 400 });
    }

    const userWish = await prisma.wishlist.findMany({
      where: { user_id: userData.user_id },
    });
    if (userWish.length == 0) {
      return NextResponse.json({ message: "No Products" }, { status: 200 });
    }

    const wishlistProducts = await Promise.all(
      userWish.map(async (d) => {
        const products = await prisma.product.findFirst({
          where: { product_id: d.product_id },
        });

        const wishlist_id = d.wishlist_id;
        return { products, wishlist_id };
      })
    );

    return NextResponse.json({message: "Success", wishlistProducts});
  } catch (error) {
    return NextResponse.json(
      { error: error.message },
      { status: error.status }
    );
  }
}

const addWishInput = z.object({
  userId: z.number(),
  productId: z.number(),
});

export async function POST(req: NextRequest) {
  try {
    const { userId, productId } = await req.json();
    const parseData = await addWishInput.safeParseAsync({ userId, productId });

    if (!parseData.success) {
      return NextResponse.json(
        { message: "Incorrect datatype" },
        { status: 404 }
      );
    }

    const user = await prisma.user.findFirst({
      where: { user_id: userId },
    });
    const product = await prisma.product.findFirst({
      where: { product_id: productId },
    });

    const sameProduct = await prisma.wishlist.findFirst({
      where: { user_id: userId, product_id: productId },
    });

    if (sameProduct) {
      return NextResponse.json(
        { message: "Product already exist in wishlist" },
        { status: 404 }
      );
    }

    if (!product || !user) {
      return NextResponse.json(
        { message: "Product or User not found" },
        { status: 404 }
      );
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
