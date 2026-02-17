"use client";

import { 
  Search, 
  MapPin, 
  Check, 
  Star,
  ChevronDown
} from "lucide-react";


export const Hero = () => {

  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20">
      <div className="absolute inset-0">
        <img 
          src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1920&q=80" 
          alt="Luxury Home" 
          className="w-full h-full object-cover"
        />
        <div className="hero-gradient absolute inset-0"></div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-48 right-20 hidden xl:block floating">
        <div className="glass rounded-2xl p-4 text-white">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center">
              <Check className="text-white w-6 h-6" />
            </div>
            <div>
              <p className="text-sm opacity-80">Property Sold</p>
              <p className="font-bold">Modern Villa, Colombo 7</p>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-20 right-32 hidden xl:block floating" style={{ animationDelay: "1.5s" }}>
        <div className="glass rounded-2xl p-4 text-white">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center">
              <Star className="text-white w-6 h-6 fill-white" />
            </div>
            <div>
              <p className="text-sm opacity-80">Rated</p>
              <p className="font-bold">4.9/5 ⭐ (2,400+ Reviews)</p>
            </div>
          </div>
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-32 w-full">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-5 py-2 mb-6">
            <span className="w-2 h-2 bg-green-400 rounded-full pulse-dot"></span>
            <span className="text-white text-sm font-medium">Sri Lanka&apos;s #1 Real Estate Platform</span>
          </div>
          <h1 className="font-playfair text-5xl md:text-7xl font-bold text-white leading-tight mb-6">
            Find Your <br />
            <span className="text-accent">Perfect</span> Land & Property
          </h1>
          <p className="text-xl text-white/80 mb-10 max-w-xl leading-relaxed">
           Trusted real estate solutions with verified properties, bank loan assistance, and legal support.
          </p>

          {/* Search Box */}
          <div className="glass p-2 shadow-2xl shadow-black/20 max-w-4xl">
            {/* Search Tabs */}
            {/* <div className="flex gap-1 mb-3 px-2 pt-2">
              {tabs.map((tab) => (
                <button
                  key={tab}
                  className={`px-5 py-2 rounded-lg font-semibold text-sm transition ${
                    activeTab === tab ? "bg-primary-500 text-white" : "text-gray-600 hover:bg-gray-100"
                  }`}
                  onClick={() => setActiveTab(tab)}
                >
                  {tab}
                </button>
              ))}
            </div> */}
            <div className="flex flex-col md:flex-row gap-3 p-2">
              <div className="flex-1 relative">
                <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 text-primary-500 w-5 h-5" />
                <input 
                  type="text" 
                  placeholder="City, Neighborhood or ZIP" 
                  className="w-full pl-11 pr-4 py-3.5 bg-gray-50 border border-gray-200 focus:border-primary-500 outline-none transition text-gray-700"
                />
              </div>
              <div className="md:w-48 relative">
                <select className="w-full px-4 py-3.5 bg-gray-50 border border-gray-200 focus:border-primary-500 outline-none transition text-gray-700 appearance-none cursor-pointer">
                  <option>Property Type</option>
                  <option>House</option>
                  <option>Apartment</option>
                  <option>Villa</option>
                </select>
                <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 w-4 h-4 pointer-events-none" />
              </div>
              <div className="md:w-48 relative">
                <select className="w-full px-4 py-3.5 bg-gray-50 border border-gray-200 focus:border-primary-500 outline-none transition text-gray-700 appearance-none cursor-pointer">
                  <option>Price Range</option>
                  <option>Under 10M</option>
                  <option>10M - 50M</option>
                  <option>Above 50M</option>
                </select>
                <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 w-4 h-4 pointer-events-none" />
              </div>
              <button className="bg-primary-500 hover:bg-primary-600 text-white px-8 py-3.5 font-semibold transition-all shadow-lg shadow-primary-500/30 hover:shadow-primary-500/50 flex items-center justify-center gap-2">
                <Search className="w-5 h-5" />
                <span>Search</span>
              </button>
            </div>
          </div>

          {/* Quick Stats */}
          <div className="flex flex-wrap gap-8 mt-10">
            {[
              { val: "15K", label: "Properties Listed" },
              { val: "8K", label: "Happy Customers" },
              { val: "25", label: "Cities Covered" },
              { val: "12", label: "Years Experience" }
            ].map((stat, i) => (
              <div key={i} className="flex items-center gap-8">
                <div className="text-white">
                  <p className="text-3xl font-bold">{stat.val}<span className="text-accent">+</span></p>
                  <p className="text-sm text-white/70">{stat.label}</p>
                </div>
                {i < 3 && <div className="w-px h-10 bg-white/20 hidden sm:block"></div>}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
