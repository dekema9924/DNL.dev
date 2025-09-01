import { motion } from "motion/react"
import { ExternalLink } from "lucide-react"
import { useThemeContext } from "../../context/ThemeContext"
import Button from "../../components/UI/Button"

type Project = {
    title: string
    description: string
    img: string
    tools: string[]
    live: string
    github: string
}

const projects: Project[] = [
    {
        title: "Portfolio Website",
        description: "A modern portfolio built with React, Tailwind, and animations.",
        img: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=800",
        tools: ["React", "TailwindCSS", "Framer Motion"],
        live: "https://example.com",
        github: "https://github.com/example",
    },
    {
        title: "Job Board",
        description: "A SaaS job board platform with live API data.",
        img: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=800",
        tools: ["React.js", "TypeScript", "MongoDB"],
        live: "https://example.com",
        github: "https://github.com/example",
    },
    {
        title: "Pluuto.ai",
        description: "AI-powered SAAS platform for generating images and text.",
        img: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800",
        tools: ["Node.js", "React", "Express", "TypeScript", "MongoDB", "OpenAI API"],
        live: "https://example.com",
        github: "https://github.com/dekema9924/pluto.ai",
    },
]

const ProjectCard = ({ project }: { project: Project }) => {
    const { isDarkMode } = useThemeContext()

    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="relative w-full mx-auto mb-12 last:mb-0"
        >
            <div
                className={`relative overflow-hidden rounded-xl shadow-lg ${isDarkMode ? "bg-[#1f1f1f]" : "bg-white"
                    }`}
            >
                {/* Title bar with external link */}
                <div className="flex justify-between items-center px-6 py-4 border-b border-gray-700">
                    <h3 className="text-lg font-semibold text-white">{project.title}</h3>
                    <a
                        href={project.live}
                        target="_blank"
                        className="p-2 rounded-full bg-white/10 hover:bg-white/20 text-white"
                    >
                        <ExternalLink size={18} />
                    </a>
                </div>

                {/* Image preview */}
                <img
                    src={project.img}
                    alt={project.title}
                    className="w-full h-[400px] object-cover"
                />
            </div>
        </motion.div>
    )
}

export default function Projects() {
    return (
        <section className="max-w-6xl mx-auto px-4">
            {/* Header */}
            <motion.h1
                initial={{ opacity: 0, x: 40, }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="font-extrabold text-[4rem] !text-indigo-400 sm:text-[5rem] md:text-[6rem] tracking-tight  drop-shadow-md text-center "
            >
                LATEST WORK
            </motion.h1>

            {/* Sticky stacked projects */}
            <div className="relative space-y-10">
                {projects.map((project) => (
                    <div key={project.title} className="sticky top-24">
                        <ProjectCard project={project} />
                    </div>
                ))}
            </div>

            {/* Explore button */}
            <div className="flex justify-end mt-12">
                <Button style="border" text="Explore" link="/projects" />
            </div>
        </section>
    )
}
