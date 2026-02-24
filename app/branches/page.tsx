// app/branches/page.tsx

import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  User,
  Navigation,
  Building2,
} from "lucide-react";
import { getAllBranches } from "@/data/branches";

export const metadata: Metadata = {
  title: "Our Branches | Tranquille Real Estate Pvt Ltd",
  description:
    "Find Tranquille Real Estate offices across Sri Lanka. Visit us for all your property needs.",
};

export default function BranchesPage() {
  const branches = getAllBranches();
  const cities = [...new Set(branches.map((b) => b.city))];

  return (
    <main className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Header */}
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
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-emerald-500/20 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-teal-500/20 rounded-full blur-3xl" />

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-3xl mx-auto">
            <span className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-emerald-100 text-sm font-medium mb-6">
              <Building2 className="h-4 w-4" />
              Our Locations Across Sri Lanka
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              Visit Our{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-400">
                Branches
              </span>
            </h1>
            <p className="text-lg text-slate-300 mb-8">
               With {branches.length} branches across {cities.length} major cities in Sri Lanka, 
              we&apos;re always close to help you find your perfect property.
            </p>
          </div>
        </div>
      </div>

      {/* Quick Stats */}
      <div className="border-b border-gray-200 bg-white dark:border-gray-700 dark:bg-gray-800">
        <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 gap-4 text-center md:grid-cols-4">
            <div>
              <p className="text-3xl font-bold text-emerald-600">
                {branches.length}
              </p>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Total Branches
              </p>
            </div>
            <div>
              <p className="text-3xl font-bold text-emerald-600">
                {cities.length}
              </p>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Cities Covered
              </p>
            </div>
            <div>
              <p className="text-3xl font-bold text-emerald-600">9</p>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Provinces Served
              </p>
            </div>
            <div>
              <p className="text-3xl font-bold text-emerald-600">150+</p>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Expert Agents
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Branches Grid */}
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {branches.map((branch) => (
            <div
              key={branch.id}
              className="group overflow-hidden rounded-2xl bg-white shadow-lg transition-all duration-300 hover:shadow-2xl dark:bg-gray-800"
            >
              {/* Image */}
              <div className="relative h-48 w-full overflow-hidden">
                <Image
                  src={branch.image}
                  alt={branch.name}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                {branch.isHeadOffice && (
                  <div className="absolute left-4 top-4">
                    <span className="rounded-full bg-emerald-600 px-3 py-1 text-xs font-semibold text-white shadow-lg">
                      Head Office
                    </span>
                  </div>
                )}
                <div className="absolute right-4 top-4">
                  <span className="rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-gray-800 shadow-lg backdrop-blur-sm">
                    {branch.city}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                {/* Name */}
                <h3 className="mb-4 text-xl font-bold text-gray-900 dark:text-white">
                  {branch.name}
                </h3>

                {/* Details */}
                <div className="space-y-3">
                  {/* Address */}
                  <div className="flex items-start gap-3">
                    <MapPin className="mt-1 h-5 w-5 flex-shrink-0 text-emerald-600 dark:text-emerald-400" />
                    <p className="text-sm text-gray-600 dark:text-gray-300">
                      {branch.address}
                    </p>
                  </div>

                  {/* Phone */}
                  <div className="flex items-center gap-3">
                    <Phone className="h-5 w-5 flex-shrink-0 text-emerald-600 dark:text-emerald-400" />
                    <a
                      href={`tel:${branch.phone.replace(/\s/g, "")}`}
                      className="text-sm text-gray-600 transition-colors hover:text-emerald-600 dark:text-gray-300 dark:hover:text-emerald-400"
                    >
                      {branch.phone}
                    </a>
                  </div>

                  {/* Email */}
                  <div className="flex items-center gap-3">
                    <Mail className="h-5 w-5 flex-shrink-0 text-emerald-600 dark:text-emerald-400" />
                    <a
                      href={`mailto:${branch.email}`}
                      className="text-sm text-gray-600 transition-colors hover:text-emerald-600 dark:text-gray-300 dark:hover:text-emerald-400"
                    >
                      {branch.email}
                    </a>
                  </div>

                  {/* Manager */}
                  <div className="flex items-center gap-3">
                    <User className="h-5 w-5 flex-shrink-0 text-emerald-600 dark:text-emerald-400" />
                    <p className="text-sm text-gray-600 dark:text-gray-300">
                      <span className="font-medium">Manager:</span>{" "}
                      {branch.manager}
                    </p>
                  </div>

                  {/* Timings */}
                  <div className="flex items-start gap-3">
                    <Clock className="mt-1 h-5 w-5 flex-shrink-0 text-emerald-600 dark:text-emerald-400" />
                    <p className="text-sm text-gray-600 dark:text-gray-300">
                      {branch.timings}
                    </p>
                  </div>
                </div>

                {/* Get Directions Button */}
                <a
                  href={branch.mapLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 flex w-full items-center justify-center gap-2 rounded-lg bg-emerald-600 px-4 py-3 font-semibold text-white transition-colors hover:bg-emerald-700"
                >
                  <Navigation className="h-4 w-4" />
                  Get Directions
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Sri Lanka Map Section */}
      <div className="bg-emerald-50 py-16 dark:bg-emerald-900/20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="mb-4 text-3xl font-bold text-gray-900 dark:text-white">
              Serving All of Sri Lanka
            </h2>
            <p className="mx-auto mb-8 max-w-2xl text-lg text-gray-600 dark:text-gray-300">
              From the northern city of Jaffna to the southern shores of Matara,
              we&apos;re committed to helping Sri Lankans find their perfect
              property.
            </p>

            {/* Province Coverage */}
            <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-5">
              {[
                "Western Province",
                "Central Province",
                "Southern Province",
                "Northern Province",
                "Eastern Province",
                "North Western Province",
                "North Central Province",
                "Uva Province",
                "Sabaragamuwa Province",
              ].map((province) => (
                <div
                  key={province}
                  className="rounded-lg bg-white px-4 py-3 shadow-sm dark:bg-gray-800"
                >
                  <p className="text-sm font-medium text-gray-700 dark:text-gray-300">
                    {province}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Contact CTA */}
      <div className="bg-white py-16 dark:bg-gray-800">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="mb-4 text-3xl font-bold text-gray-900 dark:text-white">
            Can&apos;t Find a Branch Near You?
          </h2>
          <p className="mb-8 text-lg text-gray-600 dark:text-gray-300">
            We&apos;re expanding across Sri Lanka! Contact our head office in
            Colombo and we&apos;ll connect you with the nearest representative.
          </p>
          <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
            <Link
              href="/contact"
              className="rounded-lg bg-emerald-600 px-8 py-3 font-semibold text-white transition-colors hover:bg-emerald-700"
            >
              Contact Us
            </Link>
            <a
              href="tel:+94112345678"
              className="rounded-lg border-2 border-emerald-600 px-8 py-3 font-semibold text-emerald-600 transition-colors hover:bg-emerald-50 dark:hover:bg-emerald-900/20"
            >
              Call: +94 11 234 5678
            </a>
          </div>
        </div>
      </div>

      {/* WhatsApp Floating Button */}
      <a
        href="https://wa.me/94112345678"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-green-500 text-white shadow-lg transition-transform hover:scale-110"
        aria-label="Contact us on WhatsApp"
      >
        <svg
          className="h-7 w-7"
          fill="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
        </svg>
      </a>
    </main>
  );
}
