'use client';

/** React. */
import { useEffect } from 'react';

/** Vendor. */
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useSelector, useDispatch } from 'react-redux';

/** Action. */
import { referenceOrder } from '../../redux/actions/order-actions';

/** Hook. */
import useValidator from '../../hooks/use-validator';

/** Default export. */
export default function OrderPayment({ order, method }) {
    /** Map html element to validate hook. */
    const {
        value: reference,
        hasError: referenceHasError,
        isValid: referenceIsValid,
        valueChangeHandler: referenceChangeHandler,
        inputBlurHandler: referenceBlurHandler,
        resetHandler: referenceInputReset,
    } = useValidator((value) => value.trim() !== '' && value.match(/^[ A-Za-z0-9!@#$%^&*()_+]*$/));

    /** Change class logic if valid or otherwise. */
    const referenceInputClasses = referenceHasError ? 'input-error' : 'input-success';

    /** Set overall form validity. */
    let formIsValid = false;
    if (referenceIsValid) {
        formIsValid = true;
    }

    /** Use selector. */
    const userLogin = useSelector((state) => state.userLogin);
    const { logged, userid } = userLogin;

    const orderReference = useSelector((state) => state.orderReference);
    const { success } = orderReference;

    /** Use dispatch. */
    const dispatch = useDispatch();

    /** Use router. */
    const router = useRouter();

    /** Use effect. */
    useEffect(() => {
        /** Check logged. */
        if (!logged) {
            router.push('/');
        }

        /** Check success. */
        if (success) {
            router.push(`/orders/${order}`);
        }
    }, [logged, success]);

    /** Submit handler. */
    const submitHandler = (e) => {
        /** Prevent browser default behaviour */
        e.preventDefault();

        /** Change blur state. */
        referenceBlurHandler(true);

        /** Check if there is invalid input. */
        if (!referenceIsValid) {
            return;
        }

        /** Dispatch action. */
        dispatch(referenceOrder({ userid, order, method, reference }));

        /** Reset input. */
        referenceInputReset();
    };

    /** Return something. */
    return (
        <div className='col-span-1 sm:col-span-4 p-2'>
            <h1 className='font-thin text-sm border-b border-slate-300 border-opacity-70 pb-2 uppercase'>Payment reference number</h1>
            <form onSubmit={submitHandler} method='POST' className='bg-slate-200 p-2 rounded'>
                <div className='grid gap-6 mb-6 md:grid-cols-2'>
                    <div>
                        <label htmlFor='reference' className='block mb-2 text-sm font-light text-gray-900'>
                            Reference #
                        </label>
                        <input
                            className={referenceInputClasses}
                            id='reference'
                            name='reference'
                            type='text'
                            value={reference}
                            onChange={referenceChangeHandler}
                            onBlur={referenceBlurHandler}
                            autoComplete='off'
                            placeholder=''
                            required
                        />
                        {referenceHasError ? <p className='input-message'>Please enter a valid reference number.</p> : ''}
                    </div>
                    <div>
                        <label htmlFor='screenshot' className='block mb-2 text-sm font-light text-gray-900'>
                            Screenshot
                        </label>
                        <input id='screenshot' type='file' className='input-success' />
                    </div>
                    <p className='text-xs font-thin'></p>
                    <button type='submit' disabled={!formIsValid} className='button-primary'>
                        Submit
                    </button>
                </div>
            </form>
            <p className='text-xs font-thin'>
                After sending the payment, take a screenshot and include the reference number so we can process your order.
                <span className='pl-1 text-red-500'>Failing to provide will result in lengthy deliberations.</span>
            </p>
        </div>
    );
}
