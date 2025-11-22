export default function Footer() {
  return (
    <footer id="kontakt" className="bg-brown-dark text-white section-padding">
      <div className="container-custom">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Logo & Description */}
          <div>
            <div className="text-2xl font-serif font-bold mb-4">
              Złoto <span className="text-gold">od Zera</span>
            </div>
            <p className="text-gray-300 leading-relaxed">
              Kompletny przewodnik po inwestowaniu w złoto dla początkujących. 
              System DCA, bezpieczeństwo i praktyczna wiedza.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4">Szybkie Linki</h3>
            <ul className="space-y-2">
              <li>
                <a href="#co-dostajesz" className="text-gray-300 hover:text-gold transition-colors">
                  O Produkcie
                </a>
              </li>
              <li>
                <a href="#faq" className="text-gray-300 hover:text-gold transition-colors">
                  FAQ
                </a>
              </li>
              <li>
                <a 
                  href="https://www.naffy.io/enappia/zloto-bez-oszustwa" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-gold transition-colors"
                >
                  Kup Teraz
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-xl font-bold mb-4">Kontakt</h3>
            <div className="space-y-2 text-gray-300">
              <p>
                <a href="mailto:dam@zlotoodzera.com" className="hover:text-gold transition-colors">
                  dam@zlotoodzera.com
                </a>
              </p>
              <p className="pt-4">
                <a
                  href="https://www.naffy.io/enappia/zloto-bez-oszustwa"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block px-6 py-3 bg-gold text-white font-bold rounded-lg hover:bg-gold-dark transition-colors"
                >
                  Masz pytania? Napisz
                </a>
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-400">
            <p>© 2025 Adam Złotopolski. Wszelkie prawa zastrzeżone.</p>
            <div className="flex gap-6">
              <a href="#" className="hover:text-gold transition-colors">
                Polityka Prywatności
              </a>
              <a href="#" className="hover:text-gold transition-colors">
                Regulamin
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
