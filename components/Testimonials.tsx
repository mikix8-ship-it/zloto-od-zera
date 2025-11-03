"use client";

import { Card, CardContent } from "./ui/Card";
import { Badge } from "./ui/Badge";
import { TESTIMONIALS } from "@/lib/constants";
import { Star } from "lucide-react";

export function Testimonials() {
  return (
    <section className="section bg-white py-16 sm:py-24 lg:py-32">
      <div className="container-max">
        <div className="mb-12 text-center">
          <Badge variant="gold" className="mb-4 inline-block">
            ⭐ Opinie czytających
          </Badge>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
            Co mówią nasi czytelnicy?
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Ponad 100 zadowolonych osób, które zmieniły swoją perspektywę na inwestycje
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {TESTIMONIALS.map((testimonial) => (
            <Card
              key={testimonial.id}
              className="flex flex-col justify-between border-gray-200 bg-gradient-to-br from-white to-gray-50 hover:shadow-lg hover:border-gold-400 transition-all"
            >
              <CardContent className="p-6">
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star
                      key={i}
                      className="h-4 w-4 fill-gold-500 text-gold-500"
                    />
                  ))}
                </div>

                <p className="text-gray-700 font-medium leading-relaxed mb-4">
                  "{testimonial.content}"
                </p>

                <div className="border-t border-gray-200 pt-4">
                  <p className="font-bold text-gray-900">{testimonial.author}</p>
                  <p className="text-sm text-gray-600">{testimonial.role}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {[
            { number: "150+", label: "Nabywców" },
            { number: "5.0", label: "Średnia ocena" },
            { number: "98%", label: "Rekomenduje" },
            { number: "Brak", label: "Zwrotów" },
          ].map((stat, idx) => (
            <div
              key={idx}
              className="rounded-lg border border-gold-200 bg-gold-50 p-6 text-center"
            >
              <div className="text-3xl font-bold text-gold-600">{stat.number}</div>
              <div className="mt-2 text-sm text-gray-700">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
