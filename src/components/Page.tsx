// "use client";

// import { useState, useEffect } from "react";
// import BlogCard from "@/components/BlogCard";
// import { blogs } from "@/utils/blog";
// import { client } from "../sanity/lib/client";
// import imageUrlBuilder from "@sanity/image-url";

// // Image URL builder
// const builder = imageUrlBuilder(client);

// export default function Page() {
//   const [visibleBlogs, setVisibleBlogs] = useState(10); // Initial number of blogs to display
//   const [backgroundImage, setBackgroundImage] = useState<string | null>(null); // State for background image URL

//   // Fetch background image from Sanity
//   useEffect(() => {
//     client
//       .fetch(`*[_type == "settings"][0]{backgroundImage}`)
//       .then((data) => {
//         if (data?.backgroundImage) {
//           const imageUrl = builder.image(data.backgroundImage).url(); // Generate URL
//           setBackgroundImage(imageUrl);
//         }
//       })
//       .catch((error) => console.error("Sanity fetch error:", error));
//   }, []);

//   const handleShowMore = () => {
//     setVisibleBlogs((prev) => prev + 10); // Show 10 more blogs on each click
//   };

//   return (
//     <div
//       className="flex flex-col justify-start items-center min-h-screen bg-cover bg-center bg-no-repeat px-4"
//       style={{
//         backgroundImage: backgroundImage ? `url(${backgroundImage})` : "none",
//       }}
//     >
//       <h1 className="text-3xl font-bold mb-8 text-white mt-20 text-center">
//         Latest Blogs
//       </h1>

//       {/* Render only visible blogs */}
//       <div className="w-full max-w-4xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//         {blogs.slice(0, visibleBlogs).map((blog) => (
//           <BlogCard
//             key={blog.id}
//             id={blog.id}
//             title={blog.title}
//             description={blog.description}
//             publishDate={blog.publishDate}
//           />
//         ))}
//       </div>

//       {/* Show More Button */}
//       {visibleBlogs < blogs.length && (
//         <div className="mt-8 text-center">
//           <button
//             onClick={handleShowMore}
//             className="bg-primary border-2 border-black text-black bg-light-primary dark:bg-dark-accent px-6 py-3 text-xl rounded-md hover:bg-primary-dark transition"
//           >
//             Show More
//           </button>
//         </div>
//       )}
//     </div>
//   );
// }


"use client";

import { useState, useEffect } from "react";
import BlogCard from "@/components/BlogCard";
import { blogs } from "@/utils/blog";
import { client } from "../sanity/lib/client";
import imageUrlBuilder from "@sanity/image-url";

// Image URL builder
const builder = imageUrlBuilder(client);

export default function Page() {
  const [visibleBlogs, setVisibleBlogs] = useState(10); // Initial number of blogs to display
  const [backgroundImage, setBackgroundImage] = useState<string | null>(null); // State for background image URL

  // Fetch background image from Sanity
  useEffect(() => {
    client
      .fetch(`*[_type == "settings"][0]{backgroundImage}`)
      .then((data) => {
        if (data?.backgroundImage) {
          const imageUrl = builder.image(data.backgroundImage).url(); // Generate URL
          setBackgroundImage(imageUrl);
        }
      })
      .catch((error) => console.error("Sanity fetch error:", error));
  }, []);

  const handleShowMore = () => {
    setVisibleBlogs((prev) => prev + 10); // Show 10 more blogs on each click
  };

  return (
    <div
      className="flex flex-col items-center min-h-screen w-full bg-cover bg-center bg-no-repeat px-4 "
      style={{
        backgroundImage: backgroundImage ? `url(${backgroundImage})` : "none",
      }}
    >
      {/* Centered header */}
      <h1 className="text-3xl font-bold mb-8 text-white mt-20 text-center">
        Latest Blogs
      </h1>

      {/* Centered blog cards */}
      <div className="w-full max-w-7xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-4">
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
            className="bg-primary border-2 border-black text-black bg-light-primary dark:bg-dark-accent px-6 py-3 text-xl rounded-md hover:bg-primary-dark transition"
          >
            Show More
          </button>
        </div>
      )}
    </div>
  );
}
