import { InfiniteMovingCards } from "../../components/UI/infinite-moving-cards"
import meta from '../../assets/company/meta.png';
import fiserv from '../../assets/company/Fiserv_logo.png'
import fedex from '../../assets/company/fedex.png'
import shopify from '../../assets/company/shopify.png';
import nodejs from '../../assets/tech/nodejs.png';
import javascript from '../../assets/tech/javascript.png';
import mongodb from '../../assets/tech/mongodb.png';
import reactjs from '../../assets/tech/reactjs.png';
import redux from '../../assets/tech/redux.png';
import typescript from '../../assets/tech/typescript.png';
import tailwind from '../../assets/tech/tailwind.png';
import Services from "./Services";
import EaseIn from "../../components/comp/Ease-In";
import Projects from "./Projects";
import AnimatedLine from "../../components/UI/AnimatedLine";
import { motion } from "motion/react";
import ExperienceTimeline from "./ExperienceTimeline";
import Button from "../../components/UI/Button";
import me from '../../assets/Images/me.png'
import nextJs from '../../assets/company/Next.js.png'

function Hero() {
    const companies = [
        {
            name: 'Meta',
            logo: meta,
        },
        {
            name: 'Shopify',
            logo: shopify,
        },
        {
            name: 'FedEx corp.',
            logo: fedex,
        },
        {
            name: 'fiserv',
            logo: fiserv,
        },
    ];

    const tech = [
        {
            name: 'Node.js',
            logo: nodejs,
        },
        {
            name: 'JavaScript',
            logo: javascript,
        },
        {
            name: 'MongoDB',
            logo: mongodb,
        },
        {
            name: 'React.js',
            logo: reactjs,
        },
        {
            name: 'Redux',
            logo: redux,
        },
        {
            name: 'TypeScript',
            logo: typescript,
        },
        {
            name: 'Tailwind CSS',
            logo: tailwind,
        },
        {
            name: 'Nextjs',
            logo: nextJs,
        },
    ];



    return (
        <main>
            <EaseIn>
                <div className="flex">
                    <div>
                        <h1 className="text-[2.7em]  font-semibold w-11/12 md:w-[400px] leading-10">A Visual Journey Through Time</h1>
                        <p className=" text-gray-600 md:w-96 my-6">Explore a curated collection of moments, emotions, and stories i've had the honor to capture. </p>
                    </div>
                </div>
                <div className="h-96 overflow-hidden rounded-2xl">
                    <img
                        className="w-full h-full object-cover object-[50%_20%] lg:object-[50%_25%]"
                        src={me}
                        alt="me"
                    />
                </div>




            </EaseIn>

            <section>
                {/* //about */}
                <AnimatedLine />
                <div className="flex flex-col md:flex-row justify-between">
                    {/* //left-side about */}
                    <div className="mt-5 flex flex-col  gap-7 lg:w-full  ">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, ease: "easeOut" }}
                            viewport={{ amount: 0.6 }}
                            className="space-y-3"
                        >
                            <p className="underline text-gray-500">INTRODUCTION</p>
                            <h1 className="font-semibold text-[2em] w-80 lg:w-7/12 text-start ">
                                Bridging Infrastructure and Innovation Through Code.
                            </h1>
                        </motion.div>

                        <Button text="About Me" link="/about" />


                    </div>
                    {/* //right side about */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, ease: "easeOut" }}
                        viewport={{ amount: 0.6 }}
                        className="mt-10">
                        <span className="text-sm text-gray-600">ABOUT</span>
                        <p className="text-gray-600 md:w-96 my-6">
                            This portfolio is a curated reflection of digital craftsmanship—crafted through late nights, quiet problem-solving, and a passion for building experiences that feel as seamless as they are functional. Each line of code tells a story: of challenges met, concepts refined, and systems brought to life with intention.
                            <br /><br />
                            From dynamic web interfaces to backend logic and infrastructure, my work blends technical precision with thoughtful design. Clean architecture, responsive layouts, and user-centered thinking guide every decision. What you’ll find here is more than a collection of projects—it’s a glimpse into a process grounded in curiosity, care, and a constant pursuit of better.
                        </p>

                    </motion.div>

                </div>


                {/* //infinite scrolling cards */}
                <div className="mt-13">
                    <InfiniteMovingCards
                        items={companies}
                        direction="right"
                        speed="slow" />

                    <InfiniteMovingCards
                        items={tech}
                        direction="left"
                        speed="slow" />
                </div>

            </section>

            {/* //projects */}
            <Services />
            <AnimatedLine />
            <Projects />
            <ExperienceTimeline />
        </main>


    )
}

export default Hero
