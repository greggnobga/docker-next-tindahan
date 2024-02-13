'use client';

/** React. */
import { useEffect } from 'react';

/** Vendor. */
import dynamic from 'next/dynamic';
import { useRouter } from 'next/navigation';
import { useSelector } from 'react-redux';

/** Component. */
const Shipping = dynamic(() => import('../../components/checkout/checkout-shipping'), { ssr: false });

/** Default export. */
export default function ShippingPage() {
    /** Use selector. */
    const userLogin = useSelector((state) => state.userLogin);
    const { logged } = userLogin;

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
        <div className='min-h-screen'>
            <h1 className='pb-4 text-center'>Shipping</h1>
            <Shipping />
        </div>
    );
}
