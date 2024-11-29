import Link from 'next/link';
import { blogs } from '@/utils/blog';
import BlogCard from '@/components/BlogCard'; // Import BlogCard

export default function BlogPage() {
  return (
    <div className="container mx-auto px-6 py-12">
      <h1 className="text-3xl font-bold mb-8">Latest Blogs</h1>

        {blogs.map((blog) => (
          <BlogCard
            key={blog.id}
            id={blog.id}
            title={blog.title}
            description={blog.description}
            publishDate={blog.publishDate}
            
          />
        ))}

    </div>
  );
}
