import blogs from '../../data/Blogs.json'
import { Link } from 'react-router-dom'

export default function LatestBlogs() {
    return (
        <div className="space-y-10">
            <h2 className="text-3xl sm:text-4xl font-bold">Latest Blog Posts</h2>

            <div className="grid sm:grid-cols-2 gap-8">
                {blogs.slice(0, 2).map((blog, idx) => (
                    <Link
                        key={idx}
                        to={`/blogs/${blog.id}`}
                        className="group block border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md transition hover:-translate-y-1"
                    >
                        <p className="text-sm text-gray-500">{blog.date}</p>
                        <h3 className="text-xl font-semibold mt-2 group-hover:text-blue-600 transition">
                            {blog.title}
                        </h3>
                        <p className="text-gray-600 mt-2">{blog.description}</p>
                        <p className="text-sm text-gray-500 mt-2">By {blog.author}</p>
                    </Link>
                ))}
            </div>
        </div>
    )
}
