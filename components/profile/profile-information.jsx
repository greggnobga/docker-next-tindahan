'use client';

/** React. */
import { useEffect } from 'react';

/** Vendor. */
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useSelector, useDispatch } from 'react-redux';

/** Library. */
import { ucFirst } from '../../lib/typography';

/** Components. */
import Sprite from '../ui/sprite';

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
            <div className='relative w-full h-16'>
                <Link href='/profile/update' className='absolute top-0 right-0 p-2 text-right text-sm bg-slate-200 rounded shadow-sm'>
                    Edit Profile <Sprite id='chevron-forward' />
                </Link>
            </div>
            <div className='p-2 grid place-items-center cursor-pointer'>
                <img className='inline-block flex-shrink-0 h-24 w-24 rounded-full ring-2 ring-slate-200' src={image} alt={firstname + ' ' + lastname} />
            </div>
            <div className='p-2 grid md:grid-cols-6'>
                <p className='md:col-span-2 p-1 hidden font-light md:block'>Firstname</p>
                <p className='md:col-span-4 p-1 text-center sm:text-left'>{firstname}</p>
            </div>
            <div className='p-2 grid md:grid-cols-6'>
                <p className='md:col-span-2 p-1 hidden font-light md:block'>Lastname</p>
                <p className='md:col-span-4 p-1 text-center sm:text-left'>{lastname}</p>
            </div>
            <div className='p-2 grid md:grid-cols-6'>
                <p className='md:col-span-2 p-1 hidden font-light md:block'>Email</p>
                <p className='md:col-span-4 p-1 text-center sm:text-left'>{email}</p>
            </div>
            <div className='p-2 grid md:grid-cols-6'>
                <p className='md:col-span-2 p-1 hidden font-light md:block'>Mobile</p>
                <p className='md:col-span-4 p-1 text-center sm:text-left'>{mobile}</p>
            </div>
            <div className='p-2 grid md:grid-cols-6'>
                <p className='md:col-span-2 p-1 hidden font-light md:block'>Gender</p>
                <p className='md:col-span-4 p-1 text-center sm:text-left'>{ucFirst(gender)}</p>
            </div>
        </>
    );
}
