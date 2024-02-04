'use client';

/** React. */
import { useEffect } from 'react';

/** Vendor. */
import { useRouter } from 'next/navigation';
import { useSelector, useDispatch } from 'react-redux';

/** Library. */
import { ucFirst } from '../../lib/typography';

export default function ProfileInformation() {
    /** Use selector. */
    const userLogin = useSelector((state) => state.userLogin);
    const { logged, image, firstname, lastname, email, mobile, gender } = userLogin;

    /** Use router. */
    const router = useRouter();

    /** Use effect. */
    useEffect(() => {
        /** Check if token is set. */
        if (!logged) {
            router.push('/');
        }
    }, [router, logged]);

    /** Return something. */
    return (
        <>
            <div className='w-full'>
                <p className='text-right text-xs font-light'>Edit Profile</p>
            </div>
            <div className='p-2 grid place-items-center cursor-pointer'>
                <img className='inline-block flex-shrink-0 h-24 w-24 rounded-full ring-2 ring-slate-200' src={image} alt={firstname + ' ' + lastname} />
            </div>
            <div className='p-2 grid sm:grid-cols-2'>
                <p className='p-1 hidden font-light sm:block'>Name</p>
                <p className='p-1 text-center sm:text-left'>{firstname + ' ' + lastname}</p>
            </div>
            <div className='p-2 grid sm:grid-cols-2'>
                <p className='p-1 hidden font-light sm:block'>Email</p>
                <p className='p-1 text-center sm:text-left'>{email}</p>
            </div>
            <div className='p-2 grid sm:grid-cols-2'>
                <p className='p-1 hidden font-light sm:block'>Mobile</p>
                <p className='p-1 text-center sm:text-left'>{mobile}</p>
            </div>
            <div className='p-2 grid sm:grid-cols-2'>
                <p className='p-1 hidden font-light sm:block'>Gender</p>
                <p className='p-1 text-center sm:text-left'>{ucFirst(gender ? gender : 'gender')}</p>
            </div>
        </>
    );
}
