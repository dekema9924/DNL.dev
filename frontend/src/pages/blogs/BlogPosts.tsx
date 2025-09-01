import { Link } from "react-router-dom";
import blogPost from "../../data/Blogs.json";

function Blogs() {

    return (
        <div className="min-h-screen pt-10 px-4 md:px-10 transition-colors duration-500">
            <h1 className="text-4xl font-extrabold mb-12 tracking-tight">
                Latest Blogs
            </h1>

            <div className="space-y-12">
                {blogPost.map((blog) => (
                    <div key={blog.id} className="group space-y-3 border-b pb-8">
                        {/* Title */}
                        <h2 className="text-2xl font-bold leading-snug group-hover:text-indigo-500 transition-colors">
                            <Link to={`/blogs/${blog.id}`}>{blog.title}</Link>
                        </h2>

                        {/* Meta info with author */}
                        <div className="flex items-center gap-3 text-sm text-gray-500 dark:text-gray-400">
                            <img
                                src={blog.authorImg}
                                alt={blog.author}
                                className="w-7 h-7 rounded-full object-cover"
                            />
                            <span className="font-medium">{blog.author}</span>
                            <span>• {blog.readTime}</span>
                            <span>• {blog.date}</span>
                        </div>

                        {/* Intro text */}
                        <p className="text-base text-gray-700 dark:text-gray-300 line-clamp-3">
                            {blog.description}
                        </p>

                        {/* Read More */}
                        <Link
                            to={`/blogs/${blog.id}`}
                            className="inline-block text-indigo-500 hover:text-indigo-600 text-sm font-semibold mt-2"
                        >
                            Read More →
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Blogs;
