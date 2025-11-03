"use client";

import { Card, CardContent } from "./ui/Card";
import { Badge } from "./ui/Badge";
import { PERSONAS } from "@/lib/constants";
import { Check } from "lucide-react";

export function ForWhom() {
  const checklistItems = [
    "Nie mam doświadczenia z inwestycjami",
    "Nie wiem, od czego zacząć",
    "Obawiam się, że coś zepsuję",
    "Chcę inwestować małymi kwotami",
    "Szukam gwarancji bezpieczeństwa",
    "Chcę zrozumieć podatki i przepisy",
  ];

  return (
    <section className="section bg-white py-16 sm:py-24 lg:py-32">
      <div className="container-max">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
            Dla kogo jest ten e-book?
          </h2>
          <p className="mt-4 text-lg text-gray-600 sm:text-xl">
            Napisaliśmy go z myślą o osobach, które chcą zacząć, ale czują się zagubione.
          </p>
        </div>

        <div className="grid gap-8 sm:grid-cols-3 mb-12">
          {PERSONAS.map((persona, idx) => (
            <Card
              key={idx}
              className="relative overflow-hidden border-gray-200 bg-gradient-to-br from-white to-gray-50 transition-all duration-300 hover:shadow-lg hover:border-gold-400"
            >
              <CardContent className="p-8">
                <div className="text-5xl mb-4">{persona.icon}</div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  {persona.name}
                </h3>
                <p className="text-sm text-gray-600">
                  {persona.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 rounded-xl border-2 border-gold-200 bg-gold-50 p-8 sm:p-12">
          <div className="grid gap-8 lg:grid-cols-2">
            <div>
              <Badge variant="gold" className="mb-4">
                ✅ Dotyczy Cię?
              </Badge>
              <h3 className="text-2xl font-bold text-gray-900 sm:text-3xl">
                Ten e-book jest dla Ciebie, jeśli...
              </h3>
              <p className="mt-4 text-gray-700">
                Sprawdź, czy któryś z poniższych punktów Cię dotyczy. Jeśli tak, jesteś we właściwym
                miejscu.
              </p>
            </div>

            <div className="space-y-3">
              {checklistItems.map((item, idx) => (
                <div key={idx} className="flex items-start gap-3">
                  <div className="mt-1 flex-shrink-0">
                    <div className="flex h-5 w-5 items-center justify-center rounded-full bg-gradient-to-r from-gold-400 to-gold-600">
                      <Check className="h-3 w-3 text-black" />
                    </div>
                  </div>
                  <p className="text-gray-700 font-medium">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ForWhom;
