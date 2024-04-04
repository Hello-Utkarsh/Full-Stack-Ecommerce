import { Prisma, PrismaClient } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";
import { z } from 'zod'
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken')
const prisma = new PrismaClient()

const User = z.object({
    name: z.string(),
    email: z.string().email(),
    password: z.number().min(5),
    address: z.string()
});

export async function POST(req: NextRequest) {
    try {
        const { name, email, password, address } = await req.json();
        let parsedData = await User.safeParseAsync({ name, email, password, address })
        if (!parsedData.success) {
            const error: {message: string, status?: number} = new Error('Incorrect data provided');
            error.status = 400; // Set the desired status code
            throw error;
        }
        const existingUser = await prisma.user.findFirst({
            where: {email: email}
        })
        console.log(existingUser)
        if (existingUser) {
            return NextResponse.json({message: "A user already exist with this email"}, {status : 400})
        }
        const salt = await bcrypt.genSalt(10)
        const hashedPassword = await bcrypt.hash(password.toString(), salt)

        const user = await prisma.user.create({
            data: {
                name: name,
                email: email,
                password: hashedPassword,
                address: address
            },
        })

        return NextResponse.json({ name, email, password, address })
    } catch (error) {
        return NextResponse.json({ "error": error.message }, { status: error.status })
    }
}