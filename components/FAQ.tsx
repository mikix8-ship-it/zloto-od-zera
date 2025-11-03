"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/Accordion";

const FAQ_ITEMS = [
  {
    id: "format",
    question: "W jakim formacie dostaję e-book?",
    answer:
      "E-book to plik PDF. Po zakupie dostaniesz email z linkiem do pobrania. Możesz go czytać na komputerze, tablecie, telefonie lub wydrukować. Link ważny 30 dni.",
  },
  {
    id: "updates",
    question: "Czy będą aktualizacje?",
    answer:
      "Tak! Gdy opublikuję nową wersję, wyślę Ci email z nowym linkiem do pobrania. Bez dodatkowych opłat. Aktualizacje to zawsze lepszy content, nowe przykłady, poprawki.",
  },
  {
    id: "payment",
    question: "Jakie metody płatności akceptujecie?",
    answer:
      "Akceptujemy karty kredytowe (Visa, Mastercard, American Express) i przelewy bankowe. Płatność przetwarzana przez Lemon Squeezy — bezpiecznie i szybko.",
  },
  {
    id: "refund",
    question: "Mam 14 dni na zwrot, prawda?",
    answer:
      "Tak! To Twoje prawo konsumenta. Jeśli e-book Ci się nie spodoba, wyślij email na adam@zlotoodzera.com z tytułem 'Wnioskuję o zwrot' w ciągu 14 dni. Zwrócimy 100% bez pytań.",
  },
  {
    id: "support",
    question: "Czy będzie wsparcie?",
    answer:
      "Oczywiście! Jeśli masz pytania techniczne lub merytoryczne — napisz na adam@zlotoodzera.com. Odpowiadamy w ciągu 24-48 godzin.",
  },
  {
    id: "advice",
    question: "To jest porada inwestycyjna?",
    answer:
      "Nie. E-book to materiał edukacyjny. Pokazuję jak działa inwestowanie w złoto, ale nie rekomenduje konkretnych transakcji. Każda decyzja to Twoja odpowiedzialność. Zawsze konsultuj się z doradcą finansowym.",
  },
];

export function FAQ() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            Masz pytania?
          </h2>
          <p className="text-lg text-gray-600">
            Odpowiadamy na najczęstsze pytania poniżej.
          </p>
        </div>

        <Accordion type="single" collapsible className="w-full space-y-3">
          {FAQ_ITEMS.map((item) => (
            <AccordionItem key={item.id} value={item.id} className="border border-gray-200 rounded-lg px-4">
              <AccordionTrigger className="py-4 hover:no-underline hover:text-yellow-600">
                <span className="text-left font-semibold text-gray-900">
                  {item.question}
                </span>
              </AccordionTrigger>
              <AccordionContent className="text-gray-600 pb-4">
                {item.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>

        <div className="mt-12 rounded-lg bg-yellow-50 border-2 border-yellow-200 p-6">
          <h3 className="font-semibold text-yellow-900 mb-2">
            ⚠️ Disclaimer
          </h3>
          <p className="text-yellow-800 text-sm">
            E-book zawiera wyłącznie materiały edukacyjne o inwestowaniu w złoto.
            Nie stanowi porady finansowej ani inwestycyjnej. Każda inwestycja niesie
            ze sobą ryzyko. Przed podjęciem decyzji konsultuj się z doradcą finansowym.
          </p>
        </div>
      </div>
    </section>
  );
}
