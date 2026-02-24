"use client";

interface BlogSearchProps {
  searchTerm: string;
  onSearchChange: (value: string) => void;
  selectedCategory: string;
  onCategoryChange: (category: string) => void;
  categories: string[];
}

export default function BlogSearch({
  searchTerm,
  onSearchChange,
  selectedCategory,
  onCategoryChange,
  categories,
}: BlogSearchProps) {
  return (
    <div className="mb-12">
      {/* Search Bar */}
      <div className="relative max-w-2xl mx-auto mb-8">
        <svg
          className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
          />
        </svg>
        <input
          type="text"
          placeholder="Search articles..."
          value={searchTerm}
          onChange={(e) => onSearchChange(e.target.value)}
          className="w-full pl-12 pr-4 py-4 rounded-5xl border border-stone-200 bg-white focus:outline-none focus:ring-2 focus:ring-amber-700/20 focus:border-amber-700 text-gray-800 text-lg shadow-sm"
        />
      </div>

      {/* Category Filter */}
      <div className="flex flex-wrap justify-center gap-3">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => onCategoryChange(category)}
            className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
              selectedCategory === category
                ? "bg-amber-800 text-white shadow-md shadow-amber-800/20"
                : "bg-stone-100 text-gray-600 hover:bg-stone-200 hover:text-gray-800"
            }`}
          >
            {category}
          </button>
        ))}
      </div>
    </div>
  );
}