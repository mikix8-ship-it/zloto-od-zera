import Stripe from "stripe";
import {
  STRIPE_PUBLISHABLE_KEY,
  STRIPE_PRICE_ID,
  STRIPE_SUCCESS_URL,
  STRIPE_CANCEL_URL,
} from "./constants";

export function getStripeClient() {
  if (!process.env.STRIPE_SECRET_KEY) {
    throw new Error("STRIPE_SECRET_KEY is not set");
  }
  return new Stripe(process.env.STRIPE_SECRET_KEY, {
    apiVersion: "2024-04-10",
  });
}

export async function createCheckoutSession(
  customerEmail: string,
  successUrl?: string,
  cancelUrl?: string,
) {
  try {
    if (!STRIPE_PRICE_ID) {
      throw new Error("STRIPE_PRICE_ID is not set");
    }

    const stripe = getStripeClient();
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      line_items: [
        {
          price: STRIPE_PRICE_ID,
          quantity: 1,
        },
      ],
      mode: "payment",
      customer_email: customerEmail,
      success_url: successUrl || STRIPE_SUCCESS_URL,
      cancel_url: cancelUrl || STRIPE_CANCEL_URL,
      metadata: {
        product: "zloto-od-zeroa",
        email: customerEmail,
      },
      allow_promotion_codes: true,
      billing_address_collection: "auto",
      locale: "pl",
    });

    return {
      id: session.id,
      url: session.url,
      clientSecret: session.client_secret,
    };
  } catch (error) {
    console.error("[Stripe] Create session error:", error);
    throw new Error("Failed to create checkout session");
  }
}

export function validateCheckoutEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}
