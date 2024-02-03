'use client';

/** React. */
import { useState } from 'react';

/** Vendor. */
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useSelector } from 'react-redux';

/** Component. */
import Sprite from './sprite';

/** Default export. */
export default function Nav() {
    /** Use state. */
    const [keyword, setKeyword] = useState('');

    /** Use selector. */
    const cart = useSelector((state) => state.cart);
    const { cartItems } = cart;

    /** Use router. */
    const router = useRouter();

    /** Search Handler */
    const searchHandler = (keyword) => {
        /** Push to search page. */
        router.push(`/search?term=${keyword}&page=${1}`);
    };

    /** Return something. */
    return (
        <ul className='w-full flex flex-row justify-between text-slate-200'>
            <li className='flex flex-row place-items-center w-full sm:w-9/12'>
                <Link className='mx-4 w-1/12 sm:w-2/12 md:4/12 text-gray-200 relative' href='/'>
                    <Sprite id='store' /> <span className='hidden absolute pl-1 md:inline-block sm:text-md md:text-lg font-medium'>Tindahan</span>
                </Link>
                <input
                    type='text'
                    className='py-2 px-2 w-6/12 sm:w-full  border-gray-200 rounded-lg text-sm focus:border-slate-500 focus:outline-none text-gray-500'
                    placeholder='Search product...'
                    onChange={(e) => setKeyword(e.target.value)}
                />
                <button type='button' className='pl-2 pt-2 relative' onClick={() => searchHandler(keyword)}>
                    <span className='absolute -top-3'>
                        <Sprite id='search' width='w-8' height='h-8' />
                    </span>
                </button>
            </li>
            <li className='flex flex-row place-items-center mr-4 text-slate-200'>
                <div className='mx-2 mt-1'>
                    <Link className='text-gray-200' href='/products'>
                        <Sprite id='products' width='w-7' height='h-7' />
                    </Link>
                </div>
                <div className='relative cursor-pointer'>
                    <Link className='text-gray-200' href='/cart'>
                        <Sprite id='cart' />
                        <span className='absolute -right-1 -top-2 rounded-full bg-red-600 w-4 h-4 top right p-0 m-0 text-white font-mono text-xs leading-tight text-center'>
                            {cartItems ? cartItems.length : 0}
                        </span>
                    </Link>
                </div>
            </li>
        </ul>
    );
}
