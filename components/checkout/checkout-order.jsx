'use client';

/** React. */
import { useEffect } from 'react';

/** Vendor. */
import { useRouter } from 'next/navigation';
import { useSelector } from 'react-redux';

/** Default export. */
export default function Order() {
    /** Use selector. */
    const userLogin = useSelector((state) => state.userLogin);
    const { logged } = userLogin;

    const cart = useSelector((state) => state.cart);
    const { shippingAddress, paymentMethod } = cart;

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
            router.push('/shipping');
        }
    }, [logged, shippingAddress, paymentMethod]);

    /** Return something. */
    return <p className='p-2 text-center text-lg font-light'>Order details here....</p>;
}
