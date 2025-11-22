export default function ProblemSection() {
  const problems = [
    {
      title: "BŁĄD: Oszustwo przy pierwszym zakupie",
      description: "Dealerzy sprzedają fałszywki początkującym. Średnia strata: 5,000-10,000 PLN.",
      solution: "Skrypty weryfikacyjne + checklist autentyczności",
      subtext: "(Uniknij błędów które kosztują tysiące)",
    },
    {
      title: "BŁĄD: Panika psychiczna (emocje zamiast planu)",
      description: "Kupują na szczycie, sprzedają na dole. FOMO + strach = złe decyzje. Tracą 20-30% na zwrotach.",
      solution: "System DCA (konsekwencja bez emocji)",
    },
    {
      title: "BŁĄD: Bałagan z podatkami",
      description: "Niespodzianki od US = dodatkowe koszty. PIT-38? Zasada 6 miesięcy? Nikt nie wyjaśnia.",
      solution: "PIT-38 krok-po-kroku + kalkulator Excel",
    },
    {
      title: "BŁĄD: Przechowywanie bez planu",
      description: "Sejf domowy = ryzyko włamań. Skarbiec = poczucie bezpieczeństwa, ale jaki wybrać? Ludzie tracą pieniądze na błędach.",
      solution: "Kompletny OPSEC guide + ranking placówek",
    },
  ];

  return (
    <section id="dlaczego" className="section-padding bg-white">
      <div className="container-custom">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-16 text-balance">
          Dlaczego 95% Ludzi Kupuje Złoto <span className="text-gradient-gold">ŹLE</span>?
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          {problems.map((problem, index) => (
            <div key={index} className="card group hover:border-gold border-2 border-transparent">
              <div className="flex items-start gap-3 mb-4">
                <span className="text-4xl">❌</span>
                <h3 className="text-xl font-bold text-brown-dark">{problem.title}</h3>
              </div>

              <p className="text-gray-700 mb-4 leading-relaxed">
                {problem.description}
              </p>

              <div className="border-t-2 border-gold/20 pt-4 mt-4">
                <div className="flex items-start gap-3">
                  <span className="text-2xl">→</span>
                  <div>
                    <p className="font-bold text-trust-green mb-1">ROZWIĄZANIE:</p>
                    <p className="text-gray-800 font-medium">{problem.solution}</p>
                    {problem.subtext && (
                      <p className="text-sm text-gray-600 mt-1 italic">{problem.subtext}</p>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
