'use client';

/** React. */
import { useEffect } from 'react';

/** Vendor. */
import { useRouter } from 'next/navigation';
import { useSelector, useDispatch } from 'react-redux';

/** Action. */
import { savePaymentMethod } from '../../redux/actions/cart-actions';

/** Hook. */
import useValidator from '../../hooks/use-validator';

/** Default export. */
export default function Shipping() {
    /** Use selector. */
    const userLogin = useSelector((state) => state.userLogin);
    const { id, logged } = userLogin;

    const cart = useSelector((state) => state.cart);
    const { shippingAddress, paymentMethod } = cart;

    /** Map html element to validate hook. */
    const {
        value: payment,
        hasError: paymentHasError,
        isValid: paymentIsValid,
        valueChangeHandler: paymentChangeHandler,
        inputBlurHandler: paymentBlurHandler,
        resetHandler: paymentInputReset,
    } = useValidator((value) => value.trim() !== '' && value.match(/^[ A-Za-z0-9!@#$%^&*()_+]*$/));

    /** Change class logic if valid or otherwise. */
    const paymentInputClasses = paymentHasError ? 'input-error' : 'input-success';

    /** Set overall form validity. */
    let formIsValid = false;
    if (paymentIsValid) {
        formIsValid = true;
    }

    /** Use router. */
    const router = useRouter();

    /** Use effect. */
    useEffect(() => {
        /** Check if token is set. */
        if (!logged) {
            router.push('/login?redirect=shipping');
        }

        /** Go back to shipping page if not set yet. */
        if (!shippingAddress.address) {
            router.push('/shipping');
        }
    }, [logged, shippingAddress]);

    /** Use dispatch. */
    const dispatch = useDispatch();

    /** Submit hanndler. */
    function submitHandler(e) {
        /** Prevent browser default behaviour */
        e.preventDefault();

        /** Change blur state. */
        paymentBlurHandler(true);

        /** Check if there is invalid input. */
        if (!paymentIsValid) {
            return;
        }

        /** Dispatch action. */
        dispatch(savePaymentMethod({ payment }));

        /** Reset input. */
        paymentInputReset();

        /** Router push. */
        router.push('/cart/order');
    }

    /** Return something. */
    return (
        <div className='p-2'>
            <form onSubmit={submitHandler} method='POST' className='bg-slate-200 p-4 rounded'>
                <div className='grid grid-cols-12 gap-6 mb-6'>
                    <div className='col-span-12'>
                        <label htmlFor='payment' className='block mb-2 text-sm font-light text-gray-900'>
                            Payment Method
                        </label>
                        <select
                            id='payment'
                            className={`uppercase appearance-none ${paymentInputClasses}`}
                            id='payment'
                            name='payment'
                            type='text'
                            value={payment ? payment : paymentMethod.payment}
                            onChange={paymentChangeHandler}
                            onClick={paymentChangeHandler}
                            onBlur={paymentBlurHandler}
                            autoComplete='off'
                            placeholder=''
                            required>
                            <option defaultValue>Choose Payment Method</option>
                            <option value='gcash'>GCASH</option>
                            <option value='maya'>MAYA</option>
                            <option value='crypto'>CRYPTO</option>
                        </select>
                        {paymentHasError ? <p className='input-message'>Please enter a valid payment method.</p> : ''}
                    </div>

                    <div className='col-span-12'>
                        <button type='submit' disabled={!formIsValid} className='button-primary' onClick={(e) => submitHandler(e)}>
                            Submit
                        </button>
                    </div>
                </div>
            </form>
        </div>
    );
}
