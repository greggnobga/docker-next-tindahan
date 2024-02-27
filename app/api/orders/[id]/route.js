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
export async function GET(request, { params }) {
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
            const { id } = await params;

            /** Fetch all orders. */
            const details = await Order.findOne({ _user: verified.id, _id: id }).populate('_user', 'firstname lastname mobile email');

            if (details) {
                /** Return error message. */
                return NextResponse.json({
                    _order: details._id,
                    _user: details._user,
                    shipping: details.shippingaddress,
                    items: details.orderitems,
                    payment: details.paymentmethod,
                    taxprice: details.taxprice,
                    shippingprice: details.shippingprice,
                    totalprice: details.totalprice,
                    paid: details.ispaid,
                    delivered: details.isdelivered,
                    paidat: details.paidat,
                    deliveredat: details.deliveredat,
                    reference: details.paymentreference,
                });
            } else {
                /** Return error message. */
                return NextResponse.json({ message: 'No order so far!', status: 200 });
            }
        } catch (error) {
            /** Return error message. */
            return NextResponse.json({ error: error, message: 'Unable to fetched your orders!', status: 500 });
        }
    }
}
