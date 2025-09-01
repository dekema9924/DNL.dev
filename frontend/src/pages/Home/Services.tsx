"use client";
import { motion } from "motion/react";
import { Code, Layers, PlugZap, Cpu } from "lucide-react";
import { useThemeContext } from "../../context/ThemeContext";

const services = [
    {
        title: "Web Development",
        description:
            "Building responsive, user-friendly websites with modern frameworks and best practices.",
        icon: <Code className="w-10 h-10 text-indigo-500" />,
    },
    {
        title: "Full-Stack Development",
        description:
            "Designing and implementing complete solutions — from intuitive frontends to robust backends.",
        icon: <Layers className="w-10 h-10 text-green-500" />,
    },
    {
        title: "API Integration",
        description:
            "Seamlessly connecting apps and services through RESTful APIs, GraphQL, and third-party integrations.",
        icon: <PlugZap className="w-10 h-10 text-orange-500" />,
    },
    {
        title: "IT Innovation",
        description:
            "Exploring creative technology solutions, automations, and system improvements to optimize workflows.",
        icon: <Cpu className="w-10 h-10 text-pink-500" />,
    },
];

export default function Services() {
    const { isDarkMode } = useThemeContext();

    return (
        <section id="services" className="max-w-7xl mx-auto px-6 py-20">
            {/* Heading */}
            <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}
                viewport={{ once: true }}
                className="text-center mb-16"
            >
                <h2 className="text-3xl md:text-4xl font-bold">
                    My IT<span className="text-gray-500"> <span className="text-indigo-500">Services</span></span>
                </h2>
                <p className="text-gray-500 mt-4 max-w-2xl mx-auto">
                    Combining technical expertise and creativity to deliver powerful IT
                    solutions. From coding to systems, here’s what I bring to the table.
                </p>
            </motion.div>

            {/* Focus Cards Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 group">
                {services.map((service, i) => (
                    <motion.div
                        key={i}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: i * 0.1 }}
                        viewport={{ once: true }}
                        className={`relative rounded-2xl p-8 backdrop-blur-lg transition-all duration-500
              ${isDarkMode ? "bg-[#1f1f1f] text-white" : "bg-white text-gray-900"}
              group-hover:blur-sm group-hover:scale-[0.97]
              hover:!blur-none hover:!scale-105 hover:z-10`}
                    >
                        <div className="mb-6">{service.icon}</div>
                        <h3 className="text-xl font-semibold mb-3 group-hover:text-gray-400 hover:text-indigo-500 transition">
                            {service.title}
                        </h3>
                        <p className="text-gray-600 dark:text-gray-400">
                            {service.description}
                        </p>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
