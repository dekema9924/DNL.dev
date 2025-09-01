"use client";
import { motion } from "motion/react";
import { GraduationCap, Code, Briefcase } from "lucide-react";
import { useThemeContext } from "../../context/ThemeContext";
import AnimatedLine from "../../components/UI/AnimatedLine";

const experiences = [
    {
        year: "2025",
        title: "B.S. in Information Technology",
        description:
            "Completed coursework in software development, networking, and cybersecurity. Built projects using React, Node.js, MongoDB, and APIs.",
        icon: <GraduationCap className="w-8 h-8 text-green-500" />,
    },
    {
        year: "2025",
        title: "Self-Taught MERN Developer",
        description:
            "Designed and deployed full-stack applications, gaining hands-on experience with React, Node.js, Express, and MongoDB.",
        icon: <Code className="w-8 h-8 text-indigo-500" />,
    },
    {
        year: "2025",
        title: "Fiserv – Product Generalist",
        description:
            "Supported product operations and workflows while applying IT knowledge to troubleshoot and streamline processes.",
        icon: <Briefcase className="w-8 h-8 text-orange-500" />,
    },
    {
        year: "2024",
        title: "Tech Skills IT Support Program",
        description:
            "Completed intensive 4-week training in IT support, covering troubleshooting, Active Directory, and networking fundamentals.",
        icon: <GraduationCap className="w-8 h-8 text-green-500" />,
    },
    {
        year: "2023",
        title: "Freelance Developer",
        description:
            "Built custom websites and applications for small businesses, emphasizing performance, responsive design, and user experience.",
        icon: <Briefcase className="w-8 h-8 text-orange-500" />,
    },


];

export default function ExperienceTimeline() {
    const { isDarkMode } = useThemeContext();

    return (
        <>
            <AnimatedLine />
            <section id="experience" className="max-w-6xl mx-auto px-6 py-20">
                {/* Heading */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7 }}
                    viewport={{ once: true }}
                    className="mb-16"
                >
                    <h4 className="text-sm font-semibold tracking-widest underline mb-2">
                        TIMELINE
                    </h4>
                    <h2 className="text-3xl max-w-8/12 md:text-4xl font-bold mb-3">
                        <span className="text-indigo-500">&lt;Coding&gt;</span>My Way Through Innovation and IT.                    </h2>
                    <p className="text-gray-500 md:w-96">
                        Each chapter of my journey — from self-taught development to IT training and projects — shaped the skills I bring today.
                    </p>
                </motion.div>


                {/* Timeline */}
                <div className="relative">
                    {/* Center line */}
                    <div className="absolute left-1/2 top-0 h-full w-1 -translate-x-1/2 bg-gradient-to-b from-indigo-500 via-purple-500 to-pink-500"></div>

                    <div className="space-y-16">
                        {experiences.map((exp, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, x: i % 2 === 0 ? -50 : 50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.7, delay: i * 0.2 }}
                                className={`relative flex flex-col md:flex-row items-center md:items-start gap-6 ${i % 2 === 0
                                    ? "md:flex-row-reverse md:text-right"
                                    : "md:flex-row md:text-left"
                                    }`}
                            >
                                {/* Connector dot */}
                                <div className="absolute left-1/2 -translate-x-1/2 bg-indigo-500 w-6 h-6 rounded-full border-4 border-white dark:border-[#1f1f1f]"></div>

                                {/* Content Card */}
                                <div
                                    className={`relative z-10 max-w-md p-6 rounded-2xl shadow-lg backdrop-blur-md transition ${isDarkMode
                                        ? "bg-[#1f1f1f]/80 text-white"
                                        : "bg-white/80 text-gray-900"
                                        }`}
                                >
                                    <div className="flex items-center gap-3 mb-3">
                                        {exp.icon}
                                        <span className="font-semibold text-lg">{exp.year}</span>
                                    </div>
                                    <h3 className="text-xl font-bold mb-2">{exp.title}</h3>
                                    <p className="text-gray-600 dark:text-gray-400">
                                        {exp.description}
                                    </p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>
        </>

    );
}
