export default function BenefitsSection() {
  const benefits = [
    {
      icon: "💰",
      title: "OSZCZĘDŹ TYSIĄCE",
      description: "Unikniesz błędów które kosztują 5,000-10,000 PLN. System DCA = automatyczne oszczędzanie bez stresu. Zarobi się samo, bez emocji.",
    },
    {
      icon: "🛡️",
      title: "BEZPIECZEŃSTWO OD DNIA JEDEN",
      description: "Skrypty weryfikacyjne = zero oszustw. Wiesz co szukać, zanim wejdziesz do sklepu. Red flags lista = instant ochrona.",
    },
    {
      icon: "📊",
      title: "SYSTEM ZAMIAST CHAOSU",
      description: "DCA plan = konsekwencja bez emocji. Wiesz dokładnie ile, gdzie, kiedy kupować. Brak FOMO, brak paniki - tylko matematyka.",
    },
    {
      icon: "⚡",
      title: "PRAKTYCZNE, NIE TEORETYCZNE",
      description: "7 lat doświadczenia + 20+ książek + 50+ podcastów. Tylko to co NAPRAWDĘ działa w praktyce. Real stories, konkretne liczby, działające systemy.",
    },
  ];

  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-16 text-balance">
          Dlaczego Ten E-Book <span className="text-gradient-gold">Działa</span>?
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          {benefits.map((benefit, index) => (
            <div key={index} className="card group hover:border-gold border-2 border-transparent">
              <div className="flex items-start gap-4 mb-4">
                <span className="text-5xl">{benefit.icon}</span>
                <h3 className="text-xl md:text-2xl font-bold text-brown-dark">
                  {benefit.title}
                </h3>
              </div>
              <p className="text-gray-700 text-lg leading-relaxed">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
