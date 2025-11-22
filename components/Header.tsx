'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm shadow-md z-50">
      <div className="container-custom px-5 md:px-10">
        <div className="flex items-center justify-between py-4">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <div className="text-2xl font-serif font-bold text-brown-dark">
              Jak Kupić Złoto <span className="text-gold">BEZ Oszustwa</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <a href="#co-dostajesz" className="text-brown-dark hover:text-gold transition-colors">
              O Produkcie
            </a>
            <a href="#faq" className="text-brown-dark hover:text-gold transition-colors">
              FAQ
            </a>
            <a href="#kontakt" className="text-brown-dark hover:text-gold transition-colors">
              Kontakt
            </a>
            <a
              href="https://www.naffy.io/enappia/zloto-bez-oszustwa"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary !py-2 !px-6 !text-base"
            >
              Kup Teraz
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6 text-brown-dark"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {mobileMenuOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <nav className="md:hidden py-4 border-t border-gray-200">
            <div className="flex flex-col gap-4">
              <a
                href="#co-dostajesz"
                className="text-brown-dark hover:text-gold transition-colors py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                O Produkcie
              </a>
              <a
                href="#faq"
                className="text-brown-dark hover:text-gold transition-colors py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                FAQ
              </a>
              <a
                href="#kontakt"
                className="text-brown-dark hover:text-gold transition-colors py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                Kontakt
              </a>
              <a
                href="https://www.naffy.io/enappia/zloto-bez-oszustwa"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary text-center"
              >
                Kup Teraz
              </a>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}
