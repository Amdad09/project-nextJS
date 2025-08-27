'use client';

import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { AlertTriangle, Home } from 'lucide-react';
import Link from 'next/link';

// Animation variants for the content
const containerVariants = {
    initial: { opacity: 0, y: 50 },
    animate: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.6,
            ease: 'easeOut',
            staggerChildren: 0.2,
        },
    },
};

// Variants for child elements
const childVariants = {
    initial: { opacity: 0, y: 20 },
    animate: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.4, ease: 'easeOut' },
    },
};

// Variants for pulse effect
const pulseVariants = {
    animate: {
        scale: [1, 1.1, 1],
        opacity: [0.2, 0.4, 0.2],
        transition: {
            repeat: Infinity,
            duration: 2,
            ease: 'easeInOut',
        },
    },
};

const NotFound = () => {
    const controls = useAnimation();

    // Start animations on mount
    useEffect(() => {
        controls.start('animate');
        return () => controls.stop(); // Cleanup to prevent memory leaks
    }, [controls]);

    return (
        <div className="flex items-center justify-center min-h-screen w-full bg-base-100">
            <motion.div
                className="relative text-center p-6 max-w-lg mx-auto"
                variants={containerVariants}
                initial="initial"
                animate={controls}
            >
                {/* Pulse background effect */}
                <motion.div
                    className="absolute -top-10 left-1/2 -translate-x-1/2 w-32 h-32 bg-error/60 rounded-full"
                    variants={pulseVariants}
                    animate={controls}
                />

                {/* Error icon */}
                <motion.div variants={childVariants}>
                    <AlertTriangle className="mx-auto h-16 w-16 text-error" />
                </motion.div>

                {/* 404 header */}
                <motion.h1
                    className="text-5xl font-bold text-error mt-4"
                    variants={childVariants}
                >
                    404
                </motion.h1>

                {/* Error message */}
                <motion.p
                    className="text-lg text-base-content/70 mt-4"
                    variants={childVariants}
                >
                    Oops! The page you are looking for can not be found.
                </motion.p>

                {/* Back to home button */}
                <motion.div className="mt-6" variants={childVariants}>
                    <Link href="/">
                        <motion.button
                            className="btn button flex items-center gap-2 mx-auto"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            transition={{ duration: 0.2 }}
                        >
                            <Home size={20} />
                            Back to Home
                        </motion.button>
                    </Link>
                </motion.div>
            </motion.div>
        </div>
    );
};

export default NotFound;
