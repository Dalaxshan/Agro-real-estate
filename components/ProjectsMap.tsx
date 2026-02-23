'use client';

import { useState, useEffect } from "react";
import { MapContainer, TileLayer, Marker, useMap } from "react-leaflet";
import * as L from "leaflet";
import { properties, type Property } from "@/data/properties";
import "leaflet/dist/leaflet.css";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

// Custom marker icon
function createCustomIcon(isActive: boolean) {
  return L.divIcon({
    className: "custom-marker",
    html: `
      <div style="
        position: relative;
        width: 44px;
        height: 56px;
        cursor: pointer;
        filter: drop-shadow(0 4px 8px rgba(0,0,0,0.3));
        transition: transform 0.2s;
        transform: ${isActive ? "scale(1.2)" : "scale(1)"};
      ">
        <svg width="44" height="56" viewBox="0 0 44 56" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M22 0C9.85 0 0 9.85 0 22c0 16.5 22 34 22 34s22-17.5 22-34C44 9.85 34.15 0 22 0z" 
                fill="${isActive ? "#f59e0b" : "#1e293b"}"/>
          <circle cx="22" cy="20" r="11" fill="white" opacity="0.95"/>
          <path d="M22 13l-7 7h2.5v5h3.5v-3h2v3h3.5v-5H29l-7-7z" 
                fill="${isActive ? "#f59e0b" : "#1e293b"}"/>
        </svg>
      </div>
    `,
    iconSize: [44, 56],
    iconAnchor: [22, 56],
    popupAnchor: [0, -56],
  });
}

function MapClickHandler({ onMapClick }: { onMapClick: () => void }) {
  const map = useMap();
  useEffect(() => {
    const handler = () => onMapClick();
    map.on("click", handler);
    return () => {
      map.off("click", handler);
    };
  }, [map, onMapClick]);
  return null;
}

function FlyToProject({ property }: { property: Property | null }) {
  const map = useMap();
  useEffect(() => {
    if (property) {
      map.flyTo([property.lat, property.lng], 14, { duration: 1.2 });
    }
  }, [property, map]);
  return null;
}

function PropertyCard({
  property,
  onClose,
}: {
  property: Property;
  onClose: () => void;
}) {
  return (
    <div className="absolute top-4 right-4 z-[1000] w-[300px] max-w-[calc(100vw-2rem)] animate-slide-in">
      <div className="bg-white rounded-2xl shadow-2xl shadow-black/20 overflow-hidden border border-gray-100">
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 z-10 h-8 w-8 flex items-center justify-center rounded-full bg-black/40 text-white backdrop-blur-sm hover:bg-black/60 transition-colors"
        >
          <svg
            className="h-4 w-4"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>

        {/* Image */}
        <div className="relative h-48 overflow-hidden">
          <Image
            src={property.images[1]}
            alt={`${property.title} additional`}
            className="absolute top-2 left-2 h-16 w-16 object-cover rounded-lg border-2 border-white shadow-md"
            />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />

          {/* Type badge */}
          <div className="absolute bottom-3 left-3">
            <div>
              <p className="text-xs text-gray-200 uppercase tracking-wider mb-0.5">
                Starting from
              </p>
              <p className="text-2xl font-bold text-amber-200">
                {property.price}
              </p>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="p-5">
          <h3 className="text-xl font-bold text-gray-900 mb-1.5">
            {property.title}
          </h3>

          <div className="flex items-start gap-1.5 mb-4">
            <svg
              className="h-4 w-4 text-amber-500 mt-0.5 shrink-0"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
            </svg>
            <span className="text-sm text-gray-500 leading-snug">
              {property.location}
            </span>
          </div>

          {/* Features */}
          <div className="flex items-center gap-4 mb-4 pb-4 border-b border-gray-100">
            <div className="flex items-center gap-1.5 text-gray-600">
              <svg
                className="h-4 w-4"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
              >
                <path d="M3 7v11a2 2 0 002 2h14a2 2 0 002-2V7" />
                <path d="M21 10H3" />
                <path d="M7 20V10" />
                <path d="M5 7l7-4 7 4" />
              </svg>
              <span className="text-xs font-medium">
                {property.bedrooms} Beds
              </span>
            </div>
            <div className="flex items-center gap-1.5 text-gray-600">
              <svg
                className="h-4 w-4"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
              >
                <path d="M4 12h16v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5z" />
                <path d="M6 12V5a2 2 0 012-2h1a2 2 0 012 2v1" />
                <circle cx="12" cy="8" r="2" />
              </svg>
              <span className="text-xs font-medium">
                {property.bedrooms} Baths
              </span>
            </div>
            <div className="flex items-center gap-1.5 text-gray-600">
              <svg
                className="h-4 w-4"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
              >
                <rect x="3" y="3" width="18" height="18" rx="2" />
                <path d="M3 12h18" />
                <path d="M12 3v18" />
              </svg>
              <span className="text-xs font-medium">{property.area}</span>
            </div>
          </div>

          {/*  View details button*/}
          <div className="flex items-center justify-between">
            <Link
              href={`/properties/${property.id}`}
              className="text-blue-500 hover:text-blue-600 font-semibold text-sm flex items-center gap-1"
            >
              Details <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export function ProjectsMap() {
  const [activeProject, setActiveProject] = useState<Property | null>(null);

  const center: [number, number] = [7.8731, 80.7718];

  return (
    <section id="map-section" className="relative">
      {/* Section Header */}
      <div
        className="relative py-16 sm:py-20 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1920&q=80')",
        }}
      >
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-gray-900/80 via-gray-900/70 to-gray-900/85" />
        {/* Subtle pattern overlay */}
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage:
              "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")",
          }}
        />

        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-amber-400/30 bg-amber-500/10 backdrop-blur-sm px-4 py-1.5 mb-6">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-amber-400"></span>
            </span>
            <span className="text-sm font-semibold text-amber-300 tracking-wide uppercase">
              Explore on Map
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-5 leading-tight">
            Navigate Our{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-yellow-300">
              Exclusive Locations
            </span>
          </h2>
          <p className="mx-auto max-w-2xl text-gray-300 text-base sm:text-lg leading-relaxed">
            Discover prime real estate across the city — tap any pin on the map
            to unveil stunning visuals, neighborhood insights, and
            investment-ready pricing.
          </p>

          {/* Decorative down arrow */}
          <div className="mt-8 flex justify-center">
            <div className="animate-bounce rounded-full border border-white/20 p-2">
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

      {/* Map Container */}
      <div className="relative h-[400px] sm:h-[450px] border-t border-b border-gray-200">
        <MapContainer
          center={center}
          zoom={7}
          scrollWheelZoom={true}
          className="h-full w-full"
          style={{ zIndex: 1 }}
          zoomControl={false}
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> &copy; <a href="https://carto.com/">CARTO</a>'
            url="https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png"
          />

          {properties.map((property) => (
            <Marker
              key={property.id}
              position={[property.lat, property.lng]}
              icon={createCustomIcon(activeProject?.id === property.id)}
              eventHandlers={{
                click: () => setActiveProject(property),
              }}
            />
          ))}

          <MapClickHandler onMapClick={() => setActiveProject(null)} />
          <FlyToProject property={activeProject} />
        </MapContainer>

        {/* Property Card Popup */}
        {activeProject && (
          <PropertyCard
            property={activeProject}
            onClose={() => setActiveProject(null)}
          />
        )}
      </div>
    </section>
  );
}
