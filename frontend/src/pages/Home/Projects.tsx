import { motion } from "motion/react"
import { useState } from "react"
import { Github, ExternalLink } from "lucide-react"

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
        github: "https://github.com/example"
    },
    {
        title: "Job Board",
        description: "A SaaS job board platform with live API data.",
        img: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=800",
        tools: ["Next.js", "TypeScript", "MongoDB"],
        live: "https://example.com",
        github: "https://github.com/example"
    },
    {
        title: "Chat App",
        description: "A real-time chat app with WebSockets and authentication.",
        img: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800",
        tools: ["Node.js", "Socket.io", "Express"],
        live: "https://example.com",
        github: "https://github.com/example"
    }
]

// Direction-aware hover logic
function getDirection(e: React.MouseEvent<HTMLDivElement, MouseEvent>, el: HTMLElement) {
    const w = el.offsetWidth
    const h = el.offsetHeight
    const x = (e.pageX - el.offsetLeft - w / 2) * (w > h ? h / w : 1)
    const y = (e.pageY - el.offsetTop - h / 2) * (h > w ? w / h : 1)
    const d = Math.round(Math.atan2(y, x) / 1.57079633 + 5) % 4
    return d
}

const ProjectCard = ({ project }: { project: Project }) => {
    const [hoverDir, setHoverDir] = useState<number | null>(null)

    const handleMouseEnter = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        const dir = getDirection(e, e.currentTarget)
        setHoverDir(dir)
    }

    const handleMouseLeave = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        const dir = getDirection(e, e.currentTarget)
        setHoverDir(dir)
    }

    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="relative w-11/12 mx-auto mb-24 last:mb-0"
        >
            <div
                className="relative overflow-hidden rounded-2xl shadow-lg cursor-pointer group"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
            >
                {/* Image */}
                <img
                    src={project.img}
                    alt={project.title}
                    className="w-full h-[450px] object-cover transform transition-transform duration-500 group-hover:scale-105"
                />

                {/* Overlay (direction-aware) */}
                <motion.div
                    key={hoverDir} // reset animation each time
                    initial={{
                        opacity: 0,
                        x: hoverDir === 1 ? "100%" : hoverDir === 3 ? "-100%" : 0,
                        y: hoverDir === 0 ? "-100%" : hoverDir === 2 ? "100%" : 0,
                    }}
                    animate={{ opacity: 1, x: 0, y: 0 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="absolute inset-0 bg-black/60 flex flex-col justify-end p-6 opacity-0 group-hover:opacity-100"
                >
                    <h3 className="text-xl font-bold text-white">{project.title}</h3>
                    <p className="text-sm text-gray-200 mb-2">{project.description}</p>
                    <div className="flex flex-wrap gap-2 mb-3">
                        {project.tools.map((tool) => (
                            <span
                                key={tool}
                                className="text-xs px-2 py-1 bg-white/20 text-white rounded-lg"
                            >
                                {tool}
                            </span>
                        ))}
                    </div>
                    <div className="flex gap-4">
                        <a
                            href={project.live}
                            target="_blank"
                            className="flex items-center gap-1 text-white hover:text-gray-300"
                        >
                            <ExternalLink size={16} /> Live Preview
                        </a>
                        <a
                            href={project.github}
                            target="_blank"
                            className="flex items-center gap-1 text-white hover:text-gray-300"
                        >
                            <Github size={16} /> GitHub
                        </a>
                    </div>
                </motion.div>
            </div>
        </motion.div>
    )
}

export default function Projects() {
    return (
        <section className="max-w-6xl mx-auto px-4 py-16">
            <div className="mb-16">
                <span className="text-sm uppercase tracking-widest text-gray-500">
                    Portfolio
                </span>
                <h2 className="text-3xl font-bold mt-2">
                    Your projects can look like this too
                </h2>
                <p className="text-gray-600 dark:text-gray-400 text-sm">
                    Explore my portfolio full of creative solutions
                </p>
            </div>

            <div className="relative">
                {projects.map((project, i) => (
                    <div key={project.title} className="sticky top-20">
                        <ProjectCard project={project} />
                    </div>
                ))}
            </div>
        </section>
    )
}
