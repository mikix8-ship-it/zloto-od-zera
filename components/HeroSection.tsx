import Image from 'next/image';

export default function HeroSection() {
  return (
    <section className="section-padding bg-gradient-to-br from-beige to-beige-light mt-16">
      <div className="container-custom">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text */}
          <div className="space-y-6">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-balance">
              Jak Kupić Złoto<br />
              <span className="text-gradient-gold">BEZ Oszustwa</span>
            </h1>

            <h2 className="text-2xl md:text-3xl font-semibold text-gold">
              System DCA Dla Początkujących
            </h2>

            <div className="text-lg md:text-xl leading-relaxed space-y-2">
              <p>9 rozdziałów + skrypty weryfikacyjne + system DCA.</p>
              <p>Wszystko co musisz wiedzieć ZANIM pójdziesz do dealera.</p>
            </div>

            <div className="space-y-1 text-lg font-medium">
              <p>✓ Przeczytaj w 2 godziny.</p>
              <p>✓ Zastosuj dzisiaj.</p>
              <p>✓ Zaoszczędź tysiące jutro.</p>
            </div>

            {/* CTA Button */}
            <div className="pt-4">
              <a
                href="https://www.naffy.io/enappia/zloto-bez-oszustwa"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary-lg inline-block w-full md:w-auto text-center"
              >
                Kup E-book za 49,99 PLN
              </a>
            </div>

            {/* Trust Badges */}
            <div className="pt-6 space-y-3 text-sm md:text-base">
              <div className="flex items-center gap-2">
                <span className="text-2xl">⭐⭐⭐⭐⭐</span>
                <span className="font-semibold">5/5 gwiazdek (10+ opinii)</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-2xl">🛡️</span>
                <span className="font-semibold">Gwarancja 14 dni zwrotu</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-2xl">⚡</span>
                <span className="font-semibold">Instant dostęp po zakupie</span>
              </div>
            </div>
          </div>

          {/* Right Column - Book Cover */}
          <div className="flex justify-center md:justify-end">
            <div className="relative w-full max-w-md">
              <div className="absolute inset-0 bg-gold/20 blur-3xl rounded-full"></div>
              <Image
                src="/images/cover.jpg"
                alt="Okładka e-booka: Jak Kupić Złoto BEZ Oszustwa"
                width={600}
                height={800}
                priority
                className="relative z-10 w-full h-auto drop-shadow-2xl hover:scale-105 transition-transform duration-300"
              />
            </div>
          </div>
        </div>

        {/* Scroll Hint */}
        <div className="text-center mt-16">
          <a
            href="#dlaczego"
            className="inline-flex flex-col items-center gap-2 text-gold hover:text-gold-dark transition-colors"
          >
            <span className="text-lg font-medium">Dowiedz się co dostajesz</span>
            <svg
              className="w-6 h-6 animate-bounce"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
