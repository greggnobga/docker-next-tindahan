'use client';

/** React. */
import { useEffect } from 'react';

/** Vendor. */
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useSelector } from 'react-redux';

/** Default export. */
export default function Steps({ login, shipping, payment, order }) {
    /** Use selector. */
    const userLogin = useSelector((state) => state.userLogin);
    const { logged } = userLogin;

    /** Use router. */
    const router = useRouter();

    /** Use effect. */
    useEffect(() => {
        /** Check if token is set. */
        if (!logged) {
            router.push('/login?redirect=shipping');
        }
    }, [logged]);

    /** Return something. */
    return (
        <div className='p-2 w-full'>
            <div className='grid grid-cols-4'>
                {login ? (
                    <Link className='p-1 sm:p-2 text-center text-xs sm:text-sm font-light text-orange-500 rounded bg-slate-200' href='/login'>
                        Login
                    </Link>
                ) : (
                    <p className='p-1 sm:p-2 text-center text-xs sm:text-sm font-light text-slate-400'>Login</p>
                )}

                {shipping ? (
                    <Link className='p-1 sm:p-2 text-center text-xs sm:text-sm font-light text-orange-500 rounded bg-slate-200' href='/shipping'>
                        Shipping
                    </Link>
                ) : (
                    <p className='p-1 sm:p-2 text-center text-xs sm:text-sm font-light text-slate-400'>Shipping</p>
                )}

                {payment ? (
                    <Link className='p-1 sm:p-2 text-center text-xs sm:text-sm font-light text-orange-500 rounded bg-slate-200' href='/payment'>
                        Payment
                    </Link>
                ) : (
                    <p className='p-1 sm:p-2 text-center text-xs sm:text-sm font-light text-slate-400'>Payment</p>
                )}

                {order ? (
                    <Link className='p-1 sm:p-2 text-center text-xs sm:text-sm font-light text-orange-500 rounded bg-slate-200' href='/order'>
                        Order
                    </Link>
                ) : (
                    <p className='p-1 sm:p-2 text-center text-xs sm:text-sm font-light text-slate-400'>Order</p>
                )}
            </div>
        </div>
    );
}
