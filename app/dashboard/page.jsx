'use client';

/** React. */
import { useEffect } from 'react';

/** Vendor. */
import { useSelector } from 'react-redux';
import { useRouter } from 'next/navigation';

/** Default export. */
export default function Dashboard() {
    /** Use selector. */
    const loginUser = useSelector((state) => state.loginUser);
    const { logged } = loginUser;

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
            <h1 className='pb-2 text-center'>Dashboard</h1>
        </div>
    );
}
