'use client';

/** Vendor. */
import Link from 'next/link';
import { useDispatch, useSelector } from 'react-redux';

/** Action. */
import { logoutUser } from '../../redux/actions/user-actions.js';

/** Default export. */
export default function Menu() {
    /** Use selector. */
    const userLogin = useSelector((state) => state.userLogin);
    const { logged, firstname, admin, image } = userLogin;

    /** Use dispatch. */
    const dispatch = useDispatch();

    /** Logout handler. */
    function logoutHandler() {
        dispatch(logoutUser());
    }

    /** Return something. */
    return (
        <>
            {logged ? (
                <>
                    <Link href='/profile' className='relative'>
                        <img className='absolute -top-2 -left-7 h-6 w-6 rounded-full ring-2 ring-slate-200' src={image} alt={firstname} />
                        <span className='p-2 cursor-pointer hover:text-amber-500'>{firstname}</span>
                    </Link>
                </>
            ) : (
                <>
                    <Link href='/login'>
                        <span className='p-2 cursor-pointer hover:text-amber-500'>Login</span>
                    </Link>
                    <Link href='/signup'>
                        <span className='p-2 cursor-pointer hover:text-amber-500'>Signup</span>
                    </Link>
                </>
            )}
            {admin ? (
                <Link href='/dashboard'>
                    <span className='p-2 cursor-pointer hover:text-amber-500'>Dashboard</span>
                </Link>
            ) : (
                ''
            )}
            <Link href='/support'>
                <span className='p-2 cursor-pointer hover:text-amber-500'>Support</span>
            </Link>
            {logged ? (
                <>
                    <button onClick={logoutHandler}>
                        <span className='p-2 cursor-pointer hover:text-amber-500 uppercase'>Logout</span>
                    </button>
                </>
            ) : (
                ''
            )}
        </>
    );
}
