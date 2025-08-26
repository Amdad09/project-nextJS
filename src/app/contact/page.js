'use client';
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { toast } from 'react-hot-toast';

// Animation variants
const textVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.7, ease: 'easeOut' },
    },
};

const formVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
        opacity: 1,
        scale: 1,
        transition: { duration: 0.5, delay: 0.4 },
    },
};

const ContactPage = () => {
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        const form = e.target;
        const payload = {
            name: form.name.value,
            email: form.email.value,
            message: form.message.value,
        };

        try {
            // Simulate API call (replace with your actual endpoint)
            await new Promise((resolve) => setTimeout(resolve, 1000));
            toast.success('Message sent successfully!');
            form.reset();
        } catch (err) {
            console.error(err);
            toast.error('Failed to send message');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="min-h-screen bg-base-200">
            {/* Header Section */}
            <section className="relative flex items-center justify-center min-h-[50vh] w-full">
                {/* Background Image */}
                <div
                    className="absolute inset-0 bg-cover bg-center z-0"
                    style={{
                        backgroundImage: `url('https://res.cloudinary.com/dayymkvtl/image/upload/v1756231965/music-arrangement-with-black-headphones-with-copy-space_mtwvyv.jpg')`,
                    }}
                />

                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-b from-black/30 to-black/70 z-10"></div>

                {/* Content */}
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-20">
                    <motion.h1
                        className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4 text-white drop-shadow-2xl"
                        variants={textVariants}
                        initial="hidden"
                        animate="visible"
                    >
                        Contact Us
                    </motion.h1>
                    <motion.p
                        className="text-base sm:text-lg lg:text-xl text-white drop-shadow-xl max-w-2xl mx-auto"
                        variants={textVariants}
                        initial="hidden"
                        animate="visible"
                        transition={{ delay: 0.2 }}
                    >
                        Get in touch with the Tech Event 2025 team for
                        inquiries, sponsorships, or support.
                    </motion.p>
                </div>
            </section>

            {/* Contact Form & Info Section */}
            <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {/* Contact Form */}
                    <motion.div
                        className="card bg-base-100 shadow-xl p-6"
                        variants={formVariants}
                        initial="hidden"
                        animate="visible"
                    >
                        <h2 className="text-2xl font-bold mb-4 text-base-content">
                            Send Us a Message
                        </h2>
                        <form onSubmit={handleSubmit}>
                            <div className="form-control mb-4">
                                <label className="label">
                                    <span className="label-text text-base-content">
                                        Name
                                    </span>
                                </label>
                                <input
                                    type="text"
                                    name="name"
                                    className="input input-bordered w-full bg-base-100 text-base-content"
                                    required
                                />
                            </div>
                            <div className="form-control mb-4">
                                <label className="label">
                                    <span className="label-text text-base-content">
                                        Email
                                    </span>
                                </label>
                                <input
                                    type="email"
                                    name="email"
                                    className="input input-bordered w-full bg-base-100 text-base-content"
                                    required
                                />
                            </div>
                            <div className="form-control mb-4">
                                <label className="label">
                                    <span className="label-text text-base-content">
                                        Message
                                    </span>
                                </label>
                                <textarea
                                    name="message"
                                    className="textarea textarea-bordered w-full bg-base-100 text-base-content"
                                    rows={4}
                                    required
                                ></textarea>
                            </div>
                            <button
                                type="submit"
                                className={`btn btn-primary w-full ${
                                    loading ? 'loading' : ''
                                }`}
                                disabled={loading}
                            >
                                {loading ? 'Sending...' : 'Send Message'}
                            </button>
                        </form>
                    </motion.div>

                    {/* Contact Info */}
                    <motion.div
                        className="card bg-base-100 shadow-xl p-6"
                        variants={formVariants}
                        initial="hidden"
                        animate="visible"
                    >
                        <h2 className="text-2xl font-bold mb-4 text-base-content">
                            Contact Information
                        </h2>
                        <div className="space-y-4">
                            <p className="text-base-content">
                                <strong>Email:</strong>{' '}
                                <a
                                    href="mailto:amdadulhaque601671@gmail.com"
                                    className="link link-primary"
                                >
                                    amdadulhaque601671@gmail.com
                                </a>
                            </p>
                            <p className="text-base-content">
                                <strong>Phone:</strong>{' '}
                                <a
                                    href="tel:+8801321079431"
                                    className="link link-primary"
                                >
                                    +8801321079431
                                </a>
                            </p>
                            <p className="text-base-content">
                                <strong>
                                    Address: <em>Haque Tech</em>
                                </strong>{' '}
                                , Kushtia, Dhaka
                            </p>
                        </div>
                    </motion.div>
                </div>
            </section>
        </div>
    );
};

export default ContactPage;
