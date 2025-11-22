export default function SolutionSection() {
  const chapters = [
    {
      number: 1,
      icon: "📘",
      title: "Co To Jest Złoto Inwestycyjne",
      description: "Fundamenty: czemu inwestować, ile kupować, rodzaje złota",
    },
    {
      number: 2,
      icon: "📘",
      title: "Bezpieczeństwo Ponad Wszystko",
      description: "Checklist dealera + skrypty weryfikacyjne",
    },
    {
      number: 3,
      icon: "📘",
      title: "Twój Plan DCA (12 miesięcy)",
      description: "System miesięczny - ile kupować, kiedy, gdzie",
    },
    {
      number: 4,
      icon: "📘",
      title: "Kupujemy Fizycznie",
      description: "Monety vs sztabki + autentyczność (waga, magnes, XRF)",
    },
    {
      number: 5,
      icon: "📘",
      title: "ETF/ETC (Złoto Bez Logistyki)",
      description: "Porównanie platform, koszty, gdzie kupić",
    },
    {
      number: 6,
      icon: "📘",
      title: "Przechowywanie i OPSEC",
      description: "Sejf vs skarbiec + dokumentacja + ubezpieczenie",
    },
    {
      number: 7,
      icon: "📘",
      title: "Podatki i Aspekty Prawne",
      description: "PIT-38 krok-po-kroku + VAT + dziedziczenie",
    },
    {
      number: 8,
      icon: "📘",
      title: "Top 10 Błędów Początkujących",
      description: "Real stories + psychologia inwestowania + checklisty",
    },
    {
      number: 9,
      icon: "📘",
      title: "Kiedy i Jak Sprzedać",
      description: "4 scenariusze sprzedaży + obliczanie zysku netto",
    },
  ];

  const bonuses = [
    "Arkusz Google Sheets do śledzenia DCA (automatycznie liczy ile złota masz)",
    "Skrypty Weryfikacyjne (gotowe do copy-paste) (telefoniczne + emailowe)",
    "Checklist Autentyczności (10-punktowy system) (waga, magnes, XRF, cechy bezpieczeństwa)",
    "Szablony E-maili Do Dealerów (profesjonalne, asertywne, skuteczne)",
    "Ranking Dealerów (20+ sprawdzonych osobiście) (oceny, telefony, godziny otwarcia)",
    "Kalkulator Podatków (Excel) (wklej kwotę, oblicza automatycznie PIT-38)",
    "Gotowe Checklisty (przed zakupem, podczas, po zakupie, weryfikacja)",
  ];

  return (
    <section id="co-dostajesz" className="section-padding bg-beige">
      <div className="container-custom">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-16 text-balance">
          Czego Dostajesz W <span className="text-gradient-gold">E-Booku</span>?
        </h2>

        {/* Chapters Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {chapters.map((chapter) => (
            <div
              key={chapter.number}
              className="card bg-white group hover:scale-105"
            >
              <div className="flex items-start gap-4 mb-3">
                <span className="text-4xl">{chapter.icon}</span>
                <div className="flex-1">
                  <div className="text-sm font-bold text-gold mb-1">
                    ROZDZIAŁ {chapter.number}
                  </div>
                  <h3 className="text-lg font-bold text-brown-dark leading-snug">
                    {chapter.title}
                  </h3>
                </div>
              </div>
              <p className="text-gray-700 text-sm leading-relaxed">
                {chapter.description}
              </p>
            </div>
          ))}
        </div>

        {/* Bonus Section */}
        <div className="bg-gradient-to-br from-gold/10 to-gold/5 rounded-2xl p-8 md:p-12 border-2 border-gold/30">
          <div className="flex items-center gap-3 mb-8">
            <span className="text-5xl">🎁</span>
            <h3 className="text-2xl md:text-3xl font-bold text-brown-dark">
              7 BONUS MATERIAŁÓW
            </h3>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            {bonuses.map((bonus, index) => (
              <div key={index} className="flex items-start gap-3 bg-white rounded-lg p-4">
                <span className="text-trust-green text-2xl flex-shrink-0">✓</span>
                <p className="text-gray-800 leading-relaxed">{bonus}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <a
            href="https://www.naffy.io/enappia/zloto-bez-oszustwa"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary-lg"
          >
            Kup E-book za 49,99 PLN
          </a>
        </div>
      </div>
    </section>
  );
}
