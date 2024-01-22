/** Vendor. */
import cookie from 'cookie';
import { NextResponse } from 'next/server';

/** Library. */
import Database from '../../../lib/mongo';
import { Sanitizer } from '../../../lib/sanitizer';

/** Model. */
import Support from '../../../mongoose/models/support-model';

/** Connect MongonDB. */
Database();

/** GET. */
export async function GET(request) {
    /** Fetch all messages record. */
    try {
        /** Check for existing record. */
        const messages = await Support.find({}).select('_id _order fullname email message').limit(25).sort({ createdAt: -1 }).exec();

        /** Prevent user from sending multiple message. */
        if (messages) {
            /** Return message list. */
            return NextResponse.json(messages);
        } else {
            /** Return warning message. */
            return NextResponse.json({ message: 'No messages so far.', status: 200 });
        }
    } catch (error) {
        /** Return error message. */
        return NextResponse.json({ message: 'Unable to fetched messages!', status: 500 });
    }
}

/** POST. */
export async function POST(request) {
    /** Await the post data. */
    const data = await request.json();

    /** Sanitize post data. */
    const filtered = await Sanitizer(data);

    /** If sanitization has error. */
    if (filtered.error) {
        return NextResponse.json({ message: filtered.message });
    } else {
        /** Find user in database. */
        const inquiry = await Support.findOne({ _order: filtered.order });

        /** Check if not found. */
        if (inquiry) {
            /** Return user found message. */
            return NextResponse.json({
                message: 'You already sent a request for this order ID; please wait for our representative response regarding the matter.',
                status: 302,
            });
        } else {
            /** Add to database record. */
            try {
                /** Prepare data. */
                const result = new Support({ ...filtered, _order: filtered.order });

                /** Save user. */
                await result.save();

                /** Return user related data and set cookie in the jar. */
                return NextResponse.json({
                    ...filtered,
                    message: filtered.fullname + ', thank you for contacting support. Please wait a few hours while we handle your request.',
                    status: 200,
                });
            } catch (error) {
                /** Return error message. */
                return NextResponse.json({ message: 'You are unable to send a support message because the server is presently busy.', status: 500 });
            }
        }
    }
}
