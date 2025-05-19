import { Link } from "react-router-dom";
import Navbar from "../../../navbar/index";
import { BlogPost, BlogPost2, company } from "../../../ui/blog-post/blog-post";
import newsletter from "../../../assets/Images/newsletter.png";
import CTASection from "../../../ui/cta/index";
const Blog = () => {
    return (
        <div className="flex flex-col gap-y-[24px]">
            <Navbar />
            <div className="max-w-[1280px] mx-auto py-8">
                <h1 className="text-3xl font-bold mb-6 font-title">Healthcare Blog</h1>

                {/* BlogPost section */}
                <div className="flex flex-wrap gap-8 justify-center">
                    {BlogPost.map(post => (
                        <Link
                            to={`/blog/${post.id}`}
                            key={post.id}
                            className="w-[600px] rounded-xl hover:shadow-xl transition-shadow duration-300 overflow-hidden bg-amber-50"
                        >
                            <img
                                src={post.image}
                                alt={post.title}
                                className="w-full h-[270px] object-cover"
                            />
                            <div className="p-6">
                                <h2 className="text-xl font-semibold mb-2">{post.title}</h2>
                                <p className="text-gray-600">{post.excerpt}</p>
                            </div>
                        </Link>
                    ))}
                </div>

                {/* BlogPost2 section */}
                <div className="flex flex-wrap gap-8 mt-12">
                    {BlogPost2.map(post => (
                        <Link
                            to={`/blog/${post.id}`}
                            key={post.id}
                            className="w-full rounded-xl hover:shadow-xl transition-shadow duration-300 overflow-hidden bg-white"
                        >
                            <div className="w-full h-[300px] flex p-4 bg-amber-50">
                                <img
                                    src={post.image}
                                    alt={post.title}
                                    className="w-[800px] h-[270px] object-cover rounded-xl"
                                />
                                <div className="px-4">
                                    <h2 className="text-xl font-semibold mb-2">{post.title}</h2>
                                    <p className="text-gray-600">{post.excerpt}</p>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>

                {/* Newsletter Signup Section */}
                <div className="flex justify-center mt-16">
                    <div className="bg-white shadow-md rounded-2xl flex items-center justify-between p-8 w-full max-w-[900px]">
                        <div className="max-w-[500px]">
                            <h2 className="text-2xl font-bold mb-4">Sign up for our newsletter</h2>
                            <input
                                type="email"
                                placeholder="Enter email"
                                className="w-full border rounded-md p-3 mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                            <div className="flex items-start gap-2 mb-4">
                                <input type="checkbox" className="mt-1" />
                                <p className="text-sm text-gray-600">
                                    I agree to receive occasional marketing emails from Infermedica about their products and services.
                                    More information can be found in the{" "}
                                    <Link to="/privacy-policy" className="text-blue-600 underline">
                                        Privacy Policy
                                    </Link>, and I can withdraw my consent at any time. *
                                </p>
                            </div>
                            <button className="bg-[#4C4CFF] text-white px-6 py-2 rounded-full hover:bg-[#3737ff] transition">
                                Subscribe
                            </button>
                        </div>
                        <img
                            src={newsletter}
                            alt="Newsletter"
                            className="w-[200px] hidden md:block"
                        />
                    </div>
                </div>

                {/* Company Blog Section */}
                <div className="max-w-[1280px] mx-auto py-8">
                    <h1 className="text-3xl font-bold mb-6 font-title">Company Blog</h1>
                    <div className="flex flex-wrap gap-8">
                        {company.map(post => (
                            <Link
                                to={`/blog/${post.id}`} // ✅ Link corrected here
                                key={post.id}
                                className="w-[600px] rounded-xl hover:shadow-xl transition-shadow duration-300 overflow-hidden bg-amber-50"
                            >
                                <img
                                    src={post.image}
                                    alt={post.name}
                                    className="w-full h-[270px] object-cover"
                                />
                                <div className="p-6">
                                    <h2 className="text-xl font-semibold mb-2">{post.headquarters}</h2>
                                    <p className="text-gray-600">{post.name}</p>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
               
            </div>
            <CTASection />
        </div>
         
    );
};

export default Blog;
