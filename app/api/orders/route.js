/** Vendor. */
import { NextResponse } from 'next/server';

/** Library. */
import Database from '../../../lib/mongo';
import Watcher from '../../../lib/watcher';

/** Model. */
import Order from '../../../mongoose/models/order-model';

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
            /** Fetch all orders. */
            const orders = await Order.find({ _user: verified.id });

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

/** POST. */
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
            return NextResponse.json({ message: 'The IDs do not match; please send us a message so that we can investigate further.', status: 403 });
        }

        /** Try to save the order. */
        try {
            /** Instantiate order model. */
            const order = new Order({
                _user: verified.id,
                orderitems: data.orderitems.map((item) => {
                    return {
                        name: item.name,
                        quantity: item.quantity,
                        image: item.image,
                        price: item.price,
                        discount: item.discount,
                        _product: item.product,
                    };
                }),
                shippingaddress: {
                    address: data.shippingaddress.address,
                    city: data.shippingaddress.city,
                    postal: data.shippingaddress.postal,
                    country: data.shippingaddress.country,
                },
                paymentmethod: data.paymentmethod.payment,
                taxprice: Number(data.taxprice),
                shippingprice: Number(data.shippingprice),
                totalprice: Number(data.totalprice),
            });

            /** Check user last order to prevent double order. */
            const lastOrder = await Order.findOne({
                _user: verified.id,
                totalprice: data.totalprice,
                shippingprice: data.shippingprice,
                taxprice: data.taxprice,
            });

            if (!lastOrder) {
                /** Save order. */
                const newOrder = await order.save();

                /** Return success message. */
                return NextResponse.json({ message: 'Order was successfully placed.', status: 200 });
            } else {
                /** Return warning message. */
                return NextResponse.json({ message: 'Kindly check your last order; data seems the same.', status: 403 });
            }
        } catch (error) {
            /** Return error message. */
            return NextResponse.json({ error: error, message: 'Unable to place an order!', status: 500 });
        }
    }
}
