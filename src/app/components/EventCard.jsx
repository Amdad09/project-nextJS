
import Image from 'next/image';
import Link from 'next/link';
// import ActionButtons from '../ActionButtons';

const EventCard = ({ event }) => {
    return (
        <div className="overflow-hidden rounded-md bg-[#242526] pb-4">
            <Image
                src={event?.imageUrl}
                alt={event?.name}
                className="w-full h-[300px]"
                width={500}
                height={500}
            />

            <div className="p-3">
                <Link
                    href={`/events/${event._id}`}
                    className="font-bold text-lg"
                >
                    {event?.name}
                </Link>
                <p className="text-[#9C9C9C] text-sm mt-1">{event?.location}</p>

                <div className="text-[#737373] text-sm mt-1">
                    <span>{event?.interested_ids?.length} Interested</span>
                    <span className="mx-1">|</span>
                    <span>{event?.going_ids?.length} Going</span>
                </div>

                <div className="mt-4 text-center">
                    <Link
                        href={`/events/${event._id}`}
                        className="mt-2 text-center w-full bg-indigo-600 py-2 px-2 rounded-md border border-indigo-600/50 shadow-sm cursor-pointer hover:bg-indigo-800 transition-colors active:translate-y-1"
                    >
                        Event Details
                    </Link>
                </div>
               
            </div>
        </div>
    );
};

export default EventCard;
