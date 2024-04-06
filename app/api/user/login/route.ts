import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";
import { z } from "zod";
const bcrypt = require('bcryptjs');
const jwt = require("jsonwebtoken");
const prisma = new PrismaClient();

const loginData = z.object({
  email: z.string().email(),
  password: z.number().min(5),
});

export async function POST(req: NextResponse) {
  try {
    const { email, password } = await req.json();
    const parsedData = await loginData.safeParseAsync({ email, password });
    if (!parsedData.success) {
      return NextResponse.json({ message: "Invalid credentials" });
    }

    const existUser = await prisma.user.findFirst({
      where: { email: email },
    });
    if (!existUser) {
      return NextResponse.json({
        message: "no user exists with the provided credentials",
      });
    }
    
    const validPassword = await bcrypt.compare(existUser.password, password.toString());
    console.log(validPassword)
    if (!validPassword) {
      return NextResponse.json({ message: "Invalid passowrd" });
    }
    
    const tokenData = {
      username: existUser.name,
      email: existUser.email,
    };
    const jwtToken = jwt.sign(tokenData, process.env.JWT_SECRET);

    const response =  NextResponse.json({
      message: "Successfully logged in",
      success: true,
    })
    response.cookies.set("token", jwtToken);

    return response

  } catch (error) {
    return NextResponse.json(
      { error: error.message },
      { status: error.status }
    );
  }
}
