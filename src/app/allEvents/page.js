import dbConnect, { collectionName } from "@/lib/dbConnect";
import EventCard from "../components/EventCard";

const AllEvents = async () => {
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

export default AllEvents;