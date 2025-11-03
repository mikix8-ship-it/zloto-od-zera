"use client";

import { Card, CardContent } from "@/components/ui/Card";
import { BookOpen } from "lucide-react";

const CHAPTERS = [
  {
    number: 1,
    title: "Co to jest złoto inwestycyjne",
    points: [
      "Dlaczego złoto?",
      "Rodzaje: fizyczne vs papierowe",
      "Złoto w portfelu (5-15%, nie 100%)",
    ],
  },
  {
    number: 2,
    title: "Bezpieczeństwo ponad wszystko",
    points: [
      "Weryfikacja dealera (KRS, buy-back)",
      "Red flags do uniknięcia",
      "Skrypty weryfikacyjne krok-po-kroku",
    ],
  },
  {
    number: 3,
    title: "Twój prosty plan (DCA na 12 mies.)",
    points: [
      "System Dollar Cost Averaging",
      "Budżet miesięczny (ile kupować?)",
      "Rebalans i psychologia inwestowania",
    ],
  },
  {
    number: 4,
    title: "Kupujemy fizycznie",
    points: [
      "Monety vs sztabki (jak wybrać)",
      "Autentyczność: waga, magnez, XRF",
      "LBMA Good Delivery standard",
    ],
  },
  {
    number: 5,
    title: "ETF/ETC (złoto bez logistyki)",
    points: [
      "Zalety i wady papierowego złota",
      "Porównanie iShares, Invesco, WisdomTree",
      "Zakup przez platformę maklerską",
    ],
  },
  {
    number: 6,
    title: "Przechowywanie i OPSEC",
    points: [
      "Sejf domowy, skrytka, skarbiec",
      "Dlaczego dyskrecja to kluczowa",
      "System 3 kopii dokumentów",
    ],
  },
  {
    number: 7,
    title: "Podatki i aspekty prawne",
    points: [
      "Zasada '6 miesięcy' na zwolnienie VAT",
      "PIT-38 krok-po-kroku",
      "Dziedziczenie i dokumentacja",
    ],
  },
  {
    number: 8,
    title: "TOP 10 błędów początkujących",
    points: [
      "Real stories od inwestorów",
      "Błędy psychologiczne (FOMO, panika)",
      "Checklista zapobiegawcza",
    ],
  },
  {
    number: 9,
    title: "Kiedy i jak sprzedać złoto",
    points: [
      "4 scenariusze sprzedaży",
      "Gdzie sprzedać (dealer, rynek wtórny)",
      "Obliczanie realnego zysku (netto)",
    ],
  },
];

export function TableOfContents() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-900">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center mb-4">
            <BookOpen className="h-12 w-12 text-yellow-500" />
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Spis treści e-booka
          </h2>
          <p className="text-lg text-gray-400">
            9 pełnych rozdziałów + praktyczne szablony i checklisty
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {CHAPTERS.map((chapter) => (
            <Card key={chapter.number} className="bg-gray-800 border-gray-700 hover:border-yellow-500 transition">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="flex items-center justify-center h-10 w-10 rounded-full bg-yellow-500 text-black font-bold text-lg">
                    {chapter.number}
                  </div>
                  <h3 className="text-lg font-semibold text-white">
                    {chapter.title}
                  </h3>
                </div>
                <ul className="space-y-2">
                  {chapter.points.map((point, idx) => (
                    <li key={idx} className="text-gray-300 text-sm flex items-start gap-2">
                      <span className="text-yellow-500 mt-1">•</span>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 bg-yellow-50 border-l-4 border-yellow-500 p-6 rounded">
          <h3 className="font-bold text-yellow-900 mb-2">📦 + BONUS MATERIAŁY</h3>
          <ul className="text-yellow-800 text-sm space-y-1">
            <li>✓ Arkusz Google Sheets do śledzenia DCA</li>
            <li>✓ Skrypty weryfikacyjne (telefoniczne i emailowe)</li>
            <li>✓ Checklist autentyczności fizycznego złota</li>
            <li>✓ Szablony e-maili do dealerów</li>
            <li>✓ Ranking dealerów (sprawdzonych osobiście)</li>
            <li>✓ Kalkulator podatków (Excel)</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
