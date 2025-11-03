"use client";

import { useState } from "react";
import { isValidEmail, trackCTAClick } from "@/lib/utils";
import { trackFormSubmission } from "@/lib/analytics";

interface CheckoutModalState {
  isOpen: boolean;
  email: string;
  error: string;
  isLoading: boolean;
}

export function useCheckout() {
  const [state, setState] = useState<CheckoutModalState>({
    isOpen: false,
    email: "",
    error: "",
    isLoading: false,
  });

  const handleCheckout = async () => {
    trackCTAClick("checkout", "cta");

    const email = window.prompt(
      "Podaj swój email, na który wyślemy link do pobrania e-booka:",
    );

    if (!email) return;

    if (!isValidEmail(email)) {
      alert("❌ Błędny adres email. Spróbuj jeszcze raz.");
      trackFormSubmission("checkout", false);
      return;
    }

    setState((s) => ({ ...s, isLoading: true }));

    try {
      const response = await fetch("/api/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      if (!response.ok) {
        throw new Error("Failed to create checkout session");
      }

      const { url } = await response.json();

      if (url) {
        trackFormSubmission("checkout", true);
        window.location.href = url;
      }
    } catch (error) {
      console.error("Checkout error:", error);
      alert("❌ Nie udało się zainicjalizować płatności. Spróbuj ponownie.");
      trackFormSubmission("checkout", false);
    } finally {
      setState((s) => ({ ...s, isLoading: false }));
    }
  };

  return {
    ...state,
    handleCheckout,
  };
}
