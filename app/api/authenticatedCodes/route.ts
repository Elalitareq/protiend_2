import mongoose from "mongoose";
import { NextRequest } from "next/server";
import connectDB from "@/lib/connectDb";
import Code from "@/models/code";

export async function POST(request: NextRequest) {
  await connectDB();
  try {
    // Step 1: Read the content of the "authentication_code.json" file.

    // Step 2: Check if the provided code exists in the JSON object.
    const { code } = await request.json();
    const codeExists = await Code.findOne({ code });
    await new Promise((resolve) => setTimeout(resolve, 5000));
    if (codeExists) {
      // Step 3: If the code exists and is not marked as used, mark it as used and return the success response.
      if (!codeExists.used!) {
        codeExists.used = true;
        await codeExists.save();
        return new Response(JSON.stringify({ status: "success" }), {
          status: 200,
          headers: { "Content-Type": "application/json" },
        });
      } else {
        // Step 4: If the code exists but is already marked as used, return the appropriate response.
        return new Response(JSON.stringify({ status: "used_before" }), {
          status: 200,
          headers: { "Content-Type": "application/json" },
        });
      }
    } else {
      // Step 5: If the code doesn't exist in the JSON object, return the "code doesn't exist" response.
      return new Response(JSON.stringify({ status: "code_does_not_exist" }), {
        status: 400,
        headers: { "Content-Type": "application/json" },
      });
    }
  } catch (error) {
    console.error("Error processing authentication code:", error);
    return new Response(JSON.stringify({ status: "error" }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}
