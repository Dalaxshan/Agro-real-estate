import { Home, Users, Award, MapPin } from "lucide-react";

const stats = [
  {
    icon: Home,
    value: "1,200+",
    label: "Properties Sold",
    description: "Successfully closed deals",
  },
  {
    icon: Users,
    value: "850+",
    label: "Happy Clients",
    description: "Satisfied homeowners",
  },
  {
    icon: Award,
    value: "15+",
    label: "Years Experience",
    description: "In real estate industry",
  },
  {
    icon: MapPin,
    value: "50+",
    label: "Neighborhoods",
    description: "Areas we serve",
  },
];

export default function StatsCounter() {
  return (
    <section className="relative py-20 overflow-hidden">                
      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-fixed"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=2000&q=80')",
        }}
      />
      <div className="absolute inset-0 bg-[#1a1a2e]/90" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="text-center mb-14">
          <span className="inline-block text-[#c8956c] font-semibold text-sm uppercase tracking-[0.2em] mb-3">
            Our Achievements
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            Numbers That Speak for Themselves
          </h2>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="text-center group"
            >
              <div className="w-16 h-16 mx-auto mb-5 rounded-2xl bg-white/10 flex items-center justify-center group-hover:bg-[#c8956c]/20 transition-all duration-300 border border-white/10 group-hover:border-[#c8956c]/30">
                <stat.icon size={28} className="text-[#c8956c]" />
              </div>
              <p className="text-3xl md:text-4xl font-bold text-white mb-1">
                {stat.value}
              </p>
              <p className="text-[#c8956c] font-semibold text-sm mb-1">
                {stat.label}
              </p>
              <p className="text-white/50 text-xs">{stat.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
