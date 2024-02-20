'use client';

/** React. */
import { useEffect, useState } from 'react';

/** Vendor. */
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useSelector, useDispatch } from 'react-redux';

/** Action. */
import { updateUser } from '../../redux/actions/user-actions';
import { resetToast } from '../../redux/actions/toast-actions';

/** Hook. */
import useValidator from '../../hooks/use-validator';

/** Library. */
import { ucFirst } from '../../lib/typography';

/** Component. */
import Sprite from '../ui/sprite';
import Notifications from '../ui/notifications';

/** Default export. */
export default function ProfileUpdate() {
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
        value: oldpassword,
        hasError: oldpasswordHasError,
        isValid: oldpasswordIsValid,
        valueChangeHandler: oldpasswordChangeHandler,
        inputBlurHandler: oldpasswordBlurHandler,
        resetHandler: oldpasswordInputReset,
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
    const mobileInputClasses = mobileHasError ? 'input-error' : 'input-success';
    const genderInputClasses = genderHasError ? 'input-error' : 'input-success';
    const oldpasswordInputClasses = oldpasswordHasError ? 'input-error' : 'input-success';
    const passwordInputClasses = passwordHasError ? 'input-error' : 'input-success';
    const confirmpasswordInputClasses = confirmpasswordHasError ? 'input-error' : 'input-success';

    /** Set overall form validity. */
    let formIsValid = false;
    if (firstnameIsValid && lastnameIsValid && mobileIsValid && genderIsValid && confirmpasswordIsValid && passwordIsValid) {
        formIsValid = true;
    }

    /** Check if password match and length. */
    const [passwordMatched, setPasswordMatched] = useState(false);
    const [oldpasswordLength, setoldpasswordLength] = useState(false);
    const [passwordLength, setpasswordLength] = useState(false);

    /** Use selector. */
    const userLogin = useSelector((state) => state.userLogin);
    const { userid, logged, email, admin, firstname: first_name, lastname: last_name, mobile: mobile_number, gender: gen_der } = userLogin;

    const toast = useSelector((state) => state.toast);
    const { status: responseStatus, message: responseMessage } = toast;

    /** Use dispatch. */
    const dispatch = useDispatch();

    /** Use router. */
    const router = useRouter();

    /** Use effect. */
    useEffect(() => {
        /** Check if response has value. */
        if (responseMessage) {
            const timer = setTimeout(() => {
                /** Reset message. */
                dispatch(resetToast());
            }, 5000);
            /** Clear running timer. */
            return () => clearTimeout(timer);
        }

        /** Check if password length is greater than 10. */
        if (oldpassword.length != 0 && oldpassword.length < 10) {
            setoldpasswordLength(true);
        } else {
            setoldpasswordLength(false);
        }

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
        if (!logged) {
            router.push('/login');
        }
    }, [dispatch, logged, responseMessage, oldpassword, password, confirmpassword]);

    /** Submit hanndler. */
    function submitHandler(e) {
        /** Prevent browser default behaviour */
        e.preventDefault();

        /** Change blur state. */
        firstnameBlurHandler(true);
        lastnameBlurHandler(true);
        mobileBlurHandler(true);
        genderBlurHandler(true);
        oldpasswordBlurHandler(true);
        passwordBlurHandler(true);
        confirmpasswordBlurHandler(true);

        /** Check if there is invalid input. */
        if (!firstnameIsValid && !lastnameIsValid && !mobileIsValid && !genderIsValid && !oldpasswordIsValid && !passwordIsValid && !confirmpasswordIsValid) {
            return;
        }

        /** Dispatch action. */
        dispatch(updateUser({ userid, firstname, lastname, email, mobile, gender, oldpassword, password, admin }));

        /** Reset input. */
        firstnameInputReset();
        lastnameInputReset();
        mobileInputReset();
        genderInputReset();
        oldpasswordInputReset();
        passwordInputReset();
        confirmpasswordInputReset();
    }

    /** Return something. */
    return (
        <div className='p-2'>
            <div className='relative w-full h-16'>
                <Link href='/profile' className='absolute top-0 right-0 text-right p-1 text-xs bg-slate-200 rounded shadow-sm'>
                    <Sprite id='chevron-back' /> <span className='mt-2 pr-2 inline-block'>Back</span>
                </Link>
            </div>
            {responseMessage ? <Notifications message={responseMessage} status={responseStatus} /> : ''}
            <form onSubmit={submitHandler} method='POST' className='bg-slate-200 p-4 rounded'>
                <div className='grid grid-cols-12 gap-6 mb-6'>
                    <div className='col-span-12 md:col-span-6 lg:col-span-4'>
                        <label htmlFor='firstname' className='block mb-2 text-sm font-light text-gray-900'>
                            First Name
                        </label>
                        <input
                            className={firstnameInputClasses}
                            id='firstname'
                            name='firstname'
                            type='text'
                            value={firstname ? firstname : first_name}
                            onChange={firstnameChangeHandler}
                            onClick={firstnameChangeHandler}
                            onBlur={firstnameBlurHandler}
                            autoComplete='off'
                            placeholder=''
                            required
                        />
                        {firstnameHasError ? <p className='input-message'>Please enter a valid first name.</p> : ''}
                    </div>
                    <div className='col-span-12 md:col-span-6 lg:col-span-4'>
                        <label htmlFor='lastname' className='block mb-2 text-sm font-light text-gray-900'>
                            Last Name
                        </label>
                        <input
                            className={lastnameInputClasses}
                            id='lastname'
                            name='lastname'
                            type='text'
                            value={lastname ? lastname : last_name}
                            onChange={lastnameChangeHandler}
                            onClick={lastnameChangeHandler}
                            onBlur={lastnameBlurHandler}
                            autoComplete='off'
                            placeholder=''
                            required
                        />
                        {lastnameHasError ? <p className='input-message'>Please enter a valid last name.</p> : ''}
                    </div>
                    <div className='col-span-12 md:col-span-6 lg:col-span-4'>
                        <label htmlFor='image' className='block mb-2 text-sm font-light text-gray-900'>
                            Image
                        </label>
                        <input type='file' className='input-success' />
                    </div>
                    <div className='col-span-12 md:col-span-6 lg:col-span-4'>
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
                            value={mobile ? mobile : mobile_number}
                            onChange={mobileChangeHandler}
                            onClick={mobileChangeHandler}
                            onBlur={mobileBlurHandler}
                            autoComplete='off'
                            placeholder=''
                            required
                        />
                        {mobileHasError ? <p className='input-message'>Please enter a valid mobile.</p> : ''}
                    </div>
                    <div className='col-span-12 md:col-span-6 lg:col-span-4'>
                        <label htmlFor='gender' className='block mb-2 text-sm font-light text-gray-900'>
                            Gender
                        </label>
                        <select
                            id='gender'
                            className={`appearance-none ${genderInputClasses}`}
                            id='gender'
                            name='gender'
                            type='text'
                            value={gender ? gender : gen_der}
                            onChange={genderChangeHandler}
                            onClick={genderChangeHandler}
                            onBlur={genderBlurHandler}
                            autoComplete='off'
                            placeholder=''
                            required>
                            <option defaultValue>{ucFirst(gen_der)}</option>
                            <option value='Male'>Male</option>
                            <option value='Female'>Female</option>
                        </select>
                        {genderHasError ? <p className='input-message'>Please enter a valid last gender.</p> : ''}
                    </div>
                    <div className='col-span-12 md:col-span-6 lg:col-span-4'>
                        <label htmlFor='oldpassword' className='block mb-2 text-sm font-light text-gray-900'>
                            Old Password
                        </label>
                        <input
                            className={oldpasswordInputClasses}
                            id='oldpassword'
                            name='oldpassword'
                            type='password'
                            value={oldpassword}
                            onChange={oldpasswordChangeHandler}
                            onBlur={oldpasswordBlurHandler}
                            autoComplete='off'
                            placeholder=''
                            required
                        />
                        {oldpasswordHasError ? (
                            <p className='input-message'>Please enter a valid password.</p>
                        ) : (
                            oldpasswordLength && <p className='input-message'>Password must be 10 characters or more.</p>
                        )}
                    </div>
                    <div className='col-span-12 md:col-span-6 lg:col-span-4'>
                        <label htmlFor='password' className='block mb-2 text-sm font-light text-gray-900'>
                            New Password
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
                    <div className='col-span-12 md:col-span-6 lg:col-span-4'>
                        <label htmlFor='confirmpassword' className='block mb-2 text-sm font-light text-gray-900'>
                            Confirm New Password
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
                    <div className='col-span-12'>
                        <button type='submit' disabled={!formIsValid} className='button-primary'>
                            Submit
                        </button>
                    </div>
                </div>
            </form>
        </div>
    );
}
