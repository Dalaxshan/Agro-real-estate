import { ArrowRight, Phone } from "lucide-react";

export default function CallToAction() {
  return (
    <section className="relative py-20 overflow-hidden">
      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=2000&q=80')",
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-[#1a1a2e]/65 to-[#1a1a2e]/60" />

      {/* Decorative */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#c8956c]/5 rounded-full -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-[#c8956c]/5 rounded-full translate-y-1/2 -translate-x-1/2" />

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <div className="w-16 h-[2px] bg-[#c8956c] mx-auto mb-6" />
        <h2 className="text-3xl md:text-5xl font-bold text-white mb-4 leading-tight">
          Ready to Find Your <span className="text-[#c8956c]">Dream Home</span>?
        </h2>
        <p className="text-lg text-white/70 mb-10 max-w-2xl mx-auto font-light">
          Whether you&apos;re buying, selling, or investing, our expert team is here to
          guide you every step of the way. Let&apos;s start your journey today.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#contact"
            className="group inline-flex items-center gap-2.5 bg-[#c8956c] hover:bg-[#b07d56] text-white font-semibold px-8 py-4 rounded-full transition-all shadow-lg shadow-[#c8956c]/25"
          >
            Get Started Today
            <ArrowRight
              size={18}
              className="group-hover:translate-x-1 transition-transform"
            />
          </a>
          <a
            href="tel:+15551234567"
            className="inline-flex items-center gap-2.5 bg-white/10 hover:bg-white/20 text-white font-semibold px-8 py-4 rounded-full transition-all border border-white/20"
          >
            <Phone size={18} />
            +1 (555) 123-4567
          </a>
        </div>
      </div>
    </section>
  );
}
