'use client';

import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';

// Animation variants for the main spinner
const spinnerVariants = {
    animate: {
        rotate: 360,
        transition: {
            repeat: Infinity,
            duration: 1.5,
            ease: 'linear',
        },
    },
};

// Animation variants for orbiting particles
const particleVariants = {
    animate: (i) => ({
        rotate: 360,
        transition: {
            repeat: Infinity,
            duration: 2 + i * 0.5,
            ease: 'linear',
        },
    }),
};

// Animation for pulse effect
const pulseVariants = {
    animate: {
        scale: [1, 1.2, 1],
        opacity: [0.3, 0.7, 0.3],
        transition: {
            repeat: Infinity,
            duration: 2,
            ease: 'easeInOut',
        },
    },
};

// Animation for text
const textVariants = {
    initial: { opacity: 0, y: 10 },
    animate: { opacity: 1, y: 0, transition: { duration: 0.5, delay: 0.3 } },
};

const Loading = () => {
    const controls = useAnimation();

    // Start animations immediately on mount
    useEffect(() => {
        controls.start('animate');
    }, [controls]);

    return (
        <div className="flex items-center justify-center min-h-screen w-full bg-base-100">
            <div className="relative flex items-center justify-center">
                {/* Pulse background */}
                <motion.div
                    className="absolute w-20 h-20 bg-primary/20 rounded-full"
                    variants={pulseVariants}
                    animate={controls}
                />

                {/* Main spinner */}
                <motion.div
                    className="relative w-14 h-14 border-4 border-primary border-t-transparent rounded-full"
                    variants={spinnerVariants}
                    animate={controls}
                    role="status"
                    aria-label="Loading tech event content"
                >
                    {/* Orbiting particles */}
                    {[0, 1, 2].map((i) => (
                        <motion.div
                            key={i}
                            className="absolute w-2 h-2 bg-accent rounded-full"
                            style={{
                                top: i % 2 === 0 ? '10%' : '80%',
                                left: i === 1 ? '10%' : i === 2 ? '80%' : '50%',
                            }}
                            variants={particleVariants}
                            animate={controls}
                            custom={i}
                        />
                    ))}
                </motion.div>

                {/* Loading text */}
                <motion.span
                    className="absolute mt-20 text-sm font-medium text-base-content/70"
                    variants={textVariants}
                    initial="initial"
                    animate="animate"
                >
                    Preparing Event...
                </motion.span>
            </div>
        </div>
    );
};

export default Loading;
