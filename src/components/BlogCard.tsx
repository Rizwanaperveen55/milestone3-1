import React from 'react';
import Link from 'next/link';

type BlogCardProps = {
  id: string;
  title: string;
  description: string;
  publishDate: string;
};

const BlogCard: React.FC<BlogCardProps> = ({ id, title, description, publishDate }) => {
  return (
    <div className="bg-white rounded-lg border border-gray-200 overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 transform hover:scale-105 my-6">
      <div className="p-6">
        <h3 className="text-2xl font-semibold text-gray-800 mb-3 hover:text-indigo-600 transition-colors duration-200">{title}</h3>
        <p className="text-gray-500 text-sm mb-4">{description}</p>
        <p className="text-gray-400 text-xs mb-6">{publishDate}</p>
        <Link
          href={`/${id}`}
          className="inline-block text-indigo-600 font-medium hover:text-indigo-800 text-sm transition-colors duration-300"
        >
          Read More &rarr;
        </Link>
      </div>
    </div>
  );
};

export default BlogCard;
