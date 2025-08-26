import React from 'react';

const BannerSection = () => {
    return (
        <section className="relative text-white flex items-center h-[400px] justify-center">
            {/* Background overlay with negative z-index */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/30 to-black/70 z-[-1]"></div>
            <div className="container mx-auto px-6 text-center relative z-10">
                <h1 className="text-5xl md:text-6xl font-bold mb-4">
                    Welcome to Tech Event 2025
                </h1>
                <p className="text-lg md:text-xl text-gray-300 mb-8">
                    Join the most exciting tech events and workshops in
                    Bangladesh!
                </p>
                <div className="flex justify-center gap-4">
                    <a
                        href="#events"
                        className="bg-blue-600 cursor-pointer hover:bg-blue-700 text-white px-6 py-3 rounded-md font-medium transition"
                    >
                        Explore Events
                    </a>
                    <a
                        href="#register"
                        className="bg-gray-700 hover:bg-gray-600 text-white px-6 py-3 rounded-md font-medium transition"
                    >
                        Register Now
                    </a>
                </div>
            </div>
        </section>
    );
};

export default BannerSection;
