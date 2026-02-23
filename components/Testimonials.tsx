"use client";

import { useState, useEffect, useCallback } from "react";
import { Star, Quote, ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";

const testimonials = [
  {
    name: "Emily & James Parker",
    role: "Homeowners",
    image:
      "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?auto=format&fit=crop&w=200&q=80",
    text: "Tranquille Real Estate made our home buying journey absolutely seamless. Their attention to detail and genuine care for our needs exceeded all expectations. We found our dream home thanks to their incredible team!",
    rating: 5,
  },
  {
    name: "Michael Chen",
    role: "Property Investor",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80",
    text: "As an investor, I need a team that understands the market inside out. Tranquille delivers exceptional insights and has helped me build a profitable portfolio. Their professionalism is unmatched.",
    rating: 5,
  },
  {
    name: "Sarah Williams",
    role: "First-Time Buyer",
    image:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=200&q=80",
    text: "Being a first-time buyer was daunting, but the Tranquille team walked me through every step. They were patient, knowledgeable, and always had my best interest at heart. Highly recommended!",
    rating: 5,
  },
  {
    name: "David Thompson",
    role: "Property Investor",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80",
    text: "As an investor, I need a team that understands the market inside out. Tranquille delivers exceptional insights and has helped me build a profitable portfolio. Their professionalism is unmatched.",
    rating: 5,
  },
  {
    name: "Jessica Brown",
    role: "First-Time Buyer",
    image:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=200&q=80",
    text: "Being a first-time buyer was daunting, but the Tranquille team walked me through every step. They were patient, knowledgeable, and always had my best interest at heart. Highly recommended!",
    rating: 5,
  },
];

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [slidesPerView, setSlidesPerView] = useState(3);

  // Handle responsive slides per view
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setSlidesPerView(1);
      } else if (window.innerWidth < 1024) {
        setSlidesPerView(2);
      } else {
        setSlidesPerView(3);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const maxIndex = Math.max(0, testimonials.length - slidesPerView);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  }, [maxIndex]);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev <= 0 ? maxIndex : prev - 1));
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(Math.min(index, maxIndex));
  };

  // Auto-play
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);
    return () => clearInterval(interval);
  }, [nextSlide]);

  return (
    <section className="py-20 md:py-8 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-block text-[#c8956c] font-semibold text-sm uppercase tracking-[0.2em] mb-3">
            Client Stories
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-[#1a1a2e] mb-4">
            What Our Clients Say
          </h2>
          <p className="text-gray-600 leading-relaxed">
            Don&apos;t just take our word for it. Here&apos;s what our valued
            clients have to say about their experience with Tranquille Real
            Estate.
          </p>
        </div>

        {/* Slider Container */}
        <div className="relative">
          {/* Navigation Buttons */}
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-6 z-10 w-12 h-12 bg-white rounded-full shadow-lg shadow-black/10 flex items-center justify-center text-[#1a1a2e] hover:bg-[#c8956c] hover:text-white transition-all duration-300"
            aria-label="Previous testimonial"
          >
            <ChevronLeft size={24} />
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-6 z-10 w-12 h-12 bg-white rounded-full shadow-lg shadow-black/10 flex items-center justify-center text-[#1a1a2e] hover:bg-[#c8956c] hover:text-white transition-all duration-300"
            aria-label="Next testimonial"
          >
            <ChevronRight size={24} />
          </button>

          {/* Slider Track */}
          <div className="overflow-hidden mx-4 md:mx-8">
            <div
              className="flex transition-transform duration-500 ease-out"
              style={{
                transform: `translateX(-${currentIndex * (100 / slidesPerView)}%)`,
              }}
            >
              {testimonials.map((t, i) => (
                <div
                  key={i}
                  className="flex-shrink-0 px-3"
                  style={{ width: `${100 / slidesPerView}%` }}
                >
                  <div className="relative bg-white rounded-2xl p-8 border border-gray-100 shadow-lg shadow-black/5 hover:shadow-xl transition-all duration-300 h-full">
                    {/* Quote Icon */}
                    <div className="absolute top-6 right-6">
                      <Quote size={32} className="text-[#c8956c]/15" />
                    </div>

                    {/* Stars */}
                    <div className="flex items-center gap-0.5 mb-5">
                      {Array.from({ length: t.rating }).map((_, idx) => (
                        <Star
                          key={idx}
                          size={16}
                          className="text-[#c8956c] fill-[#c8956c]"
                        />
                      ))}
                    </div>

                    {/* Text */}
                    <p className="text-gray-600 leading-relaxed text-sm mb-6 italic">
                      &ldquo;{t.text}&rdquo;
                    </p>

                    {/* Author */}
                    <div className="flex items-center gap-3 pt-5 border-t border-gray-100">
                      <Image
                        src={t.image}
                        alt={t.name}
                        width={48}
                        height={48}
                        className="w-12 h-12 rounded-full object-cover ring-2 ring-[#c8956c]/20"
                      />
                      <div>
                        <p className="font-bold text-[#1a1a2e] text-sm">
                          {t.name}
                        </p>
                        <p className="text-xs text-gray-500">{t.role}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Dots Navigation */}
          <div className="flex justify-center gap-2 mt-8">
            {Array.from({ length: maxIndex + 1 }).map((_, idx) => (
              <button
                key={idx}
                onClick={() => goToSlide(idx)}
                className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                  currentIndex === idx
                    ? "bg-[#c8956c] w-8"
                    : "bg-gray-300 hover:bg-gray-400"
                }`}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
