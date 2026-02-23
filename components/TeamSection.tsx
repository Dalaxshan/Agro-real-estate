import { Facebook, Linkedin, Twitter, Mail } from "lucide-react";
import Image from "next/image";

const team = [
  {
    name: "Alexandre Dupont",
    role: "Founder & CEO",
    image:
      "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=500&q=80",
    bio: "20+ years of real estate expertise",
  },
  {
    name: "Sophie Laurent",
    role: "Senior Property Advisor",
    image:
      "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=500&q=80",
    bio: "Luxury property specialist",
  },
  {
    name: "Marc Tremblay",
    role: "Investment Consultant",
    image:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=500&q=80",
    bio: "Market analysis expert",
  },
  {
    name: "Isabelle Moreau",
    role: "Client Relations Manager",
    image:
      "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=500&q=80",
    bio: "Dedicated to client satisfaction",
  },
];

export default function TeamSection() {
  return (
    <section id="team" className="py-20 md:py-18 bg-[#f8f6f3]">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-block text-[#c8956c] font-semibold text-sm uppercase tracking-[0.2em] mb-3">
            Meet Our Experts
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-[#1a1a2e] mb-4">
            Our Dedicated Team
          </h2>
          <p className="text-gray-600 leading-relaxed">
            Our team of experienced professionals is committed to providing you
            with exceptional service and expert guidance throughout your real
            estate journey.
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {team.map((member) => (
            <div
              key={member.name}
              className="group bg-white rounded-2xl overflow-hidden shadow-lg shadow-black/5 border border-gray-50 hover:shadow-xl transition-all duration-300"
            >
              {/* Image */}
              <div className="relative overflow-hidden h-72">
                <Image
                  src={member.image}
                  alt={member.name}
                  width={500}
                  height={500}
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                {/* Social Icons on Hover */}
                <div className="absolute bottom-4 left-0 right-0 flex items-center justify-center gap-3 opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                  {[Facebook, Twitter, Linkedin, Mail].map((Icon, idx) => (
                    <a
                      key={idx}
                      href="#"
                      className="w-9 h-9 rounded-full bg-white/90 hover:bg-[#c8956c] flex items-center justify-center text-[#1a1a2e] hover:text-white transition-colors duration-200"
                    >
                      <Icon size={15} />
                    </a>
                  ))}
                </div>
              </div>

              {/* Info */}
              <div className="p-5 text-center">
                <h3 className="text-lg font-bold text-[#1a1a2e]">
                  {member.name}
                </h3>
                <p className="text-[#c8956c] text-sm font-semibold mb-1">
                  {member.role}
                </p>
                <p className="text-gray-500 text-xs">{member.bio}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
