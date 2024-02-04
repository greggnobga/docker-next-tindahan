'use client';

/** React. */
import { useEffect } from 'react';

/** Vendor. */
import { useRouter } from 'next/navigation';
import { useDispatch, useSelector } from 'react-redux';

/** Action. */
import { resetToast } from '../../redux/actions/toast-actions';

/** Component. */
import Notifications from '../../components/ui/notifications';

/** Default export. */
export default function Dashboard() {
    /** Use selector. */
    const userLogin = useSelector((state) => state.userLogin);
    const { logged, admin } = userLogin;

    const toast = useSelector((state) => state.toast);
    const { status: responseStatus, message: responseMessage } = toast;

    /** Use dispatch. */
    const dispatch = useDispatch();

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

        /** Check if response has value. */
        if (responseMessage) {
            const timer = setTimeout(() => {
                /** Reset message. */
                dispatch(resetToast());
            }, 5000);
            /** Clear running timer. */
            return () => clearTimeout(timer);
        }
    }, [dispatch, logged, admin, responseMessage]);

    /** Return something. */
    return (
        <div className='min-h-screen'>
            {responseMessage ? <Notifications message={responseMessage} status={responseStatus} /> : ''}
            <h1 className='pb-2 text-center'>Dashboard</h1>
        </div>
    );
}
