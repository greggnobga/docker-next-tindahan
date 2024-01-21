/** Vendor. */
import { NextResponse } from 'next/server';

/** Library. */
import Database from '../../../lib/mongo';

/** Model. */
import User from '../../../mongoose/models/user-model';

/** Connect MongonDB. */
Database();

/** GET. */
export async function GET(request) {
    /** Fetch all messages record. */
    try {
        /** Check for existing record. */
        const users = await User.find({}).select('_id firstname lastname slug email mobile gender admin').limit(25).sort({ createdAt: -1 }).exec();

        /** Prevent user from sending multiple message. */
        if (users) {
            /** Return message list. */
            return NextResponse.json(users);
        } else {
            /** Return warning message. */
            return NextResponse.json({ message: 'No users so far.', status: 200 });
        }
    } catch (error) {
        /** Return error message. */
        return NextResponse.json({ message: 'Unable to fetched users!', status: 500 });
    }
}
