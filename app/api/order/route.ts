import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import prisma from "@/client";
const jwt = require("jsonwebtoken");

export async function GET(request: NextRequest) {
  try {
    
    const cookie = request.cookies.get("token").value;
    
    const userData = await jwt.verify(cookie, process.env.JWT_SECRET);
    if (!userData) {  
      return NextResponse.json({ message: "Invalid token" }, { status: 400 });
    }
    
    const userOrd = await prisma.order.findMany({
      where: { user_id: userData.user_id },
    });
    
    if (userOrd.length == 0) {
      return NextResponse.json(null);
    }
    
    const orderProducts = await Promise.all(
      userOrd.map(async (d) => {
        const products = await prisma.product.findFirst({
          where: { product_id: d.product_id },
        });
        const orderId = d.order_id;
        const quantity = d.quantity
        return { products, orderId,  quantity};
      })
    );
    
    return NextResponse.json(orderProducts);

  } catch (error) {
    return NextResponse.json(
      { error: error.message },
      { status: error.status }
    );
  }
}

const cartInput = z.object({
  productId: z.number(),
  userId: z.number(),
  quantity: z.number(),
});

export async function POST(req: NextRequest) {
  try {
    const { productId, userId, quantity } = await req.json();

    const parsedData = await cartInput.safeParseAsync({
      productId,
      userId,
      quantity,
    });
    if (!parsedData.success) {
      return NextResponse.json(
        { message: "Invalid data entered" },
        { status: 404 }
      );
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

    const order = await prisma.order.create({
      data: {
        product_id: productId,
        user_id: userId,
        quantity: quantity,
      },
    });

    return NextResponse.json({ order });
  } catch (error) {
    return NextResponse.json(
      { error: error.message },
      { status: error.status }
    );
  }
}

const delOrdInput = z.object({
  orderId: z.number(),
});

export async function DELETE(req: NextResponse) {
  try {
    const { orderId } = await req.json();

    const parsedData = await delOrdInput.safeParseAsync({ orderId });
    if (!parsedData.success) {
      return NextResponse.json({ error: "orderId type is incorrect" });
    }

    const orderlist = await prisma.order.delete({
      where: { order_id: orderId },
    });

    return NextResponse.json(orderlist);
  } catch (error) {
    return NextResponse.json(
      { error: error.message },
      { status: error.status }
    );
  }
}
