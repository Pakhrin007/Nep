import React, { useState } from 'react';
import blogData from '../../../ui/blog-post/blog-post';
import Navbar from '../../../navbar/index';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

const BlogPage = () => {
  const { featured, trending } = blogData;
  const [currentFeaturedIndex, setCurrentFeaturedIndex] = useState(0);
  const [direction, setDirection] = useState(''); // Track direction for animation

  const handleNext = () => {
    setDirection('next');
    setCurrentFeaturedIndex((prevIndex) => 
      prevIndex === featured.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handleBack = () => {
    setDirection('back');
    setCurrentFeaturedIndex((prevIndex) => 
      prevIndex === 0 ? featured.length - 1 : prevIndex - 1
    );
  };

  const currentFeatured = featured[currentFeaturedIndex];

  return (
    <div className="bg-gray-50 min-h-screen">
      <Navbar />

      <div className="max-w-[1280px] mx-auto pt-6 px-8">
        {/* Horizontal Flex Container */}
        <div className="flex flex-col lg:flex-row gap-8">
          <div className="flex-1">
            <h1 className="text-2xl font-bold font-heading mb-6">Featured Blog</h1>

            {/* Wrapper for animation */}
            <div className="overflow-hidden">
              <div
                key={currentFeaturedIndex} // Key ensures React re-renders the component for animation
                className={`bg-white p-6 rounded-2xl shadow hover:shadow-lg transition-all duration-500 ease-in-out
                  ${direction === 'next' ? 'animate-slide-in-right' : direction === 'back' ? 'animate-slide-in-left' : ''}`}
              >
                <img
                  src={currentFeatured.image}
                  alt={currentFeatured.title}
                  className="w-full h-80 object-cover rounded-xl mb-4"
                />
                <h2 className="text-2xl font-bold mb-2 text-gray-900">{currentFeatured.title}</h2>
                <p className="text-gray-600 mb-3">{currentFeatured.description}</p>
                <div className="text-sm text-gray-500">
                  By <strong>{currentFeatured.author}</strong> • {currentFeatured.tag} • {currentFeatured.date} • {currentFeatured.readTime}
                </div>
              </div>
            </div>

            {featured.length > 1 && (
              <div className="flex justify-center items-center mt-6 gap-8">
                <button
                  onClick={handleBack}
                  className="px-4 py-2 bg-gray-200 text-gray-800 rounded-full hover:bg-gray-300 transition"
                >
                  <FaArrowLeft />
                </button>
                <button
                  onClick={handleNext}
                  className="px-4 py-2 bg-blue-500 text-white rounded-full hover:bg-blue-600 transition"
                >
                  <FaArrowRight />
                </button>
              </div>
            )}
          </div>

          {/* Trending Blog Section */}
          <div className="w-full lg:w-[350px]">
            <h3 className="text-2xl font-bold font-heading mb-6">Trending Blogs</h3>
            <div className="space-y-4 max-h-[520px] overflow-y-auto pr-2 scrollbar-thin scrollbar-thumb-blue-400 scrollbar-track-gray-200">
              {trending.map((item, index) => (
                <div
                  key={index}
                  className="flex gap-4 p-2 bg-white rounded-lg shadow hover:shadow-md transition"
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-20 h-20 rounded-lg object-cover"
                  />
                  <div className="flex flex-col text-sm">
                    <span className="font-semibold text-gray-800">{item.title}</span>
                    <span className="text-purple-600">{item.tag}</span>
                    <span className="text-gray-400">{item.date} • {item.readTime}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Enhanced Newsletter Subscription Section */}
        <div className="mt-12 bg-gradient-to-r from-blue-100 to-purple-100 p-8 rounded-2xl shadow-lg">
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
      <div className="max-w-[1280px] mx-auto pt-6 px-8">
        {/* Horizontal Flex Container */}
        <div className="flex flex-col lg:flex-row gap-8">
          <div className="flex-1">
            <h1 className="text-2xl font-bold font-heading mb-6">Featured Blog</h1>

            {/* Wrapper for animation */}
            <div className="overflow-hidden">
              <div
                key={currentFeaturedIndex} // Key ensures React re-renders the component for animation
                className={`bg-white p-6 rounded-2xl shadow hover:shadow-lg transition-all duration-500 ease-in-out
                  ${direction === 'next' ? 'animate-slide-in-right' : direction === 'back' ? 'animate-slide-in-left' : ''}`}
              >
                <img
                  src={currentFeatured.image}
                  alt={currentFeatured.title}
                  className="w-full h-80 object-cover rounded-xl mb-4"
                />
                <h2 className="text-2xl font-bold mb-2 text-gray-900">{currentFeatured.title}</h2>
                <p className="text-gray-600 mb-3">{currentFeatured.description}</p>
                <div className="text-sm text-gray-500">
                  By <strong>{currentFeatured.author}</strong> • {currentFeatured.tag} • {currentFeatured.date} • {currentFeatured.readTime}
                </div>
              </div>
            </div>

            {featured.length > 1 && (
              <div className="flex justify-center items-center mt-6 gap-8">
                <button
                  onClick={handleBack}
                  className="px-4 py-2 bg-gray-200 text-gray-800 rounded-full hover:bg-gray-300 transition"
                >
                  <FaArrowLeft />
                </button>
                <button
                  onClick={handleNext}
                  className="px-4 py-2 bg-blue-500 text-white rounded-full hover:bg-blue-600 transition"
                >
                  <FaArrowRight />
                </button>
              </div>
            )}
          </div>

          {/* Trending Blog Section */}
          <div className="w-full lg:w-[350px]">
            <h3 className="text-2xl font-bold font-heading mb-6">Trending Blogs</h3>
            <div className="space-y-4 max-h-[520px] overflow-y-auto pr-2 scrollbar-thin scrollbar-thumb-blue-400 scrollbar-track-gray-200">
              {trending.map((item, index) => (
                <div
                  key={index}
                  className="flex gap-4 p-2 bg-white rounded-lg shadow hover:shadow-md transition"
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-20 h-20 rounded-lg object-cover"
                  />
                  <div className="flex flex-col text-sm">
                    <span className="font-semibold text-gray-800">{item.title}</span>
                    <span className="text-purple-600">{item.tag}</span>
                    <span className="text-gray-400">{item.date} • {item.readTime}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Enhanced Newsletter Subscription Section */}
        
      </div>

      {/* Inline CSS for animations */}
      <style>
        {`
          @keyframes slide-in-right {
            0% {
              opacity: 0;
              transform: translateX(20px);
            }
            100% {
              opacity: 1;
              transform: translateX(0);
            }
          }

          @keyframes slide-in-left {
            0% {
              opacity: 0;
              transform: translateX(-20px);
            }
            100% {
              opacity: 1;
              transform: translateX(0);
            }
          }

          .animate-slide-in-right {
            animation: slide-in-right 0.5s ease-in-out forwards;
          }

          .animate-slide-in-left {
            animation: slide-in-left 0.5s ease-in-out forwards;
          }
        `}
      </style>
    </div>
  );
};

export default BlogPage;