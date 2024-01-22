/** Vendor. */
import { NextResponse } from 'next/server';

/** Library. */
import Database from '../../../../lib/mongo';

/** Model. */
import Support from '../../../../mongoose/models/support-model';

/** Connect MongonDB. */
Database();

export async function GET(request, { params }) {
    /** Await the post data. */
    const { id } = await params;

    /** Fetch product details. */
    const message = await Support.findOne({ _id: id }).select('_id _order fullname email message').exec();

    /** Check if product found. */
    if (message) {
        /** Return success message. */
        return NextResponse.json(message);
    } else {
        /** Return error message. */
        return NextResponse.json({ message: 'No message found.' });
    }
}
