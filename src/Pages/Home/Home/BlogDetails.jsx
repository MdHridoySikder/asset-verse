import React from "react";
import { Link } from "react-router";

const BlogDetails = () => {
  return (
    <section className="py-10 ">
      <div className="max-w-4xl mx-auto px-6">
        {/* Article Header */}
        <h1 className="text-4xl md:text-5xl font-bold text-primary mb-4 leading-tight">
          Why AssetVerse is the Future of Smart Asset Management
        </h1>
        <p className="text-gray-500 mb-12">
          Published on March 1, 2026 • By AssetVerse Team • 6 min read
        </p>

        {/* Main Content */}
        <div className="text-secondary text-lg leading-relaxed space-y-8">
          <p>
            In today’s fast-paced corporate world, managing assets efficiently
            is no longer optional — it’s a business necessity. Mismanaged
            laptops, keyboards, and office equipment can result in financial
            loss, operational inefficiencies, and lower employee productivity.
          </p>

          <blockquote className="border-l-4 border-blue-600 pl-6 italic text-secondary border  py-4 rounded-md">
            "A well-tracked asset is a well-protected investment. AssetVerse
            ensures nothing gets lost, delayed, or mismanaged."
          </blockquote>

          <h2 className="text-2xl font-semibold text-primary mt-8">
            Key Challenges in Asset Management
          </h2>
          <ul className="list-disc pl-6 space-y-2 text-secondary">
            <li>Losing track of valuable equipment</li>
            <li>Manual spreadsheets causing errors</li>
            <li>Delays in onboarding employees</li>
            <li>Difficulty tracking returnable vs non-returnable items</li>
          </ul>

          <h2 className="text-2xl font-semibold text-primary mt-8">
            How AssetVerse Solves These Problems
          </h2>
          <ul className="list-disc pl-6 space-y-2 text-secondary">
            <li>Easy assignment of assets to employees</li>
            <li>Real-time tracking of all assets across multiple locations</li>
            <li>Automated accountability and return tracking</li>
            <li>Enhanced transparency and reporting for HR managers</li>
          </ul>

          <p>
            By implementing AssetVerse, businesses reduce errors, save time, and
            create a more organized and productive work environment. Whether
            managing a team of 5 or 500, AssetVerse scales to fit your needs.
          </p>

          <h2 className="text-2xl font-semibold text-primary mt-8">
            Benefits for Modern Businesses
          </h2>
          <ul className="list-disc pl-6 space-y-2 text-secondary">
            <li>Improved operational efficiency</li>
            <li>Minimized asset loss and wastage</li>
            <li>Better data-driven decision making</li>
            <li>Higher employee satisfaction and accountability</li>
          </ul>

          <p className="font-semibold text-primary text-lg mt-6">
            With AssetVerse, smart asset management is no longer a challenge —
            it’s a competitive advantage.
          </p>
        </div>

        {/* Back Button */}
        <div className="mt-12">
          <Link
            to="/blog"
            className="inline-block text-secondary font-medium hover:underline"
          >
            ← Back to Blog
          </Link>
        </div>
      </div>
    </section>
  );
};

export default BlogDetails;
