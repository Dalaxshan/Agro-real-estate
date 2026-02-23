'use client'

import { useState } from "react";
import { Target, Eye, Heart, ChevronRight } from "lucide-react";
import Image from "next/image";

const items = [
  {
    id: "mission",
    icon: Target,
    label: "Our Mission",
    heading: "Redefining the Real Estate Experience",
    description:
      "To provide an unparalleled real estate experience by combining deep market expertise with genuine care for our clients' needs. We strive to make every property transaction seamless, transparent, and stress-free — turning complex decisions into confident steps toward your dream home.",
    highlights: [
      "Client-centered approach in every interaction",
      "Transparent and honest communication",
      "Seamless end-to-end property solutions",
    ],
  },
  {
    id: "vision",
    icon: Eye,
    label: "Our Vision",
    heading: "Setting the Standard for Excellence",
    description:
      "To be the most trusted and innovative real estate company in the region, setting the gold standard for excellence in property services. We envision a future where every family finds their perfect space through a process built on trust, technology, and genuine human connection.",
    highlights: [
      "Industry-leading innovation & technology",
      "Building lasting community relationships",
      "Pioneering sustainable real estate practices",
    ],
  },
  {
    id: "values",
    icon: Heart,
    label: "Our Values",
    heading: "The Foundation of Everything We Do",
    description:
      "Integrity, transparency, and unwavering dedication form the bedrock of our operations. We treat every client like family and every property like our own. These values aren't just words on a wall — they guide every decision, every negotiation, and every relationship we build.",
    highlights: [
      "Integrity & ethical business practices",
      "Dedication to client satisfaction",
      "Respect, empathy, and professionalism",
    ],
  },
];

export default function OurMission() {
  const [activeIndex, setActiveIndex] = useState(0);
  const active = items[activeIndex];

  return (
    <section className="py-20 md:py-18 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-block text-[#c8956c] font-semibold text-sm uppercase tracking-[0.2em] mb-3 font-body">
            What Drives Us
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-[#1a1a2e] mb-4">
            Mission, Vision & Values
          </h2>
          <div className="w-16 h-[2px] bg-[#c8956c] mx-auto mt-5" />
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-0 items-stretch">
          {/* Left: Image with overlay */}
          <div className="relative rounded-2xl lg:rounded-r-none overflow-hidden min-h-[480px] md:min-h-[560px] group">
            <Image 
              src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=80"
              alt="Luxury interior"
              width={1200}
              height={560}
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#1a1a2e]/90 via-[#1a1a2e]/40 to-[#1a1a2e]/10" />

            {/* Floating content on image */}
            <div className="absolute bottom-0 left-0 right-0 p-8 md:p-10">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-full bg-[#c8956c] flex items-center justify-center">
                  <active.icon size={20} className="text-white" />
                </div>
                <span className="text-[#c8956c] font-semibold text-sm uppercase tracking-widest font-body">
                  {active.label}
                </span>
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-white leading-snug">
                {active.heading}
              </h3>
              <div className="mt-5 flex gap-2">
                {items.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setActiveIndex(i)}
                    className={`h-1 rounded-full transition-all duration-500 ${
                      i === activeIndex
                        ? "w-10 bg-[#c8956c]"
                        : "w-4 bg-white/30 hover:bg-white/50"
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Right: Interactive Content */}
          <div className="bg-[#f8f6f3] rounded-2xl lg:rounded-l-none p-8 md:p-10 lg:p-12 flex flex-col">
            {/* Tabs */}
            <div className="flex border-b border-gray-200 mb-8">
              {items.map((item, i) => (
                <button
                  key={item.id}
                  onClick={() => setActiveIndex(i)}
                  className={`flex items-center gap-2 px-4 md:px-6 py-3 text-sm font-semibold transition-all duration-300 border-b-2 -mb-[1px] font-body ${
                    i === activeIndex
                      ? "border-[#c8956c] text-[#c8956c]"
                      : "border-transparent text-gray-400 hover:text-gray-600"
                  }`}
                >
                  <item.icon size={16} />
                  <span className="hidden sm:inline">{item.label}</span>
                </button>
              ))}
            </div>

            {/* Active content */}
            <div className="flex-1 flex flex-col" key={active.id}>
              <div className="mb-2 flex items-center gap-2">
                <span className="text-5xl md:text-6xl font-bold text-[#c8956c]/10 font-heading leading-none">
                  0{activeIndex + 1}
                </span>
                <div className="w-8 h-[2px] bg-[#c8956c]/30" />
              </div>

              <h4 className="text-xl md:text-2xl font-bold text-[#1a1a2e] mb-4 leading-snug">
                {active.heading}
              </h4>

              <p className="text-gray-600 leading-relaxed mb-8 font-body">
                {active.description}
              </p>

              {/* Highlights */}
              <div className="space-y-3 mb-8">
                {active.highlights.map((h) => (
                  <div
                    key={h}
                    className="flex items-start gap-3 group/item"
                  >
                    <div className="w-6 h-6 rounded-full bg-[#c8956c]/10 flex items-center justify-center flex-shrink-0 mt-0.5 group-hover/item:bg-[#c8956c]/20 transition-colors">
                      <ChevronRight size={14} className="text-[#c8956c]" />
                    </div>
                    <span className="text-sm text-gray-700 font-medium font-body">
                      {h}
                    </span>
                  </div>
                ))}
              </div>

              {/* Decorative bottom */}
              <div className="mt-auto pt-6 border-t border-gray-200">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#c8956c] to-[#a0714e] flex items-center justify-center text-white font-bold font-heading text-lg">
                    T
                  </div>
                  <div>
                    <p className="font-bold text-[#1a1a2e] text-sm font-heading">
                      Tranquille Real Estate
                    </p>
                    <p className="text-xs text-gray-500 font-body">
                      Where tranquility meets your dream home
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
