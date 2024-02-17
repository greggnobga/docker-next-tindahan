'use client';

/** React. */
import { useEffect } from 'react';

/** Vendor. */
import { useRouter } from 'next/navigation';
import { useSelector, useDispatch } from 'react-redux';

/** Action. */
import { saveShippingAddress } from '../../redux/actions/cart-actions';

/** Hook. */
import useValidator from '../../hooks/use-validator';

/** Default export. */
export default function Shipping() {
    /** Use selector. */
    const userLogin = useSelector((state) => state.userLogin);
    const { id, logged } = userLogin;

    const cart = useSelector((state) => state.cart);
    const { shippingAddress } = cart;

    /** Map html element to validate hook. */
    const {
        value: address,
        hasError: addressHasError,
        isValid: addressIsValid,
        valueChangeHandler: addressChangeHandler,
        inputBlurHandler: addressBlurHandler,
        resetHandler: addressInputReset,
    } = useValidator((value) => value.trim() !== '' && value.match(/^[ A-Za-z0-9!@#$%^&*()_+]*$/));

    const {
        value: city,
        hasError: cityHasError,
        isValid: cityIsValid,
        valueChangeHandler: cityChangeHandler,
        inputBlurHandler: cityBlurHandler,
        resetHandler: cityInputReset,
    } = useValidator((value) => value.trim() !== '' && value.match(/^[ A-Za-z0-9!@#$%^&*()_+]*$/));

    const {
        value: postal,
        hasError: postalHasError,
        isValid: postalIsValid,
        valueChangeHandler: postalChangeHandler,
        inputBlurHandler: postalBlurHandler,
        resetHandler: postalInputReset,
    } = useValidator((value) => value.trim() !== '' && value.match(/^[ A-Za-z0-9!@#$%^&*()_+]*$/));

    const {
        value: country,
        hasError: countryHasError,
        isValid: countryIsValid,
        valueChangeHandler: countryChangeHandler,
        inputBlurHandler: countryBlurHandler,
        resetHandler: countryInputReset,
    } = useValidator((value) => value.trim() !== '' && value.match(/^[ A-Za-z0-9!@#$%^&*()_+]*$/));

    /** Change class logic if valid or otherwise. */
    const addressInputClasses = addressHasError ? 'input-error' : 'input-success';
    const cityInputClasses = cityHasError ? 'input-error' : 'input-success';
    const postalInputClasses = postalHasError ? 'input-error' : 'input-success';
    const countryInputClasses = postalHasError ? 'input-error' : 'input-success';

    /** Set overall form validity. */
    let formIsValid = false;
    if (addressIsValid && cityIsValid && postalIsValid && countryIsValid) {
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
    }, [logged]);

    /** Use dispatch. */
    const dispatch = useDispatch();

    /** Submit hanndler. */
    function submitHandler(e) {
        /** Prevent browser default behaviour */
        e.preventDefault();

        /** Change blur state. */
        addressBlurHandler(true);
        cityBlurHandler(true);
        postalBlurHandler(true);
        countryBlurHandler(true);

        /** Check if there is invalid input. */
        if (!addressIsValid && !cityIsValid && !postalIsValid && !countryIsValid) {
            return;
        }

        /** Dispatch action. */
        dispatch(saveShippingAddress({ address, city, postal, country }));

        /** Reset input. */
        addressInputReset();
        cityInputReset();
        postalInputReset();
        countryInputReset();

        /** Router push. */
        router.push('/cart/payment');
    }

    /** Return something. */
    return (
        <div className='p-2'>
            <form onSubmit={submitHandler} method='POST' className='bg-slate-200 p-4 rounded'>
                <div className='grid grid-cols-12 gap-6 mb-6'>
                    <div className='col-span-12 md:col-span-6 lg:col-span-4'>
                        <label htmlFor='address' className='block mb-2 text-sm font-light text-gray-900'>
                            Address
                        </label>
                        <input
                            className={addressInputClasses}
                            id='address'
                            name='address'
                            type='text'
                            value={address ? address : shippingAddress.address ? shippingAddress.address : ''}
                            onChange={addressChangeHandler}
                            onClick={addressChangeHandler}
                            onBlur={addressBlurHandler}
                            autoComplete='off'
                            placeholder=''
                            required
                        />
                        {addressHasError ? <p className='input-message'>Please enter a valid address.</p> : ''}
                    </div>
                    <div className='col-span-12 md:col-span-6 lg:col-span-4'>
                        <label htmlFor='city' className='block mb-2 text-sm font-light text-gray-900'>
                            City
                        </label>
                        <input
                            className={cityInputClasses}
                            id='city'
                            name='city'
                            type='text'
                            value={city ? city : shippingAddress.city ? shippingAddress.city : ''}
                            onChange={cityChangeHandler}
                            onClick={cityChangeHandler}
                            onBlur={cityBlurHandler}
                            autoComplete='off'
                            placeholder=''
                            required
                        />
                        {cityHasError ? <p className='input-message'>Please enter a valid city.</p> : ''}
                    </div>
                    <div className='col-span-12 md:col-span-6 lg:col-span-4'>
                        <label htmlFor='postal' className='block mb-2 text-sm font-light text-gray-900'>
                            Postal
                        </label>
                        <input
                            className={postalInputClasses}
                            id='postal'
                            name='postal'
                            type='text'
                            value={postal ? postal : shippingAddress.postal ? shippingAddress.postal : ''}
                            onChange={postalChangeHandler}
                            onClick={postalChangeHandler}
                            onBlur={postalBlurHandler}
                            autoComplete='off'
                            placeholder=''
                            required
                        />
                        {postalHasError ? <p className='input-message'>Please enter a valid postal.</p> : ''}
                    </div>
                    <div className='col-span-12 md:col-span-6 lg:col-span-4'>
                        <label htmlFor='country' className='block mb-2 text-sm font-light text-gray-900'>
                            Country
                        </label>
                        <input
                            className={countryInputClasses}
                            id='country'
                            name='country'
                            type='text'
                            value={country ? country : shippingAddress.country ? shippingAddress.country : ''}
                            onChange={countryChangeHandler}
                            onClick={countryChangeHandler}
                            onBlur={countryBlurHandler}
                            autoComplete='off'
                            placeholder=''
                            required
                        />
                        {countryHasError ? <p className='input-message'>Please enter a valid country.</p> : ''}
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
