import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export async function middleware(request: NextRequest) {

  const key = process.env.JWT_SECRET;
  const cookie = request.cookies.get("token")?.value || "";
  if (!cookie) {
    // console.log("no cookie")
    // return NextResponse.redirect(new URL('/shop/signin', request.nextUrl))
    // return NextResponse.json("No Cookie")
  }

  // const data = await fetch("http://localhost:3000/api/mid-auth", {
  //   method: "POST",
  //   headers: {
  //     "Content-Type": "application/json",
  //   },
  //   body: JSON.stringify({ cookie, key }),
  // });
}

export const config = {
  matcher: ['/api/wishlist']
}
