'use client';

/** React. */
import { useState } from 'react';

/** Vendor. */
import { useDispatch } from 'react-redux';
import { useRouter } from 'next/navigation';

/** Actions. */
import { addCart } from '../../redux/actions/cart-actions';

/** Components. */
import Sprite from '../ui/sprite';

export default function ProductStock({ stocks, slug }) {
    /** Use state. */
    const [quantity, setQuantity] = useState(1);

    /** Use dispatch. */
    const dispatch = useDispatch();

    /** Use router. */
    const router = useRouter();

    /** Add cart handler. */
    const addCartHandler = (slug, quantity) => {
        /** Dispatch atction. */
        dispatch(addCart(slug, quantity));

        /** Router push. */
        router.push('/cart');
    };

    /** Return something. */
    return (
        <div className='py-2 w-full h-2/12 md:h-4/12'>
            <div className='grid grid-cols-1 sm:grid-cols-2 gap-2 py-2'>
                <p className='md:text-right text-sm font-thin border-b border-slate-200 py-2'>Status</p>
                <p className='text-center font-normal'>{stocks > 0 ? 'In stock' : 'Out of Stock'}</p>
            </div>
            <div className='grid grid-cols-1 sm:grid-cols-2 gap-2 py-2'>
                <p className='md:text-right text-sm font-thin border-b border-slate-200 py-2'>Quantity</p>
                <select className='p-2 text-center input-select appearance-none bg-no-repeat' onChange={(e) => setQuantity(e.target.value)}>
                    {stocks > 0
                        ? [...Array(stocks).keys()].map((x) => {
                              return (
                                  <option key={x + 1} value={x + 1}>
                                      {x + 1}
                                  </option>
                              );
                          })
                        : 'Out of Stock'}
                </select>
            </div>
            <div className='grid grid-cols-1 sm:grid-cols-2 gap-2 py-2'>
                <p className=' pt-2 md:text-right text-sm font-thin border-b border-slate-200 py-2'></p>
                <button type='button' className='button-primary' disabled={stocks === 0} onClick={() => addCartHandler(slug, quantity)}>
                    Add To Cart
                </button>
            </div>
        </div>
    );
}
