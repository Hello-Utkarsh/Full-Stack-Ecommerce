import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";
import { z } from "zod";
import prisma from "@/client";
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const loginData = z.object({
  email: z.string().email(),
  password: z.string().min(5),
});

export async function POST(req: NextResponse) {
  try {
    const { email, password } = await req.json();
    const parsedData = await loginData.safeParseAsync({ email, password });
    if (!parsedData.success) {
      return NextResponse.json({ message: "Invalid credentials" }, {status: 404});
    }

    const existUser = await prisma.user.findFirst({
      where: { email: email },
    });
    if (!existUser) {
      return NextResponse.json({
        message: "no user exists with the provided credentials",
      }, {status: 404});
    }

    const validPassword = await bcrypt.compare(password, existUser.password);
    if (!validPassword) {
      return NextResponse.json({ message: "Invalid passowrd" }, {status: 404});
    }

    const tokenData = {
      username: existUser.name,
      email: existUser.email,
    };
    const jwtToken = jwt.sign(tokenData, process.env.JWT_SECRET);

    const response = NextResponse.json({
      message: "Successfully logged in",
      success: true,
    });
    response.cookies.set("token", jwtToken);

    //  NextResponse.redirect(new URL('/shop', req.url))

    return response;
  } catch (error) {
    return NextResponse.json(
      { error: error.message },
      { status: error.status }
    );
  }
}
