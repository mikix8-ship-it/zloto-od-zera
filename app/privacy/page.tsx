"use client";

import Link from "next/link";
import { NextSeo } from "next-seo";
import { Card, CardContent } from "@/components/ui/Card";
import { ChevronDown } from "lucide-react";
import { SITE_URL } from "@/lib/constants";
import { useState } from "react";

export default function PrivacyPage() {
  const [expandedSection, setExpandedSection] = useState<string | null>(null);

  const sections = [
    {
      id: "admin",
      title: "1. Administrator Danych",
      content: `Administrator Twoich danych osobowych to:
      
Adam Złotopolski
zlotoodzera.com

Kontakt: adam@zlotoodzera.com

Jeśli masz pytania dotyczące naszej polityki prywatności, możesz nas kontaktować na powyższy adres email.`,
    },
    {
      id: "dane",
      title: "2. Jakie Dane Zbieramy?",
      content: `Zbieramy następujące dane osobowe:

- Email - wymagany do wysłania dostępu do e-booka
- Imię i Nazwisko - dla personalizacji (opcjonalnie)
- Adres - wymagany przy płatności Stripe
- Informacje o płatności - przetwarzane przez Stripe

Te dane zbieramy TYLKO gdy dokonujesz zakupu. Nie sprzedajemy Twoich danych.`,
    },
    {
      id: "podstawa",
      title: "3. Podstawa Prawna Przetwarzania",
      content: `Twoje dane przetwarzamy na podstawie:

- Umowy kupna-sprzedaży e-booka (Art. 6(1)(b) RODO)
- Twojej zgody na otrzymywanie emaili (Art. 6(1)(a) RODO)
- Naszych prawnych obowiązków podatkowych (Art. 6(1)(c) RODO)

Zawsze masz prawo do wycofania zgody, ale może to wpłynąć na naszą zdolność dostarczenia e-booka.`,
    },
    {
      id: "cele",
      title: "4. Cele Przetwarzania",
      content: `Przetwarzamy Twoje dane do:

- Realizacji zamawiania i dostarczenia e-booka
- Wysyłania potwierdzenia zakupu i dostępu do materiałów
- Komunikacji w sprawach technicznych lub zmian produktu
- Spełnienia obowiązków prawnych i podatkowych
- Zapobiegania oszustwom i bezpieczeństwa

Nie używamy Twoich danych do marketingu bez wyrażonej zgody.`,
    },
    {
      id: "przechowywanie",
      title: "5. Jak Długo Przechowujemy Dane?",
      content: `Przechowywanie danych osobowych:

- Email i dane transakcji: do 7 lat (wymóg podatkowy)
- Imię/Nazwisko: do 3 lat po ostatniej transakcji
- Adres płatnika: do 5 lat dla audytu i compliance

Po upływie tego okresu, dane są automatycznie usuwane.
W każdej chwili możesz poprosić o ich usunięcie wcześniej.`,
    },
    {
      id: "bezpieczestwo",
      title: "6. Bezpieczeństwo Danych",
      content: `Chronimy Twoje dane poprzez:

- Szyfrowanie HTTPS na całej stronie
- Bezpieczne serwery Vercel (tier-1 infrastruktura)
- Encryption at rest dla baz danych
- Stripe PCI DSS Compliance (Level 1) dla danych karty
- Resend GDPR compliance dla emaili

Nikt w naszym zespole nie ma dostępu do Twoich danych karty kredytowej.`,
    },
    {
      id: "trzecie",
      title: "7. Udostępnianie Stronom Trzecim",
      content: `Udostępniamy dane TYLKO następującym usługodawcom:

📊 Stripe (stripe.com)
- Przetwarzanie płatności
- Pełny GDPR compliance

📧 Resend (resend.com)
- Wysyłanie emaili z dostępem
- GDPR compliant

📈 Analytics (Plausible lub Google Analytics)
- Anonimowe dane o zachowaniu
- Bez identyfikacji indywidualnej

Żaden z tych serwisów nie ma dostępu do Twoich pełnych danych osobowych poza tym, co jest niezbędne do świadczenia usługi.`,
    },
    {
      id: "prawa",
      title: "8. Twoje Prawa RODO",
      content: `Przysługują Ci następujące prawa:

✓ Prawo dostępu - możesz poprosić kopię swoich danych
✓ Prawo do sprostowania - możesz poprosić zmianę danych
✓ Prawo do usunięcia - możesz poprosić usunięcie danych
✓ Prawo do ograniczenia - możesz poprosić ograniczenie przetwarzania
✓ Prawo do przenoszalności - możesz otrzymać dane w strukturze CSV
✓ Prawo do sprzeciwu - możesz się sprzeciwić przetwarzaniu

Aby wykonać któreś z tych praw, wyślij email na: adam@zlotoodzera.com
Odpowiemy w ciągu 30 dni.`,
    },
    {
      id: "cookies",
      title: "9. Cookies",
      content: `Używamy cookies do:

- Sesji użytkownika (technical cookies)
- Analytics - śledzenie odwiedzin (optional)
- Preferencji ustawień (optional)

Możesz wyłączyć cookies w ustawieniach przeglądarki, ale może to wpłynąć na funkcjonalność.

Cookie banner wyświetlany przy wejściu na stronę zawiera wszystkie opcje.`,
    },
    {
      id: "zmiany",
      title: "10. Zmiany Polityki",
      content: `Możemy aktualizować tę politykę prywatności bez ostrzeżenia.
Znaczące zmiany (które wpływają na Twoje prawa) będą komunikowane emailem.

Ostatnia aktualizacja: $(Get-Date -Format 'dd.MM.yyyy')
Data wejścia w życie: $(Get-Date -Format 'dd.MM.yyyy')`,
    },
  ];

  return (
    <>
      <NextSeo
        title="Polityka Prywatności"
        description="Polityka prywatności dla Złoto od Zera. Informacje o przetwarzaniu danych osobowych i RODO."
        canonical={`${SITE_URL}/privacy`}
        noindex
      />

      <main className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-12 px-4">
        <div className="w-full max-w-4xl mx-auto">
          <Card className="bg-white shadow-xl">
            <CardContent className="p-8 sm:p-12">
              <h1 className="text-4xl font-bold text-gray-900 mb-2">
                🔒 Polityka Prywatności
              </h1>
              <p className="text-gray-600 mb-8">
                Jak przetwarzamy i chronimy Twoje dane osobowe
              </p>

              <div className="prose prose-lg max-w-none mb-8">
                <p className="text-gray-700 leading-relaxed">
                  Szanujemy Twoją prywatność. Ta polityka wyjaśnia, jakie dane zbieramy, jak ich
                  używamy i jak Cię chronimy. Jesteśmy w pełni zgodne z RODO i polskim prawem.
                </p>
              </div>

              {/* Accordion */}
              <div className="space-y-3">
                {sections.map((section) => (
                  <div key={section.id} className="border border-gray-200 rounded-lg">
                    <button
                      onClick={() =>
                        setExpandedSection(expandedSection === section.id ? null : section.id)
                      }
                      className="w-full px-6 py-4 text-left hover:bg-gray-50 transition flex items-center justify-between"
                    >
                      <span className="font-semibold text-gray-900">{section.title}</span>
                      <ChevronDown
                        className={`h-5 w-5 text-gray-600 transition ${
                          expandedSection === section.id ? "rotate-180" : ""
                        }`}
                      />
                    </button>
                    {expandedSection === section.id && (
                      <div className="px-6 py-4 border-t border-gray-200 bg-gray-50">
                        <p className="text-gray-700 whitespace-pre-wrap leading-relaxed">
                          {section.content}
                        </p>
                      </div>
                    )}
                  </div>
                ))}
              </div>

              {/* Contact Section */}
              <div className="mt-12 rounded-lg bg-blue-50 border-2 border-blue-200 p-6">
                <h3 className="font-semibold text-blue-900 mb-3">
                  📧 Pytania o Prywatność?
                </h3>
                <p className="text-blue-800 mb-3">
                  Jeśli masz pytania dotyczące naszej polityki prywatności lub chcesz wykonać
                  swoje prawa RODO:
                </p>
                
                  href="mailto:adam@zlotoodzera.com"
                  className="inline-block bg-blue-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-blue-700 transition"
                >
                  Napisz do nas
                </a>
              </div>

              {/* Footer Links */}
              <div className="mt-8 pt-8 border-t border-gray-200 flex flex-col sm:flex-row gap-4 justify-center text-sm text-gray-600">
                <Link href="/terms" className="hover:text-gray-900 underline">
                  Regulamin
                </Link>
                <span>•</span>
                <Link href="/refunds" className="hover:text-gray-900 underline">
                  Polityka Zwrotów
                </Link>
                <span>•</span>
                <Link href="/" className="hover:text-gray-900 underline">
                  Strona Główna
                </Link>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
    </>
  );
}
