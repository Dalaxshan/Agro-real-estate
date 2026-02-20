"use client";

    import { Heart, MapPin, Square, ArrowRight, Trees } from "lucide-react";
import { useState } from "react";

import Link from "next/link";
import { properties } from "@/data/properties";
import { PropertyCard } from "./propertyCard";

export const Properties = () => {
  const [filter, setFilter] = useState("All");

  const filteredProperties =
    filter === "All"
      ? properties
      : properties.filter((p) => p.landType === filter);

  return (
    <section id="properties" className="py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-14">
          <div>
            <span className="inline-block bg-primary-100 text-primary-600 text-sm font-semibold px-4 py-1.5 rounded-full mb-4">
              FEATURED LANDS
            </span>
            <h2 className="font-playfair text-4xl md:text-5xl font-bold text-dark mb-4">
              Handpicked Lands
            </h2>
            <p className="text-gray-500 max-w-xl text-lg">
              Premium land blocks carefully selected by our expert team for
              quality and value.
            </p>
          </div>
          <div className="flex gap-2 mt-6 md:mt-0">
            {["All", "Sale", "Rent"].map((f) => (
              <button
                key={f}
                onClick={() => setFilter(f)}
                className={`px-5 py-2 rounded-full font-medium text-sm transition ${
                  filter === f
                    ? "bg-primary-500 text-white"
                    : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                }`}
              >
                {f === "All" ? "All" : `For ${f}`}
              </button>
            ))}
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProperties.map((prop) => (
           <PropertyCard key={prop.id} prop={prop} />
          ))}
        </div>

        <div className="text-center mt-12">
          <Link href="/properties" className="inline-flex items-center gap-2 bg-primary-500 hover:bg-primary-600 text-white px-8 py-4 rounded-full font-semibold transition-all shadow-lg shadow-primary-500/30 hover:shadow-primary-500/50">
            View All Properties
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </section>
  );
};
