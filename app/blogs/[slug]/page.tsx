import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { blogs, getBlogBySlug, getRelatedBlogs } from "@/data/blogs";
import BlogSidebar from "@/components/BlogSidebar";

import type { Metadata } from "next";
import ShareButtons from "@/components/ShareButtons";

// Generate static params for all blog slugs
export async function generateStaticParams() {
  return blogs.map((blog) => ({
    slug: blog.slug,
  }));
}

// Dynamic metadata
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const blog = getBlogBySlug(slug);

  if (!blog) {
    return { title: "Blog Not Found | Tranquille" };
  }

  return {
    title: `${blog.title} | Tranquille Real Estate`,
    description: blog.excerpt,
    openGraph: {
      title: blog.title,
      description: blog.excerpt,
      images: [blog.coverImage],
    },
  };
}

// Simple Markdown-to-HTML renderer
function renderMarkdown(content: string): string {
  let html = content
    // Headers
    .replace(/^### (.*$)/gim, "<h3>$1</h3>")
    .replace(/^## (.*$)/gim, "<h2>$1</h2>")
    .replace(/^# (.*$)/gim, "<h1>$1</h1>")
    // Bold
    .replace(/\*\*(.*?)\*\*/gim, "<strong>$1</strong>")
    // Italic
    .replace(/\*(.*?)\*/gim, "<em>$1</em>")
    // Blockquotes
    .replace(/^> (.*$)/gim, "<blockquote>$1</blockquote>")
    // Unordered list items
    .replace(/^- (.*$)/gim, "<li>$1</li>")
    // Ordered list items
    .replace(/^\d+\. (.*$)/gim, "<li>$1</li>")
    // Horizontal rule
    .replace(/^---$/gim, "<hr />")
    // Links
    .replace(/\[(.*?)\]\((.*?)\)/gim, '<a href="$2">$1</a>')
    // Table rows
    .replace(/\|(.+)\|/gim, (match) => {
      const cells = match
        .split("|")
        .filter(Boolean)
        .map((c) => c.trim());
      if (cells.every((c) => c.match(/^[-]+$/))) return "";
      const tag = match.includes("---") ? "th" : "td";
      const cellsHtml = cells.map((c) => `<${tag}>${c}</${tag}>`).join("");
      return `<tr>${cellsHtml}</tr>`;
    })
    // Paragraphs
    .replace(/\n\n/gim, "</p><p>")
    // Line breaks
    .replace(/\n/gim, "<br />");

  // Wrap in paragraph tags
  html = `<p>${html}</p>`;

  // Clean up empty paragraphs
  html = html.replace(/<p><\/p>/g, "");
  html = html.replace(/<p><br \/><\/p>/g, "");
  html = html.replace(/<p>\s*<h/g, "<h");
  html = html.replace(/<\/h([1-6])>\s*<\/p>/g, "</h$1>");
  html = html.replace(/<p>\s*<hr \/>\s*<\/p>/g, "<hr />");
  html = html.replace(/<p>\s*<blockquote>/g, "<blockquote>");
  html = html.replace(/<\/blockquote>\s*<\/p>/g, "</blockquote>");
  html = html.replace(/<p>\s*<li>/g, "<ul><li>");
  html = html.replace(/<\/li>\s*<\/p>/g, "</li></ul>");
  html = html.replace(/<p>\s*<tr>/g, "<table><tr>");
  html = html.replace(/<\/tr>\s*<\/p>/g, "</tr></table>");

  return html;
}

export default async function BlogDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const blog = getBlogBySlug(slug);

  if (!blog) {
    notFound();
  }

  const relatedBlogs = getRelatedBlogs(slug, blog.category);
  const formattedDate = new Date(blog.publishedAt).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  const contentHtml = renderMarkdown(blog.content);

  return (
    <>
      {/* Hero / Cover Image */}
      <section className="relative h-[50vh] md:h-[60vh] lg:h-[70vh] overflow-hidden">
        <Image
          src={blog.coverImage}
          alt={blog.title}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />

        {/* Content Overlay */}
        <div className="absolute bottom-0 left-0 right-0 p-6 md:p-12 lg:p-16">
          <div className="container-blog">
            <div className="max-w-4xl">
              {/* Category Badge */}
              <span className="inline-block bg-amber-700 text-white px-4 py-1.5 rounded-full text-sm font-medium mb-4">
                {blog.category}
              </span>

              {/* Title */}
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-white leading-tight mb-6">
                {blog.title}
              </h1>

              {/* Meta */}
              <div className="flex flex-wrap items-center gap-6 text-white/80">
                <div className="flex items-center gap-3">
                  <Image
                    src={blog.author.avatar}
                    alt={blog.author.name}
                    width={44}
                    height={44}
                    className="w-15 h-15 rounded-full object-cover"
                  />
                  <div>
                    <p className="font-medium text-white">{blog.author.name}</p>
                    <p className="text-white/60 text-sm">{blog.author.role}</p>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                    />
                  </svg>
                  <span className="text-sm">{formattedDate}</span>
                </div>

                <div className="flex items-center gap-2">
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  <span className="text-sm">{blog.readTime}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Article Content */}
      <section className="container-blog py-12 px-15 lg:py-16">
        <div className="grid lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <article className="lg:col-span-2">
            {/* Excerpt */}
            <div className="bg-amber-50/50 border border-amber-100 rounded-2xl p-6 md:p-8 mb-10">
              <p className="text-lg text-amber-900/80 leading-relaxed font-medium italic">
                {blog.excerpt}
              </p>
            </div>

            {/* Content */}
            <div
              className="prose-blog"
              dangerouslySetInnerHTML={{ __html: contentHtml }}
            />

            {/* Tags */}
            <div className="mt-12 pt-8 border-t border-stone-200">
              <div className="flex flex-wrap items-center gap-3">
                <span className="text-sm font-medium text-gray-500">Tags:</span>
                {blog.tags.map((tag) => (
                  <span
                    key={tag}
                    className="bg-stone-100 text-gray-600 px-4 py-2 rounded-full text-sm hover:bg-amber-50 hover:text-amber-800 transition-colors cursor-pointer"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Share & Actions */}
            <div className="mt-8 pt-8 border-t border-stone-200 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
              <ShareButtons title={blog.title} slug={blog.slug} />
              <Link
                href="/blogs"
                className="text-amber-800 hover:text-amber-900 font-medium flex items-center gap-2 transition-colors"
              >
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M10 19l-7-7m0 0l7-7m-7 7h18"
                  />
                </svg>
                Back to all articles
              </Link>
            </div>

            {/* Author Bio Card */}
            <div className="mt-12 bg-white rounded-2xl border border-stone-100 p-8 shadow-sm">
              <div className="flex flex-col sm:flex-row items-start gap-6">
                <Image
                  src={blog.author.avatar}
                  alt={blog.author.name}
                  width={80}
                  height={80}
                  className="w-12 h-12 rounded-full object-cover"
                />

                <div>
                  <p className="text-sm text-amber-800 font-medium mb-1">
                    Written by
                  </p>
                  <h3 className="text-xl font-serif font-bold text-gray-900 mb-1">
                    {blog.author.name}
                  </h3>
                  <p className="text-gray-500 text-sm mb-3">
                    {blog.author.role}
                  </p>
                  <p className="text-gray-500 leading-relaxed">
                    Dedicated to providing exceptional real estate guidance and
                    helping clients make informed property decisions. With years
                    of industry experience, {blog.author.name.split(" ")[0]}{" "}
                    brings deep market knowledge and a client-first approach.
                  </p>
                </div>
              </div>
            </div>
          </article>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="lg:sticky lg:top-28">
              <BlogSidebar relatedBlogs={relatedBlogs} currentBlog={blog} />
            </div>
          </div>
        </div>
      </section>

      {/* More Articles Section */}
      <section className="bg-stone-100 border-t border-stone-200">
        <div className="container-blog py-16 lg:py-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-900 mb-3">
              Continue Reading
            </h2>
            <p className="text-gray-500 text-lg">
              Explore more insights from our experts
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {blogs
              .filter((b) => b.slug !== blog.slug)
              .slice(0, 3)
              .map((relatedBlog) => {
                const relDate = new Date(
                  relatedBlog.publishedAt,
                ).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                });
                return (
                  <Link
                    key={relatedBlog.id}
                    href={`/blogs/${relatedBlog.slug}`}
                    className="group bg-white rounded-2xl overflow-hidden shadow-sm border border-stone-100 hover:shadow-xl transition-all duration-500"
                  >
                    <div className="relative h-48 overflow-hidden">
                      <Image
                        src={relatedBlog.coverImage}
                        alt={relatedBlog.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-700"
                      />
                    </div>
                    <div className="p-6">
                      <span className="text-sm text-amber-700 font-medium">
                        {relatedBlog.category}
                      </span>
                      <h3 className="text-lg font-serif font-bold text-gray-900 mt-2 group-hover:text-amber-800 transition-colors leading-snug">
                        {relatedBlog.title}
                      </h3>
                      <p className="text-gray-400 text-sm mt-3">{relDate}</p>
                    </div>
                  </Link>
                );
              })}
          </div>

          <div className="text-center mt-10">
            <Link
              href="/blogs"
              className="inline-flex items-center gap-2 bg-amber-800 hover:bg-amber-900 text-white px-8 py-3.5 rounded-lg font-medium transition-colors shadow-lg shadow-amber-800/20"
            >
              View All Articles
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                />
              </svg>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
