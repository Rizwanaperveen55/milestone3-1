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
    <div className="bg-white dark:bg-dark-primary rounded-lg border border-gray-200 dark:border-dark-accent overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 transform hover:scale-105 my-6  text-gray-800 dark:text-gray-50">
      <div className="p-6">
        <h3 className="text-2xl font-semibold mb-3 hover:text-indigo-600 transition-colors duration-200">{title}</h3>
        <p className="text-gray-800 dark:text-gray-300 text-sm mb-4">{description}</p>
        <p className="text-gray-700 dark:text-gray-300 text-xs mb-6">{publishDate}</p>
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
