'use client';
import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import Image from 'next/image';

// Animation variants
const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, ease: 'easeOut' },
    },
};

const cardVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
        opacity: 1,
        scale: 1,
        transition: { duration: 0.5, delay: 0.3 },
    },
};

const sectionVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, delay: 0.2 } },
};

const AboutUsPage = () => {
    return (
        <div className="min-h-screen bg-gray-900 text-white">
            {/* Hero Section */}
            <section className="relative flex items-center justify-center py-24 w-full bg-gray-900">
                {/* Background Image */}
                <div
                    className="absolute inset-0 bg-cover bg-center z-0 opacity-40"
                    style={{
                        backgroundImage: `url('https://res.cloudinary.com/dayymkvtl/image/upload/v1756230307/tech_va8ezw.jpg')`,
                    }}
                />
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-black/30 z-10"></div>

                {/* Content */}
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-20">
                    <motion.h1
                        className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4 text-white drop-shadow-2xl"
                        variants={textVariants}
                        initial="hidden"
                        animate="visible"
                    >
                        About Tech Event 2025
                    </motion.h1>
                    <motion.p
                        className="text-base sm:text-lg lg:text-xl text-gray-300 drop-shadow-xl max-w-2xl mx-auto"
                        variants={textVariants}
                        initial="hidden"
                        animate="visible"
                        transition={{ delay: 0.2 }}
                    >
                        Empowering the future of technology in Bangladesh
                        through innovation, collaboration, and inspiration.
                    </motion.p>
                    <motion.div
                        className="mt-6"
                        variants={textVariants}
                        initial="hidden"
                        animate="visible"
                        transition={{ delay: 0.4 }}
                    >
                        <Link
                            href="/contact"
                            className="btn bg-blue-600 hover:bg-blue-700 text-white text-lg px-6 py-3 rounded-lg"
                        >
                            Get in Touch
                        </Link>
                    </motion.div>
                </div>
            </section>

            {/* Our Story Section */}
            <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <motion.div
                    className="text-center mb-12"
                    variants={sectionVariants}
                    initial="hidden"
                    animate="visible"
                >
                    <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-white">
                        Our Story
                    </h2>
                    <p className="text-lg text-gray-300 max-w-3xl mx-auto">
                        Founded in 2020, Tech Event began as a small gathering
                        of tech enthusiasts in Dhaka. Over the years, it has
                        grown into Bangladesh’s premier platform for showcasing
                        innovation, hosting workshops, and connecting
                        professionals, students, and startups. Our journey is
                        driven by a passion to make technology accessible and
                        impactful for all.
                    </p>
                </motion.div>
            </section>

            {/* Mission and Vision Section */}
            <section className="bg-gray-800 py-16">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                        <motion.div
                            className="text-center"
                            variants={sectionVariants}
                            initial="hidden"
                            animate="visible"
                        >
                            <h2 className="text-3xl font-bold mb-4 text-white">
                                Our Mission
                            </h2>
                            <p className="text-gray-300 max-w-xl mx-auto">
                                To inspire and empower the next generation of
                                tech innovators by providing a platform for
                                learning, collaboration, and showcasing
                                groundbreaking ideas.
                            </p>
                        </motion.div>
                        <motion.div
                            className="text-center"
                            variants={sectionVariants}
                            initial="hidden"
                            animate="visible"
                            transition={{ delay: 0.2 }}
                        >
                            <h2 className="text-3xl font-bold mb-4 text-white">
                                Our Vision
                            </h2>
                            <p className="text-gray-300 max-w-xl mx-auto">
                                To create a vibrant tech community in Bangladesh
                                that drives global innovation and fosters
                                meaningful connections.
                            </p>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Team Section */}
            <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <motion.h2
                    className="text-3xl sm:text-4xl font-bold text-center mb-12 text-white"
                    variants={textVariants}
                    initial="hidden"
                    animate="visible"
                >
                    Meet Our Team
                </motion.h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {[
                        {
                            name: 'Anika Lahre',
                            role: 'Event Director',
                            img: 'https://res.cloudinary.com/dayymkvtl/image/upload/v1756231005/pexels-olly-774909_valne2.jpg',
                            bio: 'With over 10 years of experience in event management, John leads our team to deliver world-class tech events.',
                        },
                        {
                            name: 'Jane Smith',
                            role: 'Tech Lead',
                            img: 'https://res.cloudinary.com/dayymkvtl/image/upload/v1756230761/1662575763646_1_xhzu0x.jpg',
                            bio: 'Jane is a software engineer passionate about fostering innovation through hands-on workshops.',
                        },
                        {
                            name: 'Alex Rahman',
                            role: 'Community Manager',
                            img: 'https://res.cloudinary.com/dayymkvtl/image/upload/v1756231228/pexels-stefanstefancik-91227_jqffeu.jpg',
                            bio: 'Alex connects tech enthusiasts and builds a strong community through engagement and outreach.',
                        },
                        {
                            name: 'Sarah Khan',
                            role: 'Marketing Lead',
                            img: 'https://res.cloudinary.com/dayymkvtl/image/upload/v1756231226/pexels-olly-712513_jubdn8.jpg',
                            bio: 'Sarah drives our marketing efforts, ensuring Tech Event reaches a global audience.',
                        },
                    ].map((member, index) => (
                        <motion.div
                            key={index}
                            className="bg-gray-700 shadow-xl rounded-lg overflow-hidden"
                            variants={cardVariants}
                            initial="hidden"
                            animate="visible"
                            transition={{ delay: 0.2 * (index + 1) }}
                        >
                            <Image
                                src={member.img}
                                alt={member.name}
                                width={400}
                                height={224}
                                className="w-full h-56 object-cover"
                            />
                            <div className="p-6">
                                <h3 className="text-xl font-bold text-white">
                                    {member.name}
                                </h3>
                                <p className="text-gray-300">{member.role}</p>
                                <p className="text-gray-400 mt-2">
                                    {member.bio}
                                </p>
                                <div className="mt-4">
                                    <a
                                        href=" https://www.facebook.com/Amdad09"
                                        target="_blank"
                                        className="text-teal-500 hover:underline"
                                    >
                                        Connect
                                    </a>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* Achievements Section */}
            <section className="bg-gray-900 py-16">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.h2
                        className="text-3xl sm:text-4xl font-bold text-center mb-12 text-white"
                        variants={textVariants}
                        initial="hidden"
                        animate="visible"
                    >
                        Our Achievements
                    </motion.h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {[
                            {
                                title: '5,000+ Attendees',
                                desc: 'Hosted thousands of tech enthusiasts across our events.',
                            },
                            {
                                title: '50+ Workshops',
                                desc: 'Delivered hands-on learning experiences to empower innovators.',
                            },
                            {
                                title: '10+ Sponsors',
                                desc: 'Partnered with leading tech companies to drive innovation.',
                            },
                        ].map((achievement, index) => (
                            <motion.div
                                key={index}
                                className="bg-gray-800 p-6 rounded-lg text-center"
                                variants={cardVariants}
                                initial="hidden"
                                animate="visible"
                                transition={{ delay: 0.2 * (index + 1) }}
                            >
                                <h3 className="text-xl font-bold mb-2 text-white">
                                    {achievement.title}
                                </h3>
                                <p className="text-gray-300">
                                    {achievement.desc}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Call to Action Section */}
            <section className="bg-gray-800 py-16 text-center">
                <motion.h2
                    className="text-3xl sm:text-4xl font-bold mb-4 text-white"
                    variants={textVariants}
                    initial="hidden"
                    animate="visible"
                >
                    Join the Tech Revolution
                </motion.h2>
                <motion.p
                    className="text-lg text-gray-300 max-w-2xl mx-auto mb-6"
                    variants={textVariants}
                    initial="hidden"
                    animate="visible"
                    transition={{ delay: 0.2 }}
                >
                    Be a part of Tech Event 2025 and help shape the future of
                    technology in Bangladesh.
                </motion.p>
                <motion.div
                    variants={textVariants}
                    initial="hidden"
                    animate="visible"
                    transition={{ delay: 0.4 }}
                >
                    <Link
                        href="/allEvents"
                        className="btn bg-blue-600 hover:bg-blue-700 text-white text-lg px-6 py-3 rounded-lg"
                    >
                        Explore Events
                    </Link>
                </motion.div>
            </section>
        </div>
    );
};

export default AboutUsPage;
