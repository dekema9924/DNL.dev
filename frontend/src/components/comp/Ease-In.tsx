import { motion } from 'motion/react';
import { type ReactNode } from 'react';

interface EaseInProps {
    children: ReactNode;
}

function EaseIn({ children }: EaseInProps) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeIn' }}
        >
            {children}
        </motion.div>
    );
}

export default EaseIn;
