'use client';

/** React. */
import { useEffect } from 'react';

/** Vendor. */
import { useRouter } from 'next/navigation';
import { useSelector } from 'react-redux';

/** Component. */
import Shipping from '../checkout/checkout-shipping';

/** Default export. */
export default function Container() {
    /** Use selector. */
    const userLogin = useSelector((state) => state.userLogin);
    const { logged } = userLogin;

    const cart = useSelector((state) => state.cart);
    const { cartItems } = cart;

    /** Use router. */
    const router = useRouter();

    /** Use effect. */
    useEffect(() => {
        /** Check if token is set. */
        if (!logged) {
            router.push('/login');
        }
    }, [logged]);

    /** Return something. */
    return (
        <>
            {cartItems && cartItems.length > 0 ? (
                <Shipping />
            ) : (
                <p className='p-2 text-center text-lg font-light'>
                    Your cart is <span className='text-red-500 font-normal'>Empty!</span>
                </p>
            )}
        </>
    );
}
