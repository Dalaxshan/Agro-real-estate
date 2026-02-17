import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { FloatingActions } from "@/components/FloatingActions";
import {
  MapPin,
  Calendar,
  Share2,
  Printer,
  Heart,
  Ruler,
  Trees,
  CheckCircle2,
} from "lucide-react";
import Link from "next/link";
import { notFound } from "next/navigation";
import {properties } from "@/data/properties";
import {
  MortgageCalculator,
  PropertyReviews,
  Statistics,
  VirtualTour,
  GoogleMapView,
  LandBlueprint
} from "@/components/Features";

export default async function PropertyDetailsPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const property = properties.find((p) => p.id === Number(id));

  if (!property) {
    notFound();
  }

  // Default values for missing data to prevent crashes
  const virtualTourUrl =
    property.virtualTourUrl || "https://maps.app.goo.gl/C4pk7kKt7Lnpyf4p8";
  const statistics = property.statistics || {
    views: [
      { month: "Jan", value: 100 },
      { month: "Feb", value: 200 },
      { month: "Mar", value: 300 },
      { month: "Apr", value: 400 },
      { month: "May", value: 500 },
      { month: "Jun", value: 600 },
    ],
    priceHistory: [
      { year: 2022, price: 70000000 },
      { year: 2023, price: 78000000 },
      { year: 2024, price: property.priceValue },
    ],
  };
  const reviews = property.reviews || [];

  return (
    <main className="min-h-screen bg-gray-50">
      <Navbar />

      {/* Spacer for fixed navbar */}
      <div className="h-24 bg-dark"></div>

      {/* Breadcrumb & Title */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6 py-8">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
            <div>
              <div className="flex items-center gap-2 text-sm text-gray-500 mb-2">
                <Link href="/" className="hover:text-primary-500 transition">
                  Home
                </Link>
                <span>/</span>
                <Link
                  href="/#properties"
                  className="hover:text-primary-500 transition"
                >
                  Properties
                </Link>
                <span>/</span>
                <span className="text-gray-800">{property.title}</span>
              </div>
              <h1 className="font-playfair text-3xl md:text-4xl font-bold text-dark mb-2">
                {property.title}
              </h1>
              <div className="flex items-center gap-4 text-gray-500 text-sm">
                <span className="flex items-center gap-1">
                  <MapPin className="w-4 h-4 text-primary-500" />{" "}
                  {property.location}
                </span>
                <span className="flex items-center gap-1">
                  <Calendar className="w-4 h-4 text-primary-500" />{" "}
                  {property.postedDate}
                </span>
                <span
                  className={`px-2 py-0.5 rounded text-xs font-bold ${
                    property.type === "FOR SALE"
                      ? "bg-primary-100 text-primary-600"
                      : "bg-green-100 text-green-600"
                  }`}
                >
                  {property.type}
                </span>
              </div>
            </div>
            <div className="flex flex-col items-end gap-2">
              <div className="text-3xl font-bold text-primary-600">
                {property.price}
              </div>
              <div className="flex gap-2">
                <button className="flex items-center gap-1 px-3 py-1.5 border border-gray-200 rounded-lg text-sm hover:bg-gray-50 transition text-gray-600">
                  <Share2 className="w-4 h-4" /> Share
                </button>
                <button className="flex items-center gap-1 px-3 py-1.5 border border-gray-200 rounded-lg text-sm hover:bg-gray-50 transition text-gray-600">
                  <Heart className="w-4 h-4" /> Save
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-8">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Image Gallery */}
            <div className="space-y-4">
              <div className="relative h-[400px] md:h-[500px] w-full rounded-2xl overflow-hidden shadow-lg">
                <img
                  src={property.images[0]}
                  alt={property.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                {property.images.slice(1).map((img, idx) => (
                  <div
                    key={idx}
                    className="relative h-48 rounded-xl overflow-hidden shadow-sm"
                  >
                    <img
                      src={img}
                      alt={`${property.title} ${idx + 2}`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Overview */}
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
              <h3 className="font-playfair text-2xl font-bold text-dark mb-6">
                Overview
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                <div className="p-4 bg-gray-50 rounded-xl">
                  <div className="text-gray-500 text-sm mb-1">Updated On</div>
                  <div className="font-semibold text-dark">
                    {new Date().toLocaleDateString()}
                  </div>
                </div>
                <div className="p-4 bg-gray-50 rounded-xl">
                  <div className="text-gray-500 text-sm mb-1">Land Type</div>
                  <div className="font-semibold text-dark flex items-center gap-2">
                    <Trees className="w-4 h-4 text-primary-500" />
                    {property.landType}
                  </div>
                </div>
                <div className="p-4 bg-gray-50 rounded-xl">
                  <div className="text-gray-500 text-sm mb-1">Land Area</div>
                  <div className="font-semibold text-dark flex items-center gap-2">
                    <Ruler className="w-4 h-4 text-primary-500" />
                    {property.area}
                  </div>
                </div>
                <div className="p-4 bg-gray-50 rounded-xl">
                  <div className="text-gray-500 text-sm mb-1">Property ID</div>
                  <div className="font-semibold text-dark">
                    #HN-{property.id}
                  </div>
                </div>
              </div>
            </div>

            {/* Land blue print */}
            <LandBlueprint blueprint={property.blueprint} />

            {/* Description */}
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
              <h3 className="font-playfair text-2xl font-bold text-dark mb-4">
                Description
              </h3>
              <p className="text-gray-600 leading-relaxed whitespace-pre-line">
                {property.description}
              </p>
            </div>

            {/* Features */}
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
              <h3 className="font-playfair text-2xl font-bold text-dark mb-6">
                Features & Amenities
              </h3>
              <div className="grid md:grid-cols-2 gap-4">
                {property.features.map((feature, idx) => (
                  <div
                    key={idx}
                    className="flex items-center gap-3 text-gray-700"
                  >
                    <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0" />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
            </div>
            {/*other features like virtual tour, statistics etc can be added here in the future*/}
            <GoogleMapView url={property.embedUrl} />
            <VirtualTour url={virtualTourUrl} />
            <Statistics stats={statistics} />
            <MortgageCalculator price={property.priceValue} />
            <PropertyReviews reviews={reviews} />
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1 space-y-8">
            {/* Agent Card */}
            <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 sticky top-24">
              <div className="flex items-center gap-4 mb-6">
                <img
                  src={property.agent.image}
                  alt={property.agent.name}
                  className="w-16 h-16 rounded-full object-cover border-2 border-primary-100"
                />
                <div>
                  <h4 className="font-bold text-lg text-dark">
                    {property.agent.name}
                  </h4>
                  <p className="text-sm text-primary-500 font-medium">
                    Listing Agent
                  </p>
                </div>
              </div>

              <div className="space-y-3 mb-6">
                <a
                  href={`tel:${property.agent.phone}`}
                  className="flex items-center justify-center gap-2 w-full bg-primary-500 hover:bg-primary-600 text-white py-3 rounded-xl font-bold transition"
                >
                  <span className="text-lg">📞</span> {property.agent.phone}
                </a>
                <button className="flex items-center justify-center gap-2 w-full bg-green-500 hover:bg-green-600 text-white py-3 rounded-xl font-bold transition">
                  <span className="text-lg">💬</span> WhatsApp
                </button>
              </div>

              <div className="border-t border-gray-100 pt-6">
                <h5 className="font-bold text-dark mb-4">Request Inquiry</h5>
                <form className="space-y-3">
                  <input
                    type="text"
                    placeholder="Your Name"
                    className="w-full px-4 py-3 bg-gray-50 rounded-xl border border-gray-200 focus:border-primary-500 outline-none transition text-sm"
                  />
                  <input
                    type="email"
                    placeholder="Your Email"
                    className="w-full px-4 py-3 bg-gray-50 rounded-xl border border-gray-200 focus:border-primary-500 outline-none transition text-sm"
                  />
                  <input
                    type="tel"
                    placeholder="Your Phone"
                    className="w-full px-4 py-3 bg-gray-50 rounded-xl border border-gray-200 focus:border-primary-500 outline-none transition text-sm"
                  />
                  <textarea
                    rows={3}
                    placeholder="I'm interested in this property"
                    className="w-full px-4 py-3 bg-gray-50 rounded-xl border border-gray-200 focus:border-primary-500 outline-none transition text-sm resize-none"
                  ></textarea>
                  <button className="w-full bg-dark hover:bg-black text-white py-3 rounded-xl font-bold transition">
                    Send Inquiry
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
      <FloatingActions />
    </main>
  );
}
