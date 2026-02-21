"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

const testimonials = [
  {
    id: 1,
    name: "Sarah Jenkins",
    role: "Bought a House in Miami",
    image: "https://images.unsplash.com/photo-1654110455429-cf322b40a906",
    text: "We found our dream home in less than 2 weeks! The team handled the negotiation professionally and made the process incredibly smooth. Highly recommended for first-time buyers.",
  },
  {
    id: 2,
    name: "Michael Ross",
    role: "Sold Condo in New York",
    image: "https://images.unsplash.com/photo-1654110455429-cf322b40a906",
    text: "Selling my apartment was a stress-free experience. They valued my property correctly and sold it above asking price within the first weekend. Great communication throughout.",
  },
  {
    id: 3,
    name: "David Chen",
    role: "Real Estate Investor",
    image: "https://images.unsplash.com/photo-1654110455429-cf322b40a906",
    text: "As an investor, I need accurate data and quick turnarounds. This team provides exactly that. They found me three high-yield rental properties in just a month.",
  },
];

export default function TestimonialSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) =>
      prev === testimonials.length - 1 ? 0 : prev + 1,
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? testimonials.length - 1 : prev - 1,
    );
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  // Auto-play slider
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative w-full min-h-[600px] flex items-center justify-center overflow-hidden font-sans">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1600596542815-2495db98dada?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80"
          alt="Luxury Home Background"
          fill
          className="object-cover"
          priority
        />
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/60" />
      </div>

      {/* Main Content */}
      <div className="relative z-10 container mx-auto px-4 md:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12 tracking-tight">
          What Our Clients Say
        </h2>

        {/* Slider Container */}
        <div className="relative max-w-2xl mx-auto">
          {/* Slider Track */}
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {testimonials.map((item) => (
              <div key={item.id} className="w-full flex-shrink-0 px-4">
                {/* Glassmorphism Card */}
                <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl p-8 md:p-12 shadow-2xl text-white">
                  <p className="text-lg md:text-xl italic text-gray-100 leading-relaxed mb-8">
                    “ {item.text} “
                  </p>

                  <div className="flex items-center border-t border-white/10 pt-6">
                    <div className="relative w-14 h-14 rounded-full overflow-hidden border-2 border-white mr-4">
                      <Image
                        src={item.image}
                        alt={item.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <h4 className="text-lg font-bold">{item.name}</h4>
                      <span className="text-sm text-gray-300">{item.role}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>

        {/* Dots Indicator */}
        <div className="flex justify-center mt-8 gap-3">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                currentIndex === index
                  ? "bg-white scale-110"
                  : "bg-white/40 hover:bg-white/60"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
