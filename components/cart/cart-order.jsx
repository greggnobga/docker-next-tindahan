'use client';

/** React. */
import { useEffect } from 'react';

/** Vendor. */
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useSelector, useDispatch } from 'react-redux';

/** Action. */
import { placeOrder } from '../../redux/actions/cart-actions';

/** Library. */
import { calculateDiscount, calculateSubTotal } from '../../lib/calculate';

/** Default export. */
export default function Order() {
    /** Use selector. */
    const userLogin = useSelector((state) => state.userLogin);
    const { userid, logged } = userLogin;

    const cart = useSelector((state) => state.cart);
    const { shippingAddress, paymentMethod, cartItems } = cart;

    /** Calclulate  prices. */
    cart.itemsPrice = cartItems.reduce((acc, item) => acc + item.quantity * (item.price - (item.price * item.discount) / 100), 0).toFixed(2);

    cart.shippingPrice = Number(cart.itemsPrice > 10000 ? 500 : 1000).toFixed(2);

    cart.taxPrice = Number(0.12 * Number(cart.itemsPrice)).toFixed(2);

    cart.totalPrice = Number(Number(cart.itemsPrice) + Number(cart.shippingPrice) + Number(cart.taxPrice)).toFixed(2);

    /** Use router. */
    const router = useRouter();

    /** Use effect. */
    useEffect(() => {
        /** Check if token is set. */
        if (!logged) {
            router.push('/login?redirect=shipping');
        }

        /** Go back to shipping page if not set yet. */
        if (!shippingAddress.address || !paymentMethod.payment) {
            router.push('/cart/shipping');
        }
    }, [logged, shippingAddress, paymentMethod]);

    /** Use dispatch. */
    const dispatch = useDispatch();

    /** Order handler. */
    const orderHandler = (order) => {
        /** Dispatch action. */
        dispatch(placeOrder(order));

        /** Route push. */
        router.push('/profile');
    };

    /** Return something. */
    return (
        <div className='p-2 w-full'>
            <div className='grid grid-cols-1 sm:grid-cols-4 bg-slate-200 rounded'>
                <div className='col-span-1 sm:col-span-2 p-2'>
                    <h1 className='font-thin text-sm border-b border-slate-300 border-opacity-70 pb-2'>Shipping Address</h1>
                    <p className='py-2 text-sm font-normal'>
                        {shippingAddress.address}, {shippingAddress.city}, {shippingAddress.postal}, {shippingAddress.country}
                    </p>
                </div>
                <div className='col-span-1 sm:col-span-2 p-2'>
                    <h1 className='font-thin text-sm border-b border-slate-300 border-opacity-70 pb-2'>Payment Method</h1>
                    <p className='py-2 text-sm font-normal'>
                        <span className='uppercase'>{paymentMethod.payment}</span>
                    </p>
                </div>
                <div className='col-span-1 sm:col-span-4 p-2'>
                    <h1 className='font-thin text-sm border-b border-slate-300 border-opacity-70 pb-2'>{cartItems.length > 1 ? 'Order Items' : 'Order Item'}</h1>
                    {cartItems.length === 0 ? (
                        <p className='py-2 text-left text-sm font-light'>
                            Your cart is <span className='text-red-500 font-normal'>Empty.</span>
                        </p>
                    ) : (
                        cartItems.map((item) => {
                            return (
                                <div key={item.product} className='py-2 grid grid-cols-1 sm:grid-cols-12 text-sm border-b border-slate-300 border-opacity-70'>
                                    <div className='sm:col-span-2'>
                                        <img className='w-6 h-6 object-contain' src={item.image} alt={item.name} />
                                    </div>
                                    <div className='sm:col-span-6'>
                                        <Link href={`/product/${item.slug}`} className='hover:text-amber-600'>
                                            {item.name}
                                        </Link>
                                    </div>
                                    <div className='sm:col-span-4'>
                                        {item.quantity} X {calculateDiscount({ price: item.price, discount: item.discount })} = &#x20B1;
                                        {calculateSubTotal({ price: item.price, discount: item.discount, quantity: item.quantity })}
                                    </div>
                                </div>
                            );
                        })
                    )}
                </div>
                <div className='col-span-1 sm:col-span-4 p-2'>
                    <h1 className='font-thin text-sm border-b border-slate-300 border-opacity-70 pb-2'>Order Summary</h1>
                    <div className='grid grid-cols-1 sm:grid-cols-2'>
                        <p className='py-2 text-sm font-normal sm:text-right pr-4'>
                            <span className='uppercase'>{cartItems.length > 1 ? 'Items' : 'Item'}</span>
                        </p>
                        <p className='py-2 text-sm font-normal'>
                            <span className='uppercase'>
                                &#x20B1;
                                {Number(cart.itemsPrice).toLocaleString('en-US', {
                                    minimumFractionDigits: 2,
                                })}
                            </span>
                        </p>
                    </div>
                    <div className='grid grid-cols-1 sm:grid-cols-2'>
                        <p className='py-2 text-sm font-normal sm:text-right pr-4'>
                            <span className='uppercase'>Shipping</span>
                        </p>
                        <p className='py-2 text-sm font-normal'>
                            <span className='uppercase'>
                                &#x20B1;
                                {Number(cart.shippingPrice).toLocaleString('en-US', {
                                    minimumFractionDigits: 2,
                                })}
                            </span>
                        </p>
                    </div>
                    <div className='grid grid-cols-1 sm:grid-cols-2'>
                        <p className='py-2 text-sm font-normal sm:text-right pr-4'>
                            <span className='uppercase'>Tax</span>
                        </p>
                        <p className='py-2 text-sm font-normal'>
                            <span className='uppercase'>
                                &#x20B1;
                                {Number(cart.taxPrice).toLocaleString('en-US', {
                                    minimumFractionDigits: 2,
                                })}
                            </span>
                        </p>
                    </div>
                    <div className='grid grid-cols-1 sm:grid-cols-2'>
                        <p className='py-2 text-sm font-normal sm:text-right pr-4'>
                            <span className='uppercase'>Total</span>
                        </p>
                        <p className='py-2 text-sm font-normal'>
                            <span className='uppercase'>
                                &#x20B1;
                                {Number(cart.totalPrice).toLocaleString('en-US', {
                                    minimumFractionDigits: 2,
                                })}
                            </span>
                        </p>
                    </div>
                    <div className='grid grid-cols-1 sm:grid-cols-2 p-4'>
                        <button
                            type='button'
                            className='button-primary col-span-2'
                            disabled={cartItems === 0}
                            onClick={() =>
                                orderHandler({
                                    userid: userid,
                                    orderitems: cartItems,
                                    shippingaddress: shippingAddress,
                                    paymentmethod: paymentMethod,
                                    taxprice: cart.taxPrice,
                                    shippingprice: cart.shippingPrice,
                                    totalprice: cart.totalPrice,
                                })
                            }>
                            Place Order
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
