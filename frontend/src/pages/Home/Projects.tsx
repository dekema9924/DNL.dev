import { motion } from "motion/react"
import { ExternalLink } from "lucide-react"
import { useThemeContext } from "../../context/ThemeContext"
import Button from "../../components/UI/Button"
import { projectsData, type ProjectType } from "../../data/ProjectData"


const ProjectCard = ({ project }: { project: ProjectType }) => {
    const { isDarkMode } = useThemeContext()

    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="relative w-full mx-auto mb-12 last:mb-0 overflow-x-hidden"
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
                    src={project.image}
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
                {projectsData.slice(0, 3).map((project) => (
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
