"use client";

import { 
  Heart, 
  MapPin, 
  Bed, 
  Bath, 
  Square, 
  ArrowRight,
} from "lucide-react";
import { useState } from "react";

const properties = [
  {
    id: 1,
    title: "Modern Luxury Villa with Pool",
    location: "Colombo 07, Sri Lanka",
    price: "LKR 85,000,000",
    beds: 4,
    baths: 3,
    sqft: "3,200",
    type: "FOR SALE",
    image: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=800&q=80",
    agent: "Kamal Perera",
    agentImg: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&q=80",
    category: "Sale"
  },
  {
    id: 2,
    title: "Luxury Penthouse Apartment",
    location: "Rajagiriya, Sri Lanka",
    price: "LKR 250,000",
    period: "/month",
    beds: 3,
    baths: 2,
    sqft: "2,100",
    type: "FOR RENT",
    image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800&q=80",
    agent: "Nisha Fernando",
    agentImg: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&q=80",
    category: "Rent"
  },
  {
    id: 3,
    title: "Spacious Family Home",
    location: "Nugegoda, Sri Lanka",
    price: "LKR 45,000,000",
    beds: 5,
    baths: 4,
    sqft: "4,500",
    type: "FOR SALE",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80",
    agent: "Ruwan Silva",
    agentImg: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&q=80",
    category: "Sale"
  }
];

export const Properties = () => {
  const [filter, setFilter] = useState("All");

  const filteredProperties = filter === "All" 
    ? properties 
    : properties.filter(p => p.category === filter);

  return (
    <section id="properties" className="py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-14">
          <div>
            <span className="inline-block bg-primary-100 text-primary-600 text-sm font-semibold px-4 py-1.5 rounded-full mb-4">FEATURED PROPERTIES</span>
            <h2 className="font-playfair text-4xl md:text-5xl font-bold text-dark mb-4">Handpicked Properties</h2>
            <p className="text-gray-500 max-w-xl text-lg">Premium properties carefully selected by our expert team for quality and value.</p>
          </div>
          <div className="flex gap-2 mt-6 md:mt-0">
            {["All", "Sale", "Rent"].map((f) => (
              <button
                key={f}
                onClick={() => setFilter(f)}
                className={`px-5 py-2 rounded-full font-medium text-sm transition ${
                  filter === f ? "bg-primary-500 text-white" : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                }`}
              >
                {f === "All" ? "All" : `For ${f}`}
              </button>
            ))}
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProperties.map((prop) => (
            <div key={prop.id} className="card-hover bg-white rounded-3xl overflow-hidden shadow-sm border border-gray-100 group">
              <div className="relative img-zoom">
                <img src={prop.image} alt={prop.title} className="w-full h-64 object-cover" />
                <div className="absolute top-4 left-4 flex gap-2">
                  <span className={`text-white text-xs font-bold px-3 py-1.5 rounded-full ${prop.type === "FOR SALE" ? "bg-primary-500" : "bg-emerald-500"}`}>
                    {prop.type}
                  </span>
                </div>
                <button className="absolute top-4 right-4 w-10 h-10 bg-white/80 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white hover:text-red-500 transition z-10">
                  <Heart className="w-5 h-5" />
                </button>
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-4">
                  <p className="text-white font-bold text-2xl">
                    {prop.price}{prop.period && <span className="text-sm font-normal">{prop.period}</span>}
                  </p>
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center gap-2 text-sm text-gray-500 mb-2">
                  <MapPin className="w-4 h-4 text-primary-500" />
                  {prop.location}
                </div>
                <h3 className="text-xl font-bold text-dark mb-3 group-hover:text-primary-500 transition line-clamp-1">
                  {prop.title}
                </h3>
                <div className="flex items-center gap-4 text-sm text-gray-500 mb-4 pb-4 border-b border-gray-100">
                  <span className="flex items-center gap-1.5"><Bed className="w-4 h-4 text-primary-400" /> {prop.beds} Beds</span>
                  <span className="flex items-center gap-1.5"><Bath className="w-4 h-4 text-primary-400" /> {prop.baths} Baths</span>
                  <span className="flex items-center gap-1.5"><Square className="w-4 h-4 text-primary-400" /> {prop.sqft} sqft</span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <img src={prop.agentImg} alt={prop.agent} className="w-9 h-9 rounded-full object-cover" />
                    <div>
                      <p className="text-sm font-semibold text-gray-700">{prop.agent}</p>
                      <p className="text-xs text-gray-400">Listed 2 days ago</p>
                    </div>
                  </div>
                  <a href="#" className="text-primary-500 hover:text-primary-600 font-semibold text-sm flex items-center gap-1">
                    Details <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="inline-flex items-center gap-2 bg-primary-500 hover:bg-primary-600 text-white px-8 py-4 rounded-full font-semibold transition-all shadow-lg shadow-primary-500/30 hover:shadow-primary-500/50">
            View All Properties
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
};
