/** Vendor. */
import { NextResponse } from 'next/server';

/** Library. */
import Watcher from '../../lib/watcher';

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
        /** Return error message. */
        return NextResponse.json({ message: 'Curiosity killed the cat!', status: 200 });
    }
}

/** GET. */
export async function POST(request) {
    /** Call the watcher to verify the cookie integrity. */
    const { verified } = await Watcher(request);

    if (!verified) {
        /** Return error message. */
        return NextResponse.json({ message: 'Before the request stands a watcher on guard.', status: 403 });
    }

    /** Watcher verdict. */
    if (verified) {
        /** Return error message. */
        return NextResponse.json({ message: 'Curiosity killed the cat!', status: 200 });
    }
}
