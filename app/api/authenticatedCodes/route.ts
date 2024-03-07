import { NextRequest } from "next/server";
import fs from "fs/promises";

export async function POST(request: NextRequest) {
  try {
    // Step 1: Read the content of the "authentication_code.json" file.
    const fileContent = await fs.readFile(
      "./app/api/authenticatedCodes/authentication_codes.json",
      "utf-8"
    );
    const codes = JSON.parse(fileContent);

    // Step 2: Check if the provided code exists in the JSON object.
    const { code } = await request.json();
    await new Promise((resolve) => setTimeout(resolve, 5000));
    if (codes.hasOwnProperty(code)) {
      // Step 3: If the code exists and is not marked as used, mark it as used and return the success response.
      if (!codes[code].used) {
        codes[code].used = true;
        await fs.writeFile(
          "./app/api/authenticatedCodes/authentication_codes.json",
          JSON.stringify(codes, null, 2),
          "utf-8"
        );

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
