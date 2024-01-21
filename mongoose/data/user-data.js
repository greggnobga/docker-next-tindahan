/** Vendor. */
import bcrypt from 'bcryptjs';
import dotenv from 'dotenv';

/** Run dotenv config. */
dotenv.config();

/** Define users data. */
const users = [
    {
        firstname: 'Reijo',
        lastname: 'N',
        slug: 'reijo-n',
        email: 'reijo@buntod.com',
        mobile: '00000000000',
        gender: 'male',
        password: bcrypt.hashSync(process.env.SEEDER_PASSWORD, 12),
        admin: true,
    },
    {
        firstname: 'Orion',
        lastname: 'N',
        slug: 'orion-n',
        email: 'orion@buntod.com',
        mobile: '00000000000',
        gender: 'male',
        password: bcrypt.hashSync(process.env.SEEDER_PASSWORD, 12),
    },
];

export default users;