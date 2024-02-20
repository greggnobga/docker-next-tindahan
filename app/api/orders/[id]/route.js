/** Vendor. */
import { NextResponse } from 'next/server';

/** Library. */
import Database from '../../../../lib/mongo';
import Watcher from '../../../../lib/watcher';

/** Model. */
import Order from '../../../../mongoose/models/order-model';

/** Connect MongonDB. */
Database();

/** GET. */
export async function GET(request) {
    /** Call the watcher to verify the cookie integrity. */
    const { verified } = await Watcher(request);

    /** Return if not verified. */
    if (!verified) {
        /** Return error message. */
        return NextResponse.json({ message: 'Before the request stands a watcher on guard.', status: 403 });
    }

    /** Watcher verdict. */
    if (verified) {
        /** Try to save the order. */
        try {
            /** Await the post data. */
            const data = await request.json();

            /** Fetch all orders. */
            const orders = await Order.find({ _user: verified.id, _id: data.order });

            if (orders) {
                /** Return error message. */
                return NextResponse.json({ orders: orders, message: 'Order was successfully fetched.', status: 200 });
            } else {
                /** Return error message. */
                return NextResponse.json({ message: 'No order so far!', status: 200 });
            }
        } catch (error) {
            /** Return error message. */
            return NextResponse.json({ error: error, message: 'Unable to fetched your orders.!', status: 500 });
        }
    }
}
