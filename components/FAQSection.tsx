'use client';

import { useState } from 'react';

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: "Na ile czasu wystarczy czytać ten e-book?",
      answer: "Przeczytasz w 2-3 godziny. Ale będziesz do niego wracać przez LATA (to jest reference guide, nie powieść).",
    },
    {
      question: "Czy jest dla mnie? Jestem kompletnym początkującym.",
      answer: "TAK! Napisane dla osób z zerową wiedzą. Brak żargonu, wszystko wyjaśnione krok-po-kroku. Każdy rozdział ma konkretne akcje do zrobienia.",
    },
    {
      question: "Jakie bonus materiały dostanę?",
      answer: "7 bonusów:\n✓ Arkusz DCA (Google Sheets)\n✓ Skrypty weryfikacyjne (gotowe do copy-paste)\n✓ Checklisty autentyczności\n✓ Szablony emaili do dealerów\n✓ Ranking dealerów (20+ osobiście sprawdzonych)\n✓ Kalkulator podatków (Excel)\n✓ Gotowe checklisty (pre/durante/post zakup)",
    },
    {
      question: "Czy mogę dostać dofinansowania?",
      answer: "TAK! Gwarancja 14 dni zwrotu, bez pytań. Jeśli e-book Cię nie zadowala - zwracamy pieniądze 100%. Naffy obsługuje zwroty automatycznie.",
    },
    {
      question: "W jakim formacie e-book?",
      answer: "PDF (120+ stron, 400+ KB). Możesz czytać na każdym urządzeniu:\n✓ Komputer (Windows/Mac)\n✓ Tablet (iPad/Android)\n✓ Telefon (iOS/Android)\n✓ E-reader (Kindle via conversion)\n\nDostęp zaraz po zakupie dzięki wiadomości z linkiem.",
    },
    {
      question: "Czy dostęp wygasa?",
      answer: "NIE! Kupujesz na ZAWSZE. + Darmowe aktualizacje przez rok. Jeśli dodamy nowe rozdziały - dostajesz je gratis.",
    },
  ];

  return (
    <section id="faq" className="section-padding bg-white">
      <div className="container-custom max-w-4xl">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-16 text-balance">
          Najczęstsze <span className="text-gradient-gold">Pytania</span>
        </h2>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="border-2 border-gray-200 rounded-xl overflow-hidden">
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-6 py-5 flex items-center justify-between gap-4 hover:bg-beige/50 transition-colors text-left"
              >
                <div className="flex items-start gap-4 flex-1">
                  <span className="text-2xl flex-shrink-0">❓</span>
                  <h3 className="text-lg md:text-xl font-bold text-brown-dark">
                    {faq.question}
                  </h3>
                </div>
                <svg
                  className={`w-6 h-6 flex-shrink-0 transition-transform ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path d="M19 9l-7 7-7-7"></path>
                </svg>
              </button>

              {openIndex === index && (
                <div className="px-6 pb-6 pt-2">
                  <div className="pl-10 text-gray-700 leading-relaxed whitespace-pre-line">
                    {faq.answer}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
