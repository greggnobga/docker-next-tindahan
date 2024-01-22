'use client';

/** React. */
import { useEffect } from 'react';

/** Vendor. */
import { useDispatch, useSelector } from 'react-redux';
import { useRouter } from 'next/navigation';

/** Action. */
import { resetToast } from '../../redux/actions/toast-actions';

/** Component. */
import Notifications from '../../components/ui/notifications';

/** Default export. */
export default function Dashboard() {
    /** Use selector. */
    const loginUser = useSelector((state) => state.loginUser);
    const { logged } = loginUser;

    const toastMessage = useSelector((state) => state.toastMessage);
    const { status: responseStatus, message: responseMessage } = toastMessage;

    /** Use dispatch. */
    const dispatch = useDispatch();

    /** Use router. */
    const router = useRouter();

    /** Use effect. */
    useEffect(() => {
        /** Check if token is set. */
        if (!logged) {
            router.push('/login');
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
    }, [dispatch, logged, responseMessage]);

    /** Return something. */
    return (
        <div className='min-h-screen'>
            {responseMessage ? <Notifications message={responseMessage} status={responseStatus} /> : ''}
            <h1 className='pb-2 text-center'>Dashboard</h1>
        </div>
    );
}
