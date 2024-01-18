/** Vendor. */
import mongoose from 'mongoose';
import bcrypt from 'bcryptjs';

/** Create user schema. */
const userSchema = mongoose.Schema(
    {
        firstname: {
            type: String,
            required: true,
        },
        lastname: {
            type: String,
            required: true,
        },
        email: {
            type: String,
            required: true,
            unique: true,
        },
        mobile: {
            type: String,
            required: true,
        },
        gender: {
            type: String,
            required: true,
        },
        password: {
            type: String,
            required: true,
        },
        admin: {
            type: Boolean,
            required: true,
            default: false,
        },
    },
    {
        timestamps: true,
        versionKey: false,
    },
);

/** Define model using user schema. */
const User = mongoose.models.User || mongoose.model('User', userSchema);

/** Export. */
export default User;
