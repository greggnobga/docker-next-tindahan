/** Vendor. */
import bcrypt from 'bcryptjs';
import dotenv from 'dotenv';

/** Run dotenv config. */
dotenv.config();

/** Define users data. */
const products = [
    {
        name: 'Fedora USB Bootable Disk',
        image: '/img/placeholder.png',
        description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.',
        brand: 'Toshiba',
        category: 'Electronics',
        condition: 'Brand New',
        price: 89.99,
        stockcount: 3,
        rating: 4.5,
        reviewcount: 4,
    },
    {
        name: 'HP T620 Thin Client',
        image: '/img/placeholder.png',
        description:
            'Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.',
        brand: 'HP',
        category: 'Electronics',
        condition: 'Second Hand',
        price: 59.99,
        stockcount: 2,
        rating: 3.5,
        reviewcount: 5,
    },
    {
        name: 'Windows USB Bootable Disk',
        image: '/img/placeholder.png',
        description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.',
        brand: 'Toshiba',
        category: 'Electronics',
        condition: 'Brand New',
        price: 89.99,
        stockcount: 2,
        rating: 4.5,
        reviewcount: 2,
    },
    {
        name: 'Ledger Nano S Final',
        image: '/img/placeholder.png',
        description:
            'Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.',
        brand: 'Ledger',
        category: 'Electronics',
        condition: 'Second Hand',
        price: 129.99,
        stockcount: 1,
        rating: 4.9,
        reviewcount: 2,
    },
];

export default products;
