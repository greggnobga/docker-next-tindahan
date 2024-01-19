'use client';

/** Vendor. */
import Link from 'next/link';
import { useDispatch, useSelector } from 'react-redux';

/** Action. */
import { userLogout } from '../../redux/actions/user-actions.js';

/** Default export. */
export default function Menu() {
    /** Use selector. */
    const userAuth = useSelector((state) => state.userAuth);
    const { logged } = userAuth;

    /** Use dispatch. */
    const dispatch = useDispatch();

    /** Logout handler. */
    function logoutHandler() {
        dispatch(userLogout());
    }

    /** Return something. */
    return (
        <>
            {logged ? (
                <>
                    <Link href='/dashboard'>
                        <span className='p-2 cursor-pointer hover:text-amber-500'>Dashboard</span>
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
