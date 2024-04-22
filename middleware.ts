import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export async function middleware(request: NextRequest) {

  const key = process.env.NEXT_PUBLIC_API_SECRET;
  const cookie = request.cookies.get("token")?.value || "";
  if (!cookie) {
    return NextResponse.redirect(new URL('/shop/signin', request.nextUrl))
  }

  const data = await fetch("http://localhost:3000/api/mid-auth", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ cookie, key }),
  });
}

export const config = {
  matcher: ['/shop/wishlist', '/shop/cart']
}