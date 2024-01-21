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
        /** Check for existing record. */
        const products = await Product.find({})
            .select('_id _user name slug image brand category condition description rating reviews reviewcount currentprice stockcount previousprice')
            .limit(25)
            .sort({ createdAt: -1 })
            .exec();

        /** Prevent user from sending multiple message. */
        if (products) {
            /** Return message list. */
            return NextResponse.json(products);
        } else {
            /** Return warning message. */
            return NextResponse.json({ message: 'No products so far.', status: 200 });
        }
    } catch (error) {
        /** Return error message. */
        return NextResponse.json({ message: 'Unable to fetched products!', status: 500 });
    }
}
