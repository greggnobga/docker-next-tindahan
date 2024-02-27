/** Vendor. */
import { NextResponse } from 'next/server';

/** Library. */
import Database from '../../../lib/mongo';
import Watcher from '../../../lib/watcher';

/** Model. */
import User from '../../../mongoose/models/user-model';

/** Connect MongonDB. */
Database();

/** GET. */
export async function GET(request) {
    /** Call the watcher to verify the cookie integrity. */
    const { verified } = await Watcher(request);

    if (!verified) {
        /** Return error message. */
        return NextResponse.json({ message: 'Before the request stands a watcher on guard.', status: 403 });
    }

    /** Watcher verdict. */
    if (verified) {
        /** Check if user is an admin. */
        if (verified.admin) {
            /** Fetch all messages record. */
            try {
                /** Check for existing record. */
                const users = await User.find({}).select('_id firstname lastname image slug email mobile gender admin').limit(25).sort({ createdAt: -1 }).exec();

                /** Check if user is not empty and return appropriate data. */
                if (users) {
                    /** Return user list. */
                    return NextResponse.json(users);
                } else {
                    /** Return warning message. */
                    return NextResponse.json({ message: 'No users so far.', status: 200 });
                }
            } catch (error) {
                /** Return error message. */
                return NextResponse.json({ message: 'Unable to fetched users.', status: 500 });
            }
        } else {
            /** Return error message. */
            return NextResponse.json({ message: 'Not authorized as an admin.', status: 401 });
        }
    }
}
