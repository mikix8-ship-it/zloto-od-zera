"use client";

import { useRef } from "react";
import { Hero } from "@/components/Hero";
import { Benefits } from "@/components/Benefits";
import { TableOfContents } from "@/components/TableOfContents";
import { FAQ } from "@/components/FAQ";
import { CTAFinal } from "@/components/CTAFinal";

const LEMON_STORE_ID = process.env.NEXT_PUBLIC_LEMON_SQUEEZY_STORE_ID!;
const LEMON_VARIANT_ID = process.env.NEXT_PUBLIC_LEMON_SQUEEZY_VARIANT_ID!;

export default function Home() {
  const tocRef = useRef<HTMLDivElement>(null);

  const handleBuyClick = () => {
    // Otwórz Lemon Squeezy checkout
    const checkoutUrl = `https://checkout.lemonsqueezy.com/buy/${LEMON_STORE_ID}/${LEMON_VARIANT_ID}`;
    window.open(checkoutUrl, "_blank");
  };

  const handleTocClick = () => {
    tocRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <main className="w-full">
      <Hero onBuyClick={handleBuyClick} onTocClick={handleTocClick} />
      <Benefits />
      <div ref={tocRef}>
        <TableOfContents />
      </div>
      <FAQ />
      <CTAFinal onBuyClick={handleBuyClick} />
    </main>
  );
}
