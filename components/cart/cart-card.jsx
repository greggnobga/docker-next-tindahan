'use client';

/** Vendor. */
import { useSelector } from 'react-redux';

/** Library. */
import { calculateDiscount } from '../../lib/calculate';

/** Components. */
import Sprite from '../ui/sprite';
import Loader from '../ui/loader';

export default function CartItems({ stocks, slug }) {
    /** Use selector.  */
    const cart = useSelector((state) => state.cart);
    const { cartItems } = cart;

    /** Return something. */
    return cartItems ? (
        <>
            <ul className='w-full flex flex-col'>
                {cartItems.map((item) => {
                    return (
                        <li
                            key={item.product}
                            className='inline-flex items-center gap-x-2 py-3 px-4 font-light  odd:bg-gray-100 bg-white border border-gray-200 text-gray-800 -mt-px first:rounded-t-lg first:mt-0 last:rounded-b-lg '>
                            <div className='flex flex-col flex-wrap flex-grow sm:flex-row'>
                                <p className='p-2 sm:w-2/12'>image</p>
                                <p className='p-2 sm:w-4/12'>{item.name}</p>
                                <p className='p-2 sm:w-4/12'>{calculateDiscount({ price: item.price, discount: item.discount })}</p>
                                <p className='p-2 sm:w-2/12 text-center sm:text-right'>View Delete</p>
                            </div>
                        </li>
                    );
                })}
            </ul>
            <div className='flex flex-col flex-wrap justify-end'>
                <p className='p-2 text-right font-light'>Sub Total - 500.00 </p>
                <p className='p-2 text-right font-light'>Sale Tax - 12.00 </p>
                <p className='p-2 text-right font-light'>Shipment - 100.00 </p>
                <p className='p-2 text-right'>Grand Total - 612.00</p>
                <button type='button' className='button-primary'>
                    Checkout
                </button>
            </div>
        </>
    ) : (
        <Loader />
    );
}
