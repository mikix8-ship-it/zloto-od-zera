"use client";

import Link from "next/link";
import { NextSeo } from "next-seo";
import { Card, CardContent } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { CheckCircle, XCircle, Clock, DollarSign } from "lucide-react";
import { SITE_URL } from "@/lib/constants";

export default function RefundsPage() {
  return (
    <>
      <NextSeo
        title="Polityka Zwrotów"
        description="14 dni na zwrot, pełny zwrot pieniędzy, bez pytań. Gwarancja satysfakcji dla Złoto od Zera."
        canonical={`${SITE_URL}/refunds`}
        noindex
      />

      <main className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-12 px-4">
        <div className="w-full max-w-4xl mx-auto">
          {/* Main Card */}
          <Card className="bg-white shadow-xl mb-8">
            <CardContent className="p-8 sm:p-12 text-center">
              <div className="mb-6">
                <CheckCircle className="h-16 w-16 text-green-500 mx-auto" />
              </div>
              <h1 className="text-4xl font-bold text-gray-900 mb-3">
                💯 Gwarancja Satysfakcji
              </h1>
              <p className="text-xl text-gray-600 mb-4">
                Jeśli e-book Ci się nie spodoba, zwrócimy Ci całe pieniądze.
              </p>
              <div className="text-5xl font-bold text-green-600 mb-2">14 DNI</div>
              <p className="text-gray-600">
                Masz pełne dwie tygodnie na zmianę zdania — bez żadnych pytań.
              </p>
            </CardContent>
          </Card>

          {/* How It Works */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <Card className="bg-white shadow-lg">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <Clock className="h-8 w-8 text-blue-600 mr-3" />
                  <h3 className="text-xl font-semibold text-gray-900">
                    Kiedy Mogę Zwrócić?
                  </h3>
                </div>
                <div className="text-gray-700 space-y-2">
                  <p>✓ Do 14 dni od zakupu</p>
                  <p>✓ Bez względu na powód</p>
                  <p>✓ Nawet jeśli e-book otwierałeś</p>
                  <p>✓ Bez pytań o przyczynę</p>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white shadow-lg">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <DollarSign className="h-8 w-8 text-green-600 mr-3" />
                  <h3 className="text-xl font-semibold text-gray-900">
                    Co Zwracamy?
                  </h3>
                </div>
                <div className="text-gray-700 space-y-2">
                  <p>✓ 100% ceny zakupu</p>
                  <p>✓ Na ten sam rachunek</p>
                  <p>✓ W ciągu 14 dni</p>
                  <p>✓ Bez potrąceń ani opłat</p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Step by Step */}
          <Card className="bg-white shadow-xl mb-8">
            <CardContent className="p-8 sm:p-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-8">
                📝 Jak Zgłosić Zwrot?
              </h2>

              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-10 w-10 rounded-full bg-blue-600 text-white font-bold">
                      1
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      Wyślij Email
                    </h3>
                    <p className="text-gray-700 mb-2">
                      Wyślij email na adres adam@zlotoodzera.com z tytułem:
                    </p>
                    <div className="bg-gray-100 p-3 rounded text-gray-800 font-mono text-sm mb-2">
                      "Wnioskuję o zwrot - prawo do odstąpienia"
                    </div>
                    <p className="text-gray-600 text-sm">
                      Lub po prostu napisz że chcesz zwrot. Nie musisz podawać szczegółów.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-10 w-10 rounded-full bg-blue-600 text-white font-bold">
                      2
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      Podaj Dane Transakcji
                    </h3>
                    <p className="text-gray-700 mb-2">W emailu załącz:</p>
                    <ul className="text-gray-700 space-y-1 ml-4">
                      <li>• Twój email (który używałeś do zakupu)</li>
                      <li>• Numer transakcji Stripe (z emaila potwierdzenia)</li>
                      <li>• Datę zakupu (przybliżona)</li>
                    </ul>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-10 w-10 rounded-full bg-blue-600 text-white font-bold">
                      3
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      Potwierdzenie
                    </h3>
                    <p className="text-gray-700">
                      Odpowiemy w ciągu 24-48 godzin z potwierdzeniem zwrotu.
                      Podamy Ci numer wniosku do śledzenia procesu.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-10 w-10 rounded-full bg-blue-600 text-white font-bold">
                      4
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      Zwrot Pieniędzy
                    </h3>
                    <p className="text-gray-700">
                      Pieniądze zostaną zwrócone na Twoją kartę w ciągu 3-5 dni roboczych.
                      Czasami może to trwać do 2 tygodni w zależności od banku.
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* FAQ Style */}
          <Card className="bg-white shadow-xl mb-8">
            <CardContent className="p-8 sm:p-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-8">
                ❓ Częste Pytania
              </h2>

              <div className="space-y-6">
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">
                    Czy muszę podawać powód zwrotu?
                  </h4>
                  <p className="text-gray-700">
                    Nie. To Twoje prawo do odstąpienia od umowy. Możesz po prostu powiedzieć
                    "chcę zwrot" i to wystarczy.
                  </p>
                </div>

                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">
                    A jeśli już przeczytałem cały e-book?
                  </h4>
                  <p className="text-gray-700">
                    Bez problemu. Nawet jeśli pobierałeś i czytałeś, masz prawo do zwrotu
                    w ciągu 14 dni. To prawo do odstąpienia od umowy, nie warunkowski zwrot.
                  </p>
                </div>

                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">
                    Ile czasu zajmuje zwrot?
                  </h4>
                  <p className="text-gray-700">
                    Potwierdzenie: 24-48 godzin
                    <br />
                    Zwrot do banku: 3-5 dni roboczych
                    <br />
                    Pojawienie się na koncie: 1-2 tygodnie (zależy od banku)
                  </p>
                </div>

                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">
                    Czy będą jakieś opłaty lub potrącenia?
                  </h4>
                  <p className="text-gray-700">
                    Nie. Zwracamy 100% kwoty, jaką zapłaciłeś. Bez żadnych opłat za przetwarzanie
                    czy potrąceń. Jedyną kosztami może być prowizja banku (nie nasza odpowiedzialność).
                  </p>
                </div>

                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">
                    Czy mogę zwrócić po 14 dniach?
                  </h4>
                  <p className="text-gray-700">
                    Prawo do odstąpienia obowiązuje przez 14 dni. Po tym okresie nie możemy
                    zaakceptować zwrotu (to prawo konsumenta). Ale skontaktuj się z nami — być może
                    znajdziemy inne rozwiązanie.
                  </p>
                </div>

                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">
                    Czy będę mieć dostęp do e-booka po zwrocie?
                  </h4>
                  <p className="text-gray-700">
                    Nie. Po potwierdzeniu zwrotu, Twój dostęp do e-booka zostanie odwołany.
                    Link do pobrania stanie się nieaktywny.
                  </p>
                </div>

                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">
                    Czy mogę poprosić o zwrot telefonem/wiadomością?
                  </h4>
                  <p className="text-gray-700">
                    Preferujemy email (zachowujemy dokumentację), ale możesz napisać na formularzu kontaktu. 
                    Email jest jednak bezpieczniejszy dla obu stron.
                  </p>
                </div>

                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">
                    Jaki jest mój adres email do zwrotów?
                  </h4>
                  <p className="text-gray-700">
                    adam@zlotoodzera.com
                    <br />
                    Tytuł: "Wnioskuję o zwrot"
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Important Info */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <Card className="bg-green-50 border-2 border-green-200">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <CheckCircle className="h-6 w-6 text-green-600 mr-3" />
                  <h3 className="text-lg font-semibold text-green-900">
                    To Jest Legalne ✓
                  </h3>
                </div>
                <p className="text-green-800 text-sm">
                  To prawo konsumenta wynikające z UoKiK (Ustawa o Ochronie
                  Konkurencji i Konsumentów). Każdy ma prawo do 14 dni na zmianę zdania.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-blue-50 border-2 border-blue-200">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <CheckCircle className="h-6 w-6 text-blue-600 mr-3" />
                  <h3 className="text-lg font-semibold text-blue-900">
                    Bez Ryzyka ✓
                  </h3>
                </div>
                <p className="text-blue-800 text-sm">
                  Kupujesz bez ryzyka. Jeśli e-book się Ci nie spodoba, po prostu poprosisz
                  zwrot. Nie będziemy się spierać.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Contact CTA */}
          <Card className="bg-gradient-to-r from-blue-600 to-blue-700 text-white shadow-xl">
            <CardContent className="p-8 sm:p-12 text-center">
              <h2 className="text-2xl font-bold mb-4">
                Masz Pytania o Zwrocie?
              </h2>
              <p className="text-blue-100 mb-6">
                Napisz do nas. Odpowiemy szybko i wyczerpująco.
              </p>
              <a href="mailto:adam@zlotoodzera.com">
                <Button variant="outline" size="lg" className="font-semibold text-blue-600">
                  📧 Napisz do nas
                </Button>
              </a>
            </CardContent>
          </Card>

          {/* Footer Links */}
          <div className="mt-8 pt-8 text-center border-t border-gray-200">
            <div className="flex flex-col sm:flex-row gap-4 justify-center text-sm text-gray-600">
              <Link href="/privacy" className="hover:text-gray-900 underline">
                Polityka Prywatności
              </Link>
              <span>•</span>
              <Link href="/terms" className="hover:text-gray-900 underline">
                Regulamin
              </Link>
              <span>•</span>
              <Link href="/" className="hover:text-gray-900 underline">
                Strona Główna
              </Link>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
