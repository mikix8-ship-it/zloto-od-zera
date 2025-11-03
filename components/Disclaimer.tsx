"use client";

import { AlertCircle } from "lucide-react";

export function Disclaimer() {
  return (
    <section className="section bg-red-50 py-12 sm:py-16 lg:py-20">
      <div className="container-max">
        <div className="rounded-lg border-2 border-red-300 bg-white p-8 sm:p-12">
          <div className="flex gap-4">
            <div className="flex-shrink-0">
              <AlertCircle className="h-8 w-8 text-red-600 sm:h-10 sm:w-10" />
            </div>

            <div className="flex-1">
              <h3 className="text-xl font-bold text-red-900 sm:text-2xl">
                ⚠️ Ważny disclaimer
              </h3>

              <div className="mt-4 space-y-4 text-gray-700">
                <p>
                  <strong>Złoto od Zera</strong> jest materiałem edukacyjnym i informacyjnym.
                  <strong className="block mt-2">
                    NIE STANOWI PORADY INWESTYCYJNEJ, FINANSOWEJ LUB PODATKOWEJ.
                  </strong>
                </p>

                <div className="border-l-4 border-red-500 pl-4">
                  <p className="font-semibold text-gray-900">
                    Informujemy, że:
                  </p>
                  <ul className="mt-3 space-y-2 list-disc list-inside">
                    <li>
                      Wyniki inwestycyjne z przeszłości nie gwarantują przyszłych wyników
                    </li>
                    <li>
                      Inwestowanie w złoto wiąże się z ryzykiem utraty kapitału
                    </li>
                    <li>
                      Podatki i przepisy prawne mogą się zmieniać — zawsze konsultuj z
                      doradcą
                    </li>
                    <li>
                      Wszystkie decyzje inwestycyjne podejmuj samodzielnie i na własną
                      odpowiedzialność
                    </li>
                  </ul>
                </div>

                <p className="text-sm text-gray-600 italic">
                  Autor e-booka nie ponosi odpowiedzialności za jakiekolwiek straty lub
                  szkody wynikające z decyzji podjętych na podstawie informacji zawartych w
                  materiale.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Disclaimer;
