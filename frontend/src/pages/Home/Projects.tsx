
import { motion } from "motion/react"

function Projects() {
    return (
        <section className="max-w-7xl mx-auto px-4 my-10">
            <div className=" p-2">
                <span className=" border-gray-300 rounded-md">Portfolio</span>
                <div className="my-4 flex   ">
                    <h1 className="text-[2em]  w-[580px]  font-semibold leading-10 uppercase">your projects can look like this too</h1>
                    <span className="text-xs  flex items-end justify-end w-full font-bold ">Explore my portfolio full of creative solutions</span>
                </div>
            </div>

            <div>
                {/* Gallery Section */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {[1, 2, 3].map((item) => (
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: item * 0.3 }}
                            key={item} className="relative cursor-pointer group overflow-hidden rounded-lg shadow-lg">
                            <img
                                src={`https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y2FwdHVyZXxlbnwwfHwwfHx8MA%3D%3D`}
                                alt={`Gallery Image ${item}`}
                                className="w-full h-64 object-cover transform group-hover:scale-105 transition duration-300"
                            />
                            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition duration-300 flex flex-col justify-end p-4">
                                <h3 className="text-white text-lg font-semibold">Project Title {item}</h3>
                                <p className="text-white text-sm">A brief description of the project.</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Projects
