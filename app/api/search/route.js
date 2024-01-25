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
    /** Search products with provide keyword. */
    try {
        /** Get search query. */
        const term = request.nextUrl.searchParams.get(['term']) || '';

        /** Prepare keyword. */
        const keyword = term
            ? {
                  name: {
                      $regex: term,
                      $options: 'i',
                  },
              }
            : {};

        /** Pagination. */
        const pageSize = 1;
        const pageNumber = Number(request.nextUrl.searchParams.get(['page']) || 1);

        /** Count existing products. */
        const count = await Product.countDocuments({ ...keyword });

        /** Do the search. */
        const products = await Product.find({ ...keyword })
            .select('_id name slug image price discount')
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
            return NextResponse.json({ message: 'No result found.', status: 200 });
        }
    } catch (error) {
        /** Return error message. */
        return NextResponse.json({ message: 'Unable to searched product!', status: 500 });
    }
}
