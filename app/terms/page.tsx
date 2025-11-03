"use client";

import Link from "next/link";
import { NextSeo } from "next-seo";
import { Card, CardContent } from "@/components/ui/Card";
import { ChevronDown } from "lucide-react";
import { SITE_URL } from "@/lib/constants";
import { useState } from "react";

export default function TermsPage() {
  const [expandedSection, setExpandedSection] = useState<string | null>(null);

  const sections = [
    {
      id: "przyjmowanie",
      title: "1. Przyjęcie Warunków",
      content: `Wchodząc na zlotoodzera.com i dokonując zakupu e-booka "Złoto od Zera", akceptujesz niniejszy regulamin.

Jeśli się nie zgadzasz z dowolną częścią, nie dokonuj zakupu. Regulamin obowiązuje każdego użytkownika.

Ta umowa jest zawarta między Tobą (Kupujący) a Adam Złotopolski (Sprzedawca).`,
    },
    {
      id: "produkt",
      title: "2. Opis Produktu",
      content: `Produkt: E-book "Złoto od Zera"
Format: PDF
Dostęp: Link do pobrania wysyłany na email
Liczba pobrań: Nieograniczona (przez 30 dni)

E-book zawiera:
- Ponad 80 stron wiedzy o inwestowaniu w złoto
- Praktyczne szablony i checklisty
- Realnych scenariuszy i studium przypadków
- FAQ i odpowiedzi na częste pytania

Produkt jest dostarcony "tak jak jest". Nie ma fizycznego produktu do wysyłki.`,
    },
    {
      id: "cena",
      title: "3. Cena i Płatność",
      content: `Cena: 49,99 PLN (lub aktualna cena na stronie)
Waluta: PLN (złoty polski)
Podatek VAT: Nie dotyczy (usługa cyfrowa)

Płatność:
- Przetwarzana przez Stripe
- Karty kredytowe: Visa, Mastercard, itp.
- Przelewy bankowe (w zależności od ustawień Stripe)

Potwierdzenie płatności będzie wysłane na email w ciągu minut.

Ceny mogą się zmieniać. Obowiązuje cena wyświetlana w momencie zakupu.`,
    },
    {
      id: "dostawa",
      title: "4. Dostawa i Dostęp",
      content: `Dostęp do e-booka:
- Email z linkiem do pobrania przybywa natychmiast (do 5 minut)
- Link ważny przez 30 dni od zakupu
- Możesz pobrać plik wielokrotnie w tym okresie
- Po 30 dniach link wygasa

Jeśli email się nie pojawił:
1. Sprawdź folder Spam
2. Czekaj 15 minut
3. Napisz do nas: adam@zlotoodzera.com

Plik PDF jest kompatybilny ze wszystkimi urządzeniami i czytnikami PDF.`,
    },
    {
      id: "autorskie",
      title: "5. Prawa Autorskie",
      content: `Prawo autorskie:
Copyright © Adam Złotopolski. Wszystkie prawa zastrzeżone.

Dozwolone użytkowanie:
✓ Osobiste czytanie i studiowanie
✓ Drukowanie do użytku osobistego
✓ Notatki i podkreślenia
✓ Udostępnianie rekomendacji na social media

Zakazane:
✗ Reprodukowanie bez pozwolenia
✗ Sprzedaż lub wymiana
✗ Publikacja online lub torrenty
✗ Modyfikacja i tworzenie dzieł pochodnych
✗ Rozpowszechnianie wśród żadnej liczby osób

Naruszenie praw autorskich będzie egzekwowane.`,
    },
    {
      id: "odpowiedzialnosc",
      title: "6. Ograniczenie Odpowiedzialności",
      content: `E-book zawiera informacje edukacyjne, ale NIE JEST:
- Poradą finansową lub inwestycyjną
- Rekomendacją do kupna/sprzedaży złota
- Gwarancją zysków

Złoto, jak każda inwestycja, ma swoje ryzyka:
- Ceny mogą spadać
- Niemożliwe jest osiągnięcie zwrotu
- Rynek jest zmiennie

Stosując strategie z e-booka, działasz na własne ryzyko. Przed inwestycją konsultuj się z doradcą finansowym.

Nie ponosimy odpowiedzialności za:
- Straty finansowe z inwestycji w złoto
- Decyzje kupna/sprzedaży
- Techniczne problemy z otwarciem pliku
- Utratę dostępu do pliku`,
    },
    {
      id: "disclaimer",
      title: "7. Oświadczenia Prawne",
      content: `DISCLAIMER:
Informacje w e-booku są zbierane z publicznych źródeł i są aktualne na dzień publikacji.

Nie gwarantujemy:
- Dokładność wszystkich informacji
- Przydatność dla Twoich celów
- Że e-book spełni Twoje oczekiwania

Przepisy mogą się zmienić. Zawsze sprawdzaj aktualne regulacje.

BRAK ZATRUDNIENIA:
Nie tworzył się tu stosunek pracy, agencji lub partnerstwa między Tobą a nami.`,
    },
    {
      id: "odstapienie",
      title: "8. Prawo do Odstąpienia (14 dni)",
      content: `Masz prawo odstąpić od umowy kupna w ciągu 14 dni (zgodnie z UoKiK art. 27):

Przysługuje Ci zwrot pełnej ceny, jeśli:
✓ Złożysz wniosek w ciągu 14 dni od zakupu
✓ E-book nie spełnia Twoich oczekiwań
✓ Nie masz wymag medycznych ani technicznych

Procedura:
1. Wyślij email: adam@zlotoodzera.com
2. Tytułem: "Wnioskuję o prawo do odstąpienia"
3. Zawrzyj: numer transakcji, e-mail, powód
4. Otrzymasz potwierdzenie
5. Zwrot w ciągu 14 dni od potwierdzenia

Prawo do odstąpienia NIE przysługuje, jeśli:
✗ Pobierałeś zawartość e-booka i nie możemy go przywrócić
✗ Minęło 30 dni od zakupu (prawidłowe dla usług cyfrowych)

Kwota zwrotu: 100% ceny zakupu, bez pytań.`,
    },
    {
      id: "zmiana",
      title: "9. Zmiany i Aktualizacje",
      content: `Prawo do zmian:
Możemy aktualizować e-book i zawartość bez wcześniejszego ostrzeżenia.

Aktualizacje:
- Jeśli wprowadzę nową wersję, otrzymasz email
- Link do nowej wersji będzie dostępny na email
- Bez dodatkowych opłat
- Obowiązkowa aktualizacja: nie, opcjonalna

Zmiany w regulaminie:
- Mogą być zmieniane w dowolnym czasie
- Obowiązują nowe warunki dla nowych kupujących
- Istniejące zakupy nie są reterminizowane`,
    },
    {
      id: "zakazane",
      title: "10. Zakazane Działania",
      content: `Zgadzasz się, że NIE będziesz:

✗ Naruszać prawa autorskie
✗ Rozpowszechniać e-book publicznie
✗ Tworzyć wersji poza systemem (modyfikacje)
✗ Sprzedawać lub handlować e-bookiem
✗ Tworzyć marki/domeny typu "zloto-od-zera"
✗ Wykorzystywać do spamu lub phishingu
✗ Atakować naszą stronę lub serwery

Naruszenie tych warunków będzie skutkować:
- Utratą dostępu do e-booka
- Roszczeniami o odszkodowanie
- Powiadomieniem mediów o naruszeniu`,
    },
    {
      id: "force-majeure",
      title: "11. Siła Wyższa",
      content: `Nie ponosimy odpowiedzialności za niedostarczenie usługi spowodowane:

- Awariami internetu
- Atakami cybernetycznymi
- Katastrofami naturalnymi
- Działań wojennych
- Rozporządzeniami rządowymi
- Innymi zdarzeniami poza naszą kontrolą

W takim wypadku:
- Wspieramy Cię przez email
- Możesz wnioskować o zwrot
- Odpowiemy w ciągu 30 dni`,
    },
    {
      id: "prawo",
      title: "12. Prawo Właściwe",
      content: `Ta umowa jest rządzona prawem Polski.
Jurysdykcja: Sądy polskie (miejscowe)

Interpretacja:
Te warunki są interpretowane zgodnie z polskim kodeksem cywilnym, ustawą o ochronie konsumenta (UoKiK) i RODO.

Konflikt: W przypadku konfliktu między wersjami, obowiązuje wersja polska.`,
    },
    {
      id: "kontakt",
      title: "13. Kontakt",
      content: `Wszelkie pytania lub problemy? Skontaktuj się z nami:

📧 Email: adam@zlotoodzera.com
🌐 Strona: zlotoodzera.com

Odpowiadamy w ciągu 24-48 godzin.

Dla skarg technicznych:
- Opis problemu
- Numer transakcji
- Zrzut ekranu (jeśli możliwe)

Staramy się rozwiązać każdy problem szybko i sprawiedliwie.`,
    },
  ];

  return (
    <>
      <NextSeo
        title="Regulamin"
        description="Regulamin dla Złoto od Zera. Warunki korzystania z e-booka i zasady zakupu."
        canonical={`${SITE_URL}/terms`}
        noindex
      />

      <main className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-12 px-4">
        <div className="w-full max-w-4xl mx-auto">
          <Card className="bg-white shadow-xl">
            <CardContent className="p-8 sm:p-12">
              <h1 className="text-4xl font-bold text-gray-900 mb-2">
                📋 Regulamin
              </h1>
              <p className="text-gray-600 mb-8">
                Warunki korzystania z e-booka "Złoto od Zera"
              </p>

              <div className="prose prose-lg max-w-none mb-8">
                <p className="text-gray-700 leading-relaxed">
                  Proszę przeczytać uważnie. Dokonując zakupu, akceptujesz wszystkie warunki.
                  Jeśli masz pytania, skontaktuj się z nami przed zakupem.
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

              {/* Important Notice */}
              <div className="mt-12 rounded-lg bg-orange-50 border-2 border-orange-200 p-6">
                <h3 className="font-semibold text-orange-900 mb-3">
                  ⚠️ Ważne Oświadczenie
                </h3>
                <p className="text-orange-800 leading-relaxed">
                  E-book zawiera informacje edukacyjne i nie stanowi porady finansowej.
                  Każda inwestycja niesie ze sobą ryzyko. Przed inwestycją w złoto
                  konsultuj się z doradcą finansowym.
                </p>
              </div>

              {/* Footer Links */}
              <div className="mt-8 pt-8 border-t border-gray-200 flex flex-col sm:flex-row gap-4 justify-center text-sm text-gray-600">
                <Link href="/privacy" className="hover:text-gray-900 underline">
                  Polityka Prywatności
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
