import { ChevronRight } from "lucide-react";

export default function HeroBanner() {
  return (
    <section className="relative h-[420px] md:h-[500px] flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=2000&q=80')",
        }}
      />
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#1a1a2e]/85 to-[#1a1a2e]/60" />

      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute -top-20 -right-20 w-80 h-80 border border-white/5 rounded-full" />
        <div className="absolute -bottom-32 -left-32 w-96 h-96 border border-white/5 rounded-full" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center text-white px-6">
        <div className="inline-block mb-6">
          <div className="w-16 h-[2px] bg-[#c8956c] mx-auto mb-6" />
        </div>
        <h1 className="text-4xl md:text-6xl font-bold mb-4 tracking-tight">
          About Us
        </h1>
        <p className="text-lg md:text-xl text-white/70 max-w-xl mx-auto mb-6 font-light">
          Discover the story behind Tranquille Real Estate
        </p>
        {/* Breadcrumb */}
        <nav className="flex items-center justify-center gap-2 text-sm text-white/60">
          <a href="" className="hover:text-[#c8956c] transition">
            Home
          </a>
          <ChevronRight size={14} />
          <span className="text-[#c8956c]">About Us</span>
        </nav>
      </div>
    </section>
  );
}
