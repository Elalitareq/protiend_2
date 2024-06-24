import mongoose from "mongoose";
import { NextRequest } from "next/server";
import connectDB from "@/lib/connectDb";
import Code from "@/models/code";
import asyncForEach from "@/utils/asyncForEach";

export async function POST(request: NextRequest) {
  await connectDB();

  try {
    // Step 1: Read the content of the "authentication_code.json" file.

    // Step 2: Check if the provided code exists in the JSON object.
    const { codes }: { codes: string[] } = await request.json();
    console.log(codes);

    codes.forEach(async (code) => {
      await Code.create({
        code,
        used: false,
      });
    });
    return new Response(JSON.stringify({ status: "success" }));
  } catch (error) {
    return new Response(JSON.stringify({ status: "error" }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}
