import { NextRequest, NextResponse } from "next/server";
import { createCheckoutSession, validateCheckoutEmail } from "@/lib/payment";

export const runtime = "nodejs";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { email } = body;

    if (!email || !validateCheckoutEmail(email)) {
      return NextResponse.json(
        { error: "Podaj prawidłowy adres email" },
        { status: 400 },
      );
    }

    console.log("[Checkout] Creating session for:", email);

    const session = await createCheckoutSession(email);

    if (!session.url) {
      throw new Error("No checkout URL returned");
    }

    console.log("[Checkout] Session created:", session.id);

    return NextResponse.json(
      {
        sessionId: session.id,
        url: session.url,
        clientSecret: session.clientSecret,
      },
      { status: 200 },
    );
  } catch (error) {
    console.error("[Checkout] Error:", error);

    return NextResponse.json(
      {
        error:
          error instanceof Error
            ? error.message
            : "Nie udało się utworzyć sesji płatności",
      },
      { status: 500 },
    );
  }
}
