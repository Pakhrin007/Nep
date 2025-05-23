import React from 'react';
import blogData from '../../../../ui/blog-post/blog-post.js';

const BlogDetailPage = () => {
  const { featured } = blogData;

  return (
    <div className="max-w-4xl mx-auto p-6">
     
      <img
        src={`/images/${featured.image}`}
        alt={featured.title}
        className="w-full h-96 object-cover rounded-xl mb-6"
      />
      <h1 className="text-4xl font-bold mb-4">{featured.title}</h1>
      <p className="text-gray-600 text-lg mb-4">{featured.description}</p>
      <div className="text-sm text-gray-500 mb-6">
        By {featured.author} • {featured.tag} • {featured.date} • {featured.readTime}
      </div>
      <div className="prose max-w-none">
        <p>
          Recording a podcast remotely can be easy and effective if you use the right tools.
          In this guide, we’ll explore four reliable methods for remote podcasting,
          including Zoom, Riverside.fm, and more.
        </p>
        <ul>
          <li>Use a dedicated podcasting platform (like Riverside)</li>
          <li>Try video conferencing tools (Zoom, Skype)</li>
          <li>Record audio separately and sync in post</li>
          <li>Hire a remote producer or use automation tools</li>
        </ul>
      </div>
    </div>
  );
};

export default BlogDetailPage;
