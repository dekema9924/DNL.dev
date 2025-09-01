import { Link, useParams } from 'react-router-dom'
import { ArrowBigLeft } from 'lucide-react';
import { useThemeContext } from '../../context/ThemeContext';
import blogPosts from '../../data/Blogs.json'
import LatestBlogs from './LatestBlogs';

function BlogDetails() {
    const { id } = useParams();
    const { isDarkMode } = useThemeContext();

    // Find the blog by ID
    const blog = blogPosts.find((b) => b.id === Number(id));

    if (!blog) {
        return (
            <div className={`p-6 ${isDarkMode ? "bg-gray-900 text-gray-200" : "bg-white text-gray-900"}`}>
                <p>Blog not found.</p>
                <Link to="/blogs" className="text-indigo-500 flex items-center gap-1">
                    <ArrowBigLeft size={18} /> Back to Blogs
                </Link>
            </div>
        )
    }

    return (
        <>
            <div className={`min-h-screen  p-6`}>
                {/* Back button */}
                <Link className="text-gray-400 text-sm flex items-center gap-1 mb-6" to="/blogs">
                    <ArrowBigLeft size={18} /> Back to Blogs
                </Link>

                {/* Blog Title */}
                <h1 className="capitalize text-3xl md:text-5xl font-bold md:max-w-4xl leading-tight mb-6">
                    {blog.title}
                </h1>

                {/* Cover Image */}
                <img
                    className="w-full h-96 object-cover rounded-md shadow-md"
                    src={blog.img}
                    alt={blog.title}
                />

                <div className="my-10 flex flex-col md:flex-row gap-6">
                    {/* Author Info */}
                    <div className="md:p-5 p-2 md:w-4/12 lg:w-3/12">
                        <div className="flex items-center gap-3">
                            <img
                                className="w-12 h-12 rounded-full object-cover"
                                src={blog.authorImg}
                                alt={blog.author}
                            />

                        </div>
                        <div className="mt-4 text-sm">
                            <span>{blog.readTime} <span className="text-gray-400">read</span></span>
                            <p className="flex items-center gap-2 mt-2">
                                Published <span className="w-2 h-2 rounded-full bg-indigo-500 block"></span> {blog.date}
                            </p>
                        </div>
                    </div>

                    {/* Blog Content */}
                    <div className="w-full md:w-8/12 lg:w-9/12 md:p-5 p-2 space-y-6">
                        {blog.content.map((para, index) => (
                            <p key={index} className="text-base leading-relaxed">
                                {para}
                            </p>
                        ))}
                    </div>
                </div>
            </div>
            <LatestBlogs />
        </>
    )
}

export default BlogDetails;
