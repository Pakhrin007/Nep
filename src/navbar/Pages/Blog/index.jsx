import React, { useState } from 'react';
import blogData from '../../../ui/blog-post/blog-post';
import Navbar from '../../../navbar/index';
import CTASection from '../../../ui/cta';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

const BlogPage = () => {
  const { featured } = blogData;
  const [currentFeaturedIndex, setCurrentFeaturedIndex] = useState(0);
  const [direction, setDirection] = useState('');

  const currentFeatured = featured[currentFeaturedIndex];


  return (
    <div className="bg-white min-h-screen">
      <Navbar />

      <div className="max-w-[1070px] mx-auto pt-8 px-6">
        {/* Featured Blog Post */}
        <h2 className='text-2xl font-semibold font-heading mb-4'>Latest Blog Posts</h2>
        <div className="mb-12 bg-slate-100  p-6 rounded-xl">
          <div className="bg-white rounded-xl overflow-hidden flex">
            <div className="relative">
              <img
                src={currentFeatured.image}
                alt={currentFeatured.title}
                className="w-full h-[250px] object-cover"
              />
             
            </div>
            <div className="p-6 ">
              <h1 className="border border-black text-[14px] font-semibold font-heading mb-4 px-2 py-1 bg-blue-50 rounded-xl w-fit">Most Recent</h1>
              <h1 className="text-2xl font-semibold font-heading mb-4">{currentFeatured.title}</h1>
              <p className="text-gray-600 text-lg mb-4 font-body">{currentFeatured.description}</p>
            </div>
          </div>
        </div>

        {/* Blog Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {featured.slice(1).map((post, index) => (
            <div key={index} className="bg-slate-100 rounded-xl overflow-hidden p-4">
              <div className="w-[500px] h-[260px] mb-4">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-[460px] h-[260px] object-cover rounded-xl"
                />
              </div>
              <div className="px-4">
                <h2 className="text-2xl font-semibold font-heading mb-2">{post.title}</h2>
                <p className="text-gray-600 font-body">{post.description}</p>
              </div>
            </div>
          ))}
          
        </div>
        <div className="mt-12 bg-gradient-to-r from-blue-100 to-purple-100 p-8 rounded-2xl shadow-lg mb-12">
          <h2 className="text-2xl font-bold font-heading mb-4 text-gray-800">Stay Updated with Our Newsletter</h2>
          <p className="text-gray-600 mb-6">Subscribe to receive the latest blog posts, podcasting tips, and exclusive content straight to your inbox!</p>
          <form className="flex flex-col sm:flex-row gap-4">
            <input
              type="email"
              placeholder="Enter your email address"
              className="flex-1 px-6 py-3 rounded-lg border border-gray-300 focus:outline-none focus:border-blue-500 text-gray-700 placeholder-gray-400"
              required
            />
            <button
              type="submit"
              className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition duration-300 ease-in-out transform hover:scale-105"
            >
              Subscribe Now
            </button>
          </form>
          <p className="text-sm text-gray-500 mt-2">We respect your privacy. Unsubscribe anytime.</p>
        </div>
      </div>
      

      <CTASection />

      {/* Inline CSS for animations */}
      <style>
        {`
          @keyframes slide-in-right {
            0% { opacity: 0; transform: translateX(20px); }
            100% { opacity: 1; transform: translateX(0); }
          }
          @keyframes slide-in-left {
            0% { opacity: 0; transform: translateX(-20px); }
            100% { opacity: 1; transform: translateX(0); }
          }
          .animate-slide-in-right { animation: slide-in-right 0.5s ease-in-out forwards; }
          .animate-slide-in-left { animation: slide-in-left 0.5s ease-in-out forwards; }
          .line-clamp-2 {
            display: -webkit-box;
            -webkit-line-clamp: 2;
            -webkit-box-orient: vertical;
            overflow: hidden;
          }
          .line-clamp-3 {
            display: -webkit-box;
            -webkit-line-clamp: 3;
            // -webkit-box-orient: vertical;
            overflow: hidden;
          }
        `}
      </style>
    </div>
  );
};

export default BlogPage;