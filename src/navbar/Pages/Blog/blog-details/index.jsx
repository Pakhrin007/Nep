import { useParams } from "react-router-dom";
import Navbar from "../../../../navbar/index";
import { BlogPost, BlogPost2, company } from "../../../../ui/blog-post/blog-post";

const BlogDetail = () => {
    const { id } = useParams();
    const blog = BlogPost.find(post => post.id === parseInt(id));
    const blog2 = BlogPost2.find(post => post.id === parseInt(id));
    const companyBlog = company.find(post => post.id === parseInt(id));

    if (!blog && !blog2 && !companyBlog) {
        return (
            <>
                <Navbar />
                <div className="max-w-[800px] mx-auto px-4 py-8">
                    <h2 className="text-2xl font-bold text-red-500">Blog not found</h2>
                </div>
            </>
        );
    }

    return (
        <>
            <Navbar />
            <div className="max-w-[800px] mx-auto px-4 py-8">
                {blog && (
                    <>
                        <img
                            src={blog.image}
                            alt={blog.title}
                            className="w-full h-64 object-cover rounded-xl mb-6"
                        />
                        <h1 className="text-3xl font-bold mb-4">{blog.title}</h1>
                        <p className="text-gray-700 text-lg">{blog.detail}</p>
                    </>
                )}
                {blog2 && (
                    <>
                        <h1 className="text-3xl font-bold mb-4">{blog2.title}</h1>
                        <p className="text-gray-700 text-lg">{blog2.detail}</p>
                    </>
                )}
                {companyBlog && (
                    <>
                        <h1 className="text-3xl font-bold mb-4">{companyBlog.name}</h1>
                        <p className="text-gray-700 text-lg">{companyBlog.description}</p>
                        <p className="text-gray-700 text-lg">{companyBlog.foundedYear}</p>
                        <p className="text-gray-700 text-lg">{companyBlog.headquarters}</p>
                        <p className="text-gray-700 text-lg">{companyBlog.industry}</p>
                        <p className="text-gray-700 text-lg">{companyBlog.employeeCount}</p>
                    </>
                )}
            </div>
        </>
    );
};

export default BlogDetail;