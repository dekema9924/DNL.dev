import { motion } from "motion/react"
import { ExternalLink, Github as GitHubIcon } from "lucide-react"
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
            className="relative w-full mx-auto mb-12 last:mb-0"
        >
            <div
                className={`relative overflow-hidden rounded-xl bg-[#1f1f1f] ${isDarkMode ? "shadow-indigo-400" : "shadow-indigo-200 shadow-2xl"
                    }`}
            >
                {/* Title bar with external + GitHub links */}
                <div className="flex justify-between items-center px-6 py-4 border-b border-gray-700">
                    <h3 className="text-lg font-semibold text-white">{project.title}</h3>
                    <div className="flex items-center gap-3">
                        <a
                            href={project.github}
                            target="_blank"
                            className="p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition"
                        >
                            <GitHubIcon className="text-white" size={18} />
                        </a>
                        <a
                            href={project.live}
                            target="_blank"
                            className="p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition"
                        >
                            <ExternalLink className="text-white" size={18} />
                        </a>
                    </div>
                </div>

                {/* Image preview with hover zoom */}
                <div className="overflow-hidden">
                    <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-[400px] object-cover transform transition-transform duration-500 hover:scale-105"
                    />
                </div>

                {/* Project description */}
                <div className="px-6 py-5">
                    <p className="!text-white leading-relaxed">
                        {project.description}
                    </p>
                </div>
            </div>
        </motion.div>


    )
}

export default function Projects() {
    return (
        <section className="mx-auto w-full max-w-6xl px-6 lg:px-8   ">
            {/* Header */}
            <motion.h1
                initial={{ opacity: 0, x: 40, }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="font-extrabold text-[2rem]  !text-indigo-400 sm:text-[3rem] md:text-[5rem] tracking-tight  drop-shadow-md text-center "
            >
                LATEST WORK
            </motion.h1>

            {/* Sticky stacked projects */}
            <div className="relative space-y-10 ">
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
