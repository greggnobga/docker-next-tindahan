'use client';

/** Vendor. */
import Link from 'next/link';
import { useRouter } from 'next/navigation';
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

export default function Cart({ stocks, slug }) {
    /** Use selector.  */
    const userLogin = useSelector((state) => state.userLogin);
    const { logged, redirect } = userLogin;

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

    /** Use router. */
    const router = useRouter();

    /** Checkout handler. */
    const checkoutHandler = () => {
        /** Router push to shipping page if user is logged. */
        if (logged && redirect) {
            router.push(`/cart/${redirect}`);
        } else {
            router.push('/login?redirect=shipping');
        }
    };

    /** Return something. */
    return cartItems ? (
        <>
            <ul className='w-full flex flex-col'>
                {isMobile ? (
                    ''
                ) : cartItems.length != 0 ? (
                    <li className='odd:bg-gray-100 bg-white border border-gray-200 text-gray-800 -mt-px first:rounded-t-lg first:mt-0 last:rounded-b-lg'>
                        <div className='grid grid-cols-6 gap-2'>
                            <p className='p-2'>Image</p>
                            <p className='p-2'>Name</p>
                            <p className='p-2'>Price</p>
                            <p className='p-2'>Quantity</p>
                            <p className='p-2'>Subtotal</p>
                            <p className='p-2 text-center'></p>
                        </div>
                    </li>
                ) : (
                    ''
                )}

                {cartItems.map((item) => {
                    return (
                        <li key={item.product} className='odd:bg-gray-100 bg-white border border-gray-200 text-gray-800 -mt-px first:rounded-t-lg first:mt-0 last:rounded-b-lg'>
                            {isMobile ? (
                                <>
                                    <div className='py-2 mt-4 grid grid-cols-6 w-full h-auto gap-2'>
                                        <p className='px-2 font-normal col-span-2 border-b border-white-200'>Image</p>
                                        <img className='col-span-4 text-left h-24 object-contain' src={item.image} alt={item.name} />
                                    </div>
                                    <div className='py-2 grid grid-cols-6 w-full h-auto gap-2'>
                                        <p className='px-2 font-normal col-span-2 border-b border-white-200'>Name</p>
                                        <p className='col-span-4'>{item.name}</p>
                                    </div>
                                    <div className='py-2 grid grid-cols-6 w-full h-auto gap-2'>
                                        <p className='px-2 font-normal col-span-2 border-b border-white-200'>Price</p>
                                        <p className='col-span-4'>{calculateDiscount({ price: item.price, discount: item.discount })}</p>
                                    </div>
                                    <div className='py-2 pr-2 grid grid-cols-6 w-full h-auto gap-2'>
                                        <p className='px-2 font-normal col-span-2 border-b border-white-200'>Quantity</p>
                                        <select
                                            className='p-2 col-span-4 appearance-none rounded border border-gray-200'
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
                                    <div className='py-2 grid grid-cols-6 w-full h-auto gap-2'>
                                        <p className='px-2 font-normal col-span-2 border-b border-white-200'>Subtotal</p>
                                        <p className='col-span-4'> {calculateSubTotal({ price: item.price, discount: item.discount, quantity: item.quantity })}</p>
                                    </div>
                                    <div className='py-2 px-2 mb-4 grid grid-cols-6 w-full h-auto gap-2'>
                                        <button type='button' className='col-span-6 text-red-500' onClick={() => removeCartHandler(item.product)}>
                                            <Sprite id='delete' />
                                            Delete
                                        </button>
                                    </div>
                                </>
                            ) : (
                                <div className='grid grid-cols-6 gap-2 place-items-center'>
                                    <div className='p-2'>
                                        <img className='text-left h-16 object-contain' src={item.image} alt={item.name} />
                                    </div>
                                    <div className='p-2'>
                                        <p className='font-normal text-center sm:text-left'>{item.name}</p>
                                    </div>
                                    <div className='p-2'>
                                        <p className='text-center sm:text-left'>{calculateDiscount({ price: item.price, discount: item.discount })}</p>
                                    </div>
                                    <div className='p-2'>
                                        <select
                                            className='p-2 w-9/12 appearance-none rounded border border-gray-200'
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
                                    <div className='p-2'>
                                        <p className='p-2 font-normal text-center sm:text-left'>
                                            {calculateSubTotal({ price: item.price, discount: item.discount, quantity: item.quantity })}
                                        </p>
                                    </div>
                                    <div className='p-2'>
                                        <button type='button' className='p-2 text-red-600' onClick={() => removeCartHandler(item.product)}>
                                            <Sprite id='delete' />
                                            <span className='hidden font-thin lg:inline-block'>Delete</span>
                                        </button>
                                    </div>
                                </div>
                            )}
                        </li>
                    );
                })}
            </ul>
            {cartItems.length > 0 ? (
                <div className='flex flex-col flex-wrap justify-end'>
                    <p className='p-2 text-right font-light'>
                        Subtotal (
                        <span className='font-bold'>{Number(cartItems.reduce((acc, item) => acc + item.quantity, 0)).toLocaleString('en-US', { minimumFractionDigits: 0 })}</span>)
                        items
                    </p>
                    <p className='p-2 text-right font-thin'>
                        The amount due is{' '}
                        <span className='font-bold'>
                            &#x20B1;
                            {Number(cartItems.reduce((acc, item) => acc + item.quantity * (item.price - (item.price * item.discount) / 100), 0)).toLocaleString('en-US', {
                                minimumFractionDigits: 2,
                            })}
                        </span>
                        ; shipping and taxes are not yet calculated.
                    </p>
                    <button type='button' className='mt-2 button-primary' onClick={() => checkoutHandler()}>
                        Proceed To Checkout
                    </button>
                </div>
            ) : (
                <p className='p-2 text-center text-lg font-light'>
                    Your cart is <span className='text-red-500 font-normal'>Empty.</span>
                </p>
            )}
        </>
    ) : (
        <Loader />
    );
}
