import dbConnect, { collectionName } from "@/lib/dbConnect";
import { ObjectId } from "mongodb";
import { NextResponse } from "next/server";

export const GET = async (req, { params }) => {
    const event = await params;
    const eventsCollection = dbConnect(collectionName.eventsCollection);
    const data = await eventsCollection.findOne({
        _id: new ObjectId(event.id),
    });

    return NextResponse.json(data);
}