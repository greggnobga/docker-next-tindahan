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
export async function POST(request) {
    /** Call the watcher to verify the cookie integrity. */
    const { verified } = await Watcher(request);

    /** Return if not verified. */
    if (!verified) {
        /** Return error message. */
        return NextResponse.json({ message: 'Before the request stands a watcher on guard.', status: 403 });
    }

    /** Watcher verdict. */
    if (verified) {
        /** Await the post data. */
        const data = await request.json();

        /** Check if id from decoded token and data userid are matched. */
        if (verified.id !== data.userid) {
            /** Return error message. */
            return NextResponse.json({ message: 'The userid do not match; please send us a message so that we can investigate further.', status: 403 });
        }

        /** Try to update the order. */
        try {
            /** Find order by id. */
            const order = await Order.findOne({ _id: data.order, _user: data.userid });

            if (order) {
                /** Instantiate order. */
                order.ispaid = true;
                order.paidat = Date.now();
                order.paymentmethod = data.method;
                order.paymentreference = data.reference;

                /** Save order. */
                const updatedOrder = await order.save();

                /** Return success message */
                return NextResponse.json({ message: 'You successfully marked your order as paid!', status: 200 });
            } else {
                /** Return error message. */
                return NextResponse.json({ error: error, message: 'Order not found!', status: 500 });
            }

            /** Return error message. */
        } catch (error) {
            /** Return error message. */
            return NextResponse.json({ error: error, message: 'Unable to mark your order as paid!', status: 500 });
        }
    }
}
