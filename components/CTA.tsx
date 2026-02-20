import Image from "next/image";

export const CTA = () => {
  return (
    <section className="py-20 relative overflow-hidden">
      <div className="absolute inset-0">
        <Image
          src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1920&q=80"
          alt="Background"
          width={1920}
          height={1080}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary-700/95 to-primary-500/90"></div>
      </div>
      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="font-playfair text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
              Ready to Find Your <br />
              Perfect Land?
            </h2>
            <p className="text-white/80 text-lg mb-8 leading-relaxed">
              Let our expert team help you navigate the land real estate market.
              Whether you&apos;re buying, selling, or renting — we&apos;ve got
              you covered.
            </p>
            <div className="flex flex-wrap gap-4">
              <button className="bg-accent hover:bg-amber-600 text-dark px-8 py-4 rounded-full font-bold transition-all shadow-lg shadow-accent/30 hover:shadow-accent/50 flex items-center gap-2">
                Call Us Now
              </button>
              <button className="bg-white/10 hover:bg-white/20 text-white border border-white/30 px-8 py-4 rounded-full font-bold transition-all backdrop-blur-sm flex items-center gap-2">
                Schedule a Visit
              </button>
            </div>
          </div>
          <div className="bg-white rounded-3xl p-8 shadow-2xl">
            <h3 className="text-2xl font-bold text-dark mb-2">
              Get Free Consultation
            </h3>
            <p className="text-gray-500 mb-6">
              Fill in the form and our team will get back to you within 24
              hours.
            </p>
            <form className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="First Name"
                  className="w-full px-4 py-3 bg-gray-50 rounded-xl border border-gray-200 focus:border-primary-500 outline-none transition"
                />
                <input
                  type="text"
                  placeholder="Last Name"
                  className="w-full px-4 py-3 bg-gray-50 rounded-xl border border-gray-200 focus:border-primary-500 outline-none transition"
                />
              </div>
              <input
                type="email"
                placeholder="Email Address"
                className="w-full px-4 py-3 bg-gray-50 rounded-xl border border-gray-200 focus:border-primary-500 outline-none transition"
              />
              <input
                type="tel"
                placeholder="Phone Number"
                className="w-full px-4 py-3 bg-gray-50 rounded-xl border border-gray-200 focus:border-primary-500 outline-none transition"
              />
              <select className="w-full px-4 py-3 bg-gray-50 rounded-xl border border-gray-200 focus:border-primary-500 outline-none transition text-gray-500">
                <option>I&apos;m interested in...</option>
                <option>Buying a Property</option>
                <option>Selling a Property</option>
                <option>Renting a Property</option>
                <option>Property Valuation</option>
              </select>
              <textarea
                placeholder="Your Message"
                rows={3}
                className="w-full px-4 py-3 bg-gray-50 rounded-xl border border-gray-200 focus:border-primary-500 outline-none transition resize-none"
              ></textarea>
              <button
                type="submit"
                className="w-full bg-primary-500 hover:bg-primary-600 text-white py-4 rounded-xl font-bold transition-all shadow-lg shadow-primary-500/30"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
