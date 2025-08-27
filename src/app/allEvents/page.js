import dbConnect, { collectionName } from "@/lib/dbConnect";
import EventCard from "../components/EventCard";
export const dynamic = 'force-dynamic';

const AllEvents = async () => {
    const events = await dbConnect(collectionName.eventsCollection)
        .find()
        .sort({ createdAt: -1 })
        .toArray();
    const data = JSON.parse(JSON.stringify(events));

    // throw new Error('Test Error');

    return (
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6 mb-12">
            <div className="text-center mb-8">
                <h1 className="text-3xl md:text-4xl font-bold">
                    🎉 All Tech Events
                </h1>
                <p className="text-gray-300 mt-2 max-w-2xl mx-auto">
                    Discover and join exciting tech events happening around you.
                    Explore workshops, conferences, and meetups tailored for
                    developers, designers, and innovators.
                </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {data.map((event) => {
                    return (
                        <EventCard key={event._id} event={event}></EventCard>
                    );
                })}
            </div>
        </div>
    );
};

export default AllEvents;