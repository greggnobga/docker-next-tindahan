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
        orderitmes: [
            {
                name: {
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
                product: {
                    type: mongoose.Schema.Types.ObjectId,
                    required: true,
                    ref: 'Product',
                },
            },
        ],
        shippingaddress: {
            address: { type: String, required: true },
            city: { type: String, required: true },
            postalcode: { type: String, required: true },
            country: { type: String, required: true },
        },
        paymentmethod: {
            type: String,
            required: true,
        },
        paymentresult: {
            id: { type: String },
            status: { type: String },
            update_time: { type: String },
            email_address: { type: String },
            id: { type: String },
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
