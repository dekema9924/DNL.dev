import { motion } from "motion/react";
import { useThemeContext } from "../../context/ThemeContext";
import { useEffect, useState } from "react";

function Contact() {
    const text = "GET IN TOUCH".split("");
    const { isDarkMode } = useThemeContext();
    const [isCopied, setIsCopied] = useState(false);

    useEffect(() => {
        if (isCopied) {
            const timer = setTimeout(() => {
                setIsCopied(false);
            }, 2000);
            return () => clearTimeout(timer);
        }
    }, [isCopied]);

    return (
        <div
            className={`flex flex-col items-center justify-center ${isDarkMode
                    ? "text-white bg-[#1f1f1f]/80"
                    : "text-black shadow-2xl"
                } rounded-3xl mt-20 mb-10 p-6 max-w-3xl mx-auto`}
        >
            {/* Responsive Heading */}
            <h1 className="font-bold flex tracking-wider items-center gap-1 relative 
        text-4xl sm:text-5xl md:text-6xl lg:text-7xl">
                {text.map((char, i) => (
                    <motion.span
                        key={i}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.1, delay: i * 0.1 }}
                        className="mr-[2px] relative"
                    >
                        {/* Normal text */}
                        <span
                            className={`${isDarkMode ? "text-gray-200" : "text-indigo-400"}`}
                        >
                            {char}
                        </span>

                        {/* Highlight stripe */}
                        <span
                            className="absolute inset-0"
                            style={{
                                backgroundImage:
                                    "linear-gradient(to top, #a78bfa 20%, oklch(58.5% 0.233 277.117) 50%, transparent 50%)",
                                WebkitBackgroundClip: "text",
                                color: "transparent",
                            }}
                        >
                            {char}
                        </span>
                    </motion.span>
                ))}

                {/* Blinking cursor */}
                <span
                    className={`ml-1 h-[1em] w-[2px] bg-current inline-block ${isDarkMode ? "text-gray-200" : "text-gray-500"
                        }`}
                    style={{
                        animation: "blink 1s step-start infinite",
                    }}
                />
            </h1>

            {/* Email Section */}
            <div className="mt-6 flex flex-col items-center space-y-2">
                <span
                    onClick={() => {
                        navigator.clipboard.writeText("danekema9924@gmail.com"),
                            setIsCopied(true);
                    }}
                    className={`border border-indigo-500 ${isDarkMode
                            ? "!text-gray-200 hover:text-white"
                            : "text-gray-500 hover:text-black"
                        } transition-colors duration-500 cursor-pointer 
          px-4 sm:px-6 py-2 rounded-2xl text-sm sm:text-base`}
                >
                    danekema9924@gmail.com
                </span>
                <p className="text-xs sm:text-sm text-center underline">
                    {isCopied ? "copied to clipboard" : "click to copy!"}
                </p>
            </div>
        </div>
    );
}

export default Contact;
