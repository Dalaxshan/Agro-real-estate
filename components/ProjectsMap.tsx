'use client';
import { useState} from "react";

import { properties, type Property } from "@/data/properties";
import "leaflet/dist/leaflet.css";
import {  Building,Home, MapPin } from "lucide-react";
import Link from "next/link";


export function ProjectsMap() {
  const [activeProject, setActiveProject] = useState<Property | null>(null);
  const featuredProjects = properties.slice(0, 6);
  
const placeholderMapStyle = {
  backgroundImage:
    "linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url('https://images.unsplash.com/photo-1524666041070-9d87656c25bb?auto=format&fit=crop&w=1600&q=80')",
  backgroundSize: "cover",
  backgroundPosition: "center",
};

  return (
    <section id="map-section" className="relative w-full h-full flex flex-col">
      {/* Section Header */}
      <div
        className="relative py-16 sm:py-20 bg-cover bg-center bg-no-repeat shrink-0"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1920&q=80')",
        }}
      >
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-gray-900/80 via-gray-900/70 to-gray-900/85" />
        
        {/* Subtle pattern overlay */}
        <div
          className="absolute inset-0 opacity-10 pointer-events-none"
          style={{
            backgroundImage:
              "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")",
          }}
        />

        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-amber-400/30 bg-amber-500/10 backdrop-blur-sm px-4 py-1.5 mb-6 shadow-lg shadow-amber-900/20">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-amber-400"></span>
            </span>
            <span className="text-sm font-semibold text-amber-300 tracking-wide uppercase">
              Explore our Projects
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-5 leading-tight">
            Navigate Our{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-yellow-300">
              Exclusive Project
            </span>
          </h2>
          <p className="mx-auto max-w-2xl text-gray-300 text-base sm:text-lg leading-relaxed">
            Discover our interactive map showcasing prime real estate projects across Sri Lanka. Click on the card to explore luxury villas, beachfront apartments, commercial spaces and investment opportunities in real time.
          </p>

          {/* Decorative down arrow */}
          <div className="mt-8 flex justify-center">
            <div className="animate-bounce rounded-full border border-white/20 p-2 bg-white/5 backdrop-blur-sm">
              <svg
                className="h-5 w-5 text-amber-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>

{/* NEW SECTION ── Map + Featured Projects Side-by-Side */}
      <div className="relative z-10 bg-gradient-to-b from-gray-950 via-gray-900 to-black text-white">
        <div className="mx-auto max-w-7xl px-5 py-5 lg:px-8 lg:py-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl shadow-black/40 border border-gray-800 h-[480px] lg:h-[620px]">
              <div
                className="absolute inset-0"
                style={placeholderMapStyle}
              />

              <div className="absolute inset-0 flex flex-col justify-end p-8 sm:p-10">
                <div className="inline-flex items-center gap-2 mb-4">
                  <MapPin className="h-5 w-5 text-amber-400" />
                  <span className="text-sm font-semibold uppercase tracking-wider text-amber-300">
                    Interactive Project Map
                  </span>
                </div>

                <h3 className="text-2xl sm:text-3xl font-bold mb-3">
                  Explore Prime Locations Across Sri Lanka
                </h3>

                <p className="text-gray-300 max-w-md mb-6">
                  Click pins to see luxury villas, beachfront apartments,
                  commercial spaces and investment opportunities in real time.
                </p>

                <div className="flex flex-wrap gap-4">
                  <Link href="/properties" className="rounded-lg bg-amber-500/90 hover:bg-amber-500 px-6 py-3 font-medium text-black transition shadow-lg shadow-amber-900/30">
                    View All Properties
                  </Link>
                  <Link href="/branches" className="rounded-lg border border-white/30 hover:bg-white/10 px-6 py-3 font-medium transition backdrop-blur-sm">
                    View All Branches
                  </Link>
                </div>
              </div>         
            </div> 

            {/* RIGHT: Featured projects cards */}
            <div className="space-y-8">
              <div>
                <div className="inline-flex items-center gap-2 rounded-full border border-amber-500/30 bg-amber-600/10 px-5 py-2 mb-6">
                  <Building className="h-4 w-4 text-amber-400" />
                  <span className="text-sm font-semibold uppercase tracking-wider text-amber-300">
                    Featured Projects
                  </span>
                </div>

                <h3 className="text-3xl sm:text-4xl font-bold mb-4">
                  Handpicked Luxury Developments
                </h3>
                <p className="text-gray-400 max-w-xl">
                  Discover our most exclusive and high-potential properties —
                  from oceanfront villas to city-center apartments.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {featuredProjects.map((project) => (
                  <div
                    key={project.id}
                    onClick={() => setActiveProject(project)}
                    className={`group relative rounded-xl overflow-hidden border border-gray-800 hover:border-amber-500/50 transition-all duration-300 cursor-pointer bg-gray-900/60 backdrop-blur-sm hover:shadow-xl hover:shadow-amber-900/20 ${
                      activeProject?.id === project.id
                        ? "ring-2 ring-amber-400/70 scale-[1.02]"
                        : ""
                    }`}
                  >
                    <div className="h-44 bg-cover bg-center" 
                         style={{ backgroundImage: `url(${project.images[0] || 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80'})` }}
                    />

                    <div className="p-5">
                      <h4 className="font-semibold text-lg mb-1 group-hover:text-amber-300 transition-colors">
                        {project.title || project.title}
                      </h4>
                      <p className="text-sm text-gray-400 mb-3">{project.location}</p>

                      <div className="flex items-center justify-between text-sm">
                        <div className="flex items-center gap-1.5">
                      
                          <span>{project.price || "From LKR " + (project.priceValue || "395,000")}</span>
                        </div>
                        <div className="flex items-center gap-4 text-gray-400">
                          <span className="flex items-center gap-1">
                            <Home className="h-3.5 w-3.5" /> {project.bedrooms || 3}
                          </span>
                          <span>•</span>
                          <span>{project.type || "Villa"}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    
    </section>
  );
}
