/** Vendor. */
import mongoose from 'mongoose';

/** Create review schema. */
const reviewSchema = mongoose.Schema(
    {
        name: { type: String, required: true },
        rating: { type: Number, required: true },
        comment: { type: String, required: true },
    },
    {
        timestamps: true,
        versionKey: false,
    },
);

/** Create user schema. */
const productSchema = mongoose.Schema(
    {
        _user: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User',
            required: true,
        },
        name: {
            type: String,
            required: true,
        },
        slug: {
            type: String,
            required: true,
        },
        image: {
            type: String,
            required: true,
        },
        brand: {
            type: String,
            required: true,
        },
        category: {
            type: String,
            required: true,
        },
        condition: {
            type: String,
            required: true,
        },
        description: {
            type: String,
            required: true,
        },
        rating: {
            type: Number,
            required: true,
            default: 0,
        },
        reviews: {
            reviewSchema,
        },
        reviewcount: {
            type: Number,
            required: true,
            default: 0,
        },
        currentprice: {
            type: Number,
            required: true,
            default: 0,
        },
        stockcount: {
            type: Number,
            required: true,
            default: 0,
        },
        previousprice: {
            type: Number,
            required: true,
            default: 0,
        },
    },
    {
        timestamps: true,
        versionKey: false,
        strict: false,
    },
);

/** Define model using user schema. */
const Product = mongoose.models.Product || mongoose.model('Product', productSchema);

/** Export. */
export default Product;
