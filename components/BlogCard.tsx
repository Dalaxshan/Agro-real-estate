// src/components/BlogCard.tsx

import Link from "next/link";
import Image from "next/image";
import { Blog } from "@/data/blogs";


interface BlogCardProps {
  blog: Blog;
  featured?: boolean;
}

export default function BlogCard({ blog, featured = false }: BlogCardProps) {
  const formattedDate = new Date(blog.publishedAt).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  if (featured) {
    return (
      <Link href={`/blogs/${blog.slug}`} className="group block">
        <article className="grid md:grid-cols-2 gap-8 bg-white rounded-2xl overflow-hidden shadow-sm border border-stone-100 hover:shadow-xl transition-all duration-500">
          {/* Image */}
          <div className="relative h-72 md:h-full min-h-[320px] overflow-hidden">
            <Image
              src={blog.coverImage}
              alt={blog.title}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute top-4 left-4">
              <span className="bg-amber-700 text-white px-4 py-1.5 rounded-full text-sm font-medium">
                Featured
              </span>
            </div>
          </div>

          {/* Content */}
          <div className="p-8 flex flex-col justify-center">
            <div className="flex items-center gap-3 mb-4">
              <span className="bg-amber-50 text-amber-800 px-3 py-1 rounded-full text-sm font-medium">
                {blog.category}
              </span>
              <span className="text-gray-400 text-sm">{blog.readTime}</span>
            </div>

            <h2 className="text-3xl font-serif font-bold text-gray-900 mb-4 group-hover:text-amber-800 transition-colors leading-tight">
              {blog.title}
            </h2>

            <p className="text-gray-500 text-lg leading-relaxed mb-6">
              {blog.excerpt}
            </p>

            <div className="flex items-center gap-4 mt-auto">
              <Image
                src={blog.author.avatar}
                alt={blog.author.name}
                width={36}
                height={36}
                className="w-9 h-9 rounded-full object-cover"
              />
              
              <div>
                <p className="font-medium text-gray-900">{blog.author.name}</p>
                <p className="text-gray-400 text-sm">{formattedDate}</p>
              </div>
            </div>
          </div>
        </article>
      </Link>
    );
  }

  return (
    <Link href={`/blogs/${blog.slug}`} className="group block">
      <article className="bg-white rounded-2xl overflow-hidden shadow-sm border border-stone-100 hover:shadow-xl transition-all duration-500 h-full flex flex-col">
        {/* Image */}
        <div className="relative h-56 overflow-hidden">
          <Image
            src={blog.coverImage}
            alt={blog.title}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-700"
          />
          <div className="absolute top-4 left-4">
            <span className="bg-white/90 backdrop-blur-sm text-gray-800 px-3 py-1 rounded-full text-sm font-medium">
              {blog.category}
            </span>
          </div>
        </div>

        {/* Content */}
        <div className="p-6 flex flex-col flex-1">
          <div className="flex items-center gap-3 text-sm text-gray-400 mb-3">
            <time>{formattedDate}</time>
            <span>•</span>
            <span>{blog.readTime}</span>
          </div>

          <h3 className="text-xl font-serif font-bold text-gray-900 mb-3 group-hover:text-amber-800 transition-colors leading-snug">
            {blog.title}
          </h3>

          <p className="text-gray-500 leading-relaxed mb-6 flex-1">
            {blog.excerpt}
          </p>

          <div className="flex items-center gap-3 pt-4 border-t border-stone-100">
            <Image
              src={blog.author.avatar}
              alt={blog.author.name}
              width={36}
              height={36}
              className="w-9 h-9 rounded-full object-cover"
            />
            <div>
              <p className="font-medium text-gray-800 text-sm">
                {blog.author.name}
              </p>
              <p className="text-gray-400 text-xs">{blog.author.role}</p>
            </div>
            <div className="ml-auto">
              <span className="text-amber-700 group-hover:translate-x-1 transition-transform inline-block">
                →
              </span>
            </div>
          </div>
        </div>
      </article>
    </Link>
  );
}