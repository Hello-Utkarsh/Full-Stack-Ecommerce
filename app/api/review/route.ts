import prisma from "@/client";
import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";

const Review = z.object({
  user_id: z.number(),
  product_id: z.number(),
  review_content: z.string(),
  stars: z.number(),
});

export async function GET(req: NextRequest) {
  try {
    const body = await req.json();
    if (!body.product_id || typeof body.product_id !== "number") {
      return NextResponse.json(
        { message: "Invalid product id" },
        { status: 404 }
      );
    }
    const reviews = await prisma.review.findMany({
      where: {
        product_id: body.product_id,
      },
    });
    if (!reviews) {
      return NextResponse.json({message: "No Reviews"})
    }
    return NextResponse.json(reviews);
  } catch (error) {
    return NextResponse.json(
      { message: error.message },
      { status: error.status }
    );
  }
}

export async function POST(req: NextRequest) {
  try {
    let totalStars = 0;
    let totalUsers = 0;

    const body = await req.json();
    const parsedData = await Review.safeParseAsync(body);

    if (!parsedData.success) {
      return NextResponse.json({ message: "Invalid Data" }, { status: 200 });
    }

    const insertReview = await prisma.review.create({
      data: {
        user_id: body.user_id,
        product_id: body.product_id,
        review_content: body.review_content,
        stars: body.stars,
      },
    });

    const allReviews = await prisma.review.findMany({
      where: { product_id: body.product_id },
    });

    allReviews.forEach((e) => {
      totalStars += e.stars;
      totalUsers += 1;
    });

    const rating = totalStars / totalUsers;
    const setRating = await prisma.product.update({
      where: { product_id: body.product_id },
      data: {
        stars: rating,
      },
    });
    return NextResponse.json({ message: "success" }, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { message: error.meesage },
      { status: error.status }
    );
  }
}
