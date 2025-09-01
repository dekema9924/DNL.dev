import React from "react";
import { motion } from "motion/react";

type PortfolioItem = {
    category: string;
    title: string;
    year: number;
    image: string;
};

const portfolioItems: PortfolioItem[] = [
    {
        category: "COMMERCIAL SHOOT",
        title: "THE MINIMAL BRAND SERIES",
        year: 2024,
        image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=800&auto=format&fit=crop&q=60",
    },
    {
        category: "FAMILY & KIDS",
        title: "MORNING WHISPERS",
        year: 2024,
        image: "https://images.unsplash.com/photo-1618641986557-1ecd230959aa?w=800&auto=format&fit=crop&q=60",
    },
    {
        category: "EVENT COVERAGE",
        title: "EVENING LIGHTS FESTIVAL",
        year: 2023,
        image: "https://images.unsplash.com/photo-1502823403499-6ccfcf4fb453?w=800&auto=format&fit=crop&q=60",
    },
    {
        category: "COMMERCIAL SHOOT",
        title: "STUDIO SHAPES",
        year: 2022,
        image: "https://images.unsplash.com/photo-1505033575518-a36ea2ef75ae?w=800&auto=format&fit=crop&q=60",
    },
    {
        category: "STREET & PORTRAIT",
        title: "URBAN SILHOUETTES",
        year: 2024,
        image: "https://plus.unsplash.com/premium_photo-1689606093808-3cb4393248d2?w=800&auto=format&fit=crop&q=60",
    },
    {
        category: "STREET & PORTRAIT",
        title: "MARKET DAYS",
        year: 2024,
        image: "https://images.unsplash.com/photo-1543610892-0b1f7e6d8ac1?w=800&auto=format&fit=crop&q=60",
    },
];

const PortfolioGrid: React.FC = () => {
    return (
        <>
            <div className="max-w-6xl mx-auto px-4 py-10 flex items-center gap-4">
                <p className="font-medium text-gray-700">/Gallery</p>
                <hr className="border w-full border-gray-300" />
            </div>

            <div className="max-w-6xl mx-auto px-4 py-10 grid grid-cols-1 md:grid-cols-2 gap-8">
                {portfolioItems.map((item, idx) => {
                    const fromLeft = idx % 2 === 0;

                    return (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, x: fromLeft ? -80 : 80 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8, delay: idx * 0.1 }}
                            viewport={{ amount: 0.2 }}
                            className="space-y-2"
                        >
                            <img
                                src={item.image}
                                alt={item.title}
                                className="w-full h-72 object-cover rounded"
                            />
                            <p className="text-sm text-gray-500 uppercase tracking-wide">
                                {item.category}
                            </p>
                            <h3 className="text-lg font-semibold">{item.title}</h3>
                            <p className="text-sm text-gray-400">{item.year}</p>
                        </motion.div>
                    );
                })}
            </div>
        </>
    );
};

export default PortfolioGrid;
