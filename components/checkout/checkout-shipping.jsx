'use client';

/** React. */
import { useEffect } from 'react';

/** Vendor. */
import dynamic from 'next/dynamic';
import { useRouter } from 'next/navigation';
import { useSelector } from 'react-redux';

/** Hook. */
import useValidator from '../../hooks/use-validator';

/** Library. */
import { ucFirst } from '../../lib/typography';

/** Component. */
const Sprite = dynamic(() => import('../ui/sprite'), { ssr: false });

/** Default export. */
export default function Shipping() {
    /** Map html element to validate hook. */
    const {
        value: firstname,
        hasError: firstnameHasError,
        isValid: firstnameIsValid,
        valueChangeHandler: firstnameChangeHandler,
        inputBlurHandler: firstnameBlurHandler,
        resetHandler: firstnameInputReset,
    } = useValidator((value) => value.trim() !== '' && value.match(/^[ A-Za-z0-9!@#$%^&*()_+]*$/));

    /** Change class logic if valid or otherwise. */
    const firstnameInputClasses = firstnameHasError ? 'input-error' : 'input-success';

    /** Set overall form validity. */
    let formIsValid = false;
    if (firstnameIsValid) {
        formIsValid = true;
    }

    /** Use selector. */
    const userLogin = useSelector((state) => state.userLogin);
    const { logged } = userLogin;

    /** Use router. */
    const router = useRouter();

    /** Use effect. */
    useEffect(() => {
        /** Check if token is set. */
        if (!logged) {
            router.push('/login');
        }
    }, [logged]);

    /** Submit hanndler. */
    function submitHandler(e) {
        /** Prevent browser default behaviour */
        e.preventDefault();
    }

    /** Return something. */
    return (
        <div className='p-2'>
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
                            value={firstname ? firstname : ''}
                            onChange={firstnameChangeHandler}
                            onBlur={firstnameBlurHandler}
                            autoComplete='off'
                            placeholder=''
                            required
                        />
                        {firstnameHasError ? <p className='input-message'>Please enter a valid first name.</p> : ''}
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
