// src/components/BlogSidebar.tsx

import Link from "next/link";
import Image from "next/image";

import { Blog, categories } from "@/data/blogs";

interface BlogSidebarProps {
  relatedBlogs: Blog[];
  currentBlog: Blog;
}

export default function BlogSidebar({ relatedBlogs, currentBlog }: BlogSidebarProps) {
  return (
    <aside className="space-y-8">
      {/* Author Card */}
      <div className="bg-white rounded-2xl border border-stone-100 p-6 shadow-sm">
        <h3 className="font-serif font-bold text-lg text-gray-900 mb-4">
          About the Author
        </h3>
        <div className="flex items-center gap-4 mb-4">
          <Image
            src={currentBlog.author.avatar}
            alt={currentBlog.author.name}
            width={56}
            height={56}
            className="w-12 h-12 rounded-full object-cover"
          />
          <div>
            <p className="font-semibold text-gray-900">{currentBlog.author.name}</p>
            <p className="text-gray-500 text-sm">{currentBlog.author.role}</p>
          </div>
        </div>
        <p className="text-gray-500 text-sm leading-relaxed">
          Passionate about helping clients navigate the real estate market with
          expert insights and personalized guidance.
        </p>
      </div>

      {/* Categories */}
      <div className="bg-white rounded-2xl border border-stone-100 p-6 shadow-sm">
        <h3 className="font-serif font-bold text-lg text-gray-900 mb-4">
          Categories
        </h3>
        <div className="space-y-2">
          {categories
            .filter((c) => c !== "All")
            .map((category) => (
              <Link
                key={category}
                href="/blogs"
                className={`block px-4 py-2.5 rounded-lg text-sm transition-colors ${
                  currentBlog.category === category
                    ? "bg-amber-50 text-amber-800 font-medium"
                    : "text-gray-600 hover:bg-stone-50 hover:text-gray-800"
                }`}
              >
                {category}
              </Link>
            ))}
        </div>
      </div>

      {/* Related Posts */}
      {relatedBlogs.length > 0 && (
        <div className="bg-white rounded-2xl border border-stone-100 p-6 shadow-sm">
          <h3 className="font-serif font-bold text-lg text-gray-900 mb-4">
            Related Articles
          </h3>
          <div className="space-y-4">
            {relatedBlogs.map((blog) => (
              <Link
                key={blog.id}
                href={`/blog/${blog.slug}`}
                className="group flex gap-4"
              >
                <div className="relative w-20 h-20 rounded-lg overflow-hidden flex-shrink-0">
                  <Image
                    src={blog.coverImage}
                    alt={blog.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="flex-1 min-w-0">
                  <h4 className="text-sm font-semibold text-gray-800 group-hover:text-amber-800 transition-colors line-clamp-2 leading-snug">
                    {blog.title}
                  </h4>
                  <p className="text-xs text-gray-400 mt-1">{blog.readTime}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      )}

      {/* Newsletter CTA */}
      <div className="bg-gradient-to-br from-amber-800 to-amber-950 rounded-2xl p-6 text-white">
        <h3 className="font-serif font-bold text-lg mb-2">
          Get Market Insights
        </h3>
        <p className="text-amber-100/80 text-sm mb-4 leading-relaxed">
          Weekly real estate tips, market updates, and exclusive listings delivered
          to your inbox.
        </p>
        <input
          type="email"
          placeholder="Enter your email"
          className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-amber-100/50 focus:outline-none focus:ring-2 focus:ring-white/30 mb-3"
        />
        <button className="w-full bg-white text-amber-900 font-semibold py-3 rounded-lg hover:bg-amber-50 transition-colors">
          Subscribe Free
        </button>
      </div>

      {/* Tags */}
      <div className="bg-white rounded-2xl border border-stone-100 p-6 shadow-sm">
        <h3 className="font-serif font-bold text-lg text-gray-900 mb-4">Tags</h3>
        <div className="flex flex-wrap gap-2">
          {currentBlog.tags.map((tag) => (
            <span
              key={tag}
              className="bg-stone-100 text-gray-600 px-3 py-1.5 rounded-full text-sm hover:bg-amber-50 hover:text-amber-800 transition-colors cursor-pointer"
            >
              #{tag}
            </span>
          ))}
        </div>
      </div>
    </aside>
  );
}