"use client";

import { 
  Heart, 
  MapPin, 
  Square, 
  ArrowRight,
  Trees,
} from "lucide-react";
import { useState } from "react";

import Link from "next/link";
import { properties } from "@/data/properties";

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
            <span className="inline-block bg-primary-100 text-primary-600 text-sm font-semibold px-4 py-1.5 rounded-full mb-4">FEATURED LANDS</span>
            <h2 className="font-playfair text-4xl md:text-5xl font-bold text-dark mb-4">Handpicked Lands</h2>
            <p className="text-gray-500 max-w-xl text-lg">Premium land blocks carefully selected by our expert team for quality and value.</p>
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
                <img src={prop.images[0]} alt={prop.title} className="w-full h-64 object-cover" />
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
                    {prop.price}
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
                  <span className="flex items-center gap-1.5"><Trees className="w-4 h-4 text-primary-400" /> {prop.landType}</span>
                  <span className="flex items-center gap-1.5"><Square className="w-4 h-4 text-primary-400" /> {prop.area}</span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <img src={prop.agent.image} alt={prop.agent.name} className="w-9 h-9 rounded-full object-cover" />
                    <div>
                      <p className="text-sm font-semibold text-gray-700">{prop.agent.name}</p>
                      <p className="text-xs text-gray-400">Listed {prop.postedDate}</p>
                    </div>
                  </div>
                  <Link href={`/property/${prop.id}`} className="text-primary-500 hover:text-primary-600 font-semibold text-sm flex items-center gap-1">
                    Details <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="inline-flex items-center gap-2 bg-primary-500 hover:bg-primary-600 text-white px-8 py-4 rounded-full font-semibold transition-all shadow-lg shadow-primary-500/30 hover:shadow-primary-500/50">
            View All Lands
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
};

