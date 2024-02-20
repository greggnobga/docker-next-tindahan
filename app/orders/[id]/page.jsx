'use client';

/** React. */
import { useEffect } from 'react';

/** Vendor. */
import { useRouter } from 'next/navigation';
import { useSelector, useDispatch } from 'react-redux';

/** Action. */
import { resetOrder } from '../../../redux/actions/order-actions';

/** Default export. */
export default function OrderDetailsPage() {
    /** Use selector. */
    const userLogin = useSelector((state) => state.userLogin);
    const { logged } = userLogin;

    const order = useSelector((state) => state.order);
    const { orderid } = order;

    /** Use dispatch. */
    const dispatch = useDispatch();

    /** Use router. */
    const router = useRouter();

    /** Use effect. */
    useEffect(() => {
        /** Check if response has value. */
        if (orderid) {
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
            router.push('/login?redirect=shipping');
        }
    }, [logged]);

    /** Return something. */
    return (
        <section className='min-h-screen p-2 flex flex-col gap-2'>
            <div className='pt-2 w-full'>
                <h1 className='pb-4'>Order details</h1>
            </div>
        </section>
    );
}
