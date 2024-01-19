/** Vendor. */
import bcrypt from 'bcryptjs';

/** Compare entered pasword against hashed password from mongo database. */
const bcryptCompare = async ({ entered, hashed }) => {
    /** Return something. */
    return await bcrypt.compare(entered, hashed);
};

/** Hash entered password. */
const bcryptHash = async ({ entered }) => {
    /** Return something. */
    return await bcrypt.hash(entered, 12);
};

/** Export function. */
export { bcryptCompare, bcryptHash };
