'use client';

/** React. */
import { useEffect } from 'react';

/** Vendor. */
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useSelector, useDispatch } from 'react-redux';

/** Action. */
import { detailsOrder, resetOrder } from '../../redux/actions/order-actions';

/** Library. */
import { calculateDiscount, calculateSubTotal } from '../../lib/calculate';

/** Component. */
import Sprite from '../ui/sprite';
import Notifications from '../ui/notifications';

/** Default export. */
export default function OrderDetails({ order }) {
    /** Use selector. */
    const userLogin = useSelector((state) => state.userLogin);
    const { logged } = userLogin;

    const orderCreate = useSelector((state) => state.orderCreate);
    const { success } = orderCreate;

    const orderDetails = useSelector((state) => state.orderDetails);
    const { _user, shipping, payment, items, totalprice, shippingprice, taxprice, paid, delivered, paidat, deliveredat, reference } = orderDetails;

    const toast = useSelector((state) => state.toast);
    const { status: responseStatus, message: responseMessage } = toast;

    /** Use dispatch. */
    const dispatch = useDispatch();

    /** Use router. */
    const router = useRouter();

    /** Use effect. */
    useEffect(() => {
        /** Dispatch order details. */
        dispatch(detailsOrder(order));

        /** Check if response has value. */
        if (responseMessage) {
            const timer = setTimeout(() => {
                /** Reset message. */
                dispatch(resetToast());
            }, 5000);
            /** Clear running timer. */
            return () => clearTimeout(timer);
        }

        /** Check if response has value. */
        if (success) {
            const timer = setTimeout(() => {
                /** Reset message. */
                dispatch(resetOrder());
            }, 5000);
            /** Clear running timer. */
            return () => clearTimeout(timer);
        }

        /** Check logged. */
        if (!logged) {
            /** Push to login page. */
            router.push('/');
        }
    }, [logged, success, responseMessage]);

    /** Payment handler. */
    const paymentHandler = () => {
        /** Push to payment page. */
        router.push(`/orders/payment?method=${payment}&order=${order}`);
    };

    /** Return something. */
    return (
        <div className='p-2 w-full'>
            {responseMessage ? <Notifications message={responseMessage} status={responseStatus} /> : ''}
            <div className='grid grid-cols-1 sm:grid-cols-4 bg-slate-200 rounded'>
                <div className='col-span-1 sm:col-span-2 p-2'>
                    <h1 className='font-thin text-sm border-b border-slate-300 border-opacity-70 pb-2'>Shipping</h1>
                    <p className='py-2 text-sm font-normal'>
                        {_user ? _user.firstname : ''} {_user ? _user.lastname : ''}
                    </p>
                    <p className='py-2 text-sm font-normal'>{_user ? _user.email : ''}</p>
                    <p className='py-2 text-sm font-normal'>
                        {shipping ? shipping.address + ', ' : ''} {shipping ? shipping.city + ', ' : ''} {shipping ? shipping.postal + ', ' : ''}
                        {shipping ? shipping.country : ''}
                    </p>
                    <div className='py-2 text-sm font-normal'>
                        <span className='font-light'>
                            {delivered ? (
                                <div className='alert-info'>
                                    <span className='text-green-500'>
                                        <Sprite id='alert-checkmark' />
                                    </span>
                                    Delivered on {deliveredat ? deliveredat.substring(0, 10) : '00-00-0000'}
                                </div>
                            ) : (
                                <div className='alert-danger'>
                                    <span className='text-red-500'>
                                        <Sprite id='alert-circle' />
                                    </span>
                                    Not Delivered
                                </div>
                            )}
                        </span>
                    </div>
                </div>
                <div className='col-span-1 sm:col-span-2 p-2'>
                    <h1 className='font-thin text-sm border-b border-slate-300 border-opacity-70 pb-2'>Payment</h1>
                    <p className='py-2 text-sm font-normal'>
                        <span className='uppercase'>{payment ? payment : ''}</span>
                    </p>
                    <div className='py-2 text-sm font-normal'>
                        <span className='font-light'>
                            {paid ? (
                                <div className='alert-info'>
                                    <span className='text-green-500'>
                                        <Sprite id='alert-checkmark' />
                                    </span>
                                    Paid on {paidat ? paidat.substring(0, 10) : '00-00-0000'} with ref #: {reference ? reference : ''}
                                </div>
                            ) : (
                                <div className='alert-danger'>
                                    <span className='text-red-500'>
                                        <Sprite id='alert-circle' />
                                    </span>
                                    Not Paid
                                </div>
                            )}
                        </span>
                    </div>
                </div>
                <div className='col-span-1 sm:col-span-4 p-2'>
                    <h1 className='font-thin text-sm border-b border-slate-300 border-opacity-70 pb-2'>{items && items.length > 1 ? 'Items' : 'Item'}</h1>
                    {items ? (
                        items.map((item) => {
                            return (
                                <div key={item._product} className='py-2 grid grid-cols-1 sm:grid-cols-12 text-sm border-b border-slate-300 border-opacity-70'>
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
                    ) : (
                        <p className='py-2 text-left text-sm font-light'>Loading...</p>
                    )}
                </div>

                <div className='col-span-1 sm:col-span-4 p-2'>
                    <h1 className='font-thin text-sm border-b border-slate-300 border-opacity-70 pb-2'>Summary</h1>
                    <div className='grid grid-cols-1 sm:grid-cols-2'>
                        <p className='py-2 text-sm font-normal sm:text-right pr-4'>
                            <span className='uppercase'>{items && items.length > 1 ? 'Items' : 'Item'}</span>
                        </p>
                        <p className='py-2 text-sm font-normal'>
                            <span className='uppercase'>
                                &#x20B1;
                                {items
                                    ? Number(items.reduce((acc, item) => acc + item.quantity * (item.price - (item.price * item.discount) / 100), 0).toFixed(2)).toLocaleString(
                                          'en-US',
                                          {
                                              minimumFractionDigits: 2,
                                          },
                                      )
                                    : 0.0}
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
                                {Number(shippingprice ? shippingprice : 0).toLocaleString('en-US', {
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
                                {Number(taxprice ? taxprice : 0).toLocaleString('en-US', {
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
                                {Number(totalprice ? totalprice : 0).toLocaleString('en-US', {
                                    minimumFractionDigits: 2,
                                })}
                            </span>
                        </p>
                    </div>
                </div>
                <div className='col-span-1 sm:col-span-4 p-2'>
                    <button type='button' className='button-primary' disabled={paid} onClick={() => paymentHandler()}>
                        Pay Now
                    </button>
                </div>
            </div>
        </div>
    );
}
