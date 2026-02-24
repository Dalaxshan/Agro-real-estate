export default function BlogHeader() {
  return (
    <div className="relative overflow-hidden bg-gradient-to-br from-emerald-600 via-teal-700 to-cyan-800 py-16 md:py-24">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute -left-4 top-0 h-72 w-72 rounded-full bg-white blur-3xl" />
        <div className="absolute -right-4 bottom-0 h-72 w-72 rounded-full bg-white blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
        <div className="mb-4 flex items-center justify-center gap-2">
          <span className="inline-block rounded-full bg-white/20 px-4 py-1.5 text-sm font-medium text-white backdrop-blur-sm">
            🏡 Tranquille Real Estate
          </span>
        </div>
        <h1 className="mb-4 text-4xl font-extrabold tracking-tight text-white md:text-5xl lg:text-6xl">
          Real Estate Insights & Guides
        </h1>
        <p className="mx-auto max-w-2xl text-lg text-emerald-100 md:text-xl">
          Expert advice, market analysis, and comprehensive guides to help you make
          informed property decisions. Your trusted partner in real estate.
        </p>
      </div>
    </div>
  );
}