# Instrukcja Wdrożenia - Zloto od Zera

## 🚀 Szybki Start

### 1. Instalacja zależności
```bash
npm install
```

### 2. Uruchomienie serwera deweloperskiego
```bash
npm run dev
```

Strona będzie dostępna pod adresem: http://localhost:3000

### 3. Build produkcyjny
```bash
npm run build
npm start
```

## 📦 Deployment na Vercel (Zalecane)

### Przez GitHub:
1. Stwórz repozytorium na GitHub
2. Wrzuć kod do repozytorium:
```bash
git init
git add .
git commit -m "Initial commit"
git remote add origin https://github.com/mikix8-ship-it/zloto-od-zera.git
git push -u origin main
```

3. Połącz z Vercel:
   - Wejdź na https://vercel.com
   - Kliknij "New Project"
   - Import repozytorium GitHub
   - Vercel automatycznie wykryje Next.js i skonfiguruje

4. Konfiguracja domeny:
   - W Vercel Dashboard → Settings → Domains
   - Dodaj domenę: zlotoodzera.com
   - Postępuj zgodnie z instrukcjami DNS

### Przez Vercel CLI:
```bash
npm install -g vercel
vercel
```

## 🌐 Inne opcje hostingu

### Netlify:
1. Zainstaluj Netlify CLI: `npm install -g netlify-cli`
2. Build: `npm run build`
3. Deploy: `netlify deploy --prod`

### Własny serwer:
1. Build: `npm run build`
2. Start: `npm start`
3. Użyj PM2 lub podobnego narzędzia do utrzymania procesu

## 📊 Analytics (Opcjonalne)

### Google Analytics 4:
W `app/layout.tsx` odkomentuj sekcję i dodaj swój tracking ID.

### Plausible Analytics:
Dodaj tag w `app/layout.tsx`:
```tsx
<Script src="https://plausible.io/js/script.js" data-domain="zlotoodzera.com" />
```

## 🔧 Konfiguracja

### Zmiana emaila:
W `components/Footer.tsx` zmień email kontaktowy.

### Zmiana linku Naffy:
Wszystkie linki CTA prowadzą do:
`https://www.naffy.io/enappia/zloto-bez-oszustwa`

Jeśli link się zmieni, wyszukaj i zamień w plikach:
- components/Header.tsx
- components/HeroSection.tsx
- components/SolutionSection.tsx
- components/FinalCTASection.tsx
- components/Footer.tsx

## 📱 Testowanie

### Responsywność:
```bash
npm run dev
```
Otwórz Chrome DevTools (F12) i testuj na różnych rozmiarach ekranu.

### Performance:
Test na: https://pagespeed.web.dev/

### SEO:
Test na: https://search.google.com/test/mobile-friendly

## 🛠️ Struktura Projektu

```
zloto-od-zera/
├── app/
│   ├── layout.tsx          # Global layout + SEO metadata
│   ├── page.tsx            # Główna strona (landing page)
│   └── globals.css         # Global styles
├── components/
│   ├── Header.tsx          # Nagłówek + nawigacja
│   ├── HeroSection.tsx     # Sekcja hero
│   ├── ProblemSection.tsx  # Dlaczego 95% kupuje źle
│   ├── SolutionSection.tsx # Co dostajesz
│   ├── BenefitsSection.tsx # Dlaczego działa
│   ├── TestimonialsSection.tsx # Opinie
│   ├── FAQSection.tsx      # Najczęstsze pytania
│   ├── FinalCTASection.tsx # Finalne CTA
│   └── Footer.tsx          # Stopka
├── public/
│   └── images/
│       ├── cover.jpg       # Okładka ebooka
│       ├── photo-1.jpg     # Zdjęcie produktowe 1
│       ├── photo-2.jpg     # Zdjęcie produktowe 2
│       └── photo-3.jpg     # Zdjęcie produktowe 3
├── package.json
├── tsconfig.json
├── tailwind.config.ts
├── next.config.js
└── postcss.config.js
```

## ✨ Features

✅ Responsive design (mobile-first)
✅ SEO optimized (metadata, structured data)
✅ Performance optimized (Next.js Image, caching)
✅ Accessibility (semantic HTML, ARIA labels)
✅ TypeScript
✅ Tailwind CSS
✅ Smooth scroll
✅ Accordion FAQ
✅ Mobile menu
✅ Schema.org structured data

## 📈 Metryki

Target:
- Lighthouse Score: > 80
- Mobile Speed: > 50
- Conversion Rate: > 5%
- Page Load: < 3s

## 🐛 Troubleshooting

### Problem: Obrazki nie ładują się
Rozwiązanie: Sprawdź czy pliki są w `public/images/`

### Problem: Build error
Rozwiązanie: Usuń `node_modules` i `.next`, następnie:
```bash
rm -rf node_modules .next
npm install
npm run build
```

### Problem: Port 3000 zajęty
Rozwiązanie:
```bash
npm run dev -- -p 3001
```

## 📞 Kontakt

Email: dam@zlotoodzera.com
Domena: zlotoodzera.com

## 🎯 Checklist Przed Launche

- [ ] Zainstalowane zależności (`npm install`)
- [ ] Przetestowane lokalnie (`npm run dev`)
- [ ] Build działa (`npm run build`)
- [ ] Wszystkie linki działają
- [ ] CTA prowadzi do Naffy
- [ ] Email kontaktowy poprawny
- [ ] Obrazki załadowane
- [ ] Mobile responsywność sprawdzona
- [ ] SEO metadata sprawdzone
- [ ] Analytics skonfigurowane (opcjonalnie)
- [ ] Deploy na Vercel
- [ ] Domena skonfigurowana
- [ ] SSL aktywne

## 🚀 Po Launchu

1. Monitoruj Google Analytics
2. Testuj konwersję
3. A/B testing (opcjonalnie)
4. Zbieraj feedback
5. Optymalizuj na podstawie danych

Powodzenia! 🎉
