'use client';

/** Vendor. */
import { useSelector, useDispatch } from 'react-redux';

/** Hooks. */
import useScreen from '../../hooks/use-screen';

/** Library. */
import { calculateDiscount, calculateSubTotal } from '../../lib/calculate';

/** Actions. */
import { addCart, removeCart } from '../../redux/actions/cart-actions';

/** Components. */
import Sprite from '../ui/sprite';
import Loader from '../ui/loader';

export default function CartItems({ stocks, slug }) {
    /** Use selector.  */
    const cart = useSelector((state) => state.cart);
    const { cartItems } = cart;

    /** Use screen. */
    const screen = useScreen();
    const { isMobile } = screen;

    /** Use dispatch. */
    const dispatch = useDispatch();

    /** Remove cart handler. */
    const removeCartHandler = (product) => {
        dispatch(removeCart(product));
    };

    /** Return something. */
    return cartItems ? (
        <>
            <ul className='w-full flex flex-col'>
                {isMobile ? (
                    ''
                ) : cartItems.length != 0 ? (
                    <li className='inline-flex items-center gap-x-2 py-3 px-4 font-light  odd:bg-gray-100 bg-white border border-gray-200 text-gray-800 -mt-px first:rounded-t-lg first:mt-0 last:rounded-b-lg '>
                        <div className='flex flex-row flex-wrap flex-grow'>
                            <p className='p-2 sm:w-1/12'>Image</p>
                            <p className='p-2 sm:w-3/12'>Name</p>
                            <p className='p-2 sm:w-2/12'>Price</p>
                            <p className='p-2 sm:w-2/12'>Quantity</p>
                            <p className='p-2 sm:w-2/12'>Subtotal</p>
                            <p className='p-2 sm:w-2/12 text-center'></p>
                        </div>
                    </li>
                ) : (
                    ''
                )}

                {cartItems.map((item) => {
                    return (
                        <li
                            key={item.product}
                            className='inline-flex items-center gap-x-2 py-3 px-4 font-light  odd:bg-gray-100 bg-white border border-gray-200 text-gray-800 -mt-px first:rounded-t-lg first:mt-0 last:rounded-b-lg '>
                            {isMobile ? (
                                <div className='flex flex-col flex-wrap flex-grow gap-2'>
                                    <div className='grid w-full h-20'>
                                        <img className='w-full h-full object-cover' src={item.image} alt={item.name} />
                                    </div>
                                    <div className='grid grid-cols-6 w-full h-auto gap-4'>
                                        <p className='p-2 font-normal col-span-2 border-b border-white-200'>Name</p>
                                        <p className='p-2 col-span-4'>{item.name}</p>
                                    </div>
                                    <div className='grid grid-cols-6 w-full h-auto gap-4'>
                                        <p className='p-2 font-normal col-span-2 border-b border-white-200'>Price</p>
                                        <p className='p-2 col-span-4'>{calculateDiscount({ price: item.price, discount: item.discount })}</p>
                                    </div>
                                    <div className='grid grid-cols-6 w-full h-auto gap-4'>
                                        <p className='p-2 font-normal col-span-2 border-b border-white-200'>Quantity</p>
                                        <select
                                            className='p-2 col-span-3 input-select appearance-none rounded bg-no-repeat border border-gray-300'
                                            defaultValue={item.quantity}
                                            onChange={(e) => dispatch(addCart(item.slug, Number(e.target.value)))}>
                                            {item.stockcount > 0 ? (
                                                [...Array(item.stockcount).keys()].map((x) => {
                                                    return (
                                                        <option key={x + 1} value={x + 1}>
                                                            {x + 1}
                                                        </option>
                                                    );
                                                })
                                            ) : (
                                                <option>{item.quantity}</option>
                                            )}
                                        </select>
                                    </div>
                                    <div className='grid grid-cols-6 w-full h-auto gap-4'>
                                        <p className='p-2 font-normal col-span-2 border-b border-white-200'>Subtotal</p>
                                        <p className='p-2 col-span-4'> {calculateSubTotal({ price: item.price, discount: item.discount, quantity: item.quantity })}</p>
                                    </div>
                                    <div className='grid grid-cols-6 w-full h-auto gap-4'>
                                        <p className='p-2 col-span-6 text-center text-red-500 cursor-pointer' onClick={() => removeCartHandler(item.product)}>
                                            <Sprite id='delete' />
                                            Delete
                                        </p>
                                    </div>
                                </div>
                            ) : (
                                <div className='flex flex-row flex-wrap flex-grow place-items-center'>
                                    <p className='sm:w-1/12'>
                                        <img className='object-contain w-16 h-16 text-center sm:text-left' src={item.image} alt={item.name} />
                                    </p>
                                    <p className='font-normal text-center sm:text-left sm:w-3/12'>{item.name}</p>
                                    <p className='text-center sm:text-left sm:w-2/12'>{calculateDiscount({ price: item.price, discount: item.discount })}</p>
                                    <div className='text-center sm:text-left sm:w-2/12'>
                                        <select
                                            className='p-2 w-9/12 input-select appearance-none rounded bg-no-repeat border border-gray-300'
                                            defaultValue={item.quantity}
                                            onChange={(e) => dispatch(addCart(item.slug, Number(e.target.value)))}>
                                            {item.stockcount > 0 ? (
                                                [...Array(item.stockcount).keys()].map((x) => {
                                                    return (
                                                        <option key={x + 1} value={x + 1}>
                                                            {x + 1}
                                                        </option>
                                                    );
                                                })
                                            ) : (
                                                <option>{item.quantity}</option>
                                            )}
                                        </select>
                                    </div>

                                    <p className='p-2 font-normal text-center sm:text-left sm:w-2/12'>
                                        {calculateSubTotal({ price: item.price, discount: item.discount, quantity: item.quantity })}
                                    </p>
                                    <p className='p-2 text-center sm:text-center sm:w-2/12'>
                                        <span className='p-2 text-red-600 cursor-pointer' onClick={() => removeCartHandler(item.product)}>
                                            <Sprite id='delete' />
                                            <span className='font-thin'>Delete</span>
                                        </span>
                                    </p>
                                </div>
                            )}
                        </li>
                    );
                })}
            </ul>
            {cartItems.length > 0 ? (
                <div className='flex flex-col flex-wrap justify-end'>
                    <p className='p-2 text-right font-light'>
                        Subtotal (<span className='font-bold'>{cartItems.reduce((acc, item) => acc + item.quantity, 0)}</span>) items
                    </p>
                    <p className='p-2 text-right font-thin'>
                        The amount due is{' '}
                        <span className='font-bold'>
                            &#x20B1;
                            {Number(
                                cartItems
                                    .reduce((acc, item) => acc + item.quantity * (item.price - (item.price * item.discount) / 100), 0)
                                    .toFixed(2)
                                    .toLocaleString(),
                            ).toLocaleString()}
                        </span>
                        ; shipping and taxes are not yet calculated.
                    </p>
                    <button type='button' className='mt-2 button-primary'>
                        Proceed To Checkout
                    </button>
                </div>
            ) : (
                <p className='p-2 text-center text-lg font-light'>
                    Your cart is <span className='text-red-500 font-normal'>Empty!</span>
                </p>
            )}
        </>
    ) : (
        <Loader />
    );
}
