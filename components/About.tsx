import { ShieldCheck, HandCoins, Headphones, FileText } from "lucide-react";
import Image from "next/image";

const features = [
  {
    icon: ShieldCheck,
    title: "Trusted & Verified",
    desc: "All properties are thoroughly verified by our expert team ensuring complete transparency.",
    color: "bg-blue-50",
    iconColor: "text-primary-500",
  },
  {
    icon: HandCoins,
    title: "Best Price Guarantee",
    desc: "We negotiate the best deals and ensure you get maximum value for your investment.",
    color: "bg-amber-50",
    iconColor: "text-accent",
  },
  {
    icon: Headphones,
    title: "24/7 Support",
    desc: "Our dedicated support team is available around the clock to assist you at every step.",
    color: "bg-green-50",
    iconColor: "text-green-500",
  },
  {
    icon: FileText,
    title: "Legal Assistance",
    desc: "Complete legal support for property documentation, registration, and transfer.",
    color: "bg-purple-50",
    iconColor: "text-purple-500",
  },
];

export const About = () => {
  return (
    <section id="about" className="py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              <Image
                src="https://images.unsplash.com/photo-1764223531702-1614efb82e40?w=600&q=80"
                alt="Interior"
                width={600}
                height={256}
                className="rounded-2xl w-full h-64 object-cover shadow-lg"
              />
              <Image
                src="https://images.unsplash.com/photo-1669003152899-a11941e54f5d?w=600&q=80"
                alt="Exterior"
                width={600}
                height={256}
                className="rounded-2xl w-full h-64 object-cover mt-8 shadow-lg"
              />
              <Image
                src="https://images.unsplash.com/photo-1764222233275-87dc016c11dc?w=600&q=80"
                alt="Living Room"
                width={600}
                height={256}
                className="rounded-2xl w-full h-64 object-cover -mt-8 shadow-lg"
              />
              <Image
                src="https://images.unsplash.com/photo-1669003153895-1dc8ff33eb32?w=600&q=80"
                alt="Kitchen"
                width={600}
                height={256}
                className="rounded-2xl w-full h-64 object-cover shadow-lg"
              />
            </div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-primary-500 text-white rounded-2xl p-6 shadow-2xl z-10 text-center">
              <p className="text-5xl font-bold">12+</p>
              <p className="text-sm opacity-90">
                Years of
                <br />
                Excellence
              </p>
            </div>
          </div>

          <div>
            <span className="inline-block bg-primary-100 text-primary-600 text-sm font-semibold px-4 py-1.5 rounded-full mb-4">
              WHY CHOOSE US
            </span>
            <h2 className="font-playfair text-4xl md:text-5xl font-bold text-dark mb-6 leading-tight">
              We Help You Find <br />
              <span className="text-gradient">The Perfect Land for You</span>
            </h2>
            <p className="text-gray-500 text-lg mb-8 leading-relaxed">
              With over 12 years of experience in Sri Lankan land real estate, we have helped hundreds of clients find the ideal land for living, investment, and development.
            </p>

            <div className="space-y-6">
              {features.map((item, i) => (
                <div key={i} className="flex items-start gap-4">
                  <div
                    className={`w-14 h-14 ${item.color} rounded-2xl flex items-center justify-center flex-shrink-0`}
                  >
                    <item.icon className={`w-6 h-6 ${item.iconColor}`} />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-dark mb-1">
                      {item.title}
                    </h3>
                    <p className="text-gray-500">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <button className="mt-8 inline-flex items-center gap-2 bg-primary-500 hover:bg-primary-600 text-white px-8 py-4 rounded-full font-semibold transition-all shadow-lg shadow-primary-500/30">
              Learn More About Us
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
