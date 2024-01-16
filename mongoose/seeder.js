/** Vendor. */
import mongoose from 'mongoose';
import dotenv from 'dotenv';

/** Models. */
import User from './models/user-model.js';
import Product from './models/product-model.js';
import Order from './models/order-model.js';

/** Data. */
import users from './data/user-data.js';
import products from './data/product-data.js';

/** Run dotenv config. */
dotenv.config();

/** Import data. */
const importData = async () => {
    /** Connect to mongo database. */
    await mongoose.connect(process.env.MONGO_SEEDER_URI, {});

    try {
        /** Delete existing collection before importing. */
        await User.deleteMany();
        await Product.deleteMany();
        await Order.deleteMany();

        /** Import collection. */
        await User.insertMany(users);

        const admin = await User.find({ admin: true });

        /** Check if admin is not null and iterate product array. */
        if (admin) {
            const updatedProducts = products.map((product) => {
                return { _user: admin[0]._id, ...product };
            });

            /** Import collection. */
            await Product.insertMany(updatedProducts);
        }

        /** Log and exit. */
        console.log('Data imported.');
        process.exit();
    } catch (error) {
        /** Catch and log error. */
        console.log(`Error: ${error.message}`);
        process.exit(1);
    }
};

/** Destory data. */
const destroyData = async () => {
    await mongoose.connect(process.env.MONGO_SEEDER_URI, {});

    try {
        /** Delete  collection. */
        await User.deleteMany();
        await Product.deleteMany();
        await Order.deleteMany();

        /** Log and exit. */
        console.log('Data destroyed.');
        process.exit();
    } catch (error) {
        /** Catch and log error. */
        console.log(`Error: ${error.message}`);
        process.exit(1);
    }
};

/** Carch bash argument and call appropriate function. */
if (process.argv[2] === '-d') {
    destroyData();
} else {
    importData();
}
