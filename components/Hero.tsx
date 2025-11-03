"use client";

import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";

interface HeroProps {
  onBuyClick: () => void;
  onTocClick: () => void;
}

export function Hero({ onBuyClick, onTocClick }: HeroProps) {
  return (
    <section className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black pt-32 pb-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left: Text */}
        <div className="space-y-6">
          <Badge className="w-fit bg-yellow-100 text-yellow-900">
            📚 Kompletny poradnik dla początkujących
          </Badge>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight">
            Złoto od Zera
          </h1>

          <p className="text-xl text-gray-300 leading-relaxed">
            Chcesz inwestować w złoto, ale nie wiesz od czego zacząć? Nie boisz się oszustwa? 
            Nie wiesz czy kupić monetę, sztabkę czy ETF?
          </p>

          <p className="text-lg text-gray-400">
            Ten e-book to <strong>9 pełnych rozdziałów</strong> — system DCA, weryfikacja dealera, bezpieczeństwo, podatki, przechowywanie. 
            Od pierwszego zakupu do strategii sprzedaży. Praktyka, a nie teoria.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 pt-6">
            <Button
              size="lg"
              className="bg-gradient-to-r from-yellow-400 to-yellow-600 hover:from-yellow-500 hover:to-yellow-700 text-black font-bold"
              onClick={onBuyClick}
            >
              💳 Kup e-book za 49,99 PLN
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-white text-white hover:bg-white/10"
              onClick={onTocClick}
            >
              📖 Zobacz 9 rozdziałów
            </Button>
          </div>

          <div className="pt-4 space-y-2 text-sm text-gray-400">
            <p>✓ Instant dostęp po zakupie (pobierz PDF)</p>
            <p>✓ 14 dni na zmianę zdania (gwarancja)</p>
            <p>✓ Nowe wersje przez rok za darmo</p>
            <p>✓ Gotowe szablony, checklisty, skrypty</p>
          </div>
        </div>

{/* Right: Book Cover */}
<div className="relative h-[500px] sm:h-[600px]">
  <Image
    src="/covers/okladka_zloto_od_zera_IG.png"
    alt="Złoto od Zera - okładka e-booka"
    fill
    className="object-cover rounded-lg drop-shadow-2xl"
    priority
  />
</div>
      </div>
    </section>
  );
}
