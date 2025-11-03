export const PRODUCT_NAME = "Złoto od Zera — poradnik dla początkujących";
export const PRODUCT_SUBTITLE = "Praktyczny poradnik o inwestowaniu w złoto — prosto, krok po kroku.";
export const AUTHOR_NAME = "Adam Złotopolski";
export const AUTHOR_EMAIL = "adam@zlotoodzera.com";

export const PRICE_PLN = parseFloat(process.env.NEXT_PUBLIC_PRICE_PLN || "49.99");
export const PRICE_EUR = parseFloat(process.env.NEXT_PUBLIC_PRICE_EUR || "11.99");
export const CURRENCY = process.env.NEXT_PUBLIC_CURRENCY || "PLN";

export const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";
export const CANONICAL_URL = process.env.NEXT_PUBLIC_CANONICAL_URL || SITE_URL;

export const PLAUSIBLE_DOMAIN = process.env.NEXT_PUBLIC_PLAUSIBLE_DOMAIN;
export const GA_ID = process.env.NEXT_PUBLIC_GA_ID;

export const SENDER_EMAIL = process.env.NEXT_PUBLIC_SENDER_EMAIL || "noreply@zlotoodzera.com";

export const STRIPE_PUBLISHABLE_KEY = process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY;
export const STRIPE_PRICE_ID = process.env.STRIPE_PRICE_ID;
export const STRIPE_SUCCESS_URL = process.env.STRIPE_SUCCESS_URL || `$${SITE_URL}/thank-you`;
export const STRIPE_CANCEL_URL = process.env.STRIPE_CANCEL_URL || SITE_URL;

export const LS_STORE_ID = process.env.NEXT_PUBLIC_LS_STORE_ID;
export const LS_PRODUCT_ID = process.env.NEXT_PUBLIC_LS_PRODUCT_ID;

export const SEO_TITLE = "Złoto od Zera — Poradnik dla Początkujących";
export const SEO_DESCRIPTION =
  "Co kupić, jak sprawdzić sprzedawcę i jak odebrać paczkę bez stresu. Praktyczny poradnik o inwestowaniu w złoto — krok po kroku, bez trudnych słów.";
export const SEO_KEYWORDS = [
  "inwestowanie w złoto",
  "poradnik złota",
  "jak kupić złoto",
  "sprzedawca złota",
  "przechowywanie złota",
  "metoda DCA",
];

export const CHAPTERS = [
  { chapter: 1, title: "Czym jest złoto jako inwestycja?", description: "Podstawy i historia" },
  {
    chapter: 2,
    title: "Rodzaje złota do inwestycji",
    description: "Monety, sztabki, ETFy — co wybrać?",
  },
  { chapter: 3, title: "Jak wybrać sprzedawcę?", description: "Bezpieczeństwo i zaufanie" },
  { chapter: 4, title: "Odbiór paczki — praktyka", description: "Krok po kroku, bez błędów" },
  { chapter: 5, title: "Przechowywanie i ubezpieczenie", description: "Darmowe + płatne opcje" },
  { chapter: 6, title: "Podatki, DCA i plan miesięczny", description: "Strategia długoterminowa" },
  {
    chapter: 7,
    title: "Najczęstsze błędy inwestorów",
    description: "Czego unikać od samego początku",
  },
  { chapter: 8, title: "Słownik — terminy A–Z", description: "Objaśnienia bez żargonu" },
  {
    chapter: 9,
    title: "Sprzedaż złota — jak i gdzie?",
    description: "Ostatni rozdział — poradnik sprzedaży",
  },
];

export const PERSONAS = [
  {
    name: "Totalny początkujący",
    description: "Nigdy nie inwestowałem, chcę zacząć bezpiecznie",
    icon: "👶",
  },
  {
    name: "Oszczędzający rodzic",
    description: "Szukam sposobu na inflację, dla przyszłości rodziny",
    icon: "👨‍👩‍👧‍👦",
  },
  {
    name: "Stabilny etat",
    description: "Chcę systematycznie inwestować z pensji, małymi kwotami",
    icon: "💼",
  },
];

export const FAQ_ITEMS = [
  {
    id: "1",
    question: "W jakim formacie dostaję e-book?",
    answer:
      "E-book dostarczany jest w formacie PDF. Po zakupie otrzymasz email z linkiem do pobrania, ważnym przez 30 dni.",
    category: "format",
  },
  {
    id: "2",
    question: "Czy e-book będzie aktualizowany?",
    answer:
      "Tak! Wszyscy nabywcy otrzymują dostęp do zaktualizowanej wersji. Zmiany będą dostępne poprzez redownload.",
    category: "updates",
  },
  {
    id: "3",
    question: "Jakie metody płatności macie?",
    answer:
      "Akceptujemy płatności kartą kredytową/debetową przez bramkę Stripe. Obsługujemy PLN, EUR i USD.",
    category: "payment",
  },
  {
    id: "4",
    question: "Czy mogę zwrócić e-book?",
    answer:
      "E-booki są produktami cyfrowymi i nie podlegają zwrotowi. Mamy jednak 14-dniową gwarancję satysfakcji — jeśli e-book nie spełni Twoich oczekiwań, zwrócimy pieniądze bez pytań.",
    category: "refund",
  },
  {
    id: "5",
    question: "Czy dostanę wsparcie?",
    answer: "Oczywiście! Napisz do nas na adam@zlotoodzera.com. Odpowiadamy w ciągu 48 godzin.",
    category: "support",
  },
  {
    id: "6",
    question: "Czy to jest porada inwestycyjna?",
    answer:
      "Nie. E-book to materiał edukacyjny i informacyjny. Nie jest to porada inwestycyjna, finansowa ani podatkowa. Konsultuj zawsze z doradcą przed decyzjami finansowymi.",
    category: "disclaimer",
  },
];

export const TESTIMONIALS = [
  {
    id: "1",
    author: "Maria Z.",
    role: "Absolwentka, Gdańsk",
    content: "Wreszcie wiedziałam, od czego zacząć! Wszystko wyjaśnione w prosty sposób, bez bzdur.",
    rating: 5,
  },
  {
    id: "2",
    author: "Piotr K.",
    role: "Pracownik, Warszawa",
    content:
      "Dokładnie taki poradnik szukałem — praktyczny, z rzeczywistymi przykładami. Już kupiłem pierwsze monety.",
    rating: 5,
  },
  {
    id: "3",
    author: "Magdalena S.",
    role: "Mama, Kraków",
    content:
      "Chciałam oszczędzać dla dzieci w coś pewnego. Ten e-book zmienił moje podejście do inwestycji. Polecam!",
    rating: 5,
  },
  {
    id: "4",
    author: "Tomasz R.",
    role: "Przedsiębiorca, Wrocław",
    content:
      "Nie spodziewałem się takiej jakości. Merytoryczne, bez pierdołów, można działać od razu.",
    rating: 5,
  },
];

export const BENEFITS = [
  {
    title: "Lista kontrolna TAK/NIE",
    description: "Wszystkie kroki przed pierwszym zakupem",
    icon: "✓",
  },
  {
    title: "Odbiór paczki w jednym ujęciu + pomiary",
    description: "Jak sprawdzić autentyczność złota",
    icon: "📦",
  },
  {
    title: "Arkusze i wzory",
    description: "Plan małych, stałych zakupów (metoda DCA)",
    icon: "📊",
  },
  {
    title: "Najczęstsze błędy — jak ich uniknąć",
    description: "Osiem rzeczy, na których się potykają początkujący",
    icon: "⚠️",
  },
  {
    title: "Słownik bardzo prosty (A–Z)",
    description: "Wszystkie pojęcia objaśnione bez żargonu",
    icon: "📚",
  },
  {
    title: "Aktualizacje dożywotnio",
    description: "Nowe wersje e-booka dostępne bezpłatnie",
    icon: "🔄",
  },
];

export const LEGAL_LINKS = [
  { label: "Polityka prywatności", href: "/privacy" },
  { label: "Regulamin", href: "/terms" },
  { label: "Zwroty i gwarancja", href: "/refunds" },
];

