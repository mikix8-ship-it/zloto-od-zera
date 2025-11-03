"use client";

import { useEffect } from "react";
import { Button } from "@/components/ui/Button";

interface LemonCheckoutProps {
  productId: string;
  variantId: string;
  storeId: string;
  children?: React.ReactNode;
  className?: string;
}

export function LemonCheckout({
  productId,
  variantId,
  storeId,
  children,
  className,
}: LemonCheckoutProps) {
  useEffect(() => {
    // Ładuj Lemon Squeezy script
    const script = document.createElement("script");
    script.src = "https://assets.lemonsqueezy.com/lemonade.js";
    script.defer = true;
    document.body.appendChild(script);

    return () => {
      if (script.parentNode) {
        script.parentNode.removeChild(script);
      }
    };
  }, []);

  const handleCheckout = () => {
    // Otwórz Lemon Squeezy checkout
    const checkoutUrl = `https://checkout.lemonsqueezy.com/buy/${storeId}/${variantId}`;
    window.open(checkoutUrl, "lemonSqueezyCheckout");
  };

  return (
    <Button
      onClick={handleCheckout}
      className={className}
      size="lg"
    >
      {children || "Kup teraz"}
    </Button>
  );
}

// Alternatywnie - embedded checkout (jeśli Lemon Squeezy to wspiera)
export function LemonCheckoutEmbedded({
  variantId,
  storeId,
}: {
  variantId: string;
  storeId: string;
}) {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://assets.lemonsqueezy.com/lemonade.js";
    script.defer = true;
    document.body.appendChild(script);
  }, []);

  return (
    <div
      className="lemonsqueezy-embedded-checkout"
      data-checkout-url={`https://checkout.lemonsqueezy.com/buy/${storeId}/${variantId}`}
    ></div>
  );
}
