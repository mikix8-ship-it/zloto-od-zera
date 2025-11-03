"use client";

import { BookOpen, Shield, TrendingUp, DollarSign, Lock, AlertCircle } from "lucide-react";
import { Card, CardContent } from "@/components/ui/Card";

const BENEFITS = [
  {
    icon: <BookOpen className="h-8 w-8 text-yellow-500" />,
    title: "9 pełnych rozdziałów",
    description: "Od podstaw (co to złoto) do exit strategy. Wszystko krok-po-kroku, bez zawiłości.",
  },
  {
    icon: <TrendingUp className="h-8 w-8 text-yellow-500" />,
    title: "System DCA na 12 miesiący",
    description: "Gotowy plan: ile kupować, kiedy, jak często. Bez emocji, bez spekulacji.",
  },
  {
    icon: <Shield className="h-8 w-8 text-yellow-500" />,
    title: "Bezpieczeństwo & weryfikacja",
    description: "Checklist dealera, red flags, skrypty telefoniczne. Jak nie dać się oszukać.",
  },
  {
    icon: <DollarSign className="h-8 w-8 text-yellow-500" />,
    title: "Podatki wyjaśnione",
    description: "Zasada '6 miesięcy', PIT-38, VAT, dziedziczenie. Proste i praktyczne.",
  },
  {
    icon: <Lock className="h-8 w-8 text-yellow-500" />,
    title: "Przechowywanie i OPSEC",
    description: "Sejf domowy vs skrytka vs skarbiec. Dlaczego dyskrecja to kluczowa.",
  },
  {
    icon: <AlertCircle className="h-8 w-8 text-yellow-500" />,
    title: "TOP 10 błędów + jak uniknąć",
    description: "Real stories od inwestorów. Których błędów nie chcesz powtórzyć.",
  },
];

export function Benefits() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            Co dostajesz w e-booku?
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Kompletny system inwestowania w złoto — od pierwszego zakupu do strategii sprzedaży. Praktyka, a nie teoria.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {BENEFITS.map((benefit, idx) => (
            <Card
              key={idx}
              className="border-0 shadow-md hover:shadow-lg transition h-full"
            >
              <CardContent className="p-6">
                <div className="mb-4 flex-shrink-0">
                  {benefit.icon}
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {benefit.title}
                </h3>
                <p className="text-gray-600">
                  {benefit.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
