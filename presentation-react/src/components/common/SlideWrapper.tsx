import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

/**
 * Props for the SlideWrapper component.
 */
interface SlideWrapperProps {
    /** Whether the slide is currently active/visible. */
    isActive: boolean;
    /** The content of the slide. */
    children: React.ReactNode;
}

/**
 * A wrapper component for slides that applies enter and exit animations.
 * Uses Framer Motion's AnimatePresence to handle mounting/unmounting transitions.
 */
const SlideWrapper: React.FC<SlideWrapperProps> = ({ isActive, children }) => {
    return (
        <AnimatePresence mode="wait">
            {isActive && (
                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -50 }}
                    transition={{ duration: 0.5, ease: 'easeInOut' }}
                    className="w-full h-full overflow-y-auto overflow-x-hidden scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-transparent"
                >
                    {children}
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default SlideWrapper;
