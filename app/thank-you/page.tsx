"use client";

import Link from "next/link";
import { NextSeo } from "next-seo";
import { Button } from "@/components/ui/Button";
import { Card, CardContent } from "@/components/ui/Card";
import { CheckCircle, Mail, Download, HelpCircle } from "lucide-react";
import { SITE_URL } from "@/lib/constants";

export default function ThankYouPage() {
  return (
    <>
      <NextSeo
        title="Dziękujemy za zakup!"
        description="Twój e-book jest już w drodze na Twój email."
        canonical={`$${SITE_URL}/thank-you`}
        noindex
      />

      <main className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center py-12 px-4">
        <div className="w-full max-w-2xl">
          <Card className="border-2 border-green-400 bg-white shadow-xl">
            <CardContent className="p-8 sm:p-12 text-center">
              <div className="mx-auto mb-6">
                <CheckCircle className="h-16 w-16 text-green-500 mx-auto animate-pulse" />
              </div>

              <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-3">
                🎉 Dziękujemy za zakup!
              </h1>

              <p className="text-lg text-gray-600 mb-8">
                Twój e-book "Złoto od Zera" został pomyślnie zamówiony.
              </p>

              <div className="space-y-6 text-left">
                {[
                  {
                    icon: <Mail className="h-6 w-6" />,
                    title: "Krok 1: Sprawdź email",
                    description:
                      "Za chwilę otrzymasz email na adres, który podałeś przy zakupie. Zawiera on link do pobrania e-booka.",
                    note: "📧 Sprawdź folder Spam czy nie wpadł tam email.",
                  },
                  {
                    icon: <Download className="h-6 w-6" />,
                    title: "Krok 2: Pobierz plik",
                    description:
                      "Kliknij link w emailu i pobierz plik PDF. Linki są ważne przez 30 dni.",
                    note: "💾 Zapisz plik na swoim komputerze lub w chmurze (Google Drive, OneDrive).",
                  },
                  {
                    icon: <HelpCircle className="h-6 w-6" />,
                    title: "Krok 3: Przeczytaj i ciesz się",
                    description:
                      "Otwórz PDF na swoim urządzeniu i zacznij czytać. Wszystko jest już w pliku.",
                    note: "✨ Możesz drukować szablony i arkusze bezpośrednio z PDF-a.",
                  },
                ].map((step, idx) => (
                  <div key={idx} className="flex gap-4 pb-6 border-b border-gray-200 last:border-0">
                    <div className="flex-shrink-0 text-gold-600">{step.icon}</div>
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">
                        {step.title}
                      </h3>
                      <p className="text-gray-700 mb-2">{step.description}</p>
                      <p className="text-sm text-gray-600 bg-gray-50 p-3 rounded italic">
                        {step.note}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8 rounded-lg border-2 border-yellow-200 bg-yellow-50 p-6 text-left">
                <h4 className="font-semibold text-yellow-900 mb-3">⚠️ Nie masz emaila?</h4>
                <ul className="text-sm text-yellow-800 space-y-2">
                  <li>
                    ✓ <strong>Sprawdź folder Spam</strong> — czasami email trafia do spamu
                  </li>
                  <li>
                    ✓ <strong>Czekaj 15 minut</strong> — email może przyjść z opóźnieniem
                  </li>
                  <li>
                    ✓{" "}
                    <strong>
                      Napisz do nas:{" "}
                      
                        href="mailto:adam@zlotoodzera.com"
                        className="text-yellow-700 hover:text-yellow-900 underline"
                      >
                        adam@zlotoodzera.com
                      </a>
                    </strong>
                    — wyślemy plik ręcznie
                  </li>
                </ul>
              </div>

              <div className="mt-8 space-y-4">
                <div className="rounded-lg border border-gray-200 p-4 text-left">
                  <h5 className="font-semibold text-gray-900 mb-2">
                    Czy e-book jest bezpieczny?
                  </h5>
                  <p className="text-sm text-gray-600">
                    Tak, w 100%. PDF-y nie zawierają wirusów ani malware'u. Możesz go bezpiecznie
                    otwierać na wszystkich urządzeniach.
                  </p>
                </div>

                <div className="rounded-lg border border-gray-200 p-4 text-left">
                  <h5 className="font-semibold text-gray-900 mb-2">
                    Czy mogę udostępnić e-book?
                  </h5>
                  <p className="text-sm text-gray-600">
                    E-book jest na Twój osobisty użytek. Nie wolno go sprzedawać ani rozpowszechniać.
                    Zachęcamy jednak do rekomendowania naszej strony znajomym! 😊
                  </p>
                </div>

                <div className="rounded-lg border border-gray-200 p-4 text-left">
                  <h5 className="font-semibold text-gray-900 mb-2">Czy będę mieć dostęp do aktualizacji?</h5>
                  <p className="text-sm text-gray-600">
                    Tak! Gdy będzie nowa wersja e-booka, wyślemy Ci email z linkiem do pobrania
                    zaktualizowanego pliku. Bez dodatkowych opłat.
                  </p>
                </div>
              </div>

              <div className="mt-12 flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/">
                  <Button variant="outline" size="lg" className="font-semibold">
                    ← Wróć na stronę główną
                  </Button>
                </Link>
                <a href="mailto:adam@zlotoodzera.com">
                  <Button variant="gold" size="lg" className="font-semibold">
                    📧 Pomoc techniczna
                  </Button>
                </a>
              </div>

              <div className="mt-8 text-center text-sm text-gray-600">
                <p>
                  Dziękujemy za wsparcie! 🙏 Twoje opinie pomagają nam tworzyć lepsze materiały
                  edukacyjne.
                </p>
              </div>
            </CardContent>
          </Card>

          <div className="mt-6 rounded-lg bg-green-50 border-2 border-green-200 p-6 text-center text-sm text-green-900">
            <p>
              <strong>✓ Gwarancja 14 dni:</strong> Jeśli e-book nie spełni Twoich oczekiwań, zwrócimy
              pełne pieniądze bez pytań.
            </p>
          </div>
        </div>
      </main>
    </>
  );
}

