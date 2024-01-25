/** Vendor. */
import bcrypt from 'bcryptjs';
import dotenv from 'dotenv';

/** Run dotenv config. */
dotenv.config();

/** Define users data. */
const products = [
    {
        name: 'Fedora USB Bootable Disk',
        slug: 'fedora-usb-bootable-disk',
        image: '/img/placeholder.png',
        description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.',
        brand: 'Toshiba',
        category: 'Electronics',
        condition: 'Brand New',
        price: 89.99,
        discount: 30.0,
        stockcount: 3,
        rating: 4.5,
        reviewcount: 4,
    },
    {
        name: 'HP T620 Thin Client',
        slug: 'hp-t620-thin-client',
        image: '/img/placeholder.png',
        description:
            'Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.',
        brand: 'HP',
        category: 'Electronics',
        condition: 'Second Hand',
        price: 59.99,
        discount: 10.0,
        stockcount: 2,
        rating: 3.5,
        reviewcount: 5,
    },
    {
        name: 'Windows USB Bootable Disk',
        slug: 'windows-usb-bootable-disk',
        image: '/img/placeholder.png',
        description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.',
        brand: 'Toshiba',
        category: 'Electronics',
        condition: 'Brand New',
        price: 89.99,
        discount: 50.0,
        stockcount: 2,
        rating: 4.5,
        reviewcount: 2,
    },
    {
        name: 'Ledger Nano S Final',
        slug: 'ledger-nano-s-final',
        image: '/img/placeholder.png',
        description:
            'Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.',
        brand: 'Ledger',
        category: 'Electronics',
        condition: 'Second Hand',
        price: 129.99,
        discount: 20.0,
        stockcount: 1,
        rating: 4.9,
        reviewcount: 2,
    },
    {
        name: 'Raspberry PI Model B+',
        slug: 'raspberry-pi-model-b',
        image: '/img/placeholder.png',
        description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.',
        brand: 'Raspberry',
        category: 'Electronics',
        condition: 'Second Hand',
        price: 119.99,
        discount: 10.0,
        stockcount: 1,
        rating: 5.0,
        reviewcount: 2,
    },
    {
        name: 'Transcend External Disk',
        slug: 'transcend-external-disk',
        image: '/img/placeholder.png',
        description:
            'Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.',
        brand: 'Transcend',
        category: 'Storage',
        condition: 'Second Hand',
        price: 59.99,
        discount: 15.0,
        stockcount: 1,
        rating: 5.0,
        reviewcount: 2,
    },
    {
        name: 'Edifier Bluetooth Head Phone',
        slug: 'edifier-bluetooth-head-phone',
        image: '/img/placeholder.png',
        description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.',
        brand: 'Edifier',
        category: 'Speaker',
        condition: 'Second Hand',
        price: 59.99,
        discount: 15.0,
        stockcount: 1,
        rating: 5.0,
        reviewcount: 2,
    },
    {
        name: 'Ugreen USB Dock',
        slug: 'ugreen-usb-dock',
        image: '/img/placeholder.png',
        description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.',
        brand: 'Edifier',
        category: 'Speaker',
        condition: 'Second Hand',
        price: 59.99,
        discount: 15.0,
        stockcount: 1,
        rating: 5.0,
        reviewcount: 2,
    },
];

export default products;
