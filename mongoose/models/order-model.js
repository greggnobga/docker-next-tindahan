/** Vendor. */
import mongoose from 'mongoose';

/** Create user schema. */
const orderSchema = mongoose.Schema(
    {
        _user: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User',
            required: true,
        },
        orderitems: [
            {
                name: {
                    type: String,
                    required: true,
                },
                slug: {
                    type: String,
                    required: true,
                },
                quantity: {
                    type: Number,
                    required: true,
                },
                image: {
                    type: String,
                    required: true,
                },
                price: {
                    type: Number,
                    required: true,
                },
                discount: {
                    type: Number,
                    required: true,
                },
                _product: {
                    type: mongoose.Schema.Types.ObjectId,
                    ref: 'Product',
                    required: true,
                },
            },
        ],
        shippingaddress: {
            address: { type: String, required: true },
            city: { type: String, required: true },
            postal: { type: String, required: true },
            country: { type: String, required: true },
        },
        paymentmethod: {
            type: String,
            required: true,
        },
        paymentreference: {
            type: String,
            required: false,
        },
        paymentscreenshot: {
            type: String,
            required: false,
        },
        taxprice: {
            type: Number,
            required: true,
            default: 0.0,
        },
        shippingprice: {
            type: Number,
            required: true,
            default: 0.0,
        },
        totalprice: {
            type: Number,
            required: true,
            default: 0.0,
        },
        ispaid: {
            type: Boolean,
            required: true,
            default: false,
        },
        paidat: {
            type: Date,
        },
        isdelivered: {
            type: Boolean,
            required: true,
            default: false,
        },
        deliveredat: {
            type: Date,
        },
    },
    {
        timestamps: true,
        versionKey: false,
        strict: false,
    },
);

/** Define model using user schema. */
const Order = mongoose.models.Order || mongoose.model('Order', orderSchema);

/** Export. */
export default Order;
