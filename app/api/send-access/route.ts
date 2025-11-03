import { NextRequest, NextResponse } from "next/server";
import { sendAccessEmail } from "@/lib/email";

export const runtime = "nodejs";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { email, customerName } = body;

    if (!email || typeof email !== "string" || !email.includes("@")) {
      return NextResponse.json(
        { error: "Podaj prawidłowy adres email" },
        { status: 400 },
      );
    }

    console.log("[Send Access] Sending email to:", email);

    const result = await sendAccessEmail(email, customerName);

    if (!result.success) {
      throw new Error(result.error || "Failed to send email");
    }

    console.log("[Send Access] Email sent:", result.messageId);

    return NextResponse.json(
      {
        success: true,
        message: "Email z dostępem do e-booka został wysłany",
        messageId: result.messageId,
      },
      { status: 200 },
    );
  } catch (error) {
    console.error("[Send Access] Error:", error);

    return NextResponse.json(
      {
        error:
          error instanceof Error
            ? error.message
            : "Nie udało się wysłać emaila",
      },
      { status: 500 },
    );
  }
}
