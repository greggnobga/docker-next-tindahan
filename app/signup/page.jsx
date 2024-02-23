'use client';

/** React. */
import { useEffect, useState } from 'react';

/** Vendor. */
import Link from 'next/link';
import dynamic from 'next/dynamic';
import { useRouter } from 'next/navigation';
import { useDispatch, useSelector } from 'react-redux';

/** Action. */
import { signupUser } from '../../redux/actions/user-actions';
import { resetToast } from '../../redux/actions/toast-actions';

/** Hook. */
import useValidator from '../../hooks/use-validator';

/** Component. */
const Notifications = dynamic(() => import('../../components/ui/notifications'), { ssr: false });

/** Default export. */
export default function SignupPage() {
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
        value: gender,
        hasError: genderHasError,
        isValid: genderIsValid,
        valueChangeHandler: genderChangeHandler,
        inputBlurHandler: genderBlurHandler,
        resetHandler: genderInputReset,
    } = useValidator((value) => value.trim() !== '' && value.match(/^[ A-Za-z0-9!@#$%^&*()_+]*$/));

    const {
        value: password,
        hasError: passwordHasError,
        isValid: passwordIsValid,
        valueChangeHandler: passwordChangeHandler,
        inputBlurHandler: passwordBlurHandler,
        resetHandler: passwordInputReset,
    } = useValidator((value) => value.trim() !== '' && value.match(/^[ A-Za-z0-9!@#$%^&*()_+]*$/));

    const {
        value: confirmpassword,
        hasError: confirmpasswordHasError,
        isValid: confirmpasswordIsValid,
        valueChangeHandler: confirmpasswordChangeHandler,
        inputBlurHandler: confirmpasswordBlurHandler,
        resetHandler: confirmpasswordInputReset,
    } = useValidator((value) => value.trim() !== '' && value.match(/^[ A-Za-z0-9!@#$%^&*()_+]*$/));

    /** Change class logic if valid or otherwise. */
    const firstnameInputClasses = firstnameHasError ? 'input-error' : 'input-success';
    const lastnameInputClasses = lastnameHasError ? 'input-error' : 'input-success';
    const emailInputClasses = emailHasError ? 'input-error' : 'input-success';
    const mobileInputClasses = mobileHasError ? 'input-error' : 'input-success';
    const genderInputClasses = genderHasError ? 'input-error' : 'input-success';
    const passwordInputClasses = passwordHasError ? 'input-error' : 'input-success';
    const confirmpasswordInputClasses = confirmpasswordHasError ? 'input-error' : 'input-success';

    /** Set overall form validity. */
    let formIsValid = false;
    if (firstnameIsValid && lastnameIsValid && emailIsValid && mobileIsValid && genderIsValid && confirmpasswordIsValid && passwordIsValid) {
        formIsValid = true;
    }

    /** Use dispatch. */
    const dispatch = useDispatch();

    /** Use selector. */
    const userLogin = useSelector((state) => state.userLogin);
    const { logged } = userLogin;

    const toast = useSelector((state) => state.toast);
    const { status: responseStatus, message: responseMessage } = toast;

    /** Use router. */
    const router = useRouter();

    /** Check if password match and length. */
    const [passwordMatched, setPasswordMatched] = useState(false);
    const [passwordLength, setpasswordLength] = useState(false);

    /** Use effect. */
    useEffect(() => {
        /** Check if password length is greater than 10. */
        if (password.length != 0 && password.length < 10) {
            setpasswordLength(true);
        } else {
            setpasswordLength(false);
        }

        /** Check if password and confirm match. */
        if (password !== confirmpassword) {
            setPasswordMatched(true);
        } else {
            setPasswordMatched(false);
        }

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
    }, [dispatch, logged, responseMessage, password, confirmpassword]);

    /** Submit hanndler. */
    function submitHandler(e) {
        /** Prevent browser default behaviour */
        event.preventDefault();

        /** Change blur state. */
        firstnameBlurHandler(true);
        lastnameBlurHandler(true);
        emailBlurHandler(true);
        mobileBlurHandler(true);
        genderBlurHandler(true);
        passwordBlurHandler(true);
        confirmpasswordBlurHandler(true);

        /** Check if there is invalid input. */
        if (!firstnameIsValid && !lastnameIsValid && !emailIsValid && !mobileIsValid && !genderIsValid && !confirmpasswordIsValid && !passwordIsValid) {
            return;
        }

        /** Dispatch action. */
        dispatch(signupUser({ firstname, lastname, email, mobile, gender, password }));

        /** Reset input. */
        firstnameInputReset();
        lastnameInputReset();
        emailInputReset();
        mobileInputReset();
        genderInputReset();
        passwordInputReset();
        confirmpasswordInputReset();
    }

    /** Return something. */
    return (
        <section className='min-h-screen'>
            <h1 className='pb-2 text-center'>Signup</h1>
            {responseMessage ? <Notifications message={responseMessage} status={responseStatus} /> : ''}
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
                            type='tel'
                            size='12'
                            minLength='11'
                            maxLength='12'
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
                        <label htmlFor='gender' className='block mb-2 text-sm font-light text-gray-900'>
                            Gender
                        </label>
                        <select
                            id='gender'
                            className={`appearance-none ${genderInputClasses}`}
                            id='gender'
                            name='gender'
                            type='text'
                            value={gender}
                            onChange={genderChangeHandler}
                            onBlur={genderBlurHandler}
                            autoComplete='off'
                            placeholder=''
                            required>
                            <option defaultValue>Choose your gender</option>
                            <option value='Male'>Male</option>
                            <option value='Female'>Female</option>
                        </select>
                        {genderHasError ? <p className='input-message'>Please enter a valid gender.</p> : ''}
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
                        {passwordHasError ? (
                            <p className='input-message'>Please enter a valid password.</p>
                        ) : (
                            passwordLength && <p className='input-message'>Password must be 10 characters or more.</p>
                        )}
                    </div>
                    <div>
                        <label htmlFor='confirmpassword' className='block mb-2 text-sm font-light text-gray-900'>
                            Confirm Password
                        </label>
                        <input
                            className={confirmpasswordInputClasses}
                            id='confirmpassword'
                            name='confirmpassword'
                            type='password'
                            value={confirmpassword}
                            onChange={confirmpasswordChangeHandler}
                            onBlur={confirmpasswordBlurHandler}
                            autoComplete='off'
                            placeholder=''
                            required
                        />
                        {confirmpasswordHasError ? (
                            <p className='input-message'>Please enter a valid confirm password.</p>
                        ) : (
                            passwordMatched && <p className='input-message'>Password and confirm password do not match.</p>
                        )}
                    </div>
                    <div className='md:col-span-2'>
                        <div className='grid grid-cols-1 md:grid-cols-2 gap-2 place-items-center'>
                            <div className='w-full'>
                                <button type='submit' disabled={!formIsValid} className='button-primary'>
                                    Submit
                                </button>
                            </div>

                            <p className='text-xs font-thin'>
                                Already have an account? Proceed to{' '}
                                <Link href='/login' className='text-amber-500'>
                                    login
                                </Link>{' '}
                                page
                            </p>
                        </div>
                    </div>
                </div>
            </form>
        </section>
    );
}
