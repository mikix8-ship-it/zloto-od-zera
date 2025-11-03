"use client";

import { Button } from "@/components/ui/Button";
import { ArrowRight } from "lucide-react";

interface CTAProps {
  onBuyClick: () => void;
}

export function CTAFinal({ onBuyClick }: CTAProps) {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-yellow-400 to-yellow-600">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl sm:text-5xl font-bold text-black mb-6">
          Gotowy aby zacząć?
        </h2>
        
        <p className="text-xl text-black/80 mb-8 max-w-2xl mx-auto">
          Kup e-book "Złoto od Zera" dzisiaj i zacznij inwestować z pewnością siebie.
          Masz 14 dni na zmianę zdania.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button
            onClick={onBuyClick}
            size="lg"
            className="bg-black text-white hover:bg-gray-800 font-bold text-lg px-8"
          >
            💳 Kup za 49,99 PLN
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>

        <div className="mt-8 flex flex-col sm:flex-row gap-6 justify-center text-sm text-black/70">
          <div>✓ Instant dostęp</div>
          <div>✓ 30 dni do pobrania</div>
          <div>✓ Dożywotnie aktualizacje</div>
          <div>✓ 14 dni gwarancji</div>
        </div>
      </div>
    </section>
  );
}
