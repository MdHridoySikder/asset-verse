import React from "react";
import { Link } from "react-router";

const blogPosts = [
  {
    id: 1,
    title: "Maximizing Asset Utilization in Your Company",
    date: "February 28, 2026",
    author: "Admin",
    readTime: "5 min read",
    category: "Asset Management",
    excerpt:
      "Learn how AssetVerse helps HR managers track and manage company assets efficiently, reducing loss and improving accountability.",
    image: "/client11.png",
  },
  {
    id: 2,
    title: "Top 5 HR Challenges Solved by Digital Asset Management",
    date: "February 25, 2026",
    author: "Admin",
    readTime: "4 min read",
    category: "HR Tech",
    excerpt:
      "From employee requests to asset tracking, discover how technology streamlines HR workflows and ensures smoother operations.",
    image: "/client3.png",
  },
  {
    id: 3,
    title: "Why Every Business Needs Asset Tracking Today",
    date: "February 20, 2026",
    author: "Admin",
    readTime: "6 min read",
    category: "Business Strategy",
    excerpt:
      "Avoid misplaced laptops, keyboards, and equipment. Learn why tracking assets digitally saves time, money, and headaches.",
    image: "/client4.png",
  },
];

const Blog = () => {
  return (
    <section className="py-15 ">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-sm font-semibold text-blue-600 uppercase tracking-wider">
            Blog & Insights
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-primary mt-2">
            Latest Articles from AssetVerse
          </h2>
          <p className="text-secondary max-w-2xl mx-auto mt-4">
            Stay updated with the latest insights on asset management, HR
            technology, and workplace productivity.
          </p>
        </div>

        {/* Blog Grid */}
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
          {blogPosts.map((post) => (
            <div
              key={post.id}
              className=" rounded-2xl shadow-lg overflow-hidden hover:border-blue-400 transition-all duration-300 hover:shadow-2xl hover:shadow-blue-300/30 border border-primary"
            >
              <div className="relative">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-56 object-cover"
                />
                <span className="absolute top-4 left-4 bg-blue-600 text-white text-xs px-3 py-1 rounded-full font-semibold shadow">
                  {post.category}
                </span>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-primary mb-2 hover:text-blue-600 transition-colors">
                  {post.title}
                </h3>

                <p className="text-gray-500 text-sm mb-4">
                  {post.date} • {post.author} • {post.readTime}
                </p>

                <p className="text-gray-700 text-sm leading-relaxed">
                  {post.excerpt}
                </p>

                <Link
                  to={`/blogdetails`}
                  className="inline-block mt-4 text-blue-600 font-medium hover:underline"
                >
                  Read Article →
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;
