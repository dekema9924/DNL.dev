import { useState } from "react";
import { ArrowDown, ArrowLeft, ArrowRight } from "lucide-react";
import LatestBlogs from "../blogs/LatestBlogs";
import { projectsData } from "../../data/ProjectData";





export default function ProjectsPage() {
    const [current, setCurrent] = useState(0);

    const nextProject = () => {
        setCurrent((prev) => (prev + 1) % projectsData.length);
    };

    const prevProject = () => {
        setCurrent((prev) => (prev - 1 + projectsData.length) % projectsData.length);
    };

    const project = projectsData[current];

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
                        href={project.live}
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
                    href={project.live}
                    className="sm:hidden inline-flex items-center gap-1 text-sm font-medium hover:underline"
                >
                    Discover <ArrowDown size={16} />
                </a>
            </div>

            {/* Project Counter */}
            <div className="text-center text-gray-500">
                {current + 1} / {projectsData.length}
            </div>

            {/* Minimal Blog Section */}
            <LatestBlogs />

        </section>
    );
}
