"use client";

import { useState } from "react";
import { Button } from "./ui/Button";
import { Badge } from "./ui/Badge";
import { Card, CardContent } from "./ui/Card";
import { Check, Zap } from "lucide-react";
import { PRICE_PLN, CURRENCY, PRODUCT_NAME } from "@/lib/constants";
import { formatPrice } from "@/lib/utils";
import { trackCTAClick } from "@/lib/analytics";

interface PriceCardProps {
  onPurchaseClick?: () => void;
  isLoading?: boolean;
}

export function PriceCard({ onPurchaseClick, isLoading = false }: PriceCardProps) {
  const [copied, setCopied] = useState(false);

  const features = [
    "Dostęp dożywotni do e-booka",
    "Bezpłatne aktualizacje na zawsze",
    "Wszystkie szablony i arkusze w PDF",
    "Wsparcie email (48h odpowiedź)",
    "Gwarancja 14-dniowa satysfakcji",
    "Brak subskrypcji, brak ukrytych opłat",
  ];

  const handlePurchase = () => {
    trackCTAClick("kup-teraz", "price-card");
    onPurchaseClick?.();
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText("adam@zlotoodzera.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="section bg-white py-16 sm:py-24 lg:py-32">
      <div className="container-max">
        <div className="mb-12 text-center">
          <Badge variant="gold" className="mb-4 inline-block">
            💰 Cennik
          </Badge>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
            Jedna cena, pełna wartość
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Bez dodatkowych opłat, bez ukrytych kosztów. Jednorazowy zakup, dostęp dożywotni.
          </p>
        </div>

        <div className="flex justify-center">
          <Card className="w-full max-w-md border-2 border-gold-400 bg-gradient-to-br from-white to-gold-50 shadow-xl hover:shadow-2xl transition-shadow">
            <CardContent className="p-8 sm:p-10">
              <h3 className="text-2xl font-bold text-gray-900">{PRODUCT_NAME}</h3>

              <div className="mt-6 flex items-baseline gap-2">
                <span className="text-5xl font-bold text-gold-600">
                  {PRICE_PLN.toFixed(2).replace(".", ",")}
                </span>
                <span className="text-2xl text-gray-600">zł</span>
              </div>

              <p className="mt-2 text-sm text-gray-600">
                Jednorazowy zakup, dostęp na zawsze
              </p>

              <Button
                onClick={handlePurchase}
                disabled={isLoading}
                size="lg"
                variant="gold"
                className="mt-8 w-full py-3 text-lg font-semibold"
              >
                {isLoading ? "⏳ Przetwarzanie..." : "🛒 Kup e-book teraz"}
              </Button>

              <div className="mt-8 space-y-3 border-t border-gray-200 pt-8">
                <p className="text-sm font-semibold text-gray-900 mb-4">
                  W cenie otrzymujesz:
                </p>
                {features.map((feature, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>

              <div className="mt-8 rounded-lg bg-green-50 border border-green-200 p-4 text-center">
                <p className="text-xs font-semibold text-green-900">
                  ✓ Bezpieczna płatność kartą
                </p>
                <p className="text-xs text-green-800 mt-1">
                  Obsługiwane przez Stripe
                </p>
              </div>

              <div className="mt-4 rounded-lg bg-blue-50 border border-blue-200 p-4 text-center flex items-center justify-center gap-2">
                <Zap className="h-4 w-4 text-blue-600" />
                <span className="text-xs font-semibold text-blue-900">
                  Gwarancja 14 dni — zwrot bez pytań
                </span>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 max-w-4xl mx-auto">
          <div className="rounded-lg border border-gray-200 p-6">
            <h4 className="font-bold text-gray-900 mb-2">🎁 Co dostaję?</h4>
            <p className="text-sm text-gray-600">
              Link do pobrania PDF-a bezpośrednio na email. Możesz czytać na komputerze,
              tablecie lub telefonie.
            </p>
          </div>

          <div className="rounded-lg border border-gray-200 p-6">
            <h4 className="font-bold text-gray-900 mb-2">🔒 Czy jest bezpiecznie?</h4>
            <p className="text-sm text-gray-600">
              Płatności obsługuje Stripe — pracuje jak Amazon czy Netflix. Twoje dane są
              bezpieczne.
            </p>
          </div>

          <div className="rounded-lg border border-gray-200 p-6">
            <h4 className="font-bold text-gray-900 mb-2">📧 Pytania?</h4>
            <p className="text-sm text-gray-600">
              Napisz do nas:{" "}
              <button
                onClick={handleCopyEmail}
                className="text-gold-600 font-semibold hover:text-gold-700 underline"
              >
                {copied ? "✓ Skopiowano!" : "adam@zlotoodzera.com"}
              </button>
            </p>
          </div>

          <div className="rounded-lg border border-gray-200 p-6">
            <h4 className="font-bold text-gray-900 mb-2">💬 Nie wiesz, czy to dla Ciebie?</h4>
            <p className="text-sm text-gray-600">
              Nie martw się. Jeśli e-book nie spełni oczekiwań, zwrócimy pełne pieniądze.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default PriceCard;

