import { useState } from "react";
import { ArrowDown, ArrowLeft, ArrowRight } from "lucide-react";
import LatestBlogs from "../blogs/LatestBlogs";

type Project = {
    title: string;
    description: string;
    image: string;
    link: string;
};

type Blog = {
    title: string;
    date: string;
    excerpt: string;
    link: string;
};

const projects: Project[] = [
    {
        title: "Ecommerce website",
        description: "Ecommerce website for the first smart mailbox Custo®.",
        image:
            "https://images.unsplash.com/photo-1688561808434-886a6dd97b8c?w=1200&auto=format&fit=crop&q=80",
        link: "#",
    },
    {
        title: "Portfolio Redesign",
        description: "Minimal portfolio showcasing projects and design approach.",
        image:
            "https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=1200&auto=format&fit=crop&q=80",
        link: "#",
    },
    {
        title: "Dashboard UI",
        description:
            "Responsive dashboard interface with charts, authentication, and dark mode.",
        image:
            "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&auto=format&fit=crop&q=80",
        link: "#",
    },
];

const blogs: Blog[] = [
    {
        title: "Why I Built My Own Portfolio",
        date: "Aug 20, 2025",
        excerpt: "Sharing the thought process and tools I used when redesigning my portfolio from scratch.",
        link: "#",
    },
    {
        title: "Lessons from My First SaaS Project",
        date: "Jul 15, 2025",
        excerpt: "Some challenges I faced building a SaaS product in the MERN stack and what I learned.",
        link: "#",
    },
];

export default function ProjectsPage() {
    const [current, setCurrent] = useState(0);

    const nextProject = () => {
        setCurrent((prev) => (prev + 1) % projects.length);
    };

    const prevProject = () => {
        setCurrent((prev) => (prev - 1 + projects.length) % projects.length);
    };

    const project = projects[current];

    return (
        <section className="px-4 sm:px-10 lg:px-20 py-16 space-y-20">
            {/* Page Heading */}
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center">
                <h1 className="text-5xl sm:text-6xl font-extrabold">DNL.dev</h1>
                <span className="text-4xl sm:text-5xl font-bold text-gray-500 mt-4 sm:mt-0">
                    (2025)
                </span>
            </div>

            {/* Project Display */}
            <div className="space-y-6">
                {/* Description + Discover */}
                <div className="flex justify-between items-center">
                    <p className="text-lg sm:text-xl text-gray-700 max-w-lg">
                        {project.description}
                    </p>
                    <a
                        href={project.link}
                        className="hidden sm:inline-flex items-center gap-1 text-sm font-medium hover:underline"
                    >
                        Discover <ArrowDown size={16} />
                    </a>
                </div>

                {/* Image with hover animation */}
                <div className="relative rounded-xl overflow-hidden shadow-lg group lg:h-[500px]">
                    <img
                        src={project.image}
                        alt={project.title}
                        className="w-full  h-full object-cover transform transition-transform duration-500 ease-in-out group-hover:scale-105"
                    />

                    {/* Prev/Next Buttons */}
                    <div className="absolute inset-0 flex justify-between items-center px-4">
                        <button
                            onClick={prevProject}
                            className="bg-white/70 hover:bg-white text-black rounded-full p-2 shadow transition"
                        >
                            <ArrowLeft />
                        </button>
                        <button
                            onClick={nextProject}
                            className="bg-white/70 hover:bg-white text-black rounded-full p-2 shadow transition"
                        >
                            <ArrowRight />
                        </button>
                    </div>
                </div>

                {/* Discover link on mobile */}
                <a
                    href={project.link}
                    className="sm:hidden inline-flex items-center gap-1 text-sm font-medium hover:underline"
                >
                    Discover <ArrowDown size={16} />
                </a>
            </div>

            {/* Project Counter */}
            <div className="text-center text-gray-500">
                {current + 1} / {projects.length}
            </div>

            {/* Minimal Blog Section */}
            <LatestBlogs />

        </section>
    );
}
