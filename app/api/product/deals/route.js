/** Vendor. */
import { NextResponse } from 'next/server';

/** Library. */
import Database from '../../../../lib/mongo';
import { Sanitizer } from '../../../../lib/sanitizer';

/** Model. */
import Product from '../../../../mongoose/models/product-model';

/** Connect MongonDB. */
Database();

/** GET. */
export async function POST(request) {
    /** Fetch all messages record. */
    try {
        /** Await the post data. */
        const data = await request.json();

        /** Sanitize post data. */
        const filtered = await Sanitizer(data);

        /** Fetch existing record. */
        const products = await Product.find({ section: { $all: filtered.deals } })
            .select('_id name slug image price discount rating reviewcount stockcount')
            .limit(5)
            .sort({ createdAt: -1 })
            .exec();

        /** Check if products successfully fetched and return appropriate response. */
        if (products) {
            /** Return message list. */
            return NextResponse.json({ products });
        } else {
            /** Return warning message. */
            return NextResponse.json({ message: 'No products so far.', status: 200 });
        }
    } catch (error) {
        /** Return error message. */
        return NextResponse.json({ message: 'Unable to fetched products!', status: 500 });
    }
}
