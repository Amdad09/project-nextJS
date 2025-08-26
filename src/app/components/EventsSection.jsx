import React from 'react';
import EventCard from './EventCard';
import dbConnect, { collectionName } from '@/lib/dbConnect';

const EventsSection = async () => {
    // const res = await fetch('/events.json');
    const data = await dbConnect(collectionName.eventsCollection).find().toArray();

    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
            {data.map(event => {
                return (
                    <EventCard key={event.name} event={event}></EventCard>
                )
            })}
        </div>
    );
};

export default EventsSection;