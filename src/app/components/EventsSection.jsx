import React from 'react';
import EventCard from './EventCard';
import dbConnect, { collectionName } from '@/lib/dbConnect';

const EventsSection = async () => {
    // const res = await fetch('/events.json');
    const data = await dbConnect(collectionName.eventsCollection).find().limit(6).toArray();

    return (
        <div>
            <div className="text-center my-12">
                <h2 className="text-3xl md:text-4xl font-bold">
                    🎉 Upcoming Tech Events
                </h2>
                <p className="text-gray-400 max-w-2xl mx-auto mt-2">
                    Explore the latest workshops, conferences, and meetups
                    happening around you. Join tech enthusiasts, innovators, and
                    developers for an exciting experience.
                </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {data.map((event) => {
                    return (
                        <EventCard key={event.name} event={event}></EventCard>
                    );
                })}
            </div>
        </div>
    );
};

export default EventsSection;