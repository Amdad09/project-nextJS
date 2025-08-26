import { MongoClient, ServerApiVersion } from 'mongodb';

const uri = process.env.NEXT_PUBLIC_MONGODB_URI;
const dbName = process.env.DB_NAME;

export const collectionName = {
    eventsCollection: 'events',
    usersCollection: 'users'
}

export default function dbConnect(collectionName) {
    const client = new MongoClient(uri, {
        serverApi: {
            version: ServerApiVersion.v1,
            strict: true,
            deprecationErrors: true,
        },
    });
    return client.db(dbName).collection(collectionName);
}
