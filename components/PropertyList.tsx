'use client';

import React, { useState, useMemo } from "react";
import {
  Search,
  MapPin,
  SlidersHorizontal,
  X,
  ChevronDown,
  Home,
  Building2,
  TreePine,
  Building,
  Castle,
} from "lucide-react";
import {
  properties,
  cities,
  categories,
  propertyTypes,
} from "@/data/properties"; 
import { PropertyCard } from "./PropertyCard";
import { useSearchParams } from "next/navigation";

// Category icons mapping
const categoryIcons: Record<string, React.ReactNode> = {
  All: <Home className="w-4 h-4" />,
  Agricultural: <TreePine className="w-4 h-4" />,
  Residential: <Home className="w-4 h-4" />,
  Commercial: <Building2 className="w-4 h-4" />,
  Houses: <Home className="w-4 h-4" />,
  Apartment: <Building className="w-4 h-4" />,
  Villas: <Castle className="w-4 h-4" />,
};

export default function PropertyList() {
  // Filter states
  // const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedType, setSelectedType] = useState("All");
  const [selectedCity, setSelectedCity] = useState("All");
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");
  const [showMobileFilters, setShowMobileFilters] = useState(false);

  //search query from URL
  const searchParams = useSearchParams();
  
  const initialSearch = searchParams.get("search") || "";

  // Filter properties based on all criteria
  const filteredProperties = useMemo(() => {
    return properties.filter((property) => {
      // Search filter
      const searchLower = initialSearch.toLowerCase();
      const matchesSearch =
        searchLower === "" ||
        property.title.toLowerCase().includes(searchLower) ||
        property.location.toLowerCase().includes(searchLower) ||
        property.description.toLowerCase().includes(searchLower);

      // Category filter
      const matchesCategory =
        selectedCategory === "All" || property.category === selectedCategory;

      // Type filter
      const matchesType =
        selectedType === "All" || property.type === selectedType;

      // City filter
      const matchesCity =
        selectedCity === "All" || property.city === selectedCity;

      // Price filter
      const minPriceValue = minPrice ? parseFloat(minPrice) : 0;
      const maxPriceValue = maxPrice ? parseFloat(maxPrice) : Infinity;
      const matchesPrice =
        property.priceValue >= minPriceValue &&
        property.priceValue <= maxPriceValue;

      return (
        matchesSearch &&
        matchesCategory &&
        matchesType &&
        matchesCity &&
        matchesPrice
      );
    });
  }, [
    initialSearch,
    selectedCategory,
    selectedType,
    selectedCity,
    minPrice,
    maxPrice,
  ]);

  // Clear all filters
  const clearFilters = () => {
    // setSearchQuery("");
    setSelectedCategory("All");
    setSelectedType("All");
    setSelectedCity("All");
    setMinPrice("");
    setMaxPrice("");
  };

  // Check if any filter is active
  const hasActiveFilters =
    initialSearch !== "" ||
    selectedCategory !== "All" ||
    selectedType !== "All" ||
    selectedCity !== "All" ||
    minPrice !== "" ||
    maxPrice !== "";

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 py-20 overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            }}
          />
        </div>

        {/* Gradient Orbs */}
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary-500/20 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-emerald-500/20 rounded-full blur-3xl" />

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-3xl mx-auto">
            <span className="inline-block px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-primary-100 text-sm font-medium mb-6">
              🏠 Your Perfect Property Awaits
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            Discover Your Ideal{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-emerald-400">
                Property
              </span>
            </h1>
            <p className="text-lg text-slate-300 mb-8">
              Explore our exclusive collection of premium properties across Sri
              Lanka. From luxury villas to commercial spaces.
            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-12">
        {/* Mobile Filter Toggle */}
        <div className="lg:hidden mb-6">
          <button
            onClick={() => setShowMobileFilters(!showMobileFilters)}
            className="w-full flex items-center justify-center gap-2 py-4 bg-white/70 backdrop-blur-xl rounded-2xl border border-white/50 shadow-lg text-slate-700 font-semibold"
          >
            <SlidersHorizontal className="w-5 h-5" />
            {showMobileFilters ? "Hide Filters" : "Show Filters"}
          </button>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Filter Sidebar */}
          <aside
            className={`lg:w-80 flex-shrink-0 ${showMobileFilters ? "block" : "hidden lg:block"}`}
          >
            <div className="sticky top-6">
              {/* Glass Filter Card */}
              <div className="relative overflow-hidden rounded-3xl">
                {/* Glass Background */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/80 via-white/60 to-white/80 backdrop-blur-xl" />
                <div className="absolute inset-0 bg-gradient-to-br from-primary-500/5 to-emerald-500/5" />

                {/* Border Glow */}
                <div className="absolute inset-0 rounded-3xl border border-white/50 shadow-xl shadow-slate-200/50" />

                <div className="relative p-6">
                  {/* Filter Header */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-gradient-to-br from-primary-500 to-primary-600 rounded-xl flex items-center justify-center shadow-lg shadow-primary-500/30">
                        <SlidersHorizontal className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <h3 className="font-bold text-slate-800">Filters</h3>
                        <p className="text-xs text-slate-500">
                          Refine your search
                        </p>
                      </div>
                    </div>
                    {hasActiveFilters && (
                      <button
                        onClick={clearFilters}
                        className="text-sm text-primary-500 hover:text-primary-600 font-medium flex items-center gap-1"
                      >
                        <X className="w-4 h-4" />
                        Clear
                      </button>
                    )}
                  </div>

                  {/* Category Filter */}
                  <div className="mb-6">
                    <label className="block text-sm font-semibold text-slate-700 mb-3">
                      Category
                    </label>
                    <div className="relative">
                      <div className="absolute inset-0 bg-white/50 backdrop-blur-sm rounded-xl" />
                      <select
                        value={selectedCategory}
                        onChange={(e) => setSelectedCategory(e.target.value)}
                        className="relative w-full px-4 py-3.5 bg-transparent rounded-xl border border-slate-200/80 focus:outline-none focus:ring-2 focus:ring-primary-400 focus:border-transparent text-slate-700 appearance-none cursor-pointer"
                      >
                        {categories.map((category) => (
                          <option key={category} value={category}>
                            {category}
                          </option>
                        ))}
                      </select>
                      <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400 pointer-events-none" />
                    </div>
                  </div>

                  {/* Property Type Filter */}
                  <div className="mb-6">
                    <label className="block text-sm font-semibold text-slate-700 mb-3">
                      Property Type
                    </label>
                    <div className="grid grid-cols-3 gap-2">
                      {propertyTypes.map((type) => (
                        <button
                          key={type}
                          onClick={() => setSelectedType(type)}
                          className={`px-3 py-2.5 rounded-xl text-sm font-medium transition-all ${
                            selectedType === type
                              ? "bg-gradient-to-r from-primary-500 to-primary-600 text-white shadow-lg shadow-primary-500/30"
                              : "bg-white/50 backdrop-blur-sm border border-slate-200/80 text-slate-600 hover:bg-white hover:border-primary-300"
                          }`}
                        >
                          {type === "All"
                            ? "All"
                            : type === "FOR SALE"
                              ? "Sale"
                              : "Rent"}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* City Filter */}
                  <div className="mb-6">
                    <label className="block text-sm font-semibold text-slate-700 mb-3">
                      City
                    </label>
                    <div className="relative">
                      <div className="absolute inset-0 bg-white/50 backdrop-blur-sm rounded-xl" />
                      <div className="relative flex items-center">
                        <MapPin className="absolute left-4 w-5 h-5 text-primary-400" />
                        <select
                          value={selectedCity}
                          onChange={(e) => setSelectedCity(e.target.value)}
                          className="w-full pl-12 pr-10 py-3.5 bg-transparent rounded-xl border border-slate-200/80 focus:outline-none focus:ring-2 focus:ring-primary-400 focus:border-transparent text-slate-700 appearance-none cursor-pointer"
                        >
                          {cities.map((city) => (
                            <option key={city} value={city}>
                              {city}
                            </option>
                          ))}
                        </select>
                        <ChevronDown className="absolute right-4 w-5 h-5 text-slate-400 pointer-events-none" />
                      </div>
                    </div>
                  </div>

                  {/* Price Range */}
                  <div className="mb-6">
                    <label className="block text-sm font-semibold text-slate-700 mb-3">
                      Price Range (LKR)
                    </label>
                    <div className="flex gap-3">
                      <div className="flex-1 relative">
                        <div className="absolute inset-0 bg-white/50 backdrop-blur-sm rounded-xl" />
                        <input
                          type="number"
                          placeholder="Min"
                          value={minPrice}
                          onChange={(e) => setMinPrice(e.target.value)}
                          className="relative w-full px-4 py-3.5 bg-transparent rounded-xl border border-slate-200/80 focus:outline-none focus:ring-2 focus:ring-primary-400 focus:border-transparent text-slate-700 placeholder-slate-400"
                        />
                      </div>
                      <div className="flex items-center text-slate-400">—</div>
                      <div className="flex-1 relative">
                        <div className="absolute inset-0 bg-white/50 backdrop-blur-sm rounded-xl" />
                        <input
                          type="number"
                          placeholder="Max"
                          value={maxPrice}
                          onChange={(e) => setMaxPrice(e.target.value)}
                          className="relative w-full px-4 py-3.5 bg-transparent rounded-xl border border-slate-200/80 focus:outline-none focus:ring-2 focus:ring-primary-400 focus:border-transparent text-slate-700 placeholder-slate-400"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Quick Price Ranges */}
                  <div className="mb-6">
                    <label className="block text-sm font-semibold text-slate-700 mb-3">
                      Quick Select
                    </label>
                    <div className="flex flex-wrap gap-2">
                      {[
                        { label: "Under 50M", min: "", max: "50000000" },
                        {
                          label: "50M - 100M",
                          min: "50000000",
                          max: "100000000",
                        },
                        { label: "100M+", min: "100000000", max: "" },
                      ].map((range) => (
                        <button
                          key={range.label}
                          onClick={() => {
                            setMinPrice(range.min);
                            setMaxPrice(range.max);
                          }}
                          className={`px-3 py-2 rounded-lg text-xs font-medium transition-all ${
                            minPrice === range.min && maxPrice === range.max
                              ? "bg-primary-100 text-primary-600 border border-primary-300"
                              : "bg-white/50 backdrop-blur-sm border border-slate-200/80 text-slate-600 hover:bg-white hover:border-primary-300"
                          }`}
                        >
                          {range.label}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Apply Button */}
                  <button className="w-full py-4 bg-gradient-to-r from-primary-500 to-primary-600 text-white font-semibold rounded-xl hover:from-primary-600 hover:to-primary-700 transition-all shadow-lg shadow-primary-500/30 flex items-center justify-center gap-2">
                    <Search className="w-5 h-5" />
                    Apply Filters
                  </button>
                </div>
              </div>

              {/* Category Quick Links */}
              <div className="mt-6 relative overflow-hidden rounded-3xl">
                <div className="absolute inset-0 bg-gradient-to-br from-white/80 via-white/60 to-white/80 backdrop-blur-xl" />
                <div className="absolute inset-0 rounded-3xl border border-white/50" />

                <div className="relative p-6">
                  <h4 className="font-bold text-slate-800 mb-4">
                    Browse by Category
                  </h4>
                  <div className="space-y-2">
                    {categories.slice(1).map((category) => (
                      <button
                        key={category}
                        onClick={() => setSelectedCategory(category)}
                        className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all ${
                          selectedCategory === category
                            ? "bg-primary-50 text-primary-600 border border-primary-200"
                            : "hover:bg-slate-50 text-slate-600"
                        }`}
                      >
                        <span
                          className={`w-8 h-8 rounded-lg flex items-center justify-center ${
                            selectedCategory === category
                              ? "bg-primary-100"
                              : "bg-slate-100"
                          }`}
                        >
                          {categoryIcons[category]}
                        </span>
                        <span className="font-medium">{category}</span>
                        <span className="ml-auto text-xs bg-slate-100 px-2 py-1 rounded-full text-slate-500">
                          {
                            properties.filter((p) => p.category === category)
                              .length
                          }
                        </span>
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </aside>

          {/* Property Grid */}
          <main className="flex-1">
            {/* Results Header */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
              <div>
                <h2 className="text-2xl font-bold text-slate-800">
                  Available Properties
                </h2>
                <p className="text-slate-500">
                  Showing{" "}
                  <span className="font-semibold text-primary-500">
                    {filteredProperties.length}
                  </span>{" "}
                  of {properties.length} properties
                </p>
              </div>

              {/* Sort Dropdown */}
              <div className="relative">
                <div className="absolute inset-0 bg-white/70 backdrop-blur-xl rounded-xl" />
                <select className="relative px-4 py-3 pr-10 bg-transparent rounded-xl border border-slate-200/80 focus:outline-none focus:ring-2 focus:ring-primary-400 text-slate-700 appearance-none cursor-pointer min-w-[180px]">
                  <option>Sort by: Newest</option>
                  <option>Price: Low to High</option>
                  <option>Price: High to Low</option>
                  <option>Most Popular</option>
                </select>
                <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400 pointer-events-none" />
              </div>
            </div>

            {/* Active Filters Pills */}
            {hasActiveFilters && (
              <div className="flex flex-wrap gap-2 mb-6"> 
                {selectedCategory !== "All" && (
                  <span className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-50 text-emerald-600 rounded-full text-sm font-medium">
                    {selectedCategory}
                    <button
                      onClick={() => setSelectedCategory("All")}
                      className="hover:bg-emerald-100 rounded-full p-0.5"
                    >
                      <X className="w-4 h-4" />
                    </button>
                  </span>
                )}
                {selectedType !== "All" && (
                  <span className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 text-blue-600 rounded-full text-sm font-medium">
                    {selectedType}
                    <button
                      onClick={() => setSelectedType("All")}
                      className="hover:bg-blue-100 rounded-full p-0.5"
                    >
                      <X className="w-4 h-4" />
                    </button>
                  </span>
                )}
                {selectedCity !== "All" && (
                  <span className="inline-flex items-center gap-2 px-4 py-2 bg-purple-50 text-purple-600 rounded-full text-sm font-medium">
                    {selectedCity}
                    <button
                      onClick={() => setSelectedCity("All")}
                      className="hover:bg-purple-100 rounded-full p-0.5"
                    >
                      <X className="w-4 h-4" />
                    </button>
                  </span>
                )}
                {(minPrice || maxPrice) && (
                  <span className="inline-flex items-center gap-2 px-4 py-2 bg-amber-50 text-amber-600 rounded-full text-sm font-medium">
                    Price: {minPrice || "0"} - {maxPrice || "∞"}
                    <button
                      onClick={() => {
                        setMinPrice("");
                        setMaxPrice("");
                      }}
                      className="hover:bg-amber-100 rounded-full p-0.5"
                    >
                      <X className="w-4 h-4" />
                    </button>
                  </span>
                )}
              </div>
            )}

            {/* Property Grid */}
            {filteredProperties.length > 0 ? (
              <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
                {filteredProperties.map((prop) => (
                  <PropertyCard key={prop.id} prop={prop} />
                ))}
              </div>
            ) : (
              /* No Results */
              <div className="text-center py-20">
                <div className="w-24 h-24 bg-slate-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Search className="w-10 h-10 text-slate-400" />
                </div>
                <h3 className="text-2xl font-bold text-slate-700 mb-2">
                  No Properties Found
                </h3>
                <p className="text-slate-500 mb-6">
                  Try adjusting your filters or search criteria
                </p>
                <button
                  onClick={clearFilters}
                  className="px-6 py-3 bg-primary-500 text-white font-semibold rounded-xl hover:bg-primary-600 transition"
                >
                  Clear All Filters
                </button>
              </div>
            )}

            {/* Pagination */}
            {filteredProperties.length > 0 && (
              <div className="mt-12 flex justify-center">
                <div className="inline-flex items-center gap-2 bg-white/70 backdrop-blur-xl rounded-2xl p-2 border border-slate-200/80">
                  <button className="px-4 py-2 rounded-xl text-slate-600 hover:bg-slate-100 transition">
                    Previous
                  </button>
                  <button className="w-10 h-10 rounded-xl bg-primary-500 text-white font-semibold">
                    1
                  </button>
                  <button className="w-10 h-10 rounded-xl text-slate-600 hover:bg-slate-100 transition">
                    2
                  </button>
                  <button className="w-10 h-10 rounded-xl text-slate-600 hover:bg-slate-100 transition">
                    3
                  </button>
                  <button className="px-4 py-2 rounded-xl text-slate-600 hover:bg-slate-100 transition">
                    Next
                  </button>
                </div>
              </div>
            )}
          </main>
        </div>
      </div>
    </div>
  );
}
