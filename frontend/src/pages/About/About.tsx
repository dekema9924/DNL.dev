import { motion, type Variants } from "motion/react";
import AnimatedLine from "../../components/UI/AnimatedLine";
import portrait from '../../assets/Images/portrait.jpg'

const textVariant: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: (i: number = 0) => ({
        opacity: 1,
        y: 0,
        transition: { delay: i * 0.3, duration: 0.6, ease: "easeOut" },
    }),
};

export default function AboutSection() {
    return (
        <section className="   overflow-hidden">
            {/* Hero Intro */}
            <motion.div
                className="flex flex-col md:flex-row justify-between items-center w-11/12 md:w-10/12 lg:w-9/12 mx-auto gap-10"
                initial="hidden"
                whileInView="visible"
            >
                <div className="text-center md:text-left">
                    <motion.h1
                        custom={0}
                        variants={textVariant}
                        className="text-4xl md:text-5xl font-bold leading-snug max-w-lg relative group"
                    >
                        Crafting Digital Stories That Inspire
                        <span className="absolute left-0 -bottom-2 w-0 h-1 bg-blue-500 transition-all group-hover:w-full"></span>
                    </motion.h1>

                    <motion.p
                        custom={1}
                        variants={textVariant}
                        className="text-gray-400 max-w-md mt-5 text-lg"
                    >
                        Pushing boundaries and turning ideas into opportunities—with code
                        that leaves an impact.
                    </motion.p>
                </div>

                <motion.div
                    className="relative group"
                    whileHover={{ scale: 1.05, rotate: 2 }}
                    transition={{ type: "spring", stiffness: 200 }}
                >
                    <motion.img
                        className="w-64 h-80 object-cover rounded-2xl shadow-[0_0_20px_rgba(59,130,246,0.4)]"
                        src={portrait}
                        alt="profile"
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.7, ease: "easeOut" }}
                    />
                    <div className="absolute inset-0 rounded-2xl border-2 border-blue-500 opacity-0 group-hover:opacity-100 transition"></div>
                </motion.div>
            </motion.div>

            {/* Divider */}
            <AnimatedLine />

            {/* About Section */}
            <motion.div
                className="flex flex-col md:flex-row justify-between w-11/12 md:w-10/12 lg:w-9/12 mx-auto gap-10"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
            >
                {/* Left Title */}
                <motion.div custom={0} variants={textVariant} className="max-w-md">
                    <span className="text-sm text-gray-400 tracking-wide">DNL.dev</span>
                    <h2 className="uppercase text-2xl md:text-3xl font-bold mt-2 leading-snug hover:text-blue-400 transition-colors">
                        Big Dreams, Sleepless Nights, Nonstop Debugging in Every Frame.
                    </h2>
                </motion.div>

                {/* Right Content */}
                <div className="max-w-lg space-y-16 text-gray-400 text-lg leading-relaxed">
                    {[
                        "My journey in tech started with curiosity and late-night experiments, evolving into a passion for creating digital experiences that blend functionality and design.",
                        "I focus on the story behind the code—crafting smooth user experiences, optimizing performance, and finding elegant solutions to leave a lasting impact.",
                    ].map((text, i) => (
                        <motion.p key={i} custom={i + 1} variants={textVariant}>
                            {text}
                        </motion.p>
                    ))}
                </div>
            </motion.div>

        </section>
    );
}
