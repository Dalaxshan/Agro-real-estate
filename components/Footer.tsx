import {
 
  MapPin,
  Phone,
  Mail,
  Facebook,
  Instagram,
  Linkedin,
  Youtube,
  Send,
  ArrowRight,
  Heart,
} from "lucide-react";

export default function Footer() {

  const QuickLink = [
    {
      title: 'About Us',
      path: 'about-us'
    },
    {
      title: 'Our Properties',
      path: 'properties'
    },
    {
      title: 'New Projects',
      path: 'projects'
    },
    {
      title: 'Our Agents',
      path: 'our-agents'
    },
    {
      title: 'Blog & News',
      path: 'blogs'
    },
    {
      title: 'Careers',
      path: 'careers'
    }
   ]

  const PropertyTypes = [
    {
      title: 'Buying home guide',
      path: '/blogs/ultimate-guide-buying-first-home-2024'
    },
    {
      title: 'Neighborhood guide',
      path: '/blogs/top-10-neighborhoods-families'
    },
    {
      title: 'Property selling tips',
      path: '/blogs/home-staging-tips-sell-faster'
    },
    {
      title: 'Investment',
      path: '/blogs/real-estate-investment-strategies-beginners'
    },
    {
      title: 'Sustainable home',
      path: '/blogs/sustainable-homes-future-living'
    },
    {
      title: 'Market Analysis',
      path: '/blogs/understanding-real-estate-market-trends-2024'
    }
   ]

  return (
    <footer id="contact" className="bg-dark pt-20 pb-8 text-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Company Info */}
          <div>
            <a href="#" className="flex items-center gap-3 mb-6">
              {/* <div className="w-10 h-10 bg-primary-500 rounded-xl flex items-center justify-center">
                <Home className="text-white w-6 h-6" />
              </div> */}

              <img
                src="/logo.png"
                alt="Tranquille Real Estate Logo"
                className="w-30 h-25 object-cover rounded-xl group-hover:rotate-12 transition-transform"
              />
            </a>
            <p className="text-gray-400 leading-relaxed mb-6">
              Sri Lanka&apos;s premier real estate platform, connecting buyers,
              sellers, and renters with their perfect properties since 2012.
            </p>
            <div className="flex gap-3">
              {[Facebook, Instagram, Linkedin, Youtube].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-10 h-10 bg-white/10 rounded-xl flex items-center justify-center hover:bg-primary-500 transition"
                >
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-bold text-lg mb-6">Quick Links</h3>
            <ul className="space-y-3 text-gray-400">
              {QuickLink.map((link) => (
                <li key={link.title}>
                  <a
                    href={link.path}
                    className="hover:text-accent transition flex items-center gap-2"
                  >
                    <ArrowRight className="w-3 h-3 text-primary-400" /> {link.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Property Types */}
          <div>
            <h3 className="text-white font-bold text-lg mb-6">
              Our Blogs
            </h3>
            <ul className="space-y-3 text-gray-400">
              {PropertyTypes.map((item) => (
                <li key={item.title}>
                  <a
                    href={item.path}
                    className="hover:text-accent transition flex items-center gap-2"
                  >
                    <ArrowRight className="w-3 h-3 text-primary-400" /> {item.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white font-bold text-lg mb-6">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <div className="w-10 h-10 bg-white/10 rounded-xl flex items-center justify-center flex-shrink-0 mt-0.5">
                  <MapPin className="text-accent w-5 h-5" />
                </div>
                <span className="text-gray-400">
                  No. 42, Galle Road,
                  <br />
                  Colombo 03, Sri Lanka
                </span>
              </li>
              <li className="flex items-center gap-3">
                <div className="w-10 h-10 bg-white/10 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Phone className="text-accent w-5 h-5" />
                </div>
                <div>
                  <a
                    href="tel:+94112345678"
                    className="text-gray-400 hover:text-accent transition block"
                  >
                    +94 11 234 5678
                  </a>
                  <a
                    href="tel:+94771234567"
                    className="text-gray-400 hover:text-accent transition block"
                  >
                    +94 77 123 4567
                  </a>
                </div>
              </li>
              <li className="flex items-center gap-3">
                <div className="w-10 h-10 bg-white/10 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Mail className="text-accent w-5 h-5" />
                </div>
                <a
                  href="mailto:info@tranquilleproperty.lk"
                  className="text-gray-400 hover:text-accent transition"
                >
                  info@tranquilleproperty.lk
                </a>
              </li>
            </ul>

            <div className="mt-6">
              <p className="text-white font-semibold mb-3">Newsletter</p>
              <div className="flex gap-2">
                <input
                  type="email"
                  placeholder="Your email"
                  className="flex-1 px-4 py-3 bg-white/10 rounded-xl border border-white/10 text-white placeholder-gray-500 focus:border-accent outline-none transition text-sm"
                />
                <button className="bg-accent hover:bg-amber-600 text-dark px-4 py-3 rounded-xl font-bold transition">
                  <Send className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-white/10 pt-0">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-300 text-sm flex items-center gap-1">
              © 2026 Tranquille Real Estate. All rights reserved. Made with{" "}
              <Heart className="w-4 h-4 text-red-500 fill-red-500" /> in Sri
              Lanka
            </p>
            <div className="flex gap-6">
              <a
                href="/privacy-policy"
                className="text-gray-300 hover:text-accent text-sm transition"
              >
                Privacy Policy
              </a>
              <a
                href="/terms-of-service"
                className="text-gray-300 hover:text-accent text-sm transition"
              >
                Terms of Service
              </a>
              <a
                href="/branches"
                className="text-gray-300 hover:text-accent text-sm transition"
              >
                Braches
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
