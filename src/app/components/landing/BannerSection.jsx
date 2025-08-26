import React from 'react';

// This is the main component for the Hero Section.
// It creates a full-screen, responsive hero banner with a background image,
// a dark overlay for text contrast, and centered content with buttons.
const HeroSection = () => {
    return (
        <section className="relative flex items-center justify-center h-screen w-full bg-cover bg-center bg-no-repeat rounded-lg overflow-hidden">
            {/* Background Image */}
            <div
                className="absolute inset-0 bg-cover bg-center"
                style={{
                    backgroundImage: `url('https://res.cloudinary.com/dayymkvtl/image/upload/v1756215642/pablo-heimplatz-ZODcBkEohk8-unsplash_dyeawg.jpg')`,
                }}
            />
            {/* Gradient Overlay with high opacity for text visibility */}
            {/* This is the key change: this div adds a dark layer on top of the image. */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/75 z-0"></div>

            {/* Content Container */}
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center z-10">
                {/* Main Heading */}
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 tracking-tight text-white drop-shadow-2xl">
                    Welcome to Tech Event 2025
                </h1>
                {/* Subtitle/Description */}
                <p className="text-base sm:text-lg lg:text-xl mb-6 sm:mb-8 max-w-2xl mx-auto text-white drop-shadow-xl">
                    Discover the ultimate tech experience in Bangladesh! Join us
                    for cutting-edge workshops, networking, and innovation.
                </p>
                {/* Buttons Container */}
                <div className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-6">
                    {/* Explore Events Button */}
                    <a
                        href="/allEvents"
                        className="btn button hover:bg-blue-700 text-white text-lg px-6 py-3 rounded-lg transition duration-300 ease-in-out transform hover:-translate-y-1"
                    >
                        Explore Events
                    </a>
                    {/* Add Your Event Button */}
                    <a
                        href="/event/add"
                        className="btn bg-teal-600 hover:bg-teal-700 text-white text-lg px-6 py-3 rounded-lg transition duration-300 ease-in-out transform hover:-translate-y-1"
                    >
                        Add Your Event
                    </a>
                </div>
            </div>
        </section>
    );
};

export default HeroSection;
