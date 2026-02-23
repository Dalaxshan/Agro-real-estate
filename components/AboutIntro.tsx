import { CheckCircle2 } from "lucide-react";

export default function AboutIntro() {
  return (
    <section className="py-20 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image Column */}
          <div className="relative">
            <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl shadow-black/10">
              <img
                src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=900&q=80"
                alt="Luxury home interior"
                className="w-full h-[420px] md:h-[520px] object-cover"
              />
            </div>
            {/* Decorative card */}
            <div className="absolute -bottom-6 -right-4 md:-right-8 bg-white rounded-xl shadow-xl p-5 z-20 border border-gray-50">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-[#c8956c]/10 rounded-full flex items-center justify-center">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#c8956c" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                    <polyline points="9 22 9 12 15 12 15 22" />
                  </svg>
                </div>
                <div>
                  <p className="text-2xl font-bold text-[#1a1a2e]">15+</p>
                  <p className="text-xs text-gray-500">Years of Experience</p>
                </div>
              </div>
            </div>
            {/* Background decoration */}
            <div className="absolute -top-4 -left-4 w-full h-full rounded-2xl border-2 border-[#c8956c]/20 -z-0" />
          </div>

          {/* Text Column */}
          <div>
            <span className="inline-block text-[#c8956c] font-semibold text-sm uppercase tracking-[0.2em] mb-3">
              Who We Are
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#1a1a2e] mb-6 leading-tight">
              Your Trusted Partner in Finding the{" "}
              <span className="text-[#c8956c]">Perfect Property</span>
            </h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              At Tranquille Real Estate, we believe that finding a home should be a serene and
              joyful experience. Founded with a passion for connecting people with their dream
              properties, we have established ourselves as a trusted name in the real estate
              industry.
            </p>
            <p className="text-gray-600 leading-relaxed mb-8">
              Our team of dedicated professionals combines deep market knowledge with a
              personalized approach, ensuring every client receives the attention and expertise
              they deserve. From luxury estates to cozy family homes, we guide you through
              every step of the journey.
            </p>

            {/* Feature List */}
            <div className="grid sm:grid-cols-2 gap-4 mb-10">
              {[
                "Expert Market Knowledge",
                "Personalized Service",
                "Premium Property Selection",
                "Transparent Process",
                "Negotiation Excellence",
                "After-Sale Support",
              ].map((item) => (
                <div key={item} className="flex items-center gap-2.5">
                  <CheckCircle2 size={18} className="text-[#c8956c] flex-shrink-0" />
                  <span className="text-sm text-gray-700 font-medium">{item}</span>
                </div>
              ))}
            </div>

            {/* Signature / Founder */}
            <div className="flex items-center gap-4 pt-6 border-t border-gray-100">
              <div className="w-14 h-14 rounded-full bg-gradient-to-br from-[#c8956c] to-[#a0714e] flex items-center justify-center text-white text-lg font-bold">
                TR
              </div>
              <div>
                <p className="font-semibold text-[#1a1a2e]">Tranquille Real Estate</p>
                <p className="text-sm text-gray-500">Founded with Passion & Purpose</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
