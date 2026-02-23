import {
  Home,
  TrendingUp,
  Key,
  Shield,
  Building2,
  Handshake,
} from "lucide-react";

const services = [
  {
    icon: Home,
    title: "Residential Sales",
    description:
      "Find your dream home from our curated collection of premium residential properties.",
  },
  {
    icon: Building2,
    title: "Commercial Properties",
    description:
      "Strategic commercial real estate solutions for businesses of all sizes.",
  },
  {
    icon: TrendingUp,
    title: "Property Investment",
    description:
      "Expert guidance on real estate investments to maximize your returns.",
  },
  {
    icon: Key,
    title: "Property Management",
    description:
      "Comprehensive management services to protect and enhance your property's value.",
  },
  {
    icon: Shield,
    title: "Legal Assistance",
    description:
      "Complete legal support throughout your property transaction process.",
  },
  {
    icon: Handshake,
    title: "Consultation",
    description:
      "Personalized real estate consultation tailored to your unique needs and goals.",
  },
];

export default function Services() {
  return (
    <section id="services" className="py-20 md:py-8 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-block text-[#c8956c] font-semibold text-sm uppercase tracking-[0.2em] mb-3">
            What We Offer
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-[#1a1a2e] mb-4">
            Our Premium Services
          </h2>
          <p className="text-gray-600 leading-relaxed">
            We offer a comprehensive range of real estate services designed to meet
            all your property needs with excellence and professionalism.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <div
              key={service.title}
              className="group relative bg-white rounded-2xl p-8 border border-gray-100 hover:border-[#c8956c]/30 shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden"
            >
              {/* Hover background */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#c8956c]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              <div className="relative z-10">
                <div className="w-14 h-14 rounded-2xl bg-[#f8f6f3] group-hover:bg-[#c8956c]/10 flex items-center justify-center mb-5 transition-colors duration-300">
                  <service.icon
                    size={26}
                    className="text-[#c8956c]"
                  />
                </div>
                <h3 className="text-lg font-bold text-[#1a1a2e] mb-2.5">
                  {service.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {service.description}
                </p>
              
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
