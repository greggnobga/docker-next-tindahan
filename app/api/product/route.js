/** Vendor. */
import { NextResponse } from 'next/server';

/** Library. */
import Database from '../../../lib/mongo';

/** Model. */
import Product from '../../../mongoose/models/product-model';

/** Connect MongonDB. */
Database();

/** GET. */
export async function GET(request) {
    /** Fetch all messages record. */
    try {
        /** Pagination. */
        const pageSize = 5;
        const pageNumber = Number(request.nextUrl.searchParams.get(['page']) || 1);

        /** Count existing products. */
        const count = await Product.countDocuments({});

        /** Fetch existing record. */
        const products = await Product.find({})
            .select('_id name slug image price discount rating reviewcount stockcount')
            .limit(pageSize)
            .sort({ createdAt: -1 })
            .skip(pageSize * (pageNumber - 1))
            .exec();

        /** Check if products successfully fetched and return appropriate response. */
        if (products) {
            /** Return message list. */
            return NextResponse.json({ products, page: pageNumber, pages: Math.ceil(count / pageSize) });
        } else {
            /** Return warning message. */
            return NextResponse.json({ message: 'No products so far.', status: 200 });
        }
    } catch (error) {
        /** Return error message. */
        return NextResponse.json({ message: 'Unable to fetched products!', status: 500 });
    }
}
