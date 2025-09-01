import { motion } from 'motion/react'

function AnimatedLine() {
    return (
        <motion.hr
            className="my-20 border-gray-700 w-11/12 mx-auto"
            initial={{ width: 0 }}
            whileInView={{ width: "100%" }}
            transition={{ duration: 1, ease: "easeInOut" }}
        />
    )
}

export default AnimatedLine
