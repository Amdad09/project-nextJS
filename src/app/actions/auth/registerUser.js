'use server';
import bcrypt from 'bcrypt';
import dbConnect, { collectionName } from '@/lib/dbConnect';

export const registerUser = async (payload) => {
    const usersCollection = dbConnect(collectionName.usersCollection);

    // Validation
    const { email, password } = payload;
    if (!email || !password) return null;

    const user = await usersCollection.findOne({ email });

    if (!user) {
        const hashedPassword = await bcrypt.hash(password, 10);
        payload.password = hashedPassword;
        const result = await usersCollection.insertOne(payload);
        return { success: true, insertedId: result.insertedId.toString() };
        
    }

    return null; 
};
