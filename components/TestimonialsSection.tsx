export default function TestimonialsSection() {
  const testimonials = [
    {
      rating: 5,
      title: "Uratowało mnie przed fałszywką",
      text: "Czytałem e-book. Poszedłem do dealera ze skryptem z e-booka. Ten zrobił wielkie oczy - okazało się że sprzedaje fałszywkę. Oszczędziłem sobie 5,000 PLN na pierwszym zakupie.\n\nKiedy czytam wiele artykułów online - wszystko jest sprzeczne. E-book wyjaśnia CZEMU tak, a nie inaczej.\n\nPolecam.",
      author: "Jerzy B., Kraków",
      role: "55 lat, emeryt, Inwestor",
    },
    {
      rating: 5,
      title: "Wreszcie coś co DZIAŁA",
      text: "Nie mialem wiedzy o inwestowaniu w złoto. Teraz wiem jak kupować, gdzie przechowywać, jak uniknąć oszustów. System DCA - genialny.\n\nSzczególnie podoba mi się że autor wyjaśnia PIT-38 i podatki. Chciałem zapytać doradcę finansowego (koszt: 500-1000 PLN), ale e-book wyjaśnił wszystko jasno.\n\nCena 49,99 zł? To poniżej wartości.",
      author: "Agnieszka P., Kraków",
      role: "38 lat, pracownik biurowy",
    },
    {
      rating: 5,
      title: "Lepsze niż kursy za 500 zł",
      text: "Czytałem wiele e-booków o inwestycjach. Ten jest inny. Zawiera więcej niż książka za 80 zł. Cena 49,99 zł to mega okazja.\n\nBonus materiały są naprawdę przydatne - szczególnie arkusz DCA i kalkulator podatków.\n\nDziękuję Adam.",
      author: "Aleksandra K., Poznań",
      role: "45 lat, finansista",
    },
  ];

  return (
    <section className="section-padding bg-beige">
      <div className="container-custom">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-16 text-balance">
          Opinie Ludzi Którzy Kupili <span className="text-gradient-gold">E-Book</span>
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="card bg-white">
              {/* Rating */}
              <div className="flex gap-1 mb-3">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <span key={i} className="text-2xl">⭐</span>
                ))}
              </div>

              {/* Title */}
              <h3 className="text-xl font-bold text-brown-dark mb-4">
                &ldquo;{testimonial.title}&rdquo;
              </h3>

              {/* Text */}
              <div className="text-gray-700 leading-relaxed mb-6 whitespace-pre-line">
                {testimonial.text}
              </div>

              {/* Author */}
              <div className="border-t-2 border-gold/20 pt-4">
                <p className="font-bold text-brown-dark">&mdash; {testimonial.author}</p>
                <p className="text-sm text-gray-600">({testimonial.role})</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
