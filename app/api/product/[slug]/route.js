/** Vendor. */
import { NextResponse } from 'next/server';

/** Library. */
import Database from '../../../../lib/mongo';

/** Model. */
import Product from '../../../../mongoose/models/product-model';

/** Connect MongonDB. */
Database();

export async function GET(request, { params }) {
    /** Await the post data. */
    const { slug } = await params;

    /** Fetch product details. */
    const product = await Product.findOne({ slug: slug })
        .select('_id _user name slug image description brand category condition section price discount stockcount rating reviewcount')
        .exec();

    /** Check if product found. */
    if (product) {
        /** Return success message. */
        return NextResponse.json(product);
    } else {
        /** Return error message. */
        return NextResponse.json({ message: 'No product found.' });
    }
}
