/** Vendor. */
import mongoose from 'mongoose';

/** Create user schema. */
const supportSchema = mongoose.Schema(
    {
        _order: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Order',
            required: true,
        },
        fullname: {
            type: String,
            required: true,
        },
        email: {
            type: String,
            required: true,
        },
        message: {
            type: String,
            required: true,
        },
    },
    {
        timestamps: true,
        versionKey: false,
    },
);

/** Define model using user schema. */
const Support = mongoose.models.Support || mongoose.model('Support', supportSchema);

/** Export. */
export default Support;
