"use client";

import { useState } from "react";
import BlogCard from "@/components/BlogCard";
import { blogs } from "@/utils/blog";

export default function Page() {
  const [visibleBlogs, setVisibleBlogs] = useState(10); // Initial number of blogs to display

  const handleShowMore = () => {
    setVisibleBlogs((prev) => prev + 10); // Show 10 more blogs on each click
  };

  return (
    <div className="container mx-auto px-6 py-12">
      <h1 className="text-3xl font-bold mb-8">Latest Blogs.</h1>
      
      {/* Render only visible blogs */}
      <div >
        {blogs.slice(0, visibleBlogs).map((blog) => (
          <BlogCard
            key={blog.id}
            id={blog.id}
            title={blog.title}
            description={blog.description}
            publishDate={blog.publishDate}
          />
        ))}
      </div>

      {/* Show More Button */}
      {visibleBlogs < blogs.length && (
        <div className="mt-8 text-center">
          <button
            onClick={handleShowMore}
            className="bg-primary border-2 border-black text-black bg-light-primary dark:bg-dark-accent  px-4 py-2 text-xl rounded-md hover:bg-primary-dark transition"
          >
            Show More
          </button>
        </div>
      )}
    </div>
  );
}
