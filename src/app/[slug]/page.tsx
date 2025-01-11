
import CommentSection from '@/components/CommentSection';
import { blogs } from '@/utils/blog';
type Params = Promise<{ slug: string }>

export default async function BlogPost({params}:{params:Params}) {

  const { slug } = await params

  const blog = blogs.find((blog) => blog.id === slug);

  if (!blog) {
    return <p>Blog not found.</p>;
  }

  return (
    <>
    <div className="container mx-auto px-6 mt-12 py-12 ">
      <h1 className="text-4xl font-bold mb-4">{blog.title}</h1>
      <p className=" mb-8">Published on {blog.publishDate}</p>
      <div className="prose prose-lg">
        <p>{blog.content}</p>
      </div>
    </div>
    <CommentSection />
    </>
  );
}
