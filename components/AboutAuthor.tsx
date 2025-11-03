"use client";

import Image from "next/image";
import { Card } from "./ui/Card";
import { Badge } from "./ui/Badge";
import { AUTHOR_NAME } from "@/lib/constants";

export function AboutAuthor() {
  return (
    <section className="section bg-gradient-to-br from-gray-900 via-gray-800 to-black py-16 sm:py-24 lg:py-32">
      <div className="container-max">
        <div className="grid gap-12 items-center lg:grid-cols-2">
          <div className="hidden lg:block">
            <div className="relative h-96 w-full overflow-hidden rounded-2xl border-2 border-gold-400 shadow-2xl">
              <Image
                src="/covers/cover1.png"
                alt={AUTHOR_NAME}
                fill
                className="object-cover"
                quality={90}
              />
            </div>
          </div>

          <div>
            <Badge variant="gold" className="mb-4 inline-block">
              👨‍💼 O autorze
            </Badge>

            <h2 className="text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
              {AUTHOR_NAME}
            </h2>

            <p className="mt-6 text-lg leading-relaxed text-gray-300">
              Cześć! Jestem {AUTHOR_NAME} — inwestor, edukator i pasjonat inwestycji w złoto. Od
              ponad 10 lat studiuję rynki metali szlachetnych i dzielę się swoją wiedzą z setkami
              ludzi, którzy chcą zacząć inwestować bezpiecznie.
            </p>

            <p className="mt-4 text-lg leading-relaxed text-gray-300">
              Ten e-book powstał z jedną misją: <strong>pokazać Ci, że inwestowanie w złoto nie
              jest skomplikowane</strong>. Wiem, że początek jest straszący. Dlatego napisałem to
              wszystko najprościej jak się da — bez bzdur, tylko fakty i praktyka.
            </p>

            <div className="mt-8 space-y-4">
              {[
                { icon: "🏆", label: "Ponad 500 zadowolonych czytelników" },
                { icon: "📚", label: "5 e-booków o inwestycjach" },
                { icon: "💼", label: "Doradca ds. metali szlachetnych" },
                { icon: "📧", label: "Newsletter: 1000+ subskrybentów" },
              ].map((credential, idx) => (
                <div key={idx} className="flex items-center gap-3 text-gray-300">
                  <span className="text-2xl">{credential.icon}</span>
                  <span>{credential.label}</span>
                </div>
              ))}
            </div>

            <div className="mt-8 p-6 rounded-lg bg-gold-500/10 border border-gold-400/30">
              <p className="text-gold-300 font-semibold">
                💬 Pytania? Napisz do mnie:{" "}
                <a href="mailto:adam@zlotoodzera.com" className="text-gold-400 hover:text-gold-300 underline">
                  adam@zlotoodzera.com
                </a>
              </p>
              <p className="mt-2 text-sm text-gray-400">
                Odpowiadam na każdą wiadomość w ciągu 48 godzin.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutAuthor;

