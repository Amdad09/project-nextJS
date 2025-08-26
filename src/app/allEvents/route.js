import dbConnect, { collectionName } from '@/lib/dbConnect';
import { NextResponse } from 'next/server';

export const GET = async () => {
    const eventsCollection = dbConnect(collectionName.eventsCollection);
    const data = await eventsCollection.find().toArray();
    return NextResponse.json(data);
};
