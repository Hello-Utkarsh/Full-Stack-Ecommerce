import prisma from "@/client";
import { NextRequest, NextResponse } from "next/server";
import { number, z } from "zod";

const Review = z.object({
  user_id: z.number(),
  product_id: z.number(),
  review_content: z.string(),
  stars: z.number(),
});

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const parsedData = await Review.safeParseAsync(body);

    if (!parsedData.success) {
      return NextResponse.json({ message: "Invalid Data" }, { status: 400 });
    }

    const insertReview = await prisma.review.create({
      data: {
        user_id: body.user_id,
        product_id: body.product_id,
        review_content: body.review_content,
        stars: body.stars,
      },
    });

    return NextResponse.json({message: "Thank you for your review"}, {status: 200})
  } catch (error) {
    return NextResponse.json(
      { message: error.meesage },
      { status: error.status }
    );
  }
}
