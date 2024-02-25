'use client';

/** React. */
import { useEffect } from 'react';

/** Vendor. */
import Link from 'next/link';
import { useRouter, useSearchParams } from 'next/navigation';
import { useSelector, useDispatch } from 'react-redux';

/** Default export. */
export default function OrderPayment() {
    /** Use selector. */
    const userLogin = useSelector((state) => state.userLogin);
    const { logged } = userLogin;

    /** Use dispatch. */
    const dispatch = useDispatch();

    /** Use router. */
    const router = useRouter();

    /** Use effect. */
    useEffect(() => {
        /** Check logged. */
        if (!logged) {
            router.push('/');
        }
    }, [logged]);

    /** Pagination handler. */
    const submitHandler = () => {
        console.log('Click submit handler...');
    };

    /** Use search params. */
    const searchParams = useSearchParams();
    const number = searchParams.get('page');

    /** Return something. */
    return (
        <div className='col-span-1 sm:col-span-4 p-2'>
            <h1 className='font-thin text-sm border-b border-slate-300 border-opacity-70 pb-2 uppercase'>Payment reference number</h1>
            <p>Form here...</p>
            <p className='text-xs font-thin'>
                After sending the payment, take a screenshot and include the reference number so we can process your order.
                <span className='pl-1 text-red-500'>Failing to provide will result in lengthy deliberations.</span>
            </p>
        </div>
    );
}
