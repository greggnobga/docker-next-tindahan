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
        image: '/img/profile-reijo.png',
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
        image: '/img/profile-male.png',
        slug: 'orion-n',
        email: 'orion@buntod.com',
        mobile: '00000000000',
        gender: 'female',
        password: bcrypt.hashSync(process.env.SEEDER_PASSWORD, 12),
    },
    {
        firstname: 'Mao Mao',
        lastname: 'The Cat',
        image: '/img/profile-female.png',
        slug: 'mao-mao-the-cat',
        email: 'mao@buntod.com',
        mobile: '00000000000',
        gender: 'female',
        password: bcrypt.hashSync(process.env.SEEDER_PASSWORD, 12),
    },
];

export default users;
