import { Heart, MapPin, Square, ArrowRight, Trees } from "lucide-react";
import { useState } from "react";

import type { Property } from "../data/properties";
import Link from "next/link";
import Image from "next/image";

interface PropertyCardProps {
  prop: Property;
}

export const PropertyCard = ({ prop }: PropertyCardProps) => {
  const [isLiked, setIsLiked] = useState(false);

  return (
    <div className="bg-white rounded-3xl overflow-hidden shadow-sm border border-gray-100 group hover:shadow-xl transition-all duration-300">
      <div className="relative overflow-hidden">
        {/* <img
          src={prop.images[0]}
          alt={prop.title}
          className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
        /> */}
        <Image 
          src={prop.images[0]}
          alt={prop.title}
          width={400}
          height={256}
          className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute top-4 left-4 flex gap-2">
          <span
            className={`text-white text-xs font-bold px-3 py-1.5 rounded-full ${
              prop.type === "FOR SALE" ? "bg-blue-500" : "bg-emerald-500"
            }`}
          >
            {prop.type}
          </span>
        </div>
        <button
          onClick={() => setIsLiked(!isLiked)}
          className="absolute top-4 right-4 w-10 h-10 bg-white/80 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white hover:text-red-500 transition z-10"
        >
          <Heart className={`w-5 h-5 ${isLiked ? "fill-red-500 text-red-500" : ""}`} />
        </button>
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-4">
          <p className="text-white font-bold text-2xl">{prop.price}</p>
        </div>
      </div>
      <div className="p-6">
        <div className="flex items-center gap-2 text-sm text-gray-500 mb-2">
          <MapPin className="w-4 h-4 text-blue-500" />
          {prop.location}
        </div>
        <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-500 transition line-clamp-1">
          {prop.title}
        </h3>
        <div className="flex items-center gap-4 text-sm text-gray-500 mb-4 pb-4 border-b border-gray-100">
          <span className="flex items-center gap-1.5">
            <Trees className="w-4 h-4 text-blue-400" /> {prop.landType}
          </span>
          <span className="flex items-center gap-1.5">
            <Square className="w-4 h-4 text-blue-400" /> {prop.area}
          </span>
          {prop.bedrooms && (
            <span className="flex items-center gap-1.5">
              <HomeIcon className="w-4 h-4 text-blue-400" /> {prop.bedrooms} Beds
            </span>
          )}
        </div>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img
              src={prop.agent.image}
              alt={prop.agent.name}
              className="w-9 h-9 rounded-full object-cover"
            />
            <div>
              <p className="text-sm font-semibold text-gray-700">{prop.agent.name}</p>
              <p className="text-xs text-gray-400">Listed {prop.postedDate}</p>
            </div>
          </div>
          <Link
            href={`/property/${prop.id}`}
            className="text-blue-500 hover:text-blue-600 font-semibold text-sm flex items-center gap-1"
          >
            Details <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </div>
  );
};

function HomeIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
      />
    </svg>
  );
}
