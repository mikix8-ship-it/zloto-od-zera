export default function FinalCTASection() {
  return (
    <section className="section-padding bg-gradient-to-br from-gold via-gold-dark to-gold text-white">
      <div className="container-custom max-w-4xl text-center">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-12 text-balance">
          Zacznij Dzisiaj
        </h2>

        {/* Comparison */}
        <div className="grid md:grid-cols-2 gap-8 mb-12 text-left">
          {/* Option A */}
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border-2 border-white/30">
            <h3 className="text-2xl font-bold mb-4">OPCJA A:</h3>
            <p className="text-xl font-semibold mb-4">Czytaj losowe artykuły online</p>
            <ul className="space-y-2 mb-6">
              <li className="flex items-start gap-2">
                <span className="text-xl">•</span>
                <span>Ryzyko: Sprzeczne info, oszustwo, strata tysięcy</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-xl">•</span>
                <span>Koszt: Nic</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-xl">•</span>
                <span>Wynik: 0</span>
              </li>
            </ul>
          </div>

          {/* Option B */}
          <div className="bg-white text-brown-dark rounded-xl p-8 border-4 border-white shadow-2xl transform md:scale-105">
            <div className="bg-gold text-white text-sm font-bold px-3 py-1 rounded-full inline-block mb-4">
              REKOMENDOWANE
            </div>
            <h3 className="text-2xl font-bold mb-4">OPCJA B:</h3>
            <p className="text-xl font-semibold mb-4">Kup e-book &quot;Jak Kupić Złoto BEZ Oszustwa&quot;</p>
            <ul className="space-y-2 mb-6">
              <li className="flex items-start gap-2">
                <span className="text-trust-green text-xl">✓</span>
                <span>Koszt: 49,99 PLN (mniej niż kolacja)</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-trust-green text-xl">✓</span>
                <span>Benefit: System, bezpieczeństwo, oszczędzenie tysiące</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-trust-green text-xl">✓</span>
                <span>Gwarancja: 14 dni zwrotu</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-trust-green text-xl">✓</span>
                <span>Wynik: Spokój finansowy</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t-2 border-white/30 pt-8 mb-8">
          <p className="text-2xl font-bold mb-2">Którą wybierzesz?</p>
        </div>

        {/* Massive CTA */}
        <a
          href="https://www.naffy.io/enappia/zloto-bez-oszustwa"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block px-16 py-8 bg-white text-gold font-bold text-2xl rounded-2xl shadow-2xl hover:scale-105 transition-all duration-300 hover:shadow-gold/50 mb-8"
        >
          Kup E-book za 49,99 PLN
        </a>

        {/* Subtext */}
        <div className="space-y-2 text-lg opacity-90">
          <p className="flex items-center justify-center gap-2">
            <span>✓</span> Instant dostęp po zakupie
          </p>
          <p className="flex items-center justify-center gap-2">
            <span>✓</span> Gwarancja 14 dni zwrotu
          </p>
          <p className="flex items-center justify-center gap-2">
            <span>✓</span> Darmowe aktualizacje przez rok
          </p>
          <p className="flex items-center justify-center gap-2">
            <span>✓</span> Bonus: Kalkulator podatków + szablony
          </p>
        </div>
      </div>
    </section>
  );
}
