/** Vendor. */
import bcrypt from 'bcryptjs';

/** Compare entered pasword against hashed password from mongo database. */
const comparePassword = async ({ enteredPassword, hashedPassword }) => {
    /** Return something. */
    return await bcrypt.compare(enteredPassword, hashedPassword);
};

/** Hash entered password. */
const hashPassword = async ({ enteredPassword }) => {
    /** Return something. */
    return await bcrypt.hash(enteredPassword, 12);
};

/** Export function. */
export { comparePassword, hashPassword };
