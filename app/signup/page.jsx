'use client';

/** React. */
import { useEffect } from 'react';

/** Vendor. */
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useDispatch, useSelector } from 'react-redux';

/** Action. */
import { userLogin } from '../../redux/actions/user-actions';
import { resetToast } from '../../redux/actions/toast-actions';

/** Hook. */
import useValidator from '../../hooks/use-validator';

/** Component. */
import Notifications from '../../components/ui/notifications';

/** Default export. */
export default function Signup() {
    /** Map html element to validate hook. */
    const {
        value: firstname,
        hasError: firstnameHasError,
        isValid: firstnameIsValid,
        valueChangeHandler: firstnameChangeHandler,
        inputBlurHandler: firstnameBlurHandler,
        resetHandler: firstnameInputReset,
    } = useValidator((value) => value.trim() !== '' && value.match(/^[ A-Za-z0-9!@#$%^&*()_+]*$/));

    const {
        value: lastname,
        hasError: lastnameHasError,
        isValid: lastnameIsValid,
        valueChangeHandler: lastnameChangeHandler,
        inputBlurHandler: lastnameBlurHandler,
        resetHandler: lastnameInputReset,
    } = useValidator((value) => value.trim() !== '' && value.match(/^[ A-Za-z0-9!@#$%^&*()_+]*$/));

    const {
        value: email,
        hasError: emailHasError,
        isValid: emailIsValid,
        valueChangeHandler: emailChangeHandler,
        inputBlurHandler: emailBlurHandler,
        resetHandler: emailInputReset,
    } = useValidator((value) => value.trim() !== '' && value.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/));

    const {
        value: mobile,
        hasError: mobileHasError,
        isValid: mobileIsValid,
        valueChangeHandler: mobileChangeHandler,
        inputBlurHandler: mobileBlurHandler,
        resetHandler: mobileInputReset,
    } = useValidator((value) => value.trim() !== '' && value.match(/^[0-9]*$/));

    const {
        value: username,
        hasError: usernameHasError,
        isValid: usernameIsValid,
        valueChangeHandler: usernameChangeHandler,
        inputBlurHandler: usernameBlurHandler,
        resetHandler: usernameInputReset,
    } = useValidator((value) => value.trim() !== '' && value.match(/^[ A-Za-z0-9!@#$%^&*()_+]*$/));

    const {
        value: password,
        hasError: passwordHasError,
        isValid: passwordIsValid,
        valueChangeHandler: passwordChangeHandler,
        inputBlurHandler: passwordBlurHandler,
        resetHandler: passwordInputReset,
    } = useValidator((value) => value.trim() !== '' && value.match(/^[ A-Za-z0-9!@#$%^&*()_+]*$/));

    /** Change class logic if valid or otherwise. */
    const firstnameInputClasses = firstnameHasError ? 'input-error' : 'input-success';
    const lastnameInputClasses = lastnameHasError ? 'input-error' : 'input-success';
    const emailInputClasses = emailHasError ? 'input-error' : 'input-success';
    const mobileInputClasses = mobileHasError ? 'input-error' : 'input-success';
    const usernameInputClasses = usernameHasError ? 'input-error' : 'input-success';
    const passwordInputClasses = passwordHasError ? 'input-error' : 'input-success';

    /** Set overall form validity. */
    let formIsValid = false;
    if (firstnameIsValid && lastnameIsValid && emailIsValid && mobileIsValid && usernameIsValid && passwordIsValid) {
        formIsValid = true;
    }

    /** Use dispatch. */
    const dispatch = useDispatch();

    /** Submit hanndler. */
    function submitHandler(e) {
        /** Prevent browser default behaviour */
        event.preventDefault();

        /** Change blur state. */
        firstnameBlurHandler(true);
        lastnameBlurHandler(true);
        emailBlurHandler(true);
        mobileBlurHandler(true);
        usernameBlurHandler(true);
        passwordBlurHandler(true);

        /** Check if there is invalid input. */
        if (!firstnameIsValid && !lastnameIsValid && !emailIsValid && !mobileIsValid && !usernameIsValid && !passwordIsValid) {
            return;
        }

        /** Dispatch action. */
        // dispatch(userLogin({ email, password }));
        console.log(firstname, lastname, email, mobile, username, password);

        /** Reset input. */
        firstnameInputReset();
        lastnameInputReset();
        emailInputReset();
        mobileInputReset();
        usernameInputReset();
        passwordInputReset();
    }

    /** Use selector. */
    const userAuth = useSelector((state) => state.userAuth);
    const { logged } = userAuth;

    const toastMessage = useSelector((state) => state.toastMessage);
    const { status: responseStatus, message: responseMessage } = toastMessage;

    /** Use router. */
    const router = useRouter();

    /** Use effect. */
    useEffect(() => {
        /** Check if token is set. */
        if (logged) {
            router.push('/dashboard');
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
            <h1 className='pb-2 text-center'>Signup</h1>

            <form onSubmit={submitHandler} method='POST' className='bg-slate-200 p-2 rounded'>
                <div className='grid gap-6 mb-6 md:grid-cols-2'>
                    <div>
                        <label htmlFor='firstname' className='block mb-2 text-sm font-light text-gray-900'>
                            First Name
                        </label>
                        <input
                            className={firstnameInputClasses}
                            id='firstname'
                            name='firstname'
                            type='text'
                            value={firstname}
                            onChange={firstnameChangeHandler}
                            onBlur={firstnameBlurHandler}
                            autoComplete='off'
                            placeholder=''
                            required
                        />
                        {firstnameHasError ? <p className='input-message'>Please enter a valid first name.</p> : ''}
                    </div>
                    <div>
                        <label htmlFor='lastname' className='block mb-2 text-sm font-light text-gray-900'>
                            Last Name
                        </label>
                        <input
                            className={lastnameInputClasses}
                            id='lastname'
                            name='lastname'
                            type='text'
                            value={lastname}
                            onChange={lastnameChangeHandler}
                            onBlur={lastnameBlurHandler}
                            autoComplete='off'
                            placeholder=''
                            required
                        />
                        {lastnameHasError ? <p className='input-message'>Please enter a valid last name.</p> : ''}
                    </div>
                    <div>
                        <label htmlFor='email' className='block mb-2 text-sm font-light text-gray-900'>
                            Email Address
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
                        <label htmlFor='mobile' className='block mb-2 text-sm font-light text-gray-900'>
                            Mobile Number
                        </label>
                        <input
                            className={mobileInputClasses}
                            id='mobile'
                            name='mobile'
                            type='number'
                            value={mobile}
                            onChange={mobileChangeHandler}
                            onBlur={mobileBlurHandler}
                            autoComplete='off'
                            placeholder=''
                            required
                        />
                        {mobileHasError ? <p className='input-message'>Please enter a valid mobile phone number.</p> : ''}
                    </div>
                    <div>
                        <label htmlFor='username' className='block mb-2 text-sm font-light text-gray-900'>
                            Username
                        </label>
                        <input
                            className={usernameInputClasses}
                            id='username'
                            name='username'
                            type='text'
                            value={username}
                            onChange={usernameChangeHandler}
                            onBlur={usernameBlurHandler}
                            autoComplete='off'
                            placeholder=''
                            required
                        />
                        {usernameHasError ? <p className='input-message'>Please enter a valid user name.</p> : ''}
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
                        Already have an account? Proceed to{' '}
                        <Link href='/login' className='text-amber-500'>
                            login
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
