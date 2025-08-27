'use client'
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { MapPin, Users } from 'lucide-react';

// Animation variants for the card
const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.6,
            ease: 'easeOut',
        },
    },
    hover: {
        y: -10,
        boxShadow: '0 10px 20px rgba(0, 0, 0, 0.3)',
        transition: {
            duration: 0.3,
            ease: 'easeOut',
        },
    },
};

// Animation variants for child elements
const childVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i) => ({
        opacity: 1,
        y: 0,
        transition: {
            delay: i * 0.2,
            duration: 0.4,
            ease: 'easeOut',
        },
    }),
};

const EventCard = ({ event }) => {
    return (
        <motion.div
            className="card bg-base-200 shadow-xl overflow-hidden rounded-lg"
            variants={cardVariants}
            initial="hidden"
            animate="visible"
            whileHover="hover"
        >
            <div className="relative">
                <Image
                    src={event?.imageUrl || '/placeholder.jpg'}
                    alt={event?.name || 'Event'}
                    className="w-full h-[250px] object-cover"
                    width={500}
                    height={500}
                />
                <motion.div
                    className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                />
            </div>

            <div className="card-body p-4">
                <motion.h2
                    className="card-title text-xl font-bold text-white"
                    variants={childVariants}
                    custom={0}
                >
                    <Link href={`/events/${event._id}`}>
                        {event?.name || 'Untitled Event'}
                    </Link>
                </motion.h2>

                <motion.div
                    className="flex items-center gap-2 text-sm text-base-content/70"
                    variants={childVariants}
                    custom={1}
                >
                    <MapPin size={16} />
                    <span>{event?.location || 'Unknown Location'}</span>
                </motion.div>

                <motion.div
                    className="flex items-center gap-2 text-sm text-base-content/70"
                    variants={childVariants}
                    custom={2}
                >
                    <Users size={16} />
                    <span>
                        {event?.interested_ids?.length || 0} Interested |{' '}
                        {event?.going_ids?.length || 0} Going
                    </span>
                </motion.div>

                <motion.div
                    className="card-actions mt-4"
                    variants={childVariants}
                    custom={3}
                >
                    <Link href={`/events/${event._id}`} className="w-full">
                        <motion.button
                            className="btn button w-full"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            transition={{ duration: 0.2 }}
                        >
                            Event Details
                        </motion.button>
                    </Link>
                </motion.div>
            </div>
        </motion.div>
    );
};

export default EventCard;
