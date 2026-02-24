// src/app/blog/page.tsx

"use client";

import { useState, useMemo } from "react";
import { blogs, categories } from "@/data/blogs";
import BlogCard from "@/components/BlogCard";
import BlogSearch from "@/components/BlogSearch";

export default function BlogListPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredBlogs = useMemo(() => {
    return blogs.filter((blog) => {
      const matchesSearch =
        blog.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        blog.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
        blog.tags.some((tag) =>
          tag.toLowerCase().includes(searchTerm.toLowerCase()),
        );

      const matchesCategory =
        selectedCategory === "All" || blog.category === selectedCategory;

      return matchesSearch && matchesCategory;
    });
  }, [searchTerm, selectedCategory]);

  const featuredBlog = filteredBlogs[0];
  const remainingBlogs = filteredBlogs.slice(1);

  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-stone-900 via-stone-800 to-amber-950 text-white overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            }}
          />
        </div>

        <div className="container-blog relative z-10 py-20 lg:py-28">
          <div className="max-w-3xl mx-auto text-center">
            <span className="inline-block bg-amber-700/30 text-amber-300 px-4 py-1.5 rounded-full text-sm font-medium mb-6 border border-amber-700/30">
              Tranquille Insights
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold mb-6 leading-tight">
              Real Estate
              <span className="block text-amber-400">Knowledge Hub</span>
            </h1>
            <p className="text-lg md:text-xl text-stone-300 leading-relaxed max-w-2xl mx-auto">
              Expert insights on buying, selling, and investing in real estate.
              Stay informed with the latest market trends and property guidance.
            </p>

            {/* Stats */}
            <div className="flex justify-center gap-12 mt-10 pt-10 border-t border-white/10">
              <div>
                <p className="text-3xl font-bold text-amber-400">
                  {blogs.length}+
                </p>
                <p className="text-stone-400 text-sm mt-1">Articles</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-amber-400">15K+</p>
                <p className="text-stone-400 text-sm mt-1">Monthly Readers</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-amber-400">4</p>
                <p className="text-stone-400 text-sm mt-1">Expert Authors</p>
              </div>
            </div>
          </div>
        </div>

        {/* Wave Divider */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 80" fill="none" className="w-full">
            <path
              d="M0 80V40C240 0 480 0 720 40C960 80 1200 80 1440 40V80H0Z"
              fill="#faf8f5"
            />
          </svg>
        </div>
      </section>

      {/* Blog Content */}
      <section className="container-blog py-12 lg:py-16">
        {/* Search & Filter */}
        <BlogSearch
          searchTerm={searchTerm}
          onSearchChange={setSearchTerm}
          selectedCategory={selectedCategory}
          onCategoryChange={setSelectedCategory}
          categories={categories}
        />

        {/* Results Info */}
        <div className="flex items-center justify-between mb-8">
          <p className="text-gray-500">
            Showing{" "}
            <span className="font-semibold text-gray-800">
              {filteredBlogs.length}
            </span>{" "}
            {filteredBlogs.length === 1 ? "article" : "articles"}
            {selectedCategory !== "All" && (
              <span>
                {" "}
                in{" "}
                <span className="text-amber-800 font-semibold">
                  {selectedCategory}
                </span>
              </span>
            )}
          </p>
        </div>

        {/* No Results */}
        {filteredBlogs.length === 0 && (
          <div className="text-center py-20">
            <div className="w-20 h-20 bg-stone-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg
                className="w-10 h-10 text-stone-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>
            <h3 className="text-2xl font-serif font-bold text-gray-800 mb-2">
              No articles found
            </h3>
            <p className="text-gray-500 mb-6">
              Try adjusting your search or filter criteria
            </p>
            <button
              onClick={() => {
                setSearchTerm("");
                setSelectedCategory("All");
              }}
              className="bg-amber-800 text-white px-6 py-3 rounded-lg hover:bg-amber-900 transition-colors font-medium"
            >
              Clear Filters
            </button>
          </div>
        )}

        {/* Featured Blog */}
        {featuredBlog && (
          <div className="mb-12">
            <BlogCard blog={featuredBlog} featured />
          </div>
        )}

        {/* Blog Grid */}
        {remainingBlogs.length > 0 && (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {remainingBlogs.map((blog) => (
              <BlogCard key={blog.id} blog={blog} />
            ))}
          </div>
        )}

        {/* Load More (placeholder) */}
        {filteredBlogs.length > 6 && (
          <div className="text-center mt-12">
            <button className="border-2 border-amber-800 text-amber-800 px-8 py-3 rounded-lg hover:bg-amber-800 hover:text-white transition-all font-medium">
              Load More Articles
            </button>
          </div>
        )}
      </section>

      {/* Newsletter CTA Section */}
      <section className="bg-stone-100 border-t border-stone-200">
        <div className="container-blog py-16 lg:py-20">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-900 mb-4">
              Never Miss an Insight
            </h2>
            <p className="text-gray-500 text-lg mb-8">
              Join 10,000+ subscribers who get our weekly real estate newsletter
              with market updates, tips, and exclusive listings.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 max-w-lg mx-auto">
              <input
                type="email"
                placeholder="Enter your email address"
                className="flex-1 px-5 py-4 rounded-xl border border-stone-300 bg-white focus:outline-none focus:ring-2 focus:ring-amber-700/20 focus:border-amber-700"
              />
              <button className="bg-amber-800 hover:bg-amber-900 text-white px-8 py-4 rounded-xl font-semibold transition-colors whitespace-nowrap shadow-lg shadow-amber-800/20">
                Subscribe
              </button>
            </div>
            <p className="text-gray-400 text-sm mt-4">
              No spam, unsubscribe at any time. Read our{" "}
              <a href="#" className="underline hover:text-gray-600">
                Privacy Policy
              </a>
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
