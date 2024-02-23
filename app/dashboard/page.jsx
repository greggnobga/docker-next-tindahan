'use client';

/** React. */
import { useEffect } from 'react';

/** Vendor. */
import { useRouter } from 'next/navigation';
import { useSelector } from 'react-redux';

/** Default export. */
export default function DashboardPage() {
    /** Use selector. */
    const userLogin = useSelector((state) => state.userLogin);
    const { logged, admin } = userLogin;

    /** Use router. */
    const router = useRouter();

    /** Use effect. */
    useEffect(() => {
        /** Check if logged. */
        if (!logged) {
            router.push('/login');
        }

        /** Check if admin. */
        if (!admin) {
            router.push('/profile');
        }
    }, [logged, admin]);

    /** Return something. */
    return (
        <section className='min-h-screen'>
            <h1 className='pb-2 text-center'>Dashboard</h1>
        </section>
    );
}
