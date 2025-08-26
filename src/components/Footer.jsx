import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-gray-900 text-white mt-8">
            <div className="container mx-auto px-6 py-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* About Section */}
                    <div>
                        <h3 className="text-xl font-bold mb-4">
                            Tech Event 2025
                        </h3>
                        <p className="text-gray-300">
                            Join us for the most exciting tech events and
                            workshops in Bangladesh! Explore innovation, connect
                            with experts, and shape the future.
                        </p>
                    </div>

                    {/* Navigation Links */}
                    <div>
                        <h3 className="text-xl font-bold mb-4">Quick Links</h3>
                        <ul className="space-y-2">
                            <li>
                                <a
                                    href="#events"
                                    className="text-gray-300 hover:text-blue-500 transition"
                                >
                                    Events
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#register"
                                    className="text-gray-300 hover:text-blue-500 transition"
                                >
                                    Register
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#about"
                                    className="text-gray-300 hover:text-blue-500 transition"
                                >
                                    About Us
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#contact"
                                    className="text-gray-300 hover:text-blue-500 transition"
                                >
                                    Contact
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Social Media & Contact */}
                    <div>
                        <h3 className="text-xl font-bold mb-4">
                            Connect With Us
                        </h3>
                        <div className="flex space-x-4 mb-4">
                            <a
                                href="https://facebook.com"
                                className="text-gray-300 hover:text-blue-500 transition"
                            >
                                <svg
                                    className="w-6 h-6"
                                    fill="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
                                </svg>
                            </a>
                            <a
                                href="https://twitter.com"
                                className="text-gray-300 hover:text-blue-500 transition"
                            >
                                <svg
                                    className="w-6 h-6"
                                    fill="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                                </svg>
                            </a>
                            <a
                                href="https://linkedin.com"
                                className="text-gray-300 hover:text-blue-500 transition"
                            >
                                <svg
                                    className="w-6 h-6"
                                    fill="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-3.955z" />
                                </svg>
                            </a>
                        </div>
                        <p className="text-gray-300">
                            Email: amdadulhaque601671@gmail.com
                        </p>
                        <p className="text-gray-300">
                            Phone: +880 132 107 9431
                        </p>
                    </div>
                </div>

                {/* Copyright */}
                <div className="mt-8 border-t border-gray-700 pt-4 text-center">
                    <p className="text-gray-300">
                        &copy; {new Date().getFullYear()} Tech Event 2025. All
                        rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
