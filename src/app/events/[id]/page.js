import dbConnect, { collectionName } from '@/lib/dbConnect';
import {ObjectId} from 'mongodb'
import Image from 'next/image';

const EventDetailsPage = async ({ params }) => {
    const event = await params; 
    const eventsCollection = dbConnect(collectionName.eventsCollection); 
    const eventInfo = await eventsCollection.findOne({ _id: new ObjectId(event.id) });

    return (
        <div className="container">
            <div>
                <div className="bg-gradient-to-b from-slate-200/20 to-slate-800/30">
                    <Image
                        src={eventInfo?.imageUrl}
                        alt={eventInfo?.name}
                        className="h-[450px] mx-auto"
                        width={900}
                        height={900}
                    />
                </div>

                <div className="flex items-end">
                    <div className="flex-auto py-4">
                        <h1 className="font-bold text-2xl">{eventInfo.name}</h1>
                        <p className="text-[#9C9C9C] text-base mt-1">
                            {eventInfo.location}
                        </p>
                        <div className="text-[#737373] text-sm mt-1">
                            <span>
                                {eventInfo?.interested_ids?.length} Interested
                            </span>
                            <span className="mx-2">|</span>
                            <span>{eventInfo?.going_ids?.length} Going</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="grid grid-cols-5 gap-12 my-12">
                <div className="col-span-3">
                    <div className="w-full h-full bg-[#242526] p-6 rounded-lg">
                        <h2 className="font-bold text-2xl">Details</h2>
                        <div className="my-2 text-[#AEAEAE] space-y-4 prose lg:prose-lg max-w-none">
                            <p className="">{eventInfo?.details}</p>

                            <ul className="">
                                {eventInfo?.swags?.map((swag) => (
                                    <li key={swag}>{swag}</li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="overflow-hidden rounded-lg col-span-2 bg-[#242526]">
                    <div className="w-full">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d9563.048507081372!2d89.4311410274292!3d25.90038347256725!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sbd!4v1711180232846!5m2!1sen!2sbd"
                            width="600"
                            height="450"
                            style={{ border: 0 }}
                            allowFullScreen=""
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                        ></iframe>
                    </div>
                    <div className="p-4">
                        <p className="text-[#9C9C9C] text-base mt-1">
                            {eventInfo?.location}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EventDetailsPage;