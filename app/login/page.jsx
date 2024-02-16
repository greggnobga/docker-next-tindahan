'use client';

/** React. */
import { useEffect } from 'react';

/** Vendor. */
import Link from 'next/link';
import dynamic from 'next/dynamic';
import { useRouter, useSearchParams } from 'next/navigation';
import { useDispatch, useSelector } from 'react-redux';

/** Action. */
import { loginUser } from '../../redux/actions/user-actions';
import { resetToast } from '../../redux/actions/toast-actions';

/** Hook. */
import useValidator from '../../hooks/use-validator';

/** Component. */
const Notifications = dynamic(() => import('../../components/ui/notifications'), { ssr: false });

/** Default export. */
export default function LoginPage() {
    /** Map html element to validate hook. */
    const {
        value: email,
        hasError: emailHasError,
        isValid: emailIsValid,
        valueChangeHandler: emailChangeHandler,
        inputBlurHandler: emailBlurHandler,
        resetHandler: emailInputReset,
    } = useValidator((value) => value.trim() !== '' && value.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/));

    const {
        value: password,
        hasError: passwordHasError,
        isValid: passwordIsValid,
        valueChangeHandler: passwordChangeHandler,
        inputBlurHandler: passwordBlurHandler,
        resetHandler: passwordInputReset,
    } = useValidator((value) => value.trim() !== '' && value.match(/^[ A-Za-z0-9!@#$%^&*()_+]*$/));

    /** Change class logic if valid or otherwise. */
    const emailInputClasses = emailHasError ? 'input-error' : 'input-success';
    const passwordInputClasses = passwordHasError ? 'input-error' : 'input-success';

    /** Set overall form validity. */
    let formIsValid = false;
    if (emailIsValid && passwordIsValid) {
        formIsValid = true;
    }

    /** Use search params */
    const searchParams = useSearchParams();
    const search = searchParams.get('redirect');

    /** Use dispatch. */
    const dispatch = useDispatch();

    /** Submit hanndler. */
    function submitHandler(e) {
        /** Prevent browser default behaviour */
        event.preventDefault();

        /** Change blur state. */
        emailBlurHandler(true);
        passwordBlurHandler(true);

        /** Check if there is invalid input. */
        if (!emailIsValid && !passwordIsValid) {
            return;
        }

        /** Dispatch action. */
        dispatch(loginUser({ email, password, search }));

        /** Reset input. */
        emailInputReset();
        passwordInputReset();
    }

    /** Use selector. */
    const userLogin = useSelector((state) => state.userLogin);
    const { logged, redirect } = userLogin;

    const toast = useSelector((state) => state.toast);
    const { status: responseStatus, message: responseMessage } = toast;

    /** Use router. */
    const router = useRouter();

    /** Use effect. */
    useEffect(() => {
        /** Check if user is logged and does have redirect value. */
        if (logged && redirect) {
            router.push(`/${redirect}`);
        }

        /** Check if user is logged and does not have redirect value. */
        if (logged && !redirect) {
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
    }, [dispatch, logged, redirect, responseMessage]);

    /** Return something. */
    return (
        <div className='min-h-screen'>
            <h1 className='pb-2 text-center'>Login</h1>
            {responseMessage ? <Notifications message={responseMessage} status={responseStatus} /> : ''}
            <form onSubmit={submitHandler} method='POST' className='bg-slate-200 p-2 rounded'>
                <div className='grid gap-6 mb-6 md:grid-cols-2'>
                    <div>
                        <label htmlFor='email' className='block mb-2 text-sm font-light text-gray-900'>
                            Email
                        </label>
                        <input
                            className={emailInputClasses}
                            id='email'
                            name='email'
                            type='email'
                            value={email}
                            onChange={emailChangeHandler}
                            onBlur={emailBlurHandler}
                            autoComplete='off'
                            placeholder=''
                            required
                        />
                        {emailHasError ? <p className='input-message'>Please enter a valid email address.</p> : ''}
                    </div>
                    <div>
                        <label htmlFor='password' className='block mb-2 text-sm font-light text-gray-900'>
                            Password
                        </label>
                        <input
                            className={passwordInputClasses}
                            id='password'
                            name='password'
                            type='password'
                            value={password}
                            onChange={passwordChangeHandler}
                            onBlur={passwordBlurHandler}
                            autoComplete='off'
                            placeholder=''
                            required
                        />
                        {passwordHasError ? <p className='input-message'>Please enter a valid password.</p> : ''}
                    </div>
                    <p className='text-xs font-thin'>
                        Dont have an account? Proceed to{' '}
                        <Link href='/signup' className='text-amber-500'>
                            signup
                        </Link>{' '}
                        page
                    </p>
                    <button type='submit' disabled={!formIsValid} className='button-primary'>
                        Submit
                    </button>
                </div>
            </form>
        </div>
    );
}
