"use client"

import React, { useState } from "react";

type Comment = {
  name: string;
  content: string;
  date: string;
};

const CommentSection = () => {
  const [comments, setComments] = useState<Comment[]>([]); // Empty initial state
  const [name, setName] = useState<string>("");
  const [content, setContent] = useState<string>("");

  const handleCommentSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (name && content) {
      const newComment: Comment = {
        name,
        content,
        date: new Date().toLocaleDateString(),
      };
      setComments([...comments, newComment]); // Add new comment to the list
      setName(""); // Clear name input
      setContent(""); // Clear content input
    }
  };

  return (
    <div className="p-6 dark:bg-slate-950 bg-white shadow-xl rounded-lg mt-8  dark:text-white text-black">
      <h3 className="text-2xl font-semibold mb-4">Comments</h3>

      {/* Display existing comments */}
      <div className="space-y-4 mb-6">
        {comments.length === 0 ? (
          <p className="">No comments yet. Be the first to comment!</p>
        ) : (
          comments.map((comment, index) => (
            <div key={index} className="border-b pb-4">
              <p className="font-semibold">{comment.name}</p>
              <p className="text-gray-500 text-xs">{comment.date}</p>
              <p className="mt-2">{comment.content}</p>
            </div>
          ))
        )}
      </div>

      {/* Comment form */}
      <h4 className="text-lg font-semibold mb-4">Leave a Comment</h4>
      <form onSubmit={handleCommentSubmit} className="space-y-4">
        <input
          type="text"
          placeholder="Your Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full p-3 border border-gray-300 rounded-md"
        />
        <textarea
          placeholder="Your Comment"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          rows={4}
          className="w-full p-3 border border-gray-300 rounded-md"
        />
        <button
          type="submit"
          className="w-full py-3 dark:bg-dark-accent bg-light-accent dark:text-black font-bold text-xl text-white rounded-md hover:bg-indigo-700"
        >
          Post Comment
        </button>
      </form>
    </div>
  );
};

export default CommentSection;
