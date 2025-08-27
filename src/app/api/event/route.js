// src/app/api/event/route.js
import dbConnect, { collectionName } from '@/lib/dbConnect';
import { NextResponse } from 'next/server';

export const POST = async (req) => {
    try {
        const eventsCollection = dbConnect(
            collectionName.eventsCollection,
        );

        // form data
        const payload = await req.json();

        // validation
        if (!payload.name || !payload.details || !payload.location) {
            return NextResponse.json(
                { success: false, message: 'Missing required fields' },
                { status: 400 },
            );
        }

        // insert into MongoDB
        const result = await eventsCollection.insertOne({
            ...payload,
            interested_ids: [],
            going_ids: [],
            swags: [],
            createdAt: new Date()
        });

        // always return valid JSON
        return NextResponse.json({
            success: true,
            insertedId: result.insertedId.toString(),
        });
    } catch (err) {
        console.error(err);
        return NextResponse.json(
            { success: false, message: err.message },
            { status: 500 },
        );
    }
};
